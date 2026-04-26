import type { Locale } from "./config";

export type LandingDictionary = {
  metadata: {
    title: string;
    description: string;
  };
  agentTracking: {
    metadata: {
      title: string;
      description: string;
    };
    brandSubtext: string;
    newInquiry: string;
    navigation: {
      dashboard: string;
      agentTracing: string;
      researchReports: string;
      library: string;
      settings: string;
      documentation: string;
    };
    activeInquiry: {
      eyebrow: string;
      title: string;
    };
    executionPlan: {
      heading: string;
      steps: Array<{
        status: "completed" | "active" | "pending";
        title: string;
        meta?: string;
        details?: string[];
      }>;
    };
    processFeed: {
      heading: string;
      pause: string;
      exportLogs: string;
      entries: Array<
        | {
            type: "papers";
            time: string;
            text: string;
            papers: string[];
          }
        | {
            type: "insight";
            time: string;
            prefix: string;
            text: string;
          }
        | {
            type: "status";
            time: string;
            text: string;
          }
      >;
      steerLabel: string;
      steerPlaceholder: string;
    };
    draftPreview: {
      heading: string;
      title: string;
      paragraphs: string[];
      composing: string;
    };
  };
  dashboard: {
    metadata: {
      title: string;
      description: string;
    };
    badge: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    overviewLabel: string;
    overviewTitle: string;
    overviewDescription: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    workspace: {
      heading: string;
      description: string;
      items: Array<{
        title: string;
        meta: string;
      }>;
    };
    featureGrid: {
      heading: string;
      description: string;
      researchOps: {
        title: string;
        description: string;
        steps: string[];
      };
      sourceHealth: {
        title: string;
        description: string;
        status: string;
      };
      liveQueues: {
        title: string;
        description: string;
      };
      exportCenter: {
        title: string;
        description: string;
        tags: string[];
      };
    };
    workflow: {
      eyebrow: string;
      heading: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
      quote: string;
      author: string;
    };
    finalCta: {
      heading: string;
      description: string;
      primary: string;
      secondary: string;
    };
    footer: {
      description: string;
      columns: Array<{
        heading: string;
        links: string[];
      }>;
      copyright: string;
    };
  };
  reportPage: {
    metadata: {
      title: string;
      description: string;
    };
    heading: string;
    description: string;
  };
  libraryPage: {
    metadata: {
      title: string;
      description: string;
    };
    toolbar: {
      searchLabel: string;
      searchPlaceholder: string;
      activityLabel: string;
      historyLabel: string;
      profileLabel: string;
    };
    heading: string;
    description: string;
    filterLabel: string;
    filters: string[];
    newCollection: string;
    recentReports: {
      heading: string;
      viewAll: string;
    };
    reportActions: {
      share: string;
      export: string;
    };
    reports: Array<{
      statusLabel: string;
      statusTone: "complete" | "draft";
      moreLabel: string;
      title: string;
      description: string;
      meta: string;
      actionLabel: string;
    }>;
    collections: {
      heading: string;
      items: Array<{
        title: string;
        countLabel: string;
      }>;
    };
    readingList: {
      heading: string;
      items: Array<{
        title: string;
        meta: string;
      }>;
      viewAll: string;
    };
    savedQueue: {
      heading: string;
      description: string;
    };
  };
  loginPage: {
    metadata: {
      title: string;
      description: string;
    };
    badge: string;
    heroHeading: string;
    heroDescription: string;
    launchCta: string;
    methodologyCta: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    form: {
      heading: string;
      description: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      rememberSession: string;
      forgotPassword: string;
      submitLabel: string;
      divider: string;
      google: string;
      github: string;
      signupPrompt: string;
      signupCta: string;
    };
    featureGrid: {
      heading: string;
      description: string;
      multiStepPlanning: {
        title: string;
        description: string;
        steps: string[];
      };
      sourceValidation: {
        title: string;
        description: string;
        status: string;
      };
      parallelSearch: {
        title: string;
        description: string;
      };
      structuredReports: {
        title: string;
        description: string;
        tags: string[];
      };
    };
    methodology: {
      eyebrow: string;
      heading: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
      quote: string;
      author: string;
    };
    finalCta: {
      heading: string;
      description: string;
      primary: string;
      secondary: string;
    };
    footer: {
      description: string;
      columns: Array<{
        heading: string;
        links: string[];
      }>;
      copyright: string;
    };
  };
  nav: {
    brand: string;
    features: string;
    methodology: string;
    pricing: string;
    institutions: string;
    login: string;
    getStarted: string;
  };
  hero: {
    heading: string;
    description: string;
    label: string;
    placeholder: string;
    attach: string;
    settings: string;
    cta: string;
    loginCta: string;
    loginHint: string;
    evidenceA: string;
    evidenceB: string;
  };
  login: {
    eyebrow: string;
    heading: string;
    description: string;
    welcome: string;
    subtitle: string;
    loginTab: string;
    signupTab: string;
    google: string;
    github: string;
    orContinue: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    emailLabel: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    forgotPassword: string;
    submitLabel: string;
    helper: string;
    agreementPrefix: string;
    termsLabel: string;
    agreementJoiner: string;
    privacyLabel: string;
  };
  methodology: {
    heading: string;
    phases: Array<{
      label: string;
      title: string;
      description: string;
    }>;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    apiDocs: string;
    status: string;
  };
};

export type ResearchSidebarDictionary = Pick<LandingDictionary, "agentTracking" | "nav">;
export type AgentTrackingDictionary = LandingDictionary["agentTracking"];
export type DashboardDictionary = LandingDictionary["dashboard"];
export type ReportPageDictionary = LandingDictionary["reportPage"];
export type LibraryPageDictionary = LandingDictionary["libraryPage"];
export type LandingPageDictionary = Pick<
  LandingDictionary,
  "nav" | "hero" | "login" | "methodology" | "footer"
>;
export type LoginPageDictionary = Pick<LandingDictionary, "nav" | "loginPage">;

function asLandingDictionary(value: unknown): LandingDictionary {
  return value as LandingDictionary;
}

const dictionaries = {
  en: () =>
    import("./messages/en.json").then((module) =>
      asLandingDictionary(module.default),
    ),
  vi: () =>
    import("./messages/vi.json").then((module) =>
      asLandingDictionary(module.default),
    ),
} satisfies Record<Locale, () => Promise<LandingDictionary>>;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
