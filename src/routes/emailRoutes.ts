import { Router } from 'express';
import { EmailController } from '../controllers/emailController';
import { EmailService } from '../services/emailService';
import { NodemailerEmailSender } from '../utils/nodemailerEmailSender';

export const emailRouter = Router();

// Crear las instancias necesarias
const emailSender = new NodemailerEmailSender();
const emailService = new EmailService(emailSender);
const emailController = new EmailController(emailService);

// Definir las rutas
emailRouter.post('/send', emailController.sendEmail);