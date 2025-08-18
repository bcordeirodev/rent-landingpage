'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingWhatsApp() {
    return (
        <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Falar no WhatsApp"
        >
            <div className="relative">
                {/* Pulso de notificação */}
                <div className="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-75"></div>
                
                {/* Botão principal */}
                <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                    <MessageCircle className="w-7 h-7 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-neutral-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    💬 Chama no Zap!
                    <div className="absolute top-full right-4 border-4 border-transparent border-t-neutral-800"></div>
                </div>
            </div>
        </a>
    );
}
