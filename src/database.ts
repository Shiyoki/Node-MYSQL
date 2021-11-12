import {createPool} from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'wikipedia',
        database: 'node_sql',
        connectionLimit: 10
    })
    return connection;
}