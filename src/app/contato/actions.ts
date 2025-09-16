// src/app/contato/actions.ts
'use server'

// Define um tipo simples para a nossa resposta de estado
export type FormSubmitResponse = {
  status: 'success' | 'error';
  message: string;
}

/**
 * Simula um atraso de rede (como o envio de um e-mail).
 * Em um projeto real, aqui você usaria um serviço como Resend ou SendGrid.
 */
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Esta é a Server Action que processa o formulário de contato.
 */
export async function submitContactAction(
  formData: FormData
): Promise<FormSubmitResponse> {
  // Simples validação no servidor
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Todos os campos são obrigatórios.',
    }
  }

  try {
    // Simula o tempo de envio do e-mail (2 segundos)
    await delay(2000);

    // Lógica de envio real (ex: Resend, Nodemailer) iria aqui.
    // console.log('Dados do Formulário Recebidos:');
    // console.log({ name, email, message });

    // Retorna sucesso
    return {
      status: 'success',
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    }
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return {
      status: 'error',
      message: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    }
  }
}