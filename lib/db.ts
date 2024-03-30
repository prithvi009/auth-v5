import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

declare global {
    var sequelize: Sequelize | undefined;
}

const db_url = process.env.DATABASE_URL || "";

export const db = globalThis.sequelize || new Sequelize(db_url);

if(process.env.NODE_ENV !== "production") {
    globalThis.sequelize = db;
}
