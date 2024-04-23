import nodemailer from 'nodemailer';
import { IEmailSender } from '../interfaces/iEmailSender';
import { Config } from './config';

export class NodemailerEmailSender implements IEmailSender {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'juliotoluca.1994@gmail.com',
            pass: 'xqnr eqrf bcaq dijm'
        }
    });

    async sendMail(to: string | string[], subject: string, body: string): Promise<void> {
        const mailOptions = {
            from: Config.get('GMAIL_PASS'),
            to: to,
            subject: subject,
            html: body
        };
        await this.transporter.sendMail(mailOptions);
    }
};