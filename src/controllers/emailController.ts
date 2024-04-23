import { Request, Response } from 'express';
import { IEmailService } from '../interfaces/iEmailService';

export class EmailController {
    constructor(private emailService: IEmailService) { }

    sendEmail = async (req: Request, res: Response) => {
        try {
            const { to, subject, body } = req.body;
            await this.emailService.sendEmail(to, subject, body);
            res.status(200).send("Email sent successfully");
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
};