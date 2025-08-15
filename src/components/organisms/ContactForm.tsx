'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';
import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import axios from 'axios';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  eventDate: z.string().min(1, 'Data do evento é obrigatória'),
  guestCount: z.string().min(1, 'Número de convidados é obrigatório'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  title?: string;
  description?: string;
}

export default function ContactForm({ 
  title = "Solicite seu Orçamento",
  description = "Preencha o formulário abaixo e entraremos em contato rapidamente."
}: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    
    try {
      await axios.post('/api/send-email', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <Card className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <Heading level={3} className="mb-2 text-green-800">
          Mensagem Enviada!
        </Heading>
        <p className="text-neutral-600 mb-6">
          Obrigado pelo seu interesse! Entraremos em contato em breve com seu orçamento.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">
          Enviar Nova Mensagem
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <div className="text-center mb-8">
        <Heading level={3} className="mb-2">
          {title}
        </Heading>
        <p className="text-neutral-600">
          {description}
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-800 text-sm">
            Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nome completo *"
            placeholder="Seu nome"
            error={errors.name?.message}
            {...register('name')}
          />
          
          <Input
            label="E-mail *"
            type="email"
            placeholder="seu@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Telefone/WhatsApp *"
            type="tel"
            placeholder="(61) 99999-9999"
            error={errors.phone?.message}
            {...register('phone')}
          />
          
          <Input
            label="Data do evento *"
            type="date"
            error={errors.eventDate?.message}
            {...register('eventDate')}
          />
        </div>

        <Input
          label="Número de convidados *"
          type="number"
          placeholder="Ex: 50"
          error={errors.guestCount?.message}
          {...register('guestCount')}
        />

        <Textarea
          label="Mensagem *"
          placeholder="Conte-nos mais detalhes sobre seu evento, tipo de cadeiras desejadas, local, horário, etc."
          rows={5}
          error={errors.message?.message}
          {...register('message')}
        />

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            fullWidth
            loading={submitStatus === 'loading'}
            className="group"
          >
            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {submitStatus === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
          </Button>
        </div>

        <p className="text-xs text-neutral-500 text-center">
          Ao enviar este formulário, você concorda com nossa{' '}
          <a href="/politica-de-privacidade" className="text-primary-600 hover:underline">
            Política de Privacidade
          </a>
        </p>
      </form>
    </Card>
  );
}
