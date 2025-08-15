# 🪑 Aluguel de Cadeiras - Riacho Fundo 2

Landing page moderna e otimizada para SEO para serviço de aluguel de cadeiras no Riacho Fundo 2, Brasília-DF.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves
- **Swiper** - Carousel responsivo para galeria
- **React Hook Form + Zod** - Formulários validados
- **Next-SEO** - Otimização SEO
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
src/
├── app/                     # App Router (Next.js 13+)
│   ├── api/send-email/     # API endpoint para formulário
│   ├── contato/            # Página de contato
│   ├── politica-de-privacidade/ # Política de privacidade
│   ├── layout.tsx          # Layout global
│   └── page.tsx            # Homepage
├── components/             # Componentes organizados por Atomic Design
│   ├── atoms/              # Componentes básicos (Button, Input, etc.)
│   ├── molecules/          # Componentes compostos (ContactItem, Logo, etc.)
│   └── organisms/          # Componentes complexos (Header, Hero, etc.)
├── config/                 # Configurações centralizadas
│   ├── site.ts            # Dados da empresa
│   ├── seo.ts             # Configuração SEO
│   ├── schema.ts          # JSON-LD estruturado
│   └── theme.ts           # Paleta de cores
├── layouts/               # Layouts reutilizáveis
└── styles/               # Estilos globais
```

## 🎨 Design System

### Cores
- **Primária**: Azul vibrante (#3b82f6)
- **Secundária**: Amarelo ouro (#f59e0b)
- **Neutra**: Cinza (#6b7280)

### Tipografia
- **Fonte**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Responsividade
- **Mobile-first**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Container máximo**: 1440px

## 🔧 Instalação e Configuração

### 1. Instalar dependências

```bash
npm install
# ou
yarn install
```

### 2. Configurar variáveis de ambiente

```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
SITE_URL=https://www.alugueldecadeiras-rf1.com.br
CONTACT_EMAIL=contato@alugueldecadeiras.com.br
SENDGRID_API_KEY=seu_sendgrid_api_key
GOOGLE_SITE_VERIFICATION=seu_google_verification_code
```

### 3. Executar em desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📧 Configuração de E-mail

O formulário de contato suporta várias opções de envio:

### SendGrid (Recomendado)
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Mailgun
```env
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
```

### AWS SES
```env
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

### SMTP (Gmail, Outlook, etc.)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 🔍 SEO e Performance

### Otimizações Implementadas
- ✅ **Metadados** estruturados em todas as páginas
- ✅ **JSON-LD** para LocalBusiness
- ✅ **Open Graph** e Twitter Cards
- ✅ **Sitemap.xml** automático
- ✅ **Robots.txt** configurado
- ✅ **Web Manifest** para PWA
- ✅ **Imagens otimizadas** com Next/Image
- ✅ **Loading otimizado** com lazy loading
- ✅ **Core Web Vitals** otimizados

### Lighthouse Score Esperado
- 🟢 **Performance**: 95+
- 🟢 **Accessibility**: 95+
- 🟢 **Best Practices**: 95+
- 🟢 **SEO**: 100

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm run start

# Linting
npm run lint
npm run lint:fix

# Formatação
npm run prettier
npm run prettier:check

# Verificação de tipos
npm run type-check

# Gerar sitemap
npm run postbuild
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

```bash
# Deploy manual
npx vercel
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Configure variáveis de ambiente

### Docker

```dockerfile
# Dockerfile já configurado para produção
docker build -t aluguel-cadeiras .
docker run -p 3000:3000 aluguel-cadeiras
```

## 📊 Analytics e Tracking

### Google Analytics 4
```env
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Facebook Pixel
```env
FACEBOOK_PIXEL_ID=your_facebook_pixel_id
```

## 🎯 Funcionalidades

### ✅ Páginas Implementadas
- **Homepage** - Hero, sobre, galeria, contato
- **Contato** - Formulário completo e informações
- **Política de Privacidade** - Compliance LGPD

### ✅ Componentes
- **Header** responsivo com menu mobile
- **Hero** com CTAs para WhatsApp e telefone
- **Galeria** carousel com Swiper
- **Formulário** validado com React Hook Form + Zod
- **Footer** com informações da empresa

### ✅ Integrações
- **WhatsApp** direto para solicitação
- **Telefone** click-to-call
- **E-mail** integração com provedores
- **Redes Sociais** links para Instagram e Facebook

## 🛡️ Qualidade de Código

### Pre-commit Hooks
- **ESLint** - Análise estática
- **Prettier** - Formatação automática
- **TypeScript** - Verificação de tipos

### Configurações
- **ESLint** com regras do Next.js
- **Prettier** para formatação consistente
- **Husky** para hooks Git
- **Lint-staged** para arquivos modificados

## 📱 Mobile-First

### Responsividade
- **Mobile** (320px+) - 1 coluna, menu hamburguer
- **Tablet** (768px+) - 2 colunas, navegação completa
- **Desktop** (1024px+) - 3+ colunas, layout completo

### Performance Mobile
- **Images** otimizadas com WebP/AVIF
- **CSS** crítico inline
- **JavaScript** lazy loading
- **Fonts** otimizadas com font-display: swap

## 🔒 Segurança

### Implementações
- **HTTPS** obrigatório
- **Headers** de segurança
- **Sanitização** de inputs
- **Validação** server-side
- **Rate limiting** na API

## 📞 Suporte

Para dúvidas sobre implementação ou customização:

- **Email**: dev@example.com
- **Documentação**: [Link para docs]
- **Issues**: [GitHub Issues]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

🎯 **Pronto para produção!** Este projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno, SEO e performance.
