import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('E-mail inválido'),
    phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
    eventDate: z.string().min(1, 'Data do evento é obrigatória'),
    guestCount: z.string().min(1, 'Número de convidados é obrigatório'),
    message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = contactFormSchema.parse(body);

        // Here you would typically integrate with an email service like:
        // - SendGrid
        // - Mailgun
        // - AWS SES
        // - Nodemailer with SMTP

        // For now, we'll just log the data and return success
        console.log('Contact form submission:', validatedData);

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In a real implementation, you would send the email here
        // const emailData = {
        //   to: process.env.CONTACT_EMAIL || 'contato@alugueldecadeiras.com.br',
        //   subject: `Nova solicitação de orçamento - ${validatedData.name}`,
        //   html: `
        //     <h2>Nova Solicitação de Orçamento</h2>
        //     <p><strong>Nome:</strong> ${validatedData.name}</p>
        //     <p><strong>E-mail:</strong> ${validatedData.email}</p>
        //     <p><strong>Telefone:</strong> ${validatedData.phone}</p>
        //     <p><strong>Data do Evento:</strong> ${validatedData.eventDate}</p>
        //     <p><strong>Número de Convidados:</strong> ${validatedData.guestCount}</p>
        //     <p><strong>Mensagem:</strong></p>
        //     <p>${validatedData.message}</p>
        //   `,
        // };

        // TODO: Implement actual email sending
        // await emailService.send(emailData);

        return NextResponse.json(
            {
                success: true,
                message: 'E-mail enviado com sucesso!'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Dados inválidos',
                    errors: error.errors
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: 'Erro interno do servidor'
            },
            { status: 500 }
        );
    }
}

// Handle preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
