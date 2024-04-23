import nodemailer from 'nodemailer';
import { IEmailSender } from '../interfaces/iEmailSender';
import { Config } from './config';

export class NodemailerEmailSender implements IEmailSender {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Config.get('GMAIL_USER'),
            pass: Config.get('GMAIL_PASS')
        }
    });

    async sendMail(to: string | string[], subject: string, body: string): Promise<void> {
        console.log(Config.get('GMAIL_USER'));
        console.log(Config.get('GMAIL_PASS'));

        const mailOptions = {
            from: Config.get('GMAIL_PASS'),
            to: to,
            subject: subject,
            html: body
        };
        await this.transporter.sendMail(mailOptions);
    }
};