/_
SCHOLARAI - MODERN ACADEMIC DESIGN SYSTEM
CSS Core Framework (Tailwind-compatible & Custom Variables)
_/

:root {
/_ Core Colors _/
--surface: #f7f9fb;
--surface-dim: #d8dadc;
--surface-bright: #f7f9fb;
--surface-container-lowest: #ffffff;
--surface-container-low: #f2f4f6;
--surface-container: #ecedef;
--surface-container-high: #e6e8ea;
--surface-container-highest: #e1e3e5;

/_ Brand & Primary _/
--primary: #0F172A;
--on-primary: #ffffff;
--primary-container: #1e293b;
--on-primary-container: #f1f5f9;

/_ Text & Hierarchy _/
--on-surface: #1e293b;
--on-surface-variant: #475569;
--outline: #cbd5e1;
--outline-variant: #e2e8f0;

/_ Typography /
--font-main: 'Inter', sans-serif;
--font-serif: 'Playfair Display', serif; / Optional for headers _/

/_ Spacing & Roundness _/
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
}

/_ Base Styles _/
body {
background-color: var(--surface);
color: var(--on-surface);
font-family: var(--font-main);
line-height: 1.6;
-webkit-font-smoothing: antialiased;
}

/_ Layout Utilities _/
.app-shell {
display: flex;
height: 100vh;
overflow: hidden;
}

.sidebar {
width: 260px;
background-color: var(--surface-container-low);
border-right: 1px solid var(--outline-variant);
display: flex;
flex-direction: column;
}

.main-content {
flex: 1;
overflow-y: auto;
padding: 2rem;
}

/_ Typography Classes _/
.text-h1 {
font-size: 2.5rem;
font-weight: 800;
letter-spacing: -0.025em;
color: var(--primary);
margin-bottom: 1rem;
}

.text-body {
font-size: 0.9375rem;
color: var(--on-surface-variant);
}

/_ Component Styles _/

/_ Buttons _/
.btn-primary {
background-color: var(--primary);
color: var(--on-primary);
padding: 0.625rem 1.25rem;
border-radius: var(--radius-sm);
font-weight: 600;
transition: all 0.2s ease;
border: none;
cursor: pointer;
}

.btn-primary:hover {
opacity: 0.9;
transform: translateY(-1px);
}

.btn-outline {
background: transparent;
border: 1px solid var(--outline);
color: var(--on-surface);
padding: 0.625rem 1.25rem;
border-radius: var(--radius-sm);
transition: background 0.2s;
}

.btn-outline:hover {
background-color: var(--surface-container);
}

/_ Cards _/
.card {
background-color: var(--surface-container-lowest);
border: 1px solid var(--outline-variant);
border-radius: var(--radius-md);
padding: 1.5rem;
box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/_ Agent Specifics _/
.badge-status {
padding: 2px 8px;
border-radius: 999px;
font-size: 0.75rem;
font-weight: 700;
text-transform: uppercase;
}

.badge-analyzing { background: #e0f2fe; color: #0369a1; }
.badge-complete { background: #dcfce7; color: #15803d; }

/_ Report Styles _/
.report-section {
max-width: 800px;
margin: 0 auto;
background: white;
padding: 4rem;
border: 1px solid var(--outline-variant);
