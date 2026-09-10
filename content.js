window.SITE_DATA = {
  site: {
    name: '齐思铭',
    title: 'AI 产品经理 / AI Product Manager',
    eyebrow: 'HELLO / 你好',
    resume: 'assets/files/齐思铭-产品经理-哈尔滨工业大学.pdf',
    avatar: 'assets/images/icon-hero.png',
    avatarFallback: '齐',
    heroPortrait: 'assets/images/hero-portrait.png',
    hitLogo: 'assets/images/hit-logo.png'
  },
  home: {
    intro: [
      '保持好奇、重视细节，习惯从真实用户和业务场景中理解问题。',
      '能够从需求洞察、方案设计到数据迭代，推动 AI 能力落地为有价值、有体验、有结果的产品。'
    ],
    tags: ['用户洞察', '需求拆解', '产品落地', '数据迭代', 'Agent 工作流', 'Prompts 工程'],
    education: '哈尔滨工业大学｜建筑学本硕｜硕士 1/42 · 本科 5/79',
    experience: '字节跳动 · AI产品经理 | 阅文集团 · 产品策划 | Wiley出版集团 · 产品运营'
  },
  contact: {
    email: 'simingoasis@163.com',
    phone: '18794553076'
  },
  experience: [
    {
      time: '2026.05 — 2026.09', company: '字节跳动', role: '飞书合同产品实习生（AI 应用方向）',
      summary: '参与合同全流程 AI 产品建设，将大模型、知识检索和 Agent 能力应用于合同审查、标准模板比对、业务咨询与群聊协商场景。',
      traits: ['复杂问题拆解', 'AI落地', 'Prompt工程', '跨团队协同', 'B端产品'],
      images: ['assets/images/experience/bytedance-01.jpg', 'assets/images/experience/bytedance-02.jpg'],
      project: '飞书合同系统',
      details: [
        '<strong>AI 合同比对：</strong>针对合同审核工作量大的问题，优化AI比对功能；主导 Prompt、性能与模板三类优化，通过法务反馈聚类、误判边界校准、异常样本归因及回归测试持续迭代；免审率提升73%，功能覆盖合同系统合同量的 35%。',
        '<strong>补充协议 AI 比对：</strong>将AI比对能力应用在补充协议场景。独立负责技术与产品方案，针对模板管理差异、3 类发起链路及原合同关联信息影响判断规则，推动方案完成开发测试，已在2个部门灰度上线，首月免审率达17%。',
        '<strong>AI 问答助手：</strong>针对飞书合同系统Oncall工单量大，运营回复耗时长的问题，设计AI问答助手解答问题；搭建问答知识库，设计 grep 精确检索与 BM25+向量语义召回双通道；灰度后周均使用约 600 人，Oncall 单量减少 46%。',
        '<strong>合同协商群聊 Agent：</strong>针对群聊协商与合同系统填写的重复工作，设计群聊Agent自动填写系统；共同设计Agent产品方案，设计合同审查、合同比对、创建合同、确认终稿4类意图及交互流程，推动群聊协商与合同系统能力衔接。'
      ],
      metrics: [{ value: '38%', label: '2026年8月免审率' }, { value: '35%', label: '合同量覆盖' }, { value: '-46%', label: 'Oncall 单量' }]
    },
    {
      time: '2026.01 — 2026.03', company: '阅文集团', role: '产品策划实习生',
      summary: '参与漫剧产品“起点剧场”的前期调研策划与核心体验设计，围绕用户内容偏好设计内容许愿、活跃激励和试看付费转化三个方向完善产品机制。',
      traits: ['0-1产品全流程', '用户视角', '付费转化', 'AI漫剧', 'C端内容产品'],
      images: ['assets/images/experience/yuewen-01.jpg', 'assets/images/experience/yuewen-02.png'],
      project: '起点剧场 APP',
      details: [
        '<strong>产品原型设计：</strong>前期完成用户调研与竞品分析，累计产出10+个核心页面原型；产品于26年7月上线，全网累计下载约40万+次。',
        '<strong>许愿机制：</strong>设计 IP 搜索、许愿提交与热度反馈链路，经 600 名目标用户内部测试，任务完成率达到 83%。',
        '<strong>福利机制：</strong>以“剧点”串联任务奖励、活动发放、内容消费与充值场景；内部测试中规则理解率 97%、每日任务完成率 79%、每周领奖完成率 41%。',
        '<strong>试播机制：</strong>设计 3 类试播方案，经 600 名用户内部测试，试播后继续观看率达到 80%，付费观看率较全量剧集整体水平提升 32.7%。'
      ],
      metrics: [{ value: '40万+', label: '上线后全网下载' }, { value: '83%', label: '许愿任务完成率' }, { value: '32.7%', label: '付费观看提升率' }]
    },
    {
      time: '2025.09 — 2026.01', company: 'Wiley国际出版集团', role: '产品运营实习生',
      summary: '参与国际学术出版品牌的社交媒体内容运营与营销，通过内容策划、信息编辑和数据复盘，连接学术内容、作者及目标读者。',
      traits: ['新媒体运营', '内容营销', '长线策划', '数据迭代', '资源调优'],
      images: ['assets/images/experience/wiley-01.jpg', 'assets/images/experience/wiley-02.png'],
      project: '新媒体运营',
      details: [
        '<strong>社媒内容策划：</strong>负责 Wiley China 全平台社交媒体的内容策划，覆盖特刊征稿、文章荐读和编辑招募等内容，并根据阅读表现优化内容结构与页面引导。',
        '<strong>运营节奏规划：</strong>负责多渠道运营排期，构建内容矩阵，针对诺奖等重大节点设计长线策略，带动单月传播指数环比增长43.9%。',
        '<strong>用户交互迭代：</strong>追踪从曝光到转化的全链路行为数据，搭建数据看板，定位高流失节点；针对内容结构与移动端场景错配问题优化内容排版策略和交互逻辑，强化关键信息、视觉层级和用户行为便利，Q4官网跳转量提升12.4%，100%阅读完成率提升7.6%。',
        '<strong>资源调优标准化：</strong>监控分发渠道ROI，调整资源位流量分配策略；建立标准化内容组件库与SOP，内容生产效率提升21.6%。'
      ],
      metrics: [{ value: '+43.9%', label: '单月传播指数增长' }, { value: '+7.6%', label: '阅读完成率' }, { value: '+21.6%', label: '内容生产效率提升' }]
    },
    {
      time: '2021.09 至今', company: '公众号”白日捕梦“', role: '自媒体内容策划与表达实践',
      summary: '持续进行选题、内容组织与科普表达，并探索 AI 辅助内容生产。',
      traits: ['内容矩阵', 'Agent提效', '长期输出', '信息组织', '科普表达'],
      images: ['assets/images/experience/wechat-01.png', 'assets/images/experience/wechat-02.png'],
      project: '公众号“白日捕梦”',
      details: [
        '<strong>账号内容矩阵：</strong>调研市场和用户定位人文科普赛道，趣味科普+视觉化形式；搭建4大板块内容矩阵，用户留存高出平均水平17%。',
        '<strong>AI生产工作流：</strong>针对深度内容产出效率痛点搭建了两套AI工作流，选题知识树Agent建立从热点抓取到结构化大纲的逻辑自动化；视觉化AIGC Agent建立从视觉需求拆解到标准Prompt产出自动化。实现单篇生产周期从3周压缩至2周，效率提升32%。',
        '<strong>资源调优标准化：</strong>持续追踪用户行为，调整信息结构和投放节奏，产出多篇阅读量1W+的破圈爆款作品，验证数据驱动内容有效性。'
      ],
      metrics: [{ value: '+17%', label: '用户留存提升' }, { value: '+32%', label: '生产效率提升' }, { value: '3万+', label: '累计阅读量' }]
    }
  ],
  projects: [
    {
      name: '表达研究所', meta: ['Vibe Coding', 'AI Coach', '独立产品设计'],
      description: [
        '<strong>功能介绍：</strong>面向表达提升场景的练习与AI反馈的表达训练产品，搭建“语音录制—文本转写—大模型分析—句子级反馈—成长追踪”链路，覆盖话题闲聊、自言自语、演讲及面试 4 类练习场景。',
        '<strong>AI评测：</strong>设计逻辑结构、语义清晰度、流畅度、内容完整性、简洁度五维评价体系及 L1—L4 能力标签，通过雷达图与最近5次学习记录成长曲线呈现能力变化；支持基于岗位 JD 生成结构化面试题。'
      ],
      images: ['assets/images/projects/expression-lab-01.png', 'assets/images/projects/expression-lab-02.png'],
      link: 'https://biaoda-lab.pages.dev/', linkText: '在线体验'
    },
    {
      name: '公众号选题 Agent', meta: ['Agent', '内容生产'],
      description: '把选题从“临时灵感”变成可复用工作流：主题输入、资料检索、选题评分、内容角度和大纲生成相互衔接，辅助内容创作前期决策。',
      images: ['assets/images/projects/topic-agent-01.png', 'assets/images/projects/topic-agent-02.png']
    },
    {
      name: '科普作品集', meta: ['内容作品', 'PDF'],
      description: '围绕建筑、人文和地理主题开展科普内容实践，通过趣味化叙事、结构化知识组织和视觉表达，降低专业内容的理解门槛。',
      images: ['assets/images/projects/science-portfolio-01.png', 'assets/images/projects/science-portfolio-02.png']
    }
  ],
  skills: {
    images: ['assets/images/skills/overview-01.png', 'assets/images/skills/overview-02.png'],
    cards: [
      { name: '需求洞察', icon: '🎯', short: '从用户表达与真实场景中识别问题，而不是直接接收表层需求。', detail: '习惯把用户反馈放回具体任务链路中，区分“想要的功能”和“真正要解决的问题”。在内容产品、合同 AI 与个人作品中，都先从场景、角色、痛点和约束出发定义问题。', related: '起点剧场用户研究与功能设计、合同协商群聊 Agent 的场景拆分、表达研究所的问题定义。' },
      { name: '产品落地', icon: '🚀', short: '把模糊想法拆成可验证的机制、流程、规则和版本节奏。', detail: '关注从方案到可用产品的完整链路：用户路径、交互确认、异常状态、风险边界、灰度策略和结果验证。', related: '飞书合同 AI 比对灰度推进、AI 问答助手上线、起点剧场三个模块落地。' },
      { name: '数据分析', icon: '📊', short: '用数据验证判断，也能识别指标背后的样本和口径问题。', detail: '能够围绕业务目标选择指标，理解曝光、点击、留存、转化等信号的差异，也关注样本可比性、异常值和指标口径。', related: 'Wiley 传播指数与官网跳转复盘、AI 比对免审率灰度观察。' },
      { name: '表达协作', icon: '🤝', short: '把复杂问题讲清楚，并推动不同角色对齐。', detail: '具备文档写作、内容表达和跨角色沟通能力，能把业务规则、AI 判断逻辑和交互流程写成可执行方案。', related: '飞书合同产品方案、公众号长期输出、Wiley 内容策划。' },
      { name: 'Prompts 工程', icon: '🧩', short: '围绕业务目标设计 Prompt 链路，让 AI 判断更稳定、可迭代。', detail: '把复杂任务拆成识别、分类、判断和汇总步骤，关注输入上下文、输出结构、规则分层与灰度反馈。', related: '飞书合同 AI 比对 4 套专项 Prompt、三阶段 PE 链路。' },
      { name: 'Agent 工作流', icon: '⚙️', short: '理解从意图识别到工具调用，再到用户确认的工作流。', detail: '关注 Agent 在真实工作流中的切入位置、上下文提取、卡片确认、异常回退和结果交付。', related: '合同协商群聊 Agent、公众号选题 Agent。' }
    ]
  },
  interests: {
    images: ['assets/images/interests/life-01.png', 'assets/images/interests/life-02.png'],
    cards: [
      { name: 'AI 工具', icon: '✨', short: '持续体验新模型与新工具，并思考真实问题。', detail: '长期保持对 AI 工具的高频使用和拆解习惯，关注模型能力、交互形态与工作流变化。', related: '从生成式 AI 工具使用，到多模型、Agent 与产品构建。' },
      { name: '设计审美', icon: '🎨', short: '喜欢清爽、有层次、有细节的视觉表达。', detail: '建筑学训练让我对空间、比例、层级和视觉节奏敏感，也更关注界面结构和信息呈现。', related: '建筑学本硕背景、个人主页设计、内容作品排版。' },
      { name: '长期输出', icon: '📝', short: '用写作和内容沉淀思考。', detail: '公众号和科普作品集让我持续训练选题、信息组织、读者视角和表达节奏。', related: '公众号内容策划、科普作品集、表达研究所。' },
      { name: '合唱演出', icon: '🎤', short: '在集体协作中理解节奏、配合与共同完成。', detail: '合唱需要听见他人，也需要控制自己的表达；每个人都有角色，最终呈现一个整体。', related: '曾任哈工大合唱团文宣部部长，参与 4 场市级音乐会的宣传与协作，场均观众 800+。' },
      { name: '手工 DIY', icon: '🛠️', short: '从材料和细节出发，把想法做出来。', detail: '喜欢通过手工把构想转化为可以触摸的成品，在选材、制作和反复调整中训练耐心、细节控制与迭代意识。', related: '持续进行个人手工创作，部分作品在小红书获得数千次浏览。' },
      { name: '旅行摄影', icon: '📷', short: '通过观察环境和人，保持场景敏感。', detail: '喜欢建筑摄影与旅行纪实，通过镜头观察空间、光线和人的活动，记录不同城市与旅行场景中的真实细节。', related: '长期积累建筑摄影与旅行纪实作品，用影像训练构图、叙事和场景观察能力。' }
    ]
  },
  education: [
    { level: '硕士', photo: 'assets/images/icon-master.jpg', title: '硕士｜哈尔滨工业大学', major: '建筑设计及其理论｜保研', meta: ['综合排名：1/42', '创研硕士班班长、哈尔滨工业大学合唱团文宣部部长'], tags: ['系统思维', '设计表达', '研究能力'], items: [['科研成果', '国家发明专利发明人、SCI一区论文学生二作'], ['荣誉成果', '研究生特等奖学金（两次）、校级优秀学生'], ['竞赛成果', '米兰设计周全国三等奖、未来设计师全国二等奖']] },
    { level: '本科', photo: 'assets/images/icon-bachelor.jpeg', title: '本科｜哈尔滨工业大学', major: '建筑学', meta: ['综合排名：5/79', '哈工大seeds营造社宣传部部长、建筑学5班学习委员'], tags: ['设计思维', '视觉表达', '用户场景'], items: [['竞赛成果', '全国大学生节能减排银奖、可再生能源大赛一等奖'], ['荣誉成果', '校级优秀学生、优秀毕业生、人民奖学金（5次）'], ['专业训练', '建筑设计、数字化建筑与用户场景研究']] }
  ],
  learning: [
    { year: '2023', title: '把 AI 带进创作', text: 'Midjourney 辅助建筑渲染图，文心一言辅助写作。' },
    { year: '2024', title: '进入生产辅助', text: 'Stable Diffusion 可控绘图，ChatGPT 辅助科研框架，Kimi 辅助文字与检索。' },
    { year: '2025', title: '多模型与 Agent', text: '使用 DeepSeek、Gemini、Grok、豆包等工具，结合 Agent 搭建工作流。' },
    { year: '2026', title: '走向全流程落地', text: '写 Skill，使用 Codex、Cursor、Dify、Coze、Trae 等工具做 AI 产品实践。' }
  ]
};
