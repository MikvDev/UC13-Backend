import { Request, Response } from "express";
import { QueryResult } from "mysql2";
import { get, request } from "node:http";

export class UserController{

    async getAll(req: Request, res:Response): Promise<Response>{
        return res.status(200).json({users : ""});

    }
    
}