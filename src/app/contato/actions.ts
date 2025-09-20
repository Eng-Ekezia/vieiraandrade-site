// src/app/contato/actions.ts
"use server";

import { Resend } from "resend";

// Define um tipo simples para a nossa resposta de estado
export type FormSubmitResponse = {
  status: "success" | "error";
  message: string;
};

// Inicializa o Resend com a API Key do arquivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Esta é a Server Action que processa e envia o formulário de contato.
 */
export async function submitContactAction(
  formData: FormData
): Promise<FormSubmitResponse> {
  // Simples validação no servidor
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Todos os campos são obrigatórios.",
    };
  }

  try {
    // Lógica de envio real com o Resend
    const { error } = await resend.emails.send({
      // ATENÇÃO: O e-mail "from" DEVE ser de um domínio verificado no Resend.
      // Ex: 'Contato <contato@seu-dominio-verificado.com.br>'
      from: "Contato do Site <contato@vieiraandrade.com.br>", // <- TROQUE AQUI pelo seu e-mail de envio

      // E-mail que receberá a mensagem do formulário
      to: ["ezequiel@engenhariacentral.com.br"], // <- TROQUE AQUI pelo e-mail que vai receber a mensagem

      subject: `Nova mensagem de contato de ${name}`,
      replyTo: email, // O e-mail de quem preencheu o formulário vai para o campo "responder a"
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong></p>
             <p>${message}</p>`,
    });

    // Se o Resend retornar um erro
    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return {
        status: "error",
        message:
          "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
      };
    }

    // Retorna sucesso
    return {
      status: "success",
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    };
  } catch (error) {
    console.error("Erro ao processar formulário:", error);
    return {
      status: "error",
      message:
        "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
    };
  }
}
