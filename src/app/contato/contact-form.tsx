// src/app/contato/contact-form.tsx
"use client";

import { useState, useRef, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { submitContactAction } from "./actions";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await submitContactAction(formData);

    setLoading(false);

    if (response.status === "success") {
      toast.success(response.message);
      formRef.current?.reset();
    } else {
      toast.error(response.message);
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleFormSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {/* Nome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Label htmlFor="name" className="text-foreground font-medium">
          Nome Completo *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Seu nome completo"
          className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          disabled={loading}
        />
      </motion.div>

      {/* E-mail */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Label htmlFor="email" className="text-foreground font-medium">
          E-mail *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          disabled={loading}
        />
      </motion.div>

      {/* Telefone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Label htmlFor="phone" className="text-foreground font-medium">
          Telefone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          disabled={loading}
        />
      </motion.div>

      {/* Assunto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Label htmlFor="subject" className="text-foreground font-medium">
          Assunto *
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Assunto da sua mensagem"
          className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          disabled={loading}
        />
      </motion.div>

      {/* Mensagem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Label htmlFor="message" className="text-foreground font-medium">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Descreva sua questão ou necessidade..."
          className="mt-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
          disabled={loading}
        />
      </motion.div>

      {/* Botão de Envio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 text-base font-medium transition-all duration-300 hover:scale-[1.02]"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Enviar Mensagem
            </>
          )}
        </Button>
      </motion.div>

      {/* Nota de Privacidade */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="text-sm text-muted-foreground"
      >
        * Campos obrigatórios. Seus dados são protegidos e não serão
        compartilhados.
      </motion.p>
    </motion.form>
  );
}
