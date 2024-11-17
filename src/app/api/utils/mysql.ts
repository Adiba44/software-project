import mysql from "mysql2/promise";

/*
- How to create connection using MySQL?
export async function createConnection(dbName: string) {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: dbName,
    });
}
*/

const poolOpts = {
    host: "localhost",
    user: "root",
    password: "",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
}

export const pool = {
    accounts: mysql.createPool({
        database: "bdu_accounts",
        ...poolOpts,
    }),
}


export async function execute(query: string, params?: any[], poolConnection?: any) {
    let connection;
    try {
        connection = await (poolConnection ? poolConnection : pool.accounts).getConnection();
        let result: any, tableSchema: any;
        if (params) [result, tableSchema] = await connection.execute(query, params)
        else[result, tableSchema] = await connection.execute(query)
        return result;
    } catch (error) {
        if (connection) connection.release();
        console.log("Query:", query);
        console.error("Error:", error);
    } finally {
        if (connection) connection.release();
    }
}