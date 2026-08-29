const data = window.SITE_DATA;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function mediaMarkup(src, alt, label = '图片待补充') {
  return `<div class="media-frame" data-label="${escapeHtml(label)}"><img class="media-image is-loading" src="${escapeHtml(src)}" alt="" aria-label="${escapeHtml(alt)}" loading="lazy" onload="this.classList.remove('is-loading')" onerror="this.hidden=true;this.parentElement.classList.add('is-missing')"></div>`;
}

function activateFallbacks(root = document) {
  $$('img', root).forEach(image => {
    const fallback = () => {
      const frame = image.closest('.media-frame');
      if (frame) frame.classList.add('is-missing');
      image.hidden = true;
    };
    image.addEventListener('error', fallback, { once: true });
    if (image.complete && !image.naturalWidth) fallback();
  });
}

function renderHome() {
  const avatar = $('#navAvatar');
  avatar.textContent = data.site.avatar ? '' : (data.site.avatarFallback || '齐');
  avatar.style.backgroundImage = data.site.avatar ? `url("${escapeHtml(data.site.avatar)}")` : '';
  $('#resumeLink').href = data.site.resume;
  $('#heroEyebrow').textContent = data.site.eyebrow;
  $('#heroName').textContent = `Hi，我是${data.site.name}`;
  $('#heroTitle').textContent = data.site.title;
  $('#heroIntro').innerHTML = data.home.intro.map(line => `<p>${escapeHtml(line)}</p>`).join('');
  $('#heroTags').innerHTML = data.home.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  $('#heroMeta').innerHTML = `<div><span>教育背景</span><strong>${escapeHtml(data.home.education)}</strong></div><div><span>实习经历</span><strong>${escapeHtml(data.home.experience)}</strong></div><div><span>联系我</span><strong><a href="mailto:${escapeHtml(data.contact.email)}">${escapeHtml(data.contact.email)}</a>｜手机号：${escapeHtml(data.contact.phone)}</strong></div>`;
  $('#heroPortrait').src = data.site.heroPortrait;
  $('#heroPortrait').closest('.media-frame').dataset.label = '个人照片待补充';
}

function renderExperience() {
  const list = $('#experienceList');
  list.insertAdjacentHTML('beforeend', data.experience.map(item => `
    <article class="timeline-item"><div class="timeline-node"></div><div class="timeline-grid">
      <div class="path-card overview-card"><div class="card-topline">${escapeHtml(item.time)}</div><h3>${escapeHtml(item.company)}</h3><p class="role">${escapeHtml(item.role)}</p><p class="role-summary">${escapeHtml(item.summary)}</p><div class="personality-tags">${item.traits.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="experience-images">${item.images.map((src, index) => mediaMarkup(src, `${item.company}经历图片${index + 1}`, '经历图片待补充')).join('')}</div></div>
      <div class="path-card detail-card"><h4>工作项目信息｜${escapeHtml(item.project)}</h4><div class="experience-tags">${item.chips.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="detail-copy">${item.details.map(text => `<p>${text}</p>`).join('')}</div><div class="metric-strip">${item.metrics.map(metric => `<div><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></div>`).join('')}</div></div>
    </div></article>`).join(''));
}

function carouselMarkup(images, name, id) {
  const safeImages = images?.length ? images : [''];
  return `<div class="carousel" data-carousel="${id}" data-index="0"><div class="carousel-track">${safeImages.map((src, index) => mediaMarkup(src, `${name}图片${index + 1}`, `${name}图片待补充`)).join('')}</div>${safeImages.length > 1 ? '<button class="carousel-btn prev" aria-label="上一张">←</button><button class="carousel-btn next" aria-label="下一张">→</button><div class="carousel-count"><b>1</b> / ' + safeImages.length + '</div>' : ''}</div>`;
}

function renderProjects() {
  $('#projectList').innerHTML = data.projects.map((project, index) => `<article class="project-card ${index === 0 ? 'project-featured' : 'project-compact'}"><div class="project-body"><div class="project-meta">${project.meta.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)}</p>${project.link ? `<a class="text-btn" href="${escapeHtml(project.link)}">${escapeHtml(project.linkText)}</a>` : ''}</div><div class="project-media">${carouselMarkup(project.images, project.name, `project-${index}`)}</div></article>`).join('');
}

function initCarousel(root, imagesLength) {
  const track = $('.carousel-track', root);
  const count = $('.carousel-count b', root);
  let index = 0;
  const move = next => {
    index = (next + imagesLength) % imagesLength;
    root.dataset.index = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    if (count) count.textContent = index + 1;
  };
  $('.prev', root)?.addEventListener('click', () => move(index - 1));
  $('.next', root)?.addEventListener('click', () => move(index + 1));
}

let activeGroup = 'skills';
function selectCard(index) {
  const group = data[activeGroup];
  const item = group.cards[index];
  $('#skillTitle').textContent = item.name;
  $('#skillDescription').textContent = item.detail;
  $('#relatedList').innerHTML = `<strong>相关经历：</strong>${escapeHtml(item.related)}`;
  $$('.matrix-card').forEach((card, cardIndex) => card.classList.toggle('active', cardIndex === index));
}

function renderSkillGroup(groupName) {
  activeGroup = groupName;
  const group = data[groupName];
  $('#skillGallery').innerHTML = carouselMarkup(group.images, groupName === 'skills' ? '技能' : '兴趣', `group-${groupName}`);
  $('#skillMatrix').innerHTML = group.cards.map((item, index) => `<button class="matrix-card${index === 0 ? ' active' : ''}" data-index="${index}"><span class="matrix-icon">${item.icon}</span><h4>${escapeHtml(item.name)}</h4><p>${escapeHtml(item.short)}</p></button>`).join('');
  $$('.matrix-card').forEach(card => card.addEventListener('click', () => selectCard(Number(card.dataset.index))));
  initCarousel($('#skillGallery .carousel'), group.images.length || 1);
  activateFallbacks($('#skillGallery'));
  selectCard(0);
}

function renderLearning() {
  $('#educationList').innerHTML = data.education.map(item => `<article class="edu-card"><div class="edu-head"><span class="edu-badge">${escapeHtml(item.level)}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.major)}</p></div><div class="school-logo media-frame"><img src="${escapeHtml(data.site.hitLogo)}" alt="哈尔滨工业大学校徽"></div></div><div class="edu-meta-line">${item.meta.map(text => `<span>${escapeHtml(text)}</span>`).join('')}</div><div class="edu-tags">${item.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div><div class="mini-card-row">${item.items.map(entry => `<div class="mini-card"><strong>${escapeHtml(entry[0])}</strong><span>${escapeHtml(entry[1])}</span></div>`).join('')}</div></article>`).join('');
  $('#learningMap').insertAdjacentHTML('beforeend', data.learning.map((item, index) => `<div class="map-node${index === data.learning.length - 1 ? ' highlight' : ''}"><span>${escapeHtml(item.year)}</span><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.text)}</p></div>`).join(''));
  $('#footerContact').innerHTML = `欢迎联系：<a href="mailto:${escapeHtml(data.contact.email)}">${escapeHtml(data.contact.email)}</a> ｜ ${escapeHtml(data.contact.phone)}`;
}

function initNavigation() {
  const nav = $('#mainNav');
  $('#menuToggle').addEventListener('click', event => {
    const open = nav.classList.toggle('open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });
  $$('.nav-link').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) $$('.nav-link').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  }), { rootMargin: '-35% 0px -58%' });
  $$('section[id]').forEach(section => observer.observe(section));
  $('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

renderHome();
renderExperience();
renderProjects();
renderSkillGroup('skills');
renderLearning();
$$('.project-media .carousel').forEach((carousel, index) => initCarousel(carousel, data.projects[index].images.length || 1));
$$('.matrix-tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.matrix-tab').forEach(item => item.classList.toggle('active', item === tab));
  renderSkillGroup(tab.dataset.group);
}));
activateFallbacks();
initNavigation();
