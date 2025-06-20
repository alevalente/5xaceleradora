
# Configuração do EmailJS

Para que o formulário funcione corretamente, você precisa configurar o EmailJS:

## 1. Criar conta no EmailJS
- Acesse: https://www.emailjs.com/
- Crie uma conta gratuita (até 200 emails/mês)

## 2. Configurar o serviço de email
- Vá em "Email Services" 
- Adicione seu provedor de email (Gmail, Outlook, etc.)
- Anote o **Service ID**

## 3. Criar template de email
- Vá em "Email Templates"
- Crie um novo template com o seguinte conteúdo:

```html
Assunto: Nova Solicitação de Demonstração - IAgo Conversas

Olá {{to_name}},

Recebemos uma nova solicitação de demonstração para o IAgo Conversas:

**Dados do Lead:**
- Nome: {{from_name}}
- Email: {{from_email}}
- WhatsApp: {{whatsapp}}
- Empresa: {{company}}
- Cargo: {{role}}
- Tamanho da equipe: {{team_size}}

**Principal Desafio:**
{{challenge}}

**Produto:** {{product}}
**Data/Hora:** {{timestamp}}

Atenciosamente,
Sistema Automatizado
```

- Anote o **Template ID**

## 4. Configurar chaves
- Vá em "Integration" → "Browser"
- Anote a **Public Key**

## 5. Atualizar o código
Substitua os valores no arquivo `src/hooks/useEmailJS.ts`:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'seu_service_id_aqui',
  TEMPLATE_ID: 'seu_template_id_aqui', 
  PUBLIC_KEY: 'sua_public_key_aqui',
};
```

## 6. Testar
- Preencha o formulário no site
- Verifique se o email chegou na sua caixa de entrada
- Monitore o dashboard do EmailJS para ver os envios

## Dicas importantes:
- Mantenha as chaves seguras (não commite em repositórios públicos)
- Configure filtros de spam se necessário
- Monitore o limite de envios mensais
- Para produção, considere upgrade para plano pago
