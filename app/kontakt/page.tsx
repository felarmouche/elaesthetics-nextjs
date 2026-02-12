import type { Metadata } from 'next';
import KontaktForm from '@/components/KontaktForm';

export const metadata: Metadata = {
    title: 'Kontakt & Termin | EL Aesthetics Bremen Oberneuland',
    description: 'Kontaktieren Sie EL Aesthetics in Bremen Oberneuland. Termin vereinbaren per WhatsApp, Telefon oder Kontaktformular. Privatpraxis für ästhetische Medizin.',
    keywords: ['EL Aesthetics Bremen Kontakt', 'ästhetische Medizin Bremen Termin', 'Privatpraxis Bremen Oberneuland'],
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/kontakt',
    },
    openGraph: {
        title: 'Kontakt & Termin – EL Aesthetics Bremen',
        description: 'Termin vereinbaren per WhatsApp, Telefon oder Kontaktformular. Privatpraxis für ästhetische Medizin in Bremen Oberneuland.',
        url: 'https://elaesthetics-bremen.de/kontakt',
        siteName: 'EL Aesthetics Bremen',
        locale: 'de_DE',
        type: 'website',
    },
};

export default function KontaktPage() {
    return <KontaktForm />;
}
