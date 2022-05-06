import nodemailer from "nodemailer";
import { MailAdapter, SendmailAdapterDto } from "../models/mailer.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c88299f91710d6",
    pass: "f7499c674ee3ea",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendmailAdapterDto) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Natanael Lima <taelima1997@gmail.com>",
      subject,
      html: body,
    });
  }
}
