import express from 'express';
import { emailRouter } from './routes/emailRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Usar las rutas de email
app.use('/emails', emailRouter);
app.get('/', (req, res) => {
    res.send('Hello World!')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;