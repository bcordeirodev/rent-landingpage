/**
 * Gera URL do WhatsApp com mensagem customizada
 */
export function createWhatsAppUrl(phoneNumber: string, message?: string): string {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = message ? encodeURIComponent(message) : '';

    return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

/**
 * Mensagens padrão do WhatsApp para diferentes contextos
 */
export const whatsappMessages = {
    contact: "Olá! Gostaria de saber mais informações sobre os eventos da Jr Mundo Fest. 🎉",
    info: "Oi! Vim pelo site e quero conhecer mais sobre os serviços da Jr Mundo Fest! 😊",
    booking: "Olá! Gostaria de fazer um orçamento para um evento. Podem me ajudar? 🎊"
};
