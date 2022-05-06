export interface SendmailAdapterDto {
    subject: string;
    body: string;
  }
  
  export interface MailAdapter {
    sendMail: (data: SendmailAdapterDto) => Promise<void>;
  }
  