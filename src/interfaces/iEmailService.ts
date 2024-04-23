export interface IEmailService {
    sendEmail(to: string | string[], subject: string, body: string): Promise<void>;
};