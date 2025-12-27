import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const parts = url.pathname.split('/');
    for (const part of parts) {
        if (part in ui) return part as keyof typeof ui;
    }
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
