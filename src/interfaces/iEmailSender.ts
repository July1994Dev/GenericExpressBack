export interface IEmailSender {
    sendMail(to: string | string[], subject: string, body: string): Promise<void>;
};