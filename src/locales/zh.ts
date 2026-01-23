import type { TranslationKeys } from './en';

export const translationsZH: TranslationKeys = {
    common: {
        loading: '加载中...',
        save: '保存',
        cancel: '取消',
        delete: '删除',
        edit: '编辑',
        close: '关闭',
        search: '搜索',
        filter: '筛选',
        export: '导出',
        import: '导入',
    },
    nav: {
        dashboard: '仪表板',
        chat: '聊天',
        knowledge: '知识库',
        editor: '文档编辑器',
        settings: '设置',
        logout: '登出',
        product: '产品',
        solutions: '解决方案',
        enterprise: '企业',
        pricing: '价格',
        login: '登录',
        getStarted: '开始使用',
        toggleTerminal: '切换终端',
        toggleTheme: '切换主题',
    },
    auth: {
        loginTitle: '登录',
        loginSubtitle: '登录以继续',
        email: '邮箱',
        password: '密码',
        login: '登录',
        logout: '登出',
        demoHint: '演示：使用任何邮箱/密码登录',
        loginSuccess: '登录成功！',
        loginFailed: '登录失败，请重试。',
        accessDenied: '访问被拒绝',
        noPermission: '您没有权限访问此页面。',
    },
    dashboard: {
        title: 'AI 控制中心',
        subtitle: '企业网格',
        breadcrumb: '仪表板',
        heading: '仪表板',
        description: '监控令牌使用情况和管道状态。',
        documents: '文档',
        apiCalls: 'API 调用',
        errorRate: '错误率',
        knowledgeHealth: '知识健康度',
        activePipelines: '活动管道',
        vectorIndexSync: '向量索引同步',
        docsIndexed: '已索引文档',
        success: '成功',
        fromLastMonth: '较上月',
        fromLastWeek: '较上周',
        withinLimits: '在限制范围内',
        solidPerformance: '表现稳定',
    },
    chat: {
        title: 'AI 聊天',
        subtitle: '与企业AI对话',
        placeholder: '输入您的消息...',
        send: '发送',
    },
    knowledge: {
        title: '知识库',
        subtitle: 'RAG 配置与管理',
        chunkingStrategy: '分块策略',
        chunkSize: '块大小',
        overlap: '重叠',
        embeddingModel: '嵌入模型',
        sources: '知识源',
        searchPlayground: '搜索实验区',
        uploadDocument: '上传文档',
    },
    editor: {
        title: '文档编辑器',
        subtitle: '人机协同编辑',
        save: '保存',
        export: '导出',
        aiActions: 'AI 操作',
        rewrite: '重写',
        summarize: '总结',
        translate: '翻译',
    },
    settings: {
        title: '设置',
        subtitle: '应用程序配置',
        appearance: '外观',
        darkMode: '深色模式',
        language: '语言',
        languageRegion: '语言与地区',
        features: '功能',
        advancedMode: '高级模式',
        telemetry: '启用遥测',
        saveSettings: '保存设置',
    },
    landing: {
        hero: {
            badge: 'Elysian v2.0 公测版',
            title1: '产品管理',
            title2: '的新标准',
            description: '现代团队的智能操作系统。将路线图、文档和 AI 和谐结合。',
            ctaStart: '开始使用',
            ctaDemo: '查看演示',
        },
        problem: {
            title1: '为什么企业',
            title2: '经常陷入困境？',
            description: '许多企业主在自己的业务中沦为“员工”。时间都花在了技术问题上，而不是战略问题上。',
            items: [
                '重要文档散落在 WhatsApp 和电子邮件中',
                '由于数据不规范导致决策缓慢',
                'SOP 变成了墙上的装饰品',
                '管理日常运营导致精疲力竭'
            ],
            solutionTitle: 'Elysian 解决方案',
            solutionItems: [
                { title: '自动化 80% 的行政工作', desc: '每周节省 20+ 小时' },
                { title: '集中化知识库', desc: '一站式访问 SOP 和文档' },
                { title: '本地上下文 AI', desc: '理解您的业务语言' }
            ],
            cta: '立即转型业务'
        },
        features: {
            title: '提升业务的功能',
            subtitle: '现代业务运营的全方位平台',
            items: {
                ai: { title: '24/7 AI 助手', desc: '随时回答团队问题' },
                docs: { title: '文档中心', desc: '所有文件集中管理' },
                security: { title: '高级安全', desc: '银行级安全标准' },
                automation: { title: '工作流自动化', desc: '自动处理重复任务' }
            }
        },
        useCases: {
            title: '谁需要 Elysian？',
            subtitle: '灵活适配您业务模式的平台',
            items: {
                retail: { title: '零售与门店', items: ['自动库存检查', '智能回复客户', '产品描述生成'] },
                logistics: { title: '物流', items: ['货运跟踪', '运单汇总', '路径优化'] },
                agency: { title: '机构', items: ['即时内容灵感', '提案草稿生成', '简报分析'] },
                clinic: { title: '诊所', items: ['医疗记录汇总', '医生排班', '患者提醒'] }
            }
        },
        cta: {
            badge: '加入 AI 革命',
            title1: '准备好让您的业务',
            title2: '更轻松吗？',
            description: '加入 500+ 已转向未来工作方式的企业主。节省时间，减轻压力。',
            btnStart: '开始免费试用',
            btnConsult: '团队咨询',
            foot: '无需信用卡。随时取消。'
        },
        faq: {
            title: '常见问题',
            subtitle: '为您答疑解惑',
            q1: '我的业务数据安全吗？',
            a1: '非常安全。我们使用银行级加密（AES-256），并为每个客户提供隔离的服务环境。',
            q2: '可以与 WhatsApp 集成吗？',
            a2: '可以！Elysian 拥有官方 WhatsApp Business API 集成功能，支持自动回复和订单管理。',
            q3: '有使用培训吗？',
            a3: '我们为高级套餐提供完整的视频教程和一对一入职培训。',
            q4: '如果我想停止使用怎么办？',
            a4: '您可以随时取消订阅。您的数据可以完全导出。'
        }
    }
};
