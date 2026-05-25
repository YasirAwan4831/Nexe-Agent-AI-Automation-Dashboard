/* =============================================
   MUHAMMAD YASIR — AI Automation INTERNSHIP PORTFOLIO
   script.js  |  Main application file
   All HTML, Styles, Data & Logic lives here
   ============================================= */

'use strict';

/* ════════════════════════════════════════════
   1.  DATA  ──  All content in one place
   ════════════════════════════════════════════ */

const OWNER = {
  name:       'Muhammad Yasir',
  role:       'AI & Automation Developer',
  internship: 'Nest-Agent AI Automation Internship · 2026',
  tagline:    '6 Real-World <strong>AI Projects</strong> built during my Internship —<br/>From Chatbots to RAG Systems, from Email Automation to AI Agents.',
  tags:       ['🤖 AI/ML', '🐍 Python', '🔗 LangChain', '📧 Email Automation', '🧠 RAG', '📲 Twilio', '⚡ AI Agents'],
  portfolio:  'https://yasirawan4831.github.io/futuristic-links-dashboard/',
  github:     'https://github.com/YasirAwan4831',
  linkedin:   'https://linkedin.com/in/yasirawan4831',
  email:      'mailto:my3154831409@gmail.com',
};

const STATS = [
  { value: 6,   label: 'Projects Built'      },
  { value: 1,   label: 'Months Internship'   },
  { value: 99, label: '% Completion'        },
  { value: 12,  label: 'Technologies Used'   },
];

const NAV_LINKS = [
  { href: '#overview',  label: 'Overview'  },
  { href: '#projects',  label: 'Projects'  },
  { href: '#stats',     label: 'Stats'     },
  { href: '#contact',   label: 'Contact'   },
];

const ICON = {
  bot: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>`,
  mail: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  doc: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>`,
  chat: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  agent:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>`,
  rag:  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M8 10h.01M8 14h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01"/></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  link: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  li:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  art:  `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  arrow:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>`,
};

const PROJECTS = [
  {
    id: 1, featured: false,
    icon: ICON.bot,
    title: 'Basic AI Chatbot',
    subtitle: 'Chat Board Development',
    desc: 'An intelligent conversational chatbot powered by Google Gemini AI language models. Supports multi-turn dialogue, context memory and a clean web-based chat interface for seamless user interaction.',
    techs: ['Full Stack', 'OpenAI API', 'React.js (Vite)', 'Node.js', 'Express.js', 'Gemini API', 'Tailwind CSS'],
    repo:     'https://github.com/YasirAwan4831/yaris-ai-internship-chatbot',
    live:     'https://github.com/YasirAwan4831/yaris-ai-internship-chatbot',
    linkedin: 'https://linkedin.com/in/yasirawan4831',
    article:  'https://medium.com/@YasirAwan4831',
  },
  {
    id: 2, featured: false,
    icon: ICON.mail,
    title: 'Email Automation',
    subtitle: 'Script with Gmail API',
    desc: 'A professional Python BASED Email automation system that sends, schedules and manages emails via Gmail API using OAuth 2.0. Features HTML templates, email logging and a clean terminal interface.',
    techs: ['Python', 'Gmail API', 'OAuth 2.0', 'Sending', 'Schedule', 'HTML Templates', 'Email Logging', 'Automation Workflows'],
    repo:     'https://github.com/YasirAwan4831/ai-email-automation-python-internship',
    live:     'https://github.com/YasirAwan4831/ai-email-automation-python-internship',
    linkedin: 'https://linkedin.com/in/yasirawan4831',
    article:  'https://medium.com/@YasirAwan4831',
  },
  {
    id: 3, featured: false,
    icon: ICON.doc,
    title: 'Resume Scanner AI',
    subtitle: 'AI-Powered CV Analyzer',
    desc: 'An intelligent resume parsing and scoring system that analyzes CVs against job descriptions using AI. Extracts skills, experience, and provides match scores with detailed feedback.',
    techs: ['Python', 'Flask', 'AI/NLP', 'OpenAI', 'TF-IDF', 'PyPDF2', 'PDFplumber', 'JavaScript', 'CV Screening & Job Matching'],
    repo:     'https://github.com/YasirAwan4831/resume-screener-ai-internship-project-three',
    live:     'https://github.com/YasirAwan4831/resume-screener-ai-internship-project-three',
    linkedin: 'https://linkedin.com/in/yasirawan4831',
    article:  'https://medium.com/@YasirAwan4831',
  },
  {
    id: 4, featured: false,
    icon: ICON.chat,
    title: 'WhatsApp Automation',
    subtitle: 'Automated Messaging System',
    desc: 'webhook integrationAI-powered WhatsApp Automation System built with Python, Flask and Twilio featuring auto-replies, FAQ-based chatbot, conversation logging, webhook integration and smart automation workflows for real-time messaging..',
    techs: ['Python', 'Flask','Twilio', 'pywhatkit', 'FAQ-based chatbot', 'webhook integration', 'message scheduling', 'bulk messaging'],
    repo:     'https://github.com/YasirAwan4831/whatsapp-automation-system-bot',
    live:     'https://github.com/YasirAwan4831/whatsapp-automation-system-bot',
    linkedin: 'https://www.linkedin.com/posts/yasirawan4831_automation-keyabrfeatures-technologiesabrused-activity-7462713829001711616-9s57?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64',
    article:  'https://coderlegion.com/user/YasirAwan4831',
  },
  {
    id: 5, featured: true,
    icon: ICON.agent,
    title: 'Multi-Tool AI Agent',
    subtitle: 'Autonomous AI System',
    desc: 'An autonomous AI agent capable of using multiple tools — web search, file handling, code execution, Notes management/Save, Web Search, Send Email and API calls — to complete complex tasks step-by-step without human intervention.',
    techs: ['LangChain', 'Python', 'Gemini AI', 'SMTP', 'Flask', 'REACT (Vite)', 'Web Search', 'File Handling', 'API Integration', 'CSS'],
    repo:     'https://github.com/YasirAwan4831/nexeagent-multi-tool-ai-agent',
    live:     'https://github.com/YasirAwan4831/nexeagent-multi-tool-ai-agent',
    linkedin: 'https://www.linkedin.com/posts/yasirawan4831_keyabrhighlights-ai-automation-share-7463803071987580929-iC9y/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64',
    article:  'https://dev.to/yasirawan4831/building-a-production-style-multi-tool-ai-agent-with-python-flask-react-gemini-ai-47n3',
  },
  {
    id: 6, featured: true,
    icon: ICON.rag,
    title: 'RAG Knowledge System',
    subtitle: 'Retrieval-Augmented Generation',
    desc: 'A RAG-based knowledge base system that ingests documents, creates vector embeddings, and answers questions using retrieved context — making any knowledge base queryable via natural language.',
    techs: ['LangChain', 'ChromaDB', 'OpenAI', 'FAISS'],
    repo:     'https://github.com/YasirAwan4831/nexeagent-rag-based-knowledge-assistant',
    live:     'https://github.com/YasirAwan4831/nexeagent-rag-based-knowledge-assistant',
    linkedin: 'YOUR_LINKEDIN_POST_6',
    article:  'YOUR_ARTICLE_6',
  },
];

/* ════════════════════════════════════════════
   2.  DYNAMIC STYLES  ──  Injected via JS
   ════════════════════════════════════════════ */

function injectStyles() {
  const css = `
    /* ── GRID OVERLAY ── */
    body::before {
      content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
      background-image:
        linear-gradient(rgba(0,240,255,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,240,255,.03) 1px, transparent 1px);
      background-size: 72px 72px;
    }
    [data-theme="light"] body::before { opacity:.5; }

    /* ── KEYFRAMES ── */
    @keyframes fadeInDown { from{opacity:0;transform:translateY(-18px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeInUp   { from{opacity:0;transform:translateY(22px)}  to{opacity:1;transform:translateY(0)} }
    @keyframes cardIn     { from{opacity:0;transform:translateY(32px)}  to{opacity:1;transform:translateY(0)} }
    @keyframes brandPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.45);opacity:.65} }
    @keyframes statusPing { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,170,.45)} 50%{box-shadow:0 0 0 5px rgba(0,255,170,0)} }

    /* ── NAVBAR ── */
    .ya-nav {
      position:fixed; top:0; left:0; right:0; z-index:500;
      height:var(--nav-h);
      display:flex; align-items:center; justify-content:space-between;
      padding:0 2.5rem;
      background:rgba(4,6,12,.78);
      backdrop-filter:blur(22px);
      border-bottom:1px solid var(--border);
      transition:background .4s, border-color .3s;
    }
    [data-theme="light"] .ya-nav { background:rgba(240,244,255,.85); }
    .ya-nav-brand {
      display:flex; align-items:center; gap:10px;
      font-family:'Oxanium',monospace;
      font-size:1.05rem; font-weight:800; letter-spacing:.05em;
    }
    .ya-brand-dot {
      width:9px; height:9px; border-radius:50%;
      background:var(--blue); box-shadow:0 0 10px var(--blue);
      animation:brandPulse 2.5s infinite;
    }
    .ya-brand-accent { color:var(--blue); }
    .ya-nav-center   { display:flex; gap:2rem; }
    .ya-nav-link {
      font-size:.84rem; font-weight:600; letter-spacing:.04em;
      color:var(--text2); position:relative; transition:color .2s;
    }
    .ya-nav-link::after {
      content:''; position:absolute; bottom:-4px; left:0;
      width:0; height:1.5px; background:var(--blue);
      transition:width .25s ease;
    }
    .ya-nav-link:hover, .ya-nav-link.active { color:var(--text); }
    .ya-nav-link:hover::after, .ya-nav-link.active::after { width:100%; }
    .ya-theme-btn {
      width:40px; height:40px; border-radius:10px;
      border:1px solid var(--border2); background:var(--surface);
      color:var(--text); cursor:pointer; font-size:1.1rem;
      display:flex; align-items:center; justify-content:center;
      transition:all .2s; outline:none;
    }
    .ya-theme-btn:hover {
      border-color:var(--blue);
      box-shadow:0 0 14px rgba(0,240,255,.25);
      transform:scale(1.08);
    }

    /* ── HERO ── */
    .ya-hero {
      min-height:100vh;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      text-align:center;
      padding:calc(var(--nav-h) + 4rem) 2rem 5rem;
    }
    .ya-eyebrow {
      display:flex; align-items:center; gap:10px;
      font-family:'DM Mono',monospace;
      font-size:.76rem; letter-spacing:.14em;
      color:var(--text2); text-transform:uppercase;
      margin-bottom:1.8rem;
      animation:fadeInDown .7s ease both;
    }
    .ya-eyebrow-dot { width:4px; height:4px; border-radius:50%; background:var(--blue); }
    .ya-hero-title {
      font-family:'Oxanium',monospace;
      font-size:clamp(4rem,10vw,8rem);
      font-weight:800; line-height:.96; letter-spacing:-.03em;
      display:flex; flex-direction:column; gap:.1rem;
      margin-bottom:1.4rem;
    }
    .ya-title-line {
      display:block; opacity:0; transform:translateY(28px);
      animation:fadeInUp .7s ease forwards;
    }
    .ya-title-line.accent {
      color:transparent;
      -webkit-text-stroke:2px var(--blue);
      filter:drop-shadow(0 0 22px rgba(0,240,255,.38));
    }
    .ya-hero-sub {
      font-size:clamp(.95rem,1.8vw,1.12rem);
      color:var(--text2); max-width:520px;
      line-height:1.75; margin:0 auto 2rem;
      animation:fadeInUp .7s .35s ease both;
    }
    .ya-hero-sub strong { color:var(--text); }
    .ya-tags {
      display:flex; flex-wrap:wrap; justify-content:center; gap:8px;
      margin-bottom:2.5rem;
      animation:fadeInUp .7s .48s ease both;
    }
    .ya-tag {
      padding:5px 14px; border-radius:99px;
      border:1px solid var(--border2);
      background:rgba(0,240,255,.06);
      font-size:.76rem; font-weight:600; color:var(--text2);
      transition:all .2s; cursor:default;
    }
    .ya-tag:hover { border-color:var(--blue); color:var(--text); transform:translateY(-2px); }
    .ya-cta {
      display:inline-flex; align-items:center; gap:10px;
      padding:13px 30px; border-radius:12px;
      background:linear-gradient(135deg,var(--blue2),var(--blue));
      color:#fff; font-weight:700; font-size:.92rem;
      box-shadow:0 4px 24px rgba(0,240,255,.35);
      animation:fadeInUp .7s .6s ease both;
      transition:transform .2s, box-shadow .2s;
    }
    .ya-cta:hover { transform:translateY(-3px); box-shadow:0 8px 32px rgba(0,240,255,.5); }
    .ya-cta svg { transition:transform .3s; }
    .ya-cta:hover svg { transform:translateY(3px); }

    /* ── STATS ── */
    .ya-stats {
      display:flex; align-items:center; justify-content:center;
      padding:2.5rem 2rem;
      border-top:1px solid var(--border);
      border-bottom:1px solid var(--border);
      background:var(--bg2);
      position:relative; z-index:1;
    }
    .ya-stat { flex:1; max-width:200px; text-align:center; padding:.5rem 2rem; }
    .ya-stat-num {
      font-family:'Oxanium',monospace;
      font-size:clamp(2.2rem,4vw,3rem);
      font-weight:800; color:var(--blue); line-height:1;
      filter:drop-shadow(0 0 10px rgba(0,240,255,.3));
    }
    .ya-stat-lbl {
      font-size:.74rem; color:var(--text2);
      font-weight:600; letter-spacing:.06em;
      text-transform:uppercase; margin-top:4px;
    }
    .ya-stat-div { width:1px; height:48px; background:var(--border2); flex-shrink:0; }

    /* ── SECTION COMMONS ── */
    .ya-section-tag {
      display:inline-block;
      font-family:'DM Mono',monospace;
      font-size:.7rem; letter-spacing:.14em;
      color:var(--blue); text-transform:uppercase; margin-bottom:.5rem;
    }
    .ya-section-title {
      font-family:'Oxanium',monospace;
      font-size:clamp(1.8rem,4vw,2.9rem);
      font-weight:800; line-height:1.15; margin-bottom:.7rem;
    }
    .ya-section-title .accent { color:var(--blue); }
    .ya-section-desc { font-size:.95rem; color:var(--text2); max-width:520px; margin:0 auto; }

    /* ── PROJECTS GRID ── */
    .ya-projects {
      padding:6rem 2rem;
      max-width:1180px; margin:0 auto;
    }
    .ya-projects-header { text-align:center; margin-bottom:3rem; }
    .ya-grid {
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(330px,1fr));
      gap:1.4rem;
    }

    /* ── CARD ── */
    .ya-card {
      position:relative;
      background:var(--surface);
      backdrop-filter:blur(14px);
      border:1px solid var(--border);
      border-radius:var(--radius);
      padding:2rem;
      display:flex; flex-direction:column; gap:.75rem;
      overflow:hidden; cursor:default;
      opacity:0; transform:translateY(30px);
      animation:cardIn .6s ease forwards;
      transition:transform .35s cubic-bezier(.175,.885,.32,1.275),
                 border-color .35s, box-shadow .35s;
    }
    .ya-card:hover {
      transform:translateY(-6px);
      border-color:var(--border2);
      box-shadow:0 0 48px rgba(0,240,255,.2), 0 16px 40px rgba(0,0,0,.45);
    }
    .ya-card.featured { border-color:rgba(191,139,255,.18); }
    .ya-card.featured:hover {
      border-color:rgba(191,139,255,.38);
      box-shadow:0 0 48px rgba(191,139,255,.2), 0 16px 40px rgba(0,0,0,.45);
    }
    .ya-card-glow {
      position:absolute; inset:0; pointer-events:none;
      background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(0,240,255,.08),transparent);
      opacity:0; transition:opacity .35s;
    }
    .ya-card.featured .ya-card-glow {
      background:radial-gradient(ellipse 60% 40% at 50% 0%,rgba(191,139,255,.1),transparent);
    }
    .ya-card:hover .ya-card-glow { opacity:1; }
    .ya-featured-badge {
      position:absolute; top:13px; right:13px;
      font-size:.67rem; font-weight:700;
      padding:3px 10px; border-radius:99px;
      background:rgba(191,139,255,.14);
      border:1px solid rgba(191,139,255,.3);
      color:var(--purple); z-index:1;
    }
    .ya-card-head {
      display:flex; align-items:center; justify-content:space-between;
      position:relative; z-index:1;
    }
    .ya-card-num {
      font-family:'DM Mono',monospace;
      font-size:.7rem; color:var(--text3); letter-spacing:.08em;
    }
    .ya-card-status {
      display:flex; align-items:center; gap:5px;
      font-size:.7rem; font-weight:600; color:var(--green);
    }
    .ya-status-dot {
      width:6px; height:6px; border-radius:50%;
      background:var(--green); animation:statusPing 2s infinite;
    }
    .ya-card-icon {
      width:48px; height:48px;
      display:flex; align-items:center; justify-content:center;
      color:var(--blue);
      background:rgba(0,240,255,.08);
      border:1px solid rgba(0,240,255,.2);
      border-radius:12px;
      box-shadow:0 0 18px rgba(0,240,255,.14);
      position:relative; z-index:1; margin-bottom:.4rem;
      transition:transform .4s cubic-bezier(.175,.885,.32,1.275), box-shadow .4s;
    }
    .ya-card.featured .ya-card-icon {
      color:var(--purple);
      background:rgba(191,139,255,.08);
      border-color:rgba(191,139,255,.2);
      box-shadow:0 0 18px rgba(191,139,255,.14);
    }
    .ya-card:hover .ya-card-icon { transform:scale(1.16) rotate(5deg); box-shadow:0 0 28px rgba(0,240,255,.4); }
    .ya-card.featured:hover .ya-card-icon { box-shadow:0 0 28px rgba(191,139,255,.4); }
    .ya-card-title {
      font-family:'Oxanium',monospace;
      font-size:1.18rem; font-weight:700; color:var(--text);
      position:relative; z-index:1;
    }
    .ya-card-sub {
      font-size:.75rem; color:var(--blue);
      font-family:'DM Mono',monospace; letter-spacing:.04em;
      position:relative; z-index:1;
    }
    .ya-card.featured .ya-card-sub { color:var(--purple); }
    .ya-card-desc {
      font-size:.865rem; color:var(--text2);
      line-height:1.68; flex:1; position:relative; z-index:1;
    }
    .ya-techs { display:flex; flex-wrap:wrap; gap:6px; position:relative; z-index:1; }
    .ya-tech {
      padding:3px 10px; border-radius:6px;
      font-size:.68rem; font-weight:600;
      font-family:'DM Mono',monospace;
      background:rgba(0,240,255,.07);
      border:1px solid rgba(0,240,255,.16);
      color:var(--text2); transition:all .2s;
    }
    .ya-card:hover .ya-tech { background:rgba(0,240,255,.12); border-color:rgba(0,240,255,.28); color:var(--text); }
    .ya-card.featured .ya-tech { background:rgba(191,139,255,.07); border-color:rgba(191,139,255,.16); }
    .ya-card.featured:hover .ya-tech { background:rgba(191,139,255,.14); border-color:rgba(191,139,255,.32); }
    .ya-links { display:flex; flex-wrap:wrap; gap:6px; position:relative; z-index:1; margin-top:.2rem; }
    .ya-link {
      display:inline-flex; align-items:center; gap:5px;
      padding:5px 12px; border-radius:8px;
      font-size:.72rem; font-weight:600; border:1px solid;
      transition:all .2s; letter-spacing:.02em;
    }
    .ya-link-repo  { color:var(--text2); border-color:var(--border2); background:rgba(255,255,255,.03); }
    .ya-link-repo:hover  { color:var(--text); background:rgba(255,255,255,.07); }
    .ya-link-live  { color:var(--green); border-color:rgba(0,255,170,.24); background:rgba(0,255,170,.06); }
    .ya-link-live:hover  { background:rgba(0,255,170,.12); border-color:rgba(0,255,170,.45); transform:translateY(-1px); }
    .ya-link-li    { color:#60a5fa; border-color:rgba(96,165,250,.24); background:rgba(96,165,250,.06); }
    .ya-link-li:hover    { background:rgba(96,165,250,.12); border-color:rgba(96,165,250,.45); transform:translateY(-1px); }
    .ya-link-art   { color:var(--amber); border-color:rgba(255,204,0,.24); background:rgba(255,204,0,.06); }
    .ya-link-art:hover   { background:rgba(255,204,0,.12); border-color:rgba(255,204,0,.45); transform:translateY(-1px); }

    /* ── CONTACT ── */
    .ya-contact {
      padding:6rem 2rem; text-align:center;
      border-top:1px solid var(--border);
      background:var(--bg2);
    }
    .ya-contact-inner { max-width:580px; margin:0 auto; }
    .ya-contact-desc { color:var(--text2); margin:.8rem auto 2.5rem; }
    .ya-contact-links { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; }
    .ya-contact-btn {
      display:inline-flex; align-items:center; gap:8px;
      padding:12px 26px; border-radius:10px;
      font-weight:700; font-size:.87rem; border:1px solid;
      transition:all .2s;
    }
    .ya-cb-li   { color:#60a5fa; border-color:rgba(96,165,250,.28); background:rgba(96,165,250,.07); }
    .ya-cb-li:hover   { background:rgba(96,165,250,.14); transform:translateY(-2px); box-shadow:0 6px 18px rgba(96,165,250,.18); }
    .ya-cb-gh   { color:var(--text); border-color:var(--border2); background:var(--surface); }
    .ya-cb-gh:hover   { transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,.3); }
    .ya-cb-em   { color:var(--blue); border-color:rgba(0,240,255,.28); background:rgba(0,240,255,.07); }
    .ya-cb-em:hover   { background:rgba(0,240,255,.13); transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,240,255,.18); }

    /* ── FOOTER ── */
    .ya-footer {
      padding:1.2rem 2.5rem;
      border-top:1px solid var(--border);
      display:flex; align-items:center; justify-content:space-between;
      font-size:.78rem; color:var(--text3);
      background:var(--bg);
    }
    .ya-footer strong { color:var(--text2); }

    /* ── RESPONSIVE ── */
    @media(max-width:768px){
      .ya-nav-center{display:none;}
      .ya-grid{grid-template-columns:1fr;}
      .ya-stats{flex-wrap:wrap; gap:1.5rem;}
      .ya-stat-div{display:none;}
      .ya-footer{flex-direction:column; gap:.5rem; text-align:center;}
    }
    @media(max-width:480px){
      .ya-nav{padding:0 1.25rem;}
      .ya-projects{padding:4rem 1.25rem;}
    }
  `;
  const el = document.createElement('style');
  el.id = 'ya-dynamic-styles';
  el.textContent = css;
  document.head.appendChild(el);
}

/* ════════════════════════════════════════════
   3.  HTML BUILDERS  ──  DOM construction
   ════════════════════════════════════════════ */

function buildNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'ya-nav';
  nav.id = 'ya-navbar';
  nav.innerHTML = `
    <div class="ya-nav-brand">
      <span class="ya-brand-dot"></span>
      <span>&lt; YARIS<span class="ya-brand-accent">.AI </span>/&gt;</span>
    </div>
    <div class="ya-nav-center">
      ${NAV_LINKS.map(l => `<a href="${l.href}" class="ya-nav-link">${l.label}</a>`).join('')}
    </div>
    <button class="ya-theme-btn" id="ya-theme-btn" aria-label="Toggle theme">
      <span id="ya-toggle-icon"></span>
    </button>
  `;
  return nav;
}

function buildHero() {
  const sec = document.createElement('section');
  sec.className = 'ya-hero';
  sec.id = 'overview';
  sec.innerHTML = `
    <div class="ya-eyebrow">
      <span class="ya-eyebrow-dot"></span>
      <span>${OWNER.internship}</span>
      <span class="ya-eyebrow-dot"></span>
    </div>
    <h1 class="ya-hero-title">
      <span class="ya-title-line" style="animation-delay:.1s">${OWNER.name.split(' ')[0]}</span>
      <span class="ya-title-line accent" style="animation-delay:.25s">${OWNER.name.split(' ')[1]}</span>
    </h1>
    <p class="ya-hero-sub">${OWNER.tagline}</p>
    <div class="ya-tags">
      ${OWNER.tags.map(t => `<span class="ya-tag">${t}</span>`).join('')}
    </div>
    <a href="#projects" class="ya-cta">
      <span>Explore Projects</span>${ICON.arrow}
    </a>
  `;
  return sec;
}

function buildStats() {
  const sec = document.createElement('section');
  sec.className = 'ya-stats';
  sec.id = 'stats';
  sec.innerHTML = STATS.map((s, i) => `
    ${i > 0 ? '<div class="ya-stat-div"></div>' : ''}
    <div class="ya-stat">
      <div class="ya-stat-num" data-target="${s.value}">0</div>
      <div class="ya-stat-lbl">${s.label}</div>
    </div>
  `).join('');
  return sec;
}

function buildProjectCard(p, i) {
  const card = document.createElement('div');
  card.className = `ya-card${p.featured ? ' featured' : ''}`;
  card.style.animationDelay = `${i * 0.1}s`;
  card.style.animationPlayState = 'paused';

  card.innerHTML = `
    <div class="ya-card-glow"></div>
    ${p.featured ? '<div class="ya-featured-badge">⭐ Featured</div>' : ''}
    <div class="ya-card-head">
      <span class="ya-card-num">0${p.id}</span>
      <span class="ya-card-status"><span class="ya-status-dot"></span>Live</span>
    </div>
    <div class="ya-card-icon">${p.icon}</div>
    <h3 class="ya-card-title">${p.title}</h3>
    <p class="ya-card-sub">${p.subtitle}</p>
    <p class="ya-card-desc">${p.desc}</p>
    <div class="ya-techs">
      ${p.techs.map(t => `<span class="ya-tech">${t}</span>`).join('')}
    </div>
    <div class="ya-links">
      <a href="${p.repo}"     class="ya-link ya-link-repo" target="_blank">${ICON.github} Repository</a>
      <a href="${p.live}"     class="ya-link ya-link-live" target="_blank">${ICON.link}   Live Demo</a>
      <a href="${p.linkedin}" class="ya-link ya-link-li"   target="_blank">${ICON.li}     LinkedIn</a>
      <a href="${p.article}"  class="ya-link ya-link-art"  target="_blank">${ICON.art}    Article</a>
    </div>
  `;
  return card;
}

function buildProjects() {
  const sec = document.createElement('section');
  sec.className = 'ya-projects';
  sec.id = 'projects';
  sec.innerHTML = `
    <div class="ya-projects-header">
      <span class="ya-section-tag">// projects</span>
      <h2 class="ya-section-title">All <span class="accent">6 Projects</span></h2>
      <p class="ya-section-desc">Each project built from scratch with real-world use cases and modern AI tools.</p>
    </div>
  `;
  const grid = document.createElement('div');
  grid.className = 'ya-grid';
  PROJECTS.forEach((p, i) => grid.appendChild(buildProjectCard(p, i)));
  sec.appendChild(grid);
  return sec;
}

function buildContact() {
  const sec = document.createElement('section');
  sec.className = 'ya-contact';
  sec.id = 'contact';
  sec.innerHTML = `
    <div class="ya-contact-inner">
      <span class="ya-section-tag">// connect with me</span>
      <h2 class="ya-section-title">Let's <span class="accent">Connect</span></h2>
      <p class="ya-contact-desc">Open to opportunities, collaborations, and conversations about AI.</p>
      <div class="ya-contact-links">
        <a href="${OWNER.linkedin}" class="ya-contact-btn ya-cb-li" target="_blank">${ICON.li} LinkedIn</a>
        <a href="${OWNER.github}"   class="ya-contact-btn ya-cb-gh" target="_blank">${ICON.github} GitHub</a>
        <a href="${OWNER.email}"    class="ya-contact-btn ya-cb-em">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Email Me
        </a>
      </div>
    </div>
  `;
  return sec;
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'ya-footer';
  footer.innerHTML = `
    <span>Developed ❤️ By <strong>${OWNER.name}</strong> · ${OWNER.internship}</span>
    <span>© 2026 All Rights Reserved</span>
  `;
  return footer;
}

function mountApp() {
  const app = document.getElementById('app');
  const main = document.createElement('main');

  app.appendChild(buildNavbar());
  main.appendChild(buildHero());
  main.appendChild(buildStats());
  main.appendChild(buildProjects());
  main.appendChild(buildContact());
  main.appendChild(buildFooter());
  app.appendChild(main);
}

/* ════════════════════════════════════════════
   4.  NEURAL CANVAS ANIMATION
   ════════════════════════════════════════════ */

function initCanvas() {
  const canvas = document.getElementById('neural-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, nodes;
  const isLight = () => document.documentElement.getAttribute('data-theme') === 'light';

  const CFG = { count:68, maxDist:140, speed:.42, radius:1.7, connAlpha:.16, pulseMax:8 };

  class Node {
    constructor(rand) {
      this.x  = rand ? Math.random() * W : (Math.random() > .5 ? 0 : W);
      this.y  = rand ? Math.random() * H : Math.random() * H;
      this.vx = (Math.random() - .5) * CFG.speed;
      this.vy = (Math.random() - .5) * CFG.speed;
      this.r  = Math.random() * CFG.radius + .8;
      this.a  = Math.random() * .6 + .25;
      const p = isLight()
        ? ['#0088ff','#0055ff','#7c3aed','#00cc66']
        : ['#00f0ff','#0088ff','#bf8bff','#00ffaa'];
      this.color = p[Math.floor(Math.random() * p.length)];
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -20 || this.x > W+20 || this.y < -20 || this.y > H+20) {
        Object.assign(this, new Node(false));
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.a;
      ctx.fill();
    }
  }

  class Pulse {
    constructor(a, b) {
      this.ax=a.x; this.ay=a.y; this.bx=b.x; this.by=b.y;
      this.t=0; this.speed=Math.random()*.014+.008;
      this.color=isLight()?'#0088ff':'#00f0ff'; this.done=false;
    }
    update() { this.t+=this.speed; if(this.t>=1) this.done=true; }
    draw() {
      const x=this.ax+(this.bx-this.ax)*this.t;
      const y=this.ay+(this.by-this.ay)*this.t;
      ctx.beginPath(); ctx.arc(x,y,2.5,0,Math.PI*2);
      ctx.fillStyle=this.color; ctx.globalAlpha=(1-this.t)*.8; ctx.fill();
    }
  }

  let pulses=[], frame=0;

  function resize() {
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
  }
  function build() { nodes=Array.from({length:CFG.count},()=>new Node(true)); }
  function spawnPulse() {
    if(pulses.length>=CFG.pulseMax||!nodes) return;
    const a=nodes[Math.floor(Math.random()*nodes.length)];
    const b=nodes[Math.floor(Math.random()*nodes.length)];
    const d=Math.hypot(a.x-b.x,a.y-b.y);
    if(d<CFG.maxDist) pulses.push(new Pulse(a,b));
  }
  function drawConnections() {
    const c=isLight()?'0,136,255':'0,240,255';
    for(let i=0;i<nodes.length;i++) {
      for(let j=i+1;j<nodes.length;j++) {
        const d=Math.hypot(nodes[i].x-nodes[j].x,nodes[i].y-nodes[j].y);
        if(d<CFG.maxDist) {
          const a=(1-d/CFG.maxDist)*CFG.connAlpha;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x,nodes[i].y);
          ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=`rgba(${c},${a})`;
          ctx.globalAlpha=1; ctx.lineWidth=.55; ctx.stroke();
        }
      }
    }
  }
  function tick() {
    requestAnimationFrame(tick);
    ctx.clearRect(0,0,W,H);
    ctx.globalAlpha=1;
    drawConnections();
    nodes.forEach(n=>{n.update();n.draw();});
    if(++frame%42===0) spawnPulse();
    pulses=pulses.filter(p=>!p.done);
    pulses.forEach(p=>{p.update();p.draw();});
    ctx.globalAlpha=1;
  }

  resize(); build(); tick();
  window.addEventListener('resize',()=>{resize();build();});

  // expose rebuild for theme toggle
  window._rebuildCanvas = ()=>{build();pulses=[];};
}

/* ════════════════════════════════════════════
   5.  CURSOR GLOW
   ════════════════════════════════════════════ */
function initCursor() {
  const el = document.getElementById('cursor-glow');
  document.addEventListener('mousemove', e => {
    el.style.left = e.clientX + 'px';
    el.style.top  = e.clientY + 'px';
  });
}

/* ════════════════════════════════════════════
   6.  THEME TOGGLE
   ════════════════════════════════════════════ */
function initTheme() {
  const html   = document.documentElement;
  const btn    = document.getElementById('ya-theme-btn');
  const icon   = document.getElementById('ya-toggle-icon');
  const saved  = localStorage.getItem('ya-theme') || 'dark';

  html.setAttribute('data-theme', saved);
  icon.textContent = saved === 'dark' ? '☀️' : '🌙';

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    icon.textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('ya-theme', next);
    window._rebuildCanvas?.();
  });
}

/* ════════════════════════════════════════════
   7.  ANIMATED COUNTERS
   ════════════════════════════════════════════ */
function initCounters() {
  const nums = document.querySelectorAll('.ya-stat-num[data-target]');
  let done = false;

  function countUp(el, target, dur=1800) {
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts-start)/dur, 1);
      const e = p === 1 ? 1 : 1-Math.pow(2,-10*p);
      el.textContent = Math.floor(e*target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) {
      done = true;
      nums.forEach((el,i) => setTimeout(()=>countUp(el,+el.dataset.target),i*180));
    }
  }, {threshold:.5}).observe(document.querySelector('.ya-stats'));
}

/* ════════════════════════════════════════════
   8.  SCROLL REVEAL  (cards + section headers)
   ════════════════════════════════════════════ */
function initScrollReveal() {
  const cards = document.querySelectorAll('.ya-card');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, {threshold:.1});
  cards.forEach(c => io.observe(c));
}

/* ════════════════════════════════════════════
   9.  CARD 3-D TILT
   ════════════════════════════════════════════ */
function initTilt() {
  document.querySelectorAll('.ya-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width/2)  / (r.width/2);
      const dy = (e.clientY - r.top  - r.height/2) / (r.height/2);
      card.style.transition = 'transform .1s ease, border-color .35s, box-shadow .35s';
      card.style.transform  = `perspective(800px) rotateX(${-dy*6}deg) rotateY(${dx*6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .45s ease, border-color .35s, box-shadow .35s';
      card.style.transform  = '';
    });
  });
}

/* ════════════════════════════════════════════
   10.  ACTIVE NAV HIGHLIGHT ON SCROLL
   ════════════════════════════════════════════ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.ya-nav-link');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, {rootMargin:'-40% 0px -55% 0px'}).observe;

  // simpler fallback using scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(s => {
      if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${s.id}`));
      }
    });
  }, {passive:true});
}

/* ════════════════════════════════════════════
   11.  NAVBAR SCROLL TRANSPARENCY
   ════════════════════════════════════════════ */
function initNavbarScroll() {
  const nav = document.getElementById('ya-navbar');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? 'rgba(0,240,255,.22)'
      : '';
  }, {passive:true});
}

/* ════════════════════════════════════════════
   12.  CLICK PARTICLE BURST
   ════════════════════════════════════════════ */
function initParticleBurst() {
  const colors = ['#00f0ff','#0088ff','#f70202','#00ffaa','#ffcc00'];
  document.addEventListener('click', e => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    for (let i=0; i<50; i++) {
      const dot   = document.createElement('div');
      const angle = Math.random() * Math.PI * 2;
      const dist  = Math.random() * 55 + 58;
      const dur   = Math.random() * 480 + 380;
      const color = colors[Math.floor(Math.random()*colors.length)];
      Object.assign(dot.style, {
        position:'fixed', pointerEvents:'none', zIndex:'9000',
        left:e.clientX+'px', top:e.clientY+'px',
        width:'5px', height:'5px', borderRadius:'50%',
        background: color, transform:'translate(-50%,-50%)',
      });
      document.body.appendChild(dot);
      dot.animate([
        {transform:'translate(-50%,-50%) scale(1)', opacity:1},
        {transform:`translate(calc(-50% + ${Math.cos(angle)*dist}px),calc(-50% + ${Math.sin(angle)*dist}px)) scale(0)`, opacity:0}
      ], {duration:dur, easing:'ease-out', fill:'forwards'}).onfinish = () => dot.remove();
    }
  });
}

/* ════════════════════════════════════════════
   13.  BOOT — wire everything together
   ════════════════════════════════════════════ */
function boot() {
  injectStyles();     // 1. inject all CSS
  mountApp();         // 2. build & mount HTML
  initCanvas();       // 3. neural background
  initCursor();       // 4. cursor glow
  initTheme();        // 5. dark/light toggle
  initCounters();     // 6. animated numbers
  initScrollReveal(); // 7. card entrance
  initTilt();         // 8. 3-D tilt
  initActiveNav();    // 9. active nav link
  initNavbarScroll(); // 10. navbar opacity
  initParticleBurst();// 11. click particles

  console.log('%c Muhammad Yasir | AI Internship Portfolio ', 'background:#00f0ff;color:#000;font-size:13px;padding:7px 14px;border-radius:6px;font-weight:bold;');
  console.log('%c 6 Projects · Nest-Agent · 2026 ', 'color:#bf8bff;font-size:11px;');
}

// Run after DOM is ready
document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', boot)
  : boot();
