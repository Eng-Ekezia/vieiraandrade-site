// src/app/contato/page.tsx
'use client' 

import { useState, useRef, type FormEvent } from 'react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from 'lucide-react'; 
import { submitContactAction } from './actions';
import { toast } from 'sonner'; // 1. Importar o 'toast' do sonner

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  // 2. O estado 'formStatus' e o tipo 'FormSubmitResponse' já não são necessários aqui
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    // setFormStatus(null); // <- Removido

    const formData = new FormData(event.currentTarget);
    const response = await submitContactAction(formData);

    setLoading(false);

    // 3. Lógica de feedback substituída por toasts
    if (response.status === 'success') {
      toast.success(response.message); // Toast de sucesso
      formRef.current?.reset();
    } else {
      toast.error(response.message); // Toast de erro
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg text-muted-foreground">
          Estamos à disposição para esclarecer suas dúvidas. Envie uma mensagem ou entre em contato pelos nossos canais.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna de Informações (permanece igual) */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Endereço</h3>
            <p className="text-muted-foreground mt-2">
              ua Joaquim Barbosa, 220, Sala A<br/>
              Jardim Regina, Araguari/MG<br/>
              CEP: 38440-153
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Telefone & WhatsApp</h3>
            <a href="tel:+5534988617989" className="text-muted-foreground hover:text-primary mt-2 block">(34) 9 8861-7989</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:contato@vieiraandrade.com.br" className="text-muted-foreground hover:text-primary mt-2 block">contato@vieiradeandrade.com.br</a>
          </div>
           <div>
            <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
            <p className="text-muted-foreground mt-2">Segunda a Sexta-feira, das 9h às 18h.</p>
          </div>
        </div>

        {/* Coluna do Formulário (Atualizada com lógica) */}
        <div className="bg-card p-8 rounded-lg shadow-md border">
          <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
          
          <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
            
            {/* Campo Nome */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" name="name" placeholder="Seu nome completo" required disabled={loading} />
            </div>
            
            {/* Campo Email */}
             <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="seuemail@dominio.com" required disabled={loading} />
            </div>

             {/* Campo Mensagem */}
             <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" rows={4} placeholder="Digite sua dúvida ou solicitação..." required disabled={loading} />
            </div>

            {/* 4. O bloco de feedback de Sucesso/Erro (<div> condicional) foi removido daqui */}

            {/* Botão Enviar com estado de Loading */}
            <div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}