// src/app/contato/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContatoPage() {
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
              Rua dos Inconfidentes, 123, Sala 405<br/>
              Bairro Funcionários, Belo Horizonte/MG<br/>
              CEP: 30140-120
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Telefone & WhatsApp</h3>
            <a href="tel:+5531999998888" className="text-muted-foreground hover:text-primary mt-2 block">(31) 99999-8888</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:contato@vieiradeandrade.com.br" className="text-muted-foreground hover:text-primary mt-2 block">contato@vieiradeandrade.com.br</a>
          </div>
           <div>
            <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
            <p className="text-muted-foreground mt-2">Segunda a Sexta-feira, das 9h às 18h.</p>
          </div>
        </div>

        {/* Coluna do Formulário (Atualizada com Shadcn) */}
        <div className="bg-card p-8 rounded-lg shadow-md border">
          <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
          <form className="space-y-4">
            
            {/* Campo Nome */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" placeholder="Seu nome completo" />
            </div>
            
            {/* Campo Email */}
             <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="seuemail@dominio.com" />
            </div>

             {/* Campo Mensagem */}
             <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" rows={4} placeholder="Digite sua dúvida ou solicitação..." />
            </div>

            {/* Botão Enviar */}
            <div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}