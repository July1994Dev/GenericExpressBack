import { IEmailService } from '../interfaces/iEmailService';
import { IEmailSender } from '../interfaces/iEmailSender';

export class EmailService implements IEmailService {
    constructor(private emailSender: IEmailSender) { }

    async sendEmail(to: string | string[], subject: string, body: string): Promise<void> {
        await this.emailSender.sendMail(to, subject, body);
    }
};