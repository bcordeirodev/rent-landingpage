import { createWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

export const siteConfig = {
    name: "Jr Mundo Fest",
    description: "Aluguel de cadeiras, mesas, piscina de bolinhas e pula pula no Riacho Fundo 2. Jr Mundo Fest oferece equipamentos para festas e eventos com qualidade e segurança garantida.",
    url: "https://www.jrmundofest.com.br",
    address: "Riacho Fundo 2 - DF, Brasil",
    phone: "(61) 99946-7972",
    phoneNumber: "5561999467972",
    whatsapp: createWhatsAppUrl("5561999467972", whatsappMessages.contact),
    whatsappSimple: "https://wa.me/5561999467972",
    email: "jrmundofest@gmail.com",
    social: {
        instagram: "https://www.instagram.com/jrmundofest_/"
    },
    seo: {
        keywords: [
            "aluguel de cadeiras",
            "aluguel de mesas", 
            "piscina de bolinhas",
            "pula pula",
            "cama elástica",
            "festa infantil",
            "eventos Riacho Fundo 2",
            "aluguel equipamentos festa",
            "festa aniversário",
            "entretenimento infantil",
            "Riacho Fundo 2 DF",
            "aluguel festa Brasília",
            "Jr Mundo Fest"
        ],
        localBusiness: {
            name: "Jr Mundo Fest",
            type: "EventRental",
            address: "Riacho Fundo 2, Distrito Federal, Brasil",
            servingArea: ["Riacho Fundo 2", "Riacho Fundo 1", "Candangolândia", "Núcleo Bandeirante", "Park Way", "Brasília DF"],
            services: [
                "Aluguel de cadeiras para festas",
                "Aluguel de mesas para eventos", 
                "Piscina de bolinhas para festa infantil",
                "Pula pula e cama elástica",
                "Equipamentos para festas e eventos"
            ]
        }
    },
    whatsappMessages
};
