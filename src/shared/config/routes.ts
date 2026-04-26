export const ROUTES = {
  home: (lang: string) => `/${lang}`,
  login: (lang: string) => `/${lang}/login`,
  dashboard: (lang: string) => `/${lang}/dashboard`,
  library: (lang: string) => `/${lang}/library`,
  report: (lang: string) => `/${lang}/report`,
  reportDetail: (lang: string, id: string) => `/${lang}/report/${id}`,
  agentTracking: (lang: string) => `/${lang}/agent-tracking`,
  settings: (lang: string) => `/${lang}/settings`,
  documentation: (lang: string) => `/${lang}/documentation`,
} as const;

export type AppRoutes = typeof ROUTES;
