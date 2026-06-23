import { QueryResult } from "mysql2";
import { db } from "../config/conexao"; // banco 
import { User } from "../models/User"; // model

export class UserRepository{
    async Create(nome: string, email: string, password: string):Promise<QueryResult> { // estpu prometendo uma query
        const user = new User(undefined,nome,email,password);
        const [result]: any = await db.query(`
            insert into users (name,email,password) values(?,?,?),
            `, [user.getNome(), user.getEmail(), user.getPassword()]) 
            return result
        }
    async FindAll(): Promise<QueryResult>{
        const [rows]: any = await db.query(`select * from users`); // isso vai para o banco!
        return rows;
    }
    async FindById(id: number): Promise<QueryResult>{
        const [result]: any = await db.query(`select * from users where id = ?`, [id])
        return result[0];
    }
    async Update(id: number,name: string, email: string, password: string): Promise<QueryResult>{
        const user = new User(id,name,email,password);
        const [result] = await db.query(`
            update users set name =  ?, email = ?, password = ?`, [user.getNome(), user.getEmail(), user.getPassword()])
            return result
    }
    async Delete(id: number){
        const [result] : any = db.query(`Delete from users whrere id = ? `, [id])
    }

}