export const translationsEN = {
    common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
    },
    nav: {
        dashboard: 'Dashboard',
        chat: 'Chat',
        knowledge: 'Knowledge Base',
        editor: 'Document Editor',
        settings: 'Settings',
        logout: 'Logout',
        product: 'Product',
        solutions: 'Solutions',
        enterprise: 'Enterprise',
        pricing: 'Pricing',
        login: 'Login',
        getStarted: 'Get Started',
        toggleTerminal: 'Toggle Terminal',
        toggleTheme: 'Toggle Theme',
    },
    auth: {
        loginTitle: 'Sign In',
        loginSubtitle: 'Sign in to continue',
        email: 'Email',
        password: 'Password',
        login: 'Sign In',
        logout: 'Logout',
        demoHint: 'Demo: Use any email/password to sign in',
        loginSuccess: 'Login successful!',
        loginFailed: 'Login failed. Please try again.',
        accessDenied: 'Access Denied',
        noPermission: 'You do not have permission to access this page.',
    },
    dashboard: {
        title: 'AI Control Center',
        subtitle: 'Enterprise Grid',
        breadcrumb: 'Dashboard',
        heading: 'Dashboard',
        description: 'Monitor token usage and pipeline status.',
        documents: 'Documents',
        apiCalls: 'API Calls',
        errorRate: 'Error Rate',
        knowledgeHealth: 'Knowledge Health',
        activePipelines: 'Active Pipelines',
        vectorIndexSync: 'Vector Index Sync',
        docsIndexed: 'Docs Indexed',
        success: 'Success',
        fromLastMonth: 'from last month',
        fromLastWeek: 'from last week',
        withinLimits: 'Within limits',
        solidPerformance: 'Solid performance',
    },
    chat: {
        title: 'AI Chat',
        subtitle: 'Conversation with Enterprise AI',
        placeholder: 'Type your message...',
        send: 'Send',
    },
    knowledge: {
        title: 'Knowledge Base',
        subtitle: 'RAG Configuration & Management',
        chunkingStrategy: 'Chunking Strategy',
        chunkSize: 'Chunk Size',
        overlap: 'Overlap',
        embeddingModel: 'Embedding Model',
        sources: 'Knowledge Sources',
        searchPlayground: 'Search Playground',
        uploadDocument: 'Upload Document',
    },
    editor: {
        title: 'Document Editor',
        subtitle: 'Human-in-the-Loop Editing',
        save: 'Save',
        export: 'Export',
        aiActions: 'AI Actions',
        rewrite: 'Rewrite',
        summarize: 'Summarize',
        translate: 'Translate',
    },
    settings: {
        title: 'Settings',
        subtitle: 'Application Configuration',
        appearance: 'Appearance',
        darkMode: 'Dark Mode',
        language: 'Language',
        languageRegion: 'Language & Region',
        features: 'Features',
        advancedMode: 'Advanced Mode',
        telemetry: 'Enable Telemetry',
        saveSettings: 'Save Settings',
    },
    landing: {
        hero: {
            badge: 'Elysian v2.0 Public Beta',
            title1: 'New Standard for',
            title2: 'Product Management.',
            description: 'Intelligent operating system for modern teams. Combine roadmap, documents, and AI in one harmony.',
            ctaStart: 'Get Started',
            ctaDemo: 'View Demo',
        },
        problem: {
            title1: 'Why Businesses',
            title2: 'Often Get Stuck?',
            description: 'Many business owners get stuck being "employees" in their own business. Time is spent on technical issues, not strategic ones.',
            items: [
                'Important documents scattered in WhatsApp & Email',
                'Slow decisions due to unorganized data',
                'SOPs just become wall decorations',
                'Burnout managing daily operations'
            ],
            solutionTitle: 'Elysian Solution',
            solutionItems: [
                { title: 'Automate 80% Admin Work', desc: 'Save 20+ hours per week' },
                { title: 'Centralized Knowledge Hub', desc: 'SOPs & Documents in one access' },
                { title: 'Local Context AI', desc: 'Understands your business language' }
            ],
            cta: 'Transform Business Now'
        },
        features: {
            title: 'Features that Elevate Business',
            subtitle: 'All-in-one platform for modern business operations',
            items: {
                ai: { title: 'AI Assistant 24/7', desc: 'Answer team questions anytime' },
                docs: { title: 'Document Hub', desc: 'All files in one place' },
                security: { title: 'Advanced Security', desc: 'Banking standard security' },
                automation: { title: 'Workflow Automation', desc: 'Automate repetitive tasks' }
            }
        },
        useCases: {
            title: 'Who Needs Elysian?',
            subtitle: 'Flexible platform that adapts to your business model',
            items: {
                retail: { title: 'Retail & Store', items: ['Auto stock check', 'Customer chat reply', 'Product description'] },
                logistics: { title: 'Logistics', items: ['Shipment tracking', 'Waybill recap', 'Route optimization'] },
                agency: { title: 'Agency', items: ['Instant content ideas', 'Proposal drafts', 'Brief analysis'] },
                clinic: { title: 'Clinic', items: ['Medical recap', 'Doctor schedule', 'Patient reminders'] }
            }
        },
        cta: {
            badge: 'Join the AI Revolution',
            title1: 'Ready to Make Your Business',
            title2: 'Lighter?',
            description: 'Join 500+ business owners who have switched to the future of work. Save time, reduce stress.',
            btnStart: 'Start Free Trial',
            btnConsult: 'Team Consultation',
            foot: 'No credit card. Cancel anytime.'
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Answers to your doubts',
            q1: 'Is my business data safe?',
            a1: 'Very safe. We use banking standard encryption (AES-256) and isolated servers for each client.',
            q2: 'Can it integrate with WhatsApp?',
            a2: 'Yes! Elysian has official WhatsApp Business API integration features for auto-reply and order management.',
            q3: 'Is there usage training?',
            a3: 'We provide complete video tutorials and 1-on-1 onboarding sessions for the Premium package.',
            q4: 'What if I want to stop?',
            a4: 'You can unsubscribe at any time. Your data can be fully exported.'
        }
    }
};

export type TranslationKeys = typeof translationsEN;
