import { PoolConnection } from "mysql2"
import mysql from "mysql2/promise" // Importante!!
// Recebe um objeto
export const db = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:"root",
    database: 'cat_db'
})

