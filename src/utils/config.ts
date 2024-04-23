import dotenv from 'dotenv';

dotenv.config();

export class Config {
    static get(key: string): string {
        const value = process.env[key];
        if (value === undefined) {
            throw new Error(`Config error - missing env.${key}`);
        }
        return value;
    }
};