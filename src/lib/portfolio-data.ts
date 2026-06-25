export const profile = {
  name: "Prashant Singh Chauhan",
  role: "Data Analyst & BI Developer",
  location: "Toronto, Ontario, Canada",
  email: "Prashantch.94@gmail.com",
  phone: "+1 (437) 665-0895",
  linkedin: "https://www.linkedin.com/in/prashantchauhanca",
  github: "https://github.com/pcpc466",
};


export const stats = [
  { value: "5+", label: "Years in Data & BI" },
  { value: "$3M+", label: "Revenue Insights Surfaced" },
  { value: "12%", label: "Food Waste Reduced" },
  { value: "79%", label: "Churn Model Accuracy" },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  metric: string;
  problem: string;
  dataAndTools: string;
  methodology: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "telecom-churn",
    title: "Telecom Customer Churn Analysis & Retention Strategy",
    summary:
      "Identified a 26.5% churn rate against a 15% industry benchmark across 7,043 customers — surfacing $3M+ in preventable annual revenue loss.",
    tags: ["Python", "SQL", "ML", "Tableau"],
    metric: "$3M+ revenue loss identified · 79% model accuracy",
    problem:
      "A telecom operator needed to understand why customers were leaving and which interventions would retain the highest-value cohorts before the next billing cycle.",
    dataAndTools:
      "7,043 customer records · MySQL · Python (Pandas, NumPy, Scikit-learn, Seaborn) · Tableau for executive reporting.",
    methodology:
      "Engineered a SQL pipeline to clean and join contract, billing and service tables. Performed EDA in Pandas, then trained Logistic Regression and Random Forest classifiers — using feature importance to surface tenure, monthly charges and contract type as the dominant churn drivers.",
    outcome:
      "Random Forest model reached 79% accuracy. Insights translated into a tiered retention playbook estimated to recover $3M+ in annual revenue.",
  },
  {
    slug: "financial-dashboard",
    title: "Financial Performance & Risk Reporting Dashboard",
    summary:
      "A Power BI dashboard analyzing trends, profitability and risk indicators for business decision-making across a multi-entity portfolio.",
    tags: ["Power BI", "SQL", "DAX", "Excel"],
    metric: "Drill-through KPIs · DAX calculated metrics",
    problem:
      "Finance leadership lacked a unified view of profitability and risk across business units — manual monthly reporting delayed decisions by weeks.",
    dataAndTools:
      "SQL Server warehouse · Power BI (Power Query, DAX, Data Modeling) · Excel for source reconciliation.",
    methodology:
      "Modeled a star schema in Power BI, authored DAX measures for revenue, margin, variance and risk-adjusted KPIs, and built drill-through pages for entity-level deep-dives.",
    outcome:
      "Replaced manual monthly decks with a live dashboard. Enabled finance leads to investigate variances in minutes rather than days.",
  },
];

export const experience = [
  {
    company: "Tim Hortons",
    role: "Operations Analyst",
    location: "Ontario, Canada",
    period: "Aug 2023 – Sep 2025",
    bullets: [
      "Built reporting infrastructure for a multi-location franchise group as the in-house operations analyst.",
      "Analyzed 1,200+ daily transactions to track revenue, average order value and sales growth trends.",
      "Automated reporting with Pivot Tables, VLOOKUP, Data Validation and Macros.",
      "Built forecasting models on historical sales, reducing food waste by 12% annually.",
    ],
  },
  {
    company: "Four Seasons Hotels & Resorts",
    role: "Operations & Reporting Analyst — Management Training Program",
    location: "Colorado, United States",
    period: "Jun 2022 – May 2023",
    bullets: [
      "Partnered with cross-functional stakeholders to translate business needs into BI solutions.",
      "Performed variance analysis between forecasted and actual sales to identify revenue gaps.",
      "Supported KPI tracking for premium beverage sales contributing $50K+ monthly revenue.",
      "Improved inventory accuracy by 10% through structured audits.",
    ],
  },
  {
    company: "Edvora",
    role: "Junior Data Analyst",
    location: "Remote",
    period: "Sep 2020 – Jun 2022",
    bullets: [
      "Cleaned and transformed structured datasets from APIs using Excel Power Query within a team of 6.",
      "Conducted EDA to surface trends, anomalies and data-quality issues affecting 1,000+ users.",
      "Maintained data documentation and reporting processes to support team scalability.",
    ],
  },
];

export const education = [
  {
    school: "General Assembly",
    program: "Data Analytics Bootcamp · Capstone Project",
    location: "Canada",
    period: "Graduating May 2026",
  },
  {
    school: "Swiss Hotel Management School",
    program: "Master's of International Business — Hotel & Event Management",
    location: "Switzerland",
    period: "Graduated October 2020",
  },
  {
    school: "PSIT College of Engineering",
    program: "Bachelor of Engineering — Electronics & Communication",
    location: "India",
    period: "Graduated May 2018",
  },
];

export const certifications = [
  { name: "IBM Data Analysis using Python", date: "January 2026" },
  { name: "HackerRank SQL Certification", date: "April 2026" },
  { name: "General Assembly Data Analytics Bootcamp", date: "May 2026" },
];

export const skillGroups = [
  {
    name: "Languages & Querying",
    items: ["SQL (MySQL, SQL Server, Snowflake)", "Python (Pandas, NumPy)", "DAX", "Power Query (M)"],
  },
  {
    name: "BI & Visualization",
    items: ["Power BI", "Tableau", "Excel Dashboards"],
  },
  {
    name: "Data Science / ML",
    items: ["Scikit-learn", "Logistic Regression", "Random Forest", "K-Means Clustering", "Time Series Forecasting", "Feature Engineering"],
  },
  {
    name: "Cloud & Databases",
    items: ["MySQL", "SQL Server", "Snowflake"],
  },
  {
    name: "BI Concepts",
    items: ["ETL", "Star Schema", "Data Modeling", "KPI Reporting", "Dashboard Development"],
  },
  {
    name: "Productivity",
    items: ["Excel (Pivot Tables, Macros, VLOOKUP)", "Jira", "MS Suite"],
  },
];