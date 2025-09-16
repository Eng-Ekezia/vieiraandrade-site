// src/app/contato/contact-form.tsx
'use client' 

import { useState, useRef, type FormEvent } from 'react'; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from 'lucide-react'; 
import { submitContactAction } from './actions';
import { toast } from 'sonner';

/**
 * Este é agora um Componente de Cliente dedicado APENAS ao formulário.
 * Toda a lógica de estado (useState, useRef) vive aqui.
 */
export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await submitContactAction(formData);

    setLoading(false);

    if (response.status === 'success') {
      toast.success(response.message); 
      formRef.current?.reset();
    } else {
      toast.error(response.message);
    }
  }

  return (
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
  );
}