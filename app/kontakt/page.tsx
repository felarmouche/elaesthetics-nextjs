"use client";
import { useState } from 'react';
import { Send, Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

// Ersetze diese mit deinen echten Werten
const API_KEY = 'DEIN_API_KEY';
const DOMAIN = 'https://deine-domain.de';

export default function ContactInline() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'Ich hätte gerne nächstmöglich einen Termin! Bitte rufen sie mich zurück oder schreiben Sie mir eine E-Mail.',
    });

    const [focused, setFocused] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactMethods = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+49 155 66919635',
            href: 'https://wa.me/491566919635',
            description: 'Chat direkt'
        },
        {
            icon: Mail,
            label: 'E-Mail',
            value: 'info@elaestehtics-bremen.de',
            href: 'mailto:info@elaestehtics-bremen.de',
            description: 'Schreiben Sie uns'
        },
        {
            icon: Phone,
            label: 'Telefon',
            value: '+49 155 66919635',
            href: 'tel:+491566919635',
            description: 'Rufen Sie an'
        },
        {
            icon: Instagram,
            label: 'Instagram',
            value: '@elaesthetics_bremen',
            href: 'https://instagram.com/elaesthetics_bremen',
            description: 'Folgen Sie uns'
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl uppercase font-normal mb-8 leading-[1.3] text-gray-900">
                        Kontakt
                    </h1>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl">
                        Sie haben Fragen oder möchten einen Termin vereinbaren?
                    </p>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Kontaktieren Sie mich gerne direkt über eine der folgenden Methoden!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 uppercase text-gray-900">Nachricht senden</h2>

                        <form id="contact-form" action="https://api.staticforms.xyz/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="apiKey" value={API_KEY} />
                            <input type="hidden" name="redirectTo" value={`${DOMAIN}/danke`} />
                            
                            {/* Name Input */}
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${focused === 'name' || formData.name
                                        ? '-top-1 md:-top-4 text-sm font-bold'
                                        : 'top-4 text-base text-gray-500'
                                        }`}
                                >
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused('')}
                                    required
                                    autoComplete="name"
                                    className="w-full bg-transparent border-b-2 border-black py-4 outline-none transition-all focus:border-black"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${focused === 'email' || formData.email
                                        ? '-top-1 md:-top-4 text-sm font-bold'
                                        : 'top-4 text-base text-gray-500'
                                        }`}
                                >
                                    E-Mail *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    required
                                    autoComplete="email"
                                    className="w-full bg-transparent border-b-2 border-black py-4 outline-none transition-all focus:border-black"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative">
                                <label
                                    htmlFor="phone"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${focused === 'phone' || formData.phone
                                        ? '-top-1 md:-top-4 text-sm font-bold'
                                        : 'top-4 text-base text-gray-500'
                                        }`}
                                >
                                    Telefonnummer (optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('phone')}
                                    onBlur={() => setFocused('')}
                                    autoComplete="tel"
                                    className="w-full bg-transparent border-b-2 border-black py-4 outline-none transition-all focus:border-black"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${focused === 'message' || formData.message
                                        ? '-top-1 md:-top-4 text-sm font-bold'
                                        : 'top-4 text-base text-gray-500'
                                        }`}
                                >
                                    Nachricht *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    required
                                    rows={5}
                                    className="w-full bg-transparent border-b-2 border-black py-4 outline-none resize-none transition-all focus:border-black"
                                />
                            </div>

                            {/* DSGVO Checkbox */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        checked={privacyAccepted}
                                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                        required
                                        className="mt-1 w-5 h-5 border-2 border-black cursor-pointer"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-700 cursor-pointer">
                                        Ich habe die{' '}
                                        <a 
                                            href="/datenschutz" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="underline hover:text-black font-medium"
                                        >
                                            Datenschutzerklärung
                                        </a>
                                        {' '}zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                                    </label>
                                </div>

                                <p className="text-xs text-gray-500 pl-8">
                                    Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@elaestehtics-bremen.de widerrufen.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!privacyAccepted}
                                className="group relative w-full bg-black text-white py-5 font-bold text-lg overflow-hidden transition-all hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Nachricht senden
                                    <Send className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                * Pflichtfelder
                            </p>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                                Wir antworten in der Regel innerhalb von 24 Stunden. Für dringende Anfragen nutzen Sie bitte WhatsApp oder Telefon.
                            </p>
                        </div>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-8 uppercase text-gray-900">Direkt erreichen</h2>

                        <div className="space-y-4">
                            {contactMethods.map((method, idx) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block border border-black p-6 transition-all duration-300 hover:bg-black hover:text-white"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 border border-black group-hover:border-white transition-colors">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="font-bold text-lg">{method.label}</h3>
                                                    <svg
                                                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-sm opacity-60 mb-1">
                                                    {method.description}
                                                </p>
                                                <p className="text-sm font-mono">{method.value}</p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}