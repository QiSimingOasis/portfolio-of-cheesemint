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
    education: '哈尔滨工业大学｜建筑学本硕 · 保研｜成绩排名待补充',
    experience: '字节跳动·AI 产品经理｜阅文集团·内容产品策划｜Wiley·产品运营'
  },
  contact: {
    email: 'qisiming@bytedance.com',
    phone: '1879455'
  },
  experience: [
    {
      time: '2026.05 — 2026.09', company: '字节跳动', role: '飞书合同产品实习生（AI 应用方向）',
      summary: '围绕合同系统中的 AI 应用，参与问答、比对、协商与数据准备等产品工作。',
      traits: ['复杂问题拆解', '风险意识', '快速迭代', '跨团队协同'],
      images: ['assets/images/experience/bytedance-01.png', 'assets/images/experience/bytedance-02.png'],
      project: '飞书合同系统', chips: ['AI 比对', '群聊 Agent', 'Prompt'],
      details: [
        '<strong>AI 比对：</strong>面向标准化合同审核，识别修改条款、疑似未填写、挖空填写三类差异，并判断有利、不利、不好判断、无实质影响。',
        '主导撰写 4 套专项 Prompt，推动从大 Prompt 拆为“交易方识别—并行挖空与比对—影响范围判定”的三阶段链路；灰度阶段免审率从 12.11% 提升至 19.34%。',
        '<strong>合同协商群聊 Agent：</strong>将比对、审查、清洁版生成、形式审查和草稿创建前移到飞书群聊，创建合同步骤预计减少 10 步；产品方案已完成，当时处于研发推进阶段。',
        '<strong>AI 问答助手：</strong>已全量上线，每千份合同 on call 次数减少 34%，功能满意度 72.63%。'
      ],
      metrics: [{ value: '19.34%', label: '灰度免审率' }, { value: '-34%', label: '每千份合同 on call' }, { value: '72.63%', label: '问答满意度' }]
    },
    {
      time: '2026.01 — 2026.03', company: '阅文集团', role: '内容产品实习生（AI 漫剧）',
      summary: '参与起点剧场从 0 到 1 产品设计，覆盖用户研究、竞品分析和核心功能设计。',
      traits: ['用户视角', '内容敏感', '0—1 意识', '体验细节'],
      images: ['assets/images/experience/yuewen-01.png', 'assets/images/experience/yuewen-02.png'],
      project: '起点剧场 APP', chips: ['C 端内容', '0 到 1', '功能设计'],
      details: [
        '在内容产品场景中，围绕作品验证、用户需求收集和激励转化参与功能设计。试播用于以有限内容验证作品吸引力，许愿用于收集 IP 改编需求，福利以“剧点”连接活跃与消费。',
        '沉淀了从用户反馈、功能机制到产品原型的设计方法，也形成了对内容消费、用户信号和产品体验之间关系的理解。'
      ],
      metrics: [{ value: '0→1', label: '产品设计' }, { value: '3 个', label: '核心模块' }, { value: '用户研究', label: '方法基础' }]
    },
    {
      time: '2025.09 — 2026.01', company: 'Wiley', role: '数字营销实习生',
      summary: '负责新媒体内容生产、线上活动策划、后台运营与数据复盘。',
      traits: ['数据敏感', '内容表达', '长线策划', '跨文化沟通'],
      images: ['assets/images/experience/wiley-01.png', 'assets/images/experience/wiley-02.png'],
      project: '新媒体运营', chips: ['内容营销', '长线策略', '数据复盘'],
      details: ['主导新媒体内容生产和线上活动策划，围绕诺奖等重要节点设计长线营销策略，并通过数据复盘持续调整内容表达。'],
      metrics: [{ value: '+43.9%', label: '单月传播指数环比' }, { value: '+12.4%', label: 'Q4 官网跳转量' }, { value: '+7.6%', label: '100% 阅读完成率' }]
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
      name: '表达研究室', meta: ['AI Coach', '产品设计'],
      description: '面向表达提升场景的 AI 练习与反馈工具，通过语音/文字输入、AI 分析和多维度反馈，帮助用户看见自己在逻辑结构、语义清晰度、流畅度、内容完整性和简洁度上的改进空间。',
      images: ['assets/images/projects/expression-lab-01.png', 'assets/images/projects/expression-lab-02.png'],
      link: '#', linkText: '在线入口待补充'
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
      { name: '需求洞察', icon: '🎯', short: '从用户表达与真实场景中识别问题，而不是直接接收表层需求。', detail: '习惯把用户反馈放回具体任务链路中，区分“想要的功能”和“真正要解决的问题”。在内容产品、合同 AI 与个人作品中，都先从场景、角色、痛点和约束出发定义问题。', related: '起点剧场用户研究与功能设计、合同协商群聊 Agent 的场景拆分、表达研究室的问题定义。' },
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
      { name: '长期输出', icon: '📝', short: '用写作和内容沉淀思考。', detail: '公众号和科普作品集让我持续训练选题、信息组织、读者视角和表达节奏。', related: '公众号内容策划、科普作品集、表达研究室。' },
      { name: '合唱演出', icon: '🎤', short: '在集体协作中理解节奏、配合与共同完成。', detail: '合唱需要听见他人，也需要控制自己的表达；每个人都有角色，最终呈现一个整体。', related: '后续可补充代表经历或照片。' },
      { name: '手工 DIY', icon: '🛠️', short: '从材料和细节出发，把想法做出来。', detail: '享受从构想到成品的过程，也训练耐心、细节控制和迭代意识。', related: '后续可补充手工作品照片。' },
      { name: '旅行摄影', icon: '📷', short: '通过观察环境和人，保持场景敏感。', detail: '旅行和摄影训练观察细节、构图叙事和捕捉真实情绪的能力。', related: '后续可补充摄影作品。' }
    ]
  },
  education: [
    { level: '硕士', title: '硕士｜哈尔滨工业大学', major: '建筑学｜保研', meta: ['成绩排名：待补充', '学生组织职务：待补充'], tags: ['系统思维', '设计表达', '研究能力'], items: [['科研竞赛', '待补充'], ['荣誉成果', '两次研究生特等奖学金'], ['主修课程', '待补充']] },
    { level: '本科', title: '本科｜哈尔滨工业大学', major: '建筑学', meta: ['成绩排名：待补充', '学生组织职务：待补充'], tags: ['设计思维', '视觉表达', '用户场景'], items: [['科研竞赛', '待补充'], ['荣誉成果', '待补充'], ['主修课程', '待补充']] }
  ],
  learning: [
    { year: '2023', title: '把 AI 带进创作', text: 'Midjourney 辅助建筑渲染图，文心一言辅助写作。' },
    { year: '2024', title: '进入生产辅助', text: 'Stable Diffusion 可控绘图，ChatGPT 辅助科研框架，Kimi 辅助文字与检索。' },
    { year: '2025', title: '多模型与 Agent', text: '使用 DeepSeek、Gemini、Grok、豆包等工具，结合 Agent 搭建工作流。' },
    { year: '2026', title: '走向全流程落地', text: '写 Skill，使用 Codex、Cursor、Dify、Coze、Trae 等工具做 AI 产品实践。' }
  ]
};
