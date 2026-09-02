window.SITE_DATA = {
  site: {
    name: '齐思铭',
    title: 'AI 产品经理 / AI Product Manager',
    eyebrow: 'HELLO / 你好',
    resume: 'assets/files/resume.pdf',
    avatar: '',
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
    experience: '字节跳动·合同 AI 产品｜阅文集团·内容产品策划｜Wiley·产品运营与营销'
  },
  contact: {
    email: 'qisiming@bytedance.com',
    phone: '请通过邮箱联系'
  },
  experience: [
    {
      time: '2026.05 — 2026.09', company: '字节跳动', role: '飞书合同产品实习生（AI 应用方向）',
      summary: '围绕合同系统中的 AI 应用，参与问答、比对、协商与数据准备等产品工作。',
      traits: ['复杂问题拆解', '风险意识', '快速迭代', '跨团队协同'],
      images: ['assets/images/experience/bytedance-01.jpg', 'assets/images/experience/bytedance-02.jpg', 'assets/images/experience/bytedance-03.jpg'],
      project: '飞书合同系统', chips: ['AI 比对', '群聊 Agent', 'Prompt'],
      details: [
        '<strong>AI 合同比对：</strong>主导 Prompt、性能与模板优化，通过法务反馈聚类、误判边界校准、异常样本归因及回归测试持续迭代；2026 年 8 月免审率达到 38%，覆盖进入合同系统合同量的 26%。',
        '<strong>补充协议 AI 比对：</strong>独立负责技术与产品方案，针对模板管理、3 类发起链路及原合同关联核验设计判断规则，推动完成开发测试并在 2 个部门灰度。',
        '<strong>AI 问答助手：</strong>搭建业务知识与 AI 支撑文档，设计 grep 精确检索与 BM25+向量语义召回双通道；灰度后周均使用约 600 人，Oncall 单量减少 46%。',
        '<strong>合同协商群聊 Agent：</strong>共同负责产品方案，设计合同审查、合同比对、创建合同与确认终稿 4 类意图及交互流程。'
      ],
      metrics: [{ value: '38%', label: '2026年8月免审率' }, { value: '26%', label: '合同量覆盖' }, { value: '-46%', label: 'Oncall 单量' }]
    },
    {
      time: '2026.01 — 2026.03', company: '阅文集团', role: '产品策划实习生',
      summary: '参与起点剧场从 0 到 1 产品设计，覆盖用户研究、竞品分析和核心功能设计。',
      traits: ['用户视角', '内容敏感', '0—1 意识', '体验细节'],
      images: ['assets/images/experience/yuewen-01.jpg', 'assets/images/experience/yuewen-02.png'],
      project: '起点剧场 APP', chips: ['C 端内容', '0 到 1', '功能设计'],
      details: [
        '<strong>许愿机制：</strong>设计 IP 搜索、许愿提交与热度反馈链路，经 600 名目标用户内部测试，任务完成率达到 83%。',
        '<strong>福利机制：</strong>以“剧点”串联任务奖励、活动发放、内容消费与充值场景；内部测试中规则理解率 97%、每日任务完成率 79%、每周领奖完成率 41%。',
        '<strong>试播机制：</strong>设计 3 类试播方案，经 600 名用户内部测试，试播后继续观看率达到 80%，付费观看率较全量剧集整体水平提升 32.7%。',
        '产品于 2026 年 7 月正式上线，全网累计下载约 40 万次；该数据用于说明产品规模，不归因为个人直接成果。'
      ],
      metrics: [{ value: '40万', label: '上线后全网下载' }, { value: '83%', label: '许愿任务完成率' }, { value: '80%', label: '试播后继续观看率' }]
    },
    {
      time: '2025.09 — 2026.01', company: 'Wiley', role: '产品运营与营销',
      summary: '负责新媒体内容生产、线上活动策划、后台运营与数据复盘。',
      traits: ['数据敏感', '内容表达', '长线策划', '跨文化沟通'],
      images: ['assets/images/experience/wiley-01.jpg', 'assets/images/experience/wiley-02.png'],
      project: '新媒体运营', chips: ['内容营销', '长线策略', '数据复盘'],
      details: ['负责 Wiley China 公众号及内部社交媒体的内容策划、编辑与数据复盘，覆盖特刊征稿、文章荐读和编辑招募等内容，并根据阅读表现优化内容结构与页面引导。'],
      metrics: [{ value: '+12.4%', label: '官网跳转率' }, { value: '+7.6%', label: '阅读完成率' }]
    },
    {
      time: '长期实践', company: '公众号', role: '内容策划与表达实践',
      summary: '持续进行选题、内容组织与科普表达，并探索 AI 辅助内容生产。',
      traits: ['长期输出', '主动探索', '信息组织', '科普表达'],
      images: ['assets/images/experience/wechat-01.png', 'assets/images/experience/wechat-02.png'],
      project: '公众号“白日捕梦”', chips: ['内容表达', 'AI Agent', '科普作品'],
      details: ['公众号经历让我持续训练信息提炼、选题判断和结构化表达能力。后续将代表性内容整理为科普作品集 PDF，并尝试用 AI Agent 辅助选题、资料整理与大纲生成。'],
      metrics: [{ value: '长期', label: '内容实践' }, { value: '选题', label: '策划能力' }, { value: 'AI', label: '辅助创作' }]
    }
  ],
  projects: [
    {
      name: '表达研究所', meta: ['AI Coach', '产品设计'],
      description: '面向表达提升场景的 AI 练习与反馈工具，通过语音/文字输入、AI 分析和多维度反馈，帮助用户看见自己在逻辑结构、语义清晰度、流畅度、内容完整性和简洁度上的改进空间。',
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
      description: '将公众号优质内容整理为结构化 PDF 作品集，展示信息组织、科普表达和长期输出能力。后续可上传封面、目录和代表文章。',
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
    { level: '硕士', title: '硕士｜哈尔滨工业大学', major: '建筑设计及其理论｜保研', meta: ['专业排名：1/42', '创研硕士班班长'], tags: ['系统思维', '设计表达', '研究能力'], items: [['科研成果', '国家发明专利第一发明人、SCI一区论文学生二作'], ['荣誉成果', '两次研究生特等奖学金'], ['竞赛成果', '米兰设计周全国三等奖']] },
    { level: '本科', title: '本科｜哈尔滨工业大学', major: '建筑学', meta: ['综合排名：5/79', '合唱团文宣部部长'], tags: ['设计思维', '视觉表达', '用户场景'], items: [['竞赛成果', '全国大学生节能减排大赛银奖'], ['荣誉成果', '校级优秀学生'], ['专业训练', '建筑设计、数字化建筑与用户场景研究']] }
  ],
  learning: [
    { year: '2023', title: '把 AI 带进创作', text: 'Midjourney 辅助建筑渲染图，文心一言辅助写作。' },
    { year: '2024', title: '进入生产辅助', text: 'Stable Diffusion 可控绘图，ChatGPT 辅助科研框架，Kimi 辅助文字与检索。' },
    { year: '2025', title: '多模型与 Agent', text: '使用 DeepSeek、Gemini、Grok、豆包等工具，结合 Agent 搭建工作流。' },
    { year: '2026', title: '走向全流程落地', text: '写 Skill，使用 Codex、Cursor、Dify、Coze、Trae 等工具做 AI 产品实践。' }
  ]
};
