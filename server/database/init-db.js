import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeDatabase() {
    console.log('🔄 Initializing database schema...');

    let connection;
    try {
        // When running from host machine, connect to Docker MySQL via exposed port
        const isDocker = process.env.DB_USE_CONTAINER === 'true';
        const dbConfig = {
            host: isDocker ? process.env.DB_HOST || "localhost" : "127.0.0.1",
            port: isDocker ? (process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306) : 3307,
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "root",
            database: process.env.DB_NAME || "devpulse",
            multipleStatements: true,
        };

        console.log(`📡 Connecting to MySQL at ${dbConfig.host}:${dbConfig.port}...`);
        connection = await mysql.createConnection(dbConfig);

        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');

        console.log('📝 Executing schema.sql...');
        await connection.query(schema);

        console.log('✅ Database schema initialized successfully!');
        console.log('📋 All tables created/updated with proper columns');

    } catch (error) {
        console.error('❌ Error initializing database:', error.message);
        console.error('   Host:', process.env.DB_HOST || 'not set');
        console.error('   Port:', process.env.DB_PORT || 'not set');
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

initializeDatabase();
