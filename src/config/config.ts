import dotenv from 'dotenv';

dotenv.config();

interface Config{
    port:number;
    nodeEnv: string;
    dbConstring: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbConstring: process.env.DATABASE_URL ||'undefined'
};

export default config;