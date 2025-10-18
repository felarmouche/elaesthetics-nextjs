import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DOMAIN } from '@/lib/constants';
// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface HeroSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA: {
        text: string;
        href: string;
    };
}

export interface IntroSectionProps {
    title: string;
    content: string[];
}

export interface Treatment {
    imageUrl: string;
    imageAlt: string;
    treatmentUrl: string;
    title: string;
    description: string;
}

export interface TreatmentsSectionProps {
    title: string;
    treatments: Treatment[];
}

export interface Benefit {
    title: string;
    description: string;
    iconUrl?: string;
}

export interface QuickInfoSectionProps {
    title: string;
    benefits: Benefit[];
    note?: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface ProcessSectionProps {
    title: string;
    steps: ProcessStep[];
}
export interface ConsultationSectionProps {
    title: string;
    description: string[];
    ctaText: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
    backgroundColor?: string;
}
export interface FAQ {
    question: string;
    answer: string;
}

export interface FAQSectionProps {
    title: string;
    faqs: FAQ[];
}

export interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA: {
        text: string;
        href: string;
    };
}

export interface LocationInfo {
    address: string;
    phone: string;
    email: string;
    openingHours: string[];
}

export interface LocationSectionProps {
    title: string;
    description: string;
    location: LocationInfo;

}

export interface AreasSectionProps {
    title: string;
    categories: AreaCategory[];
}

export interface AreaCategory {
    category: string;
    items: { title: string; description?: string }[];
}

export interface CareInstruction {
    title: string;
    description: string;
}

export interface TreatmentCareSectionProps {
    title: string;
    beforeTreatment: {
        title: string;
        instructions: CareInstruction[];
    };
    afterTreatment: {
        title: string;
        instructions: CareInstruction[];
    };
}

// ============================================================================
// COMPONENTS
// ============================================================================

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    primaryCTA,
    secondaryCTA
}) => {
    return (
        <section id="hero" className="relative bg-stone-50 pt-12 pb-12 md:pt-20 md:pb-24">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
                    <div className="relative w-full md:w-3/4 mx-auto overflow-hidden aspect-square rounded-sm bg-transparent">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-cover object-center"
                            fill
                            priority
                            fetchPriority="high"
                            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                        />
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-accent-dark tracking-tight leading-[1.05] whitespace-pre-line">
                            {title}
                        </h1>

                        <p className="max-w-prose text-lg sm:text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                            <a
                                href={primaryCTA.href}
                                className="group inline-flex items-center justify-center bg-stone-900 px-7 sm:px-9 py-3.5 sm:py-4 text-white font-medium tracking-wide shadow-lg shadow-stone-900/10 hover:shadow-stone-900/20 hover:bg-stone-800 transition"
                            >
                                {primaryCTA.text}
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </a>

                            <a
                                href={secondaryCTA.href}
                                className="inline-flex items-center justify-center border-2 border-stone-300 px-7 sm:px-9 py-3.5 sm:py-4 text-stone-900 font-medium tracking-wide hover:border-stone-900 hover:bg-stone-50 transition"
                            >
                                {secondaryCTA.text}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const IntroSection: React.FC<IntroSectionProps> = ({ title, content }) => {
    return (
        <section id="intro" className="py-20 md:py-32 bg-white ">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-12 tracking-tight">
                    {title}
                </h2>
                <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const AreasSection: React.FC<AreasSectionProps> = ({ title, categories }) => {
    return (
        <section id="areas" className="py-16 md:py-32 px-[5%] bg-background-primary/70 clip-diagonal-top">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-4xl font-normal mb-16 text-accent-dark md:text-center uppercase tracking-[3px]">
                    {title}
                </h2>

                <div className="space-y-10 bg-white p-8 md:p-12">
                    {categories.map((cat, catIndex) => (
                        <div key={catIndex} className="space-y-4">
                            <p className="text-lg font-medium text-stone-800 uppercase tracking-wide border-b border-stone-200 pb-2">
                                {cat.category}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center px-4 py-2 bg-stone-50 border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-all duration-200"
                                    >
                                        <p className="text-sm font-light text-stone-700">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ title, treatments }) => {
    return (
        <section id="treatments" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-16">
                    {title}
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {treatments.map((treatment, index) => (
                        <div key={index} className="relative p-4 bg-stone-50 border border-stone-200 hover:shadow-lg hover:shadow-stone-200 transition-shadow duration-200 flex flex-col">
                            <Link
                                href={treatment.treatmentUrl}
                                className="absolute inset-0 z-10"
                            />
                            <div className="relative w-full h-64 py-3 border border-stone-300 flex items-center justify-center bg-[#E9E4D8]">
                                <Image
                                    className="object-cover"
                                    src={treatment.imageUrl}
                                    alt={`${treatment.imageAlt || treatment.title} Bild`}
                                    fill
                                />
                            </div>
                            <h3 className="text-2xl md:text-2xl font-light uppercase pt-6 text-stone-900">
                                {treatment.title}
                            </h3>
                            <p className="text-stone-600 font-light pt-6 leading-relaxed">
                                {treatment.description}
                            </p>
                                <Link
                                    href={treatment.treatmentUrl}
                                    className="mt-auto inline-block pt-2 text-blue-600 hover:text-blue-400 transition-colors underline"
                                >
                                    Mehr erfahren →
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const QuickInfoSection: React.FC<QuickInfoSectionProps> = ({ title, benefits, note }) => {
    return (
        <section id="quickInfos" className="py-20 md:py-32 bg-white max-w-4xl mx-auto ">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-16">
                    {title}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 ">
                    {benefits.map(({ iconUrl, title, description }, index) => (
                        <div key={index} className="space-y-4 flex flex-col items-center text-center">
                            {iconUrl && (
                                <Image
                                    width={48}
                                    height={48}
                                    src={iconUrl}
                                    alt={`Icon für ${title}`}
                                    className="w-12 h-12"
                                />
                            )}
                            <p className="text-md md:xl uppercase font-medium text-stone-900">{title}</p>
                            <p className="text-stone-600 font-light text-md">{description}</p>
                        </div>
                    ))}
                </div>
                {note && (
                    <p className="mt-12 text-sm text-stone-500 font-light italic">
                        {note}
                    </p>
                )}
            </div>
        </section>
    );
};

export const ProcessSection: React.FC<ProcessSectionProps> = ({ title, steps }) => {
    return (
        <section id="process" className="py-20 md:py-32 bg-stone-50 clip-diagonal-top clip-diagonal">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-16">
                    {title}
                </h2>
                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-2">
                                <span className="text-6xl font-light text-stone-300">{step.number}</span>
                            </div>
                            <div className="md:col-span-10 space-y-3">
                                <h3 className="text-2xl font-light text-stone-900">{step.title}</h3>
                                <p className="text-stone-600 font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
    title,
    description,
    ctaText,
    ctaHref,
    imageSrc,
    imageAlt,
    backgroundColor = 'bg-stone-50'
}) => {
    return (
        <section id="consultation" className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center ">
                    {/* Text Content */}
                    <div className="p-2 md:p-10 pt-10 text-left bg-background-secondary flex flex-col justify-center h-full gap-6">
                        <h2 className="text-2xl md:text-2xl sm:text-2xl md:text-4xl break-words md:text-5xl font-normal text-stone-900 uppercase tracking-[2px] leading-tight">
                            {title}
                        </h2>

                        {description.map((para, idx) => (
                            <p 
                                key={idx} 
                                className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-prose mx-auto md:mx-0 hover:text-stone-900 transition-colors duration-300"
                            >
                                {para}
                            </p>
                        ))}                  

                        <div className="pt-4">
                            <a
                                href={ctaHref}
                                className="group relative inline-block w-full text-center font-medium px-8 py-4 text-white tracking-wide bg-black overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                                    {ctaText}
                                    <ChevronRight className="ml-7 h-5 w-5 opacity-100 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className={`relative w-full bg-background-primary p-10 ${backgroundColor} transform transition-transform duration-300 hover:scale-[1.02]`}>
                        <div className="relative w-full max-h-[60vh] aspect-[3/4] overflow-hidden rounded-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(min-width: 500px) 50vh, 100vh"
                                className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TreatmentCareSection: React.FC<TreatmentCareSectionProps> = ({
    title,
    beforeTreatment,
    afterTreatment
}) => {
    return (
        <section id= "treatmentsCare" className="py-20 md:py-32 bg-background-primary/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-16">
                    {title}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Vor der Behandlung */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-light uppercase text-stone-900 pb-4 border-b border-stone-200">
                            {beforeTreatment.title}
                        </h3>
                        <div className="space-y-6">
                            {beforeTreatment.instructions.map((instruction, index) => (
                                <div key={index} className="space-y-2">
                                    <p className="font-medium text-base text-stone-700">
                                        {instruction.title}
                                    </p>
                                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                                        {instruction.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nach der Behandlung */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-light uppercase text-stone-900 pb-4 border-b border-stone-200">
                            {afterTreatment.title}
                        </h3>
                        <div className="space-y-6">
                            {afterTreatment.instructions.map((instruction, index) => (
                                <div key={index} className="space-y-2">
                                    <p className="font-medium text-base text-stone-700">
                                        {instruction.title}
                                    </p>
                                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                                        {instruction.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs }) => {
    const faqSchema = faqs.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }
        : null;

    return (
        <section id="faq" className="py-20 md:py-32 bg-white">
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-2xl md:text-4xl break-words font-normal mb-6 text-accent-dark uppercase tracking-[2px] mb-16">
                    {title}
                </h2>
                <div className="space-y-8 divide-y divide-stone-200">
                    {faqs.map((faq, index) => (
                        <details key={index} className="pt-8 first:pt-0 group">
                            <summary className="font-light text-xl text-stone-900 cursor-pointer list-none flex justify-between items-center">
                                {faq.question}
                                <span className="text-stone-400 group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="mt-6 text-stone-600 font-light leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const CTASection: React.FC<CTASectionProps> = ({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA
}) => {
    return (
        <section id="cta" className="py-20 md:py-32 bg-stone-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-2xl md:text-4xl break-words md:text-5xl font-light mb-8 tracking-tight">
                    {title}
                </h2>
                <p className="text-xl font-light mb-12 text-stone-300">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={primaryCTA.href}
                        className="inline-block bg-white text-stone-900 px-10 py-4 font-light tracking-wide hover:bg-stone-100 transition-colors"
                    >
                        {primaryCTA.text}
                    </a>
                    <a
                        href={secondaryCTA.href}
                        className="inline-block bg-transparent text-white px-10 py-4 font-light tracking-wide border border-stone-700 hover:border-white transition-colors"
                    >
                        {secondaryCTA.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export const LocationSection: React.FC<LocationSectionProps> = ({
    title,
    description,
    location
}) => {
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`;
    const addressParts = location.address.split(',');
    const streetAddress = addressParts[0]?.trim() ?? location.address;
    const cityPart = addressParts.slice(1).join(',').trim();
    const postalMatch = cityPart.match(/\b\d{5}\b/);
    const postalCode = postalMatch?.[0];
    const addressLocality = (postalCode ? cityPart.replace(postalCode, '').trim() : cityPart) || 'Bremen';

    const postalAddress: {
        '@type': 'PostalAddress';
        streetAddress: string;
        addressCountry: string;
        postalCode?: string;
        addressLocality?: string;
    } = {
        '@type': 'PostalAddress',
        streetAddress,
        addressCountry: 'DE',
    };

    if (postalCode) {
        postalAddress.postalCode = postalCode;
    }

    if (addressLocality) {
        postalAddress.addressLocality = addressLocality;
    }

    const locationSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: title,
        description,
        url: `${DOMAIN}/#location`,
        telephone: location.phone.replace(/\s+/g, ''),
        email: location.email,
        address: postalAddress,
        openingHours: location.openingHours,
    };

    return (
        <section id="location" className="py-20 bg-stone-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
            />
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl break-words font-light text-stone-900 tracking-tight">
                            {title}
                        </h2>
                        <p className="text-stone-600 font-light leading-relaxed">
                            {description}
                        </p>
                        <div className="space-y-6 pt-6">
                            <div className="space-y-1">
                                <p className="text-sm font-light text-stone-400 uppercase tracking-wider">Adresse</p>
                                <p className="text-stone-900 font-light">{location.address}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-light text-stone-400 uppercase tracking-wider">Telefon</p>
                                <p className="text-stone-900 font-light">{location.phone}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-light text-stone-400 uppercase tracking-wider">E-Mail</p>
                                <p className="text-stone-900 font-light">{location.email}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-light text-stone-400 uppercase tracking-wider">Öffnungszeiten</p>
                                {location.openingHours.map((hours, index) => (
                                    <p key={index} className="text-stone-900 font-light">{hours}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-96 rounded-md overflow-hidden shadow-lg border border-stone-200">
                        <iframe
                            title={`Karte zu ${title}`}
                            src={mapSrc}
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
