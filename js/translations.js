// ===================================
// TRANSLATIONS - i18n System
// ===================================

const translations = {
    es: {
        // Hero Section
        hero_name: "Elyer Gregorio Maldonado",
        hero_title: "QA Tech Lead & Test Automation Architect",
        hero_subtitle: "Especializado en Shift-Left Testing, AI/LLM Testing y Observabilidad QA",
        stat_experience: "Años de experiencia",
        stat_reduction: "Reducción de defectos",
        stat_coverage: "Cobertura automatizada",
        contact: "Contacto",

        // About Section
        about_title: "Sobre mí",
        about_text_1: "QA Tech Lead con más de 7 años de experiencia implementando estrategias de testing de clase mundial. Especializado en Shift-Left Testing, AI/LLM Testing y arquitecturas de automatización enterprise con observabilidad completa.",
        about_text_2: "Track record comprobado en reducción de defectos críticos (55-60%), optimización de ciclos de testing y construcción de frameworks reutilizables que integran E2E, API, Performance y Security testing con métricas en tiempo real (Grafana, InfluxDB, Loki).",

        // Featured Projects
        featured_title: "Proyectos Destacados",
        featured_intro: "Frameworks profesionales de código abierto que demuestran innovación real en QA automation y observabilidad.",
        
        qasl_desc: "Plataforma unificada enterprise que integra análisis estático de HUs (SIGMA Analyzer), E2E (Playwright), API (Newman), Performance (K6) y Security (OWASP ZAP) con observabilidad completa en Grafana, InfluxDB y Loki.",
        
        ingrid_desc: "Framework profesional para testing automatizado de chatbots y sistemas LLM basado en OWASP LLM Top 10 2025 y metodología LLM-as-Judge (Claude como evaluador). Pionero en AI Testing con enfoque en seguridad y calidad de respuestas.",

        impact_title: "Impacto Demostrable",

        // Skills Section
        skills_title: "Competencias Técnicas",
        skill_automation: "Automatización E2E",
        skill_performance: "Performance & Observability",
        skill_security: "Security Testing",
        skill_ai: "AI/LLM Testing",
        skill_api: "API Testing",
        skill_cicd: "CI/CD & DevOps",
        skill_management: "Gestión & QA",
        skill_standards: "Estándares & Metodología",

        // Portfolio Section
        portfolio_title: "Otros Proyectos",
        portfolio_intro: "Además de los frameworks destacados, he trabajado en diversos proyectos que abarcan múltiples sectores y tecnologías. Explora mi portafolio completo en GitHub.",
        view_all_projects: "Ver Todos los Proyectos",
        github_profile: "Perfil de GitHub",

        // Footer
        footer_rights: "Todos los derechos reservados."
    },

    en: {
        // Hero Section
        hero_name: "Elyer Gregorio Maldonado",
        hero_title: "QA Tech Lead & Test Automation Architect",
        hero_subtitle: "Specialized in Shift-Left Testing, AI/LLM Testing, and QA Observability",
        stat_experience: "Years of experience",
        stat_reduction: "Defect reduction",
        stat_coverage: "Automated coverage",
        contact: "Contact",

        // About Section
        about_title: "About Me",
        about_text_1: "QA Tech Lead with over 7 years of experience implementing world-class testing strategies. Specialized in Shift-Left Testing, AI/LLM Testing, and enterprise automation architectures with complete observability.",
        about_text_2: "Proven track record in reducing critical defects (55-60%), optimizing testing cycles, and building reusable frameworks that integrate E2E, API, Performance, and Security testing with real-time metrics (Grafana, InfluxDB, Loki).",

        // Featured Projects
        featured_title: "Featured Projects",
        featured_intro: "Professional open-source frameworks demonstrating real innovation in QA automation and observability.",
        
        qasl_desc: "Enterprise unified platform integrating static analysis of User Stories (SIGMA Analyzer), E2E (Playwright), API (Newman), Performance (K6), and Security (OWASP ZAP) with complete observability in Grafana, InfluxDB, and Loki.",
        
        ingrid_desc: "Professional framework for automated testing of chatbots and LLM systems based on OWASP LLM Top 10 2025 and LLM-as-Judge methodology (Claude as evaluator). Pioneer in AI Testing with focus on security and response quality.",

        impact_title: "Demonstrable Impact",

        // Skills Section
        skills_title: "Technical Competencies",
        skill_automation: "E2E Automation",
        skill_performance: "Performance & Observability",
        skill_security: "Security Testing",
        skill_ai: "AI/LLM Testing",
        skill_api: "API Testing",
        skill_cicd: "CI/CD & DevOps",
        skill_management: "Management & QA",
        skill_standards: "Standards & Methodology",

        // Portfolio Section
        portfolio_title: "Other Projects",
        portfolio_intro: "In addition to the featured frameworks, I have worked on various projects spanning multiple sectors and technologies. Explore my complete portfolio on GitHub.",
        view_all_projects: "View All Projects",
        github_profile: "GitHub Profile",

        // Footer
        footer_rights: "All rights reserved."
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
