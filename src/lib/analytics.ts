type GTMEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
};

export const sendGTMEvent = ({ action, category, label, value }: GTMEvent) => {
    if (typeof window !== 'undefined' && (window as any).window.gtag) {
        (window as any).window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    } else {
        console.log('GTM Event (Dev/Offline):', { action, category, label, value });
    }
};

export const ANALYTICS_EVENTS = {
    // Conversions
    SUBMIT_CONTACT_FORM: 'submit_contact_form',
    SUBMIT_VULNERABILITY_REPORT: 'submit_vulnerability_report',

    // Interactions
    CLICK_HERO_CTA: 'click_hero_cta',
    CLICK_PRICING_PLAN: 'click_pricing_plan',

    // Categories
    CATEGORY_ENGAGEMENT: 'engagement',
    CATEGORY_FORM: 'form',
    CATEGORY_CONVERSION: 'conversion',
};
