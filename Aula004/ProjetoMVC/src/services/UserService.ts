import { error } from "node:console";
import { UserRepository } from "../repositories/UserRepository";
import { AppError } from "../errors/error-handler";
export class UserService{
    private  repo = new UserRepository();


    async getAllUsers(){
        try {
            const users = await this.repo.FindAll();
            return users
            
        }catch {
               throw new AppError("ERRO ao buscar dados:", 500)
        }
    }
    async registerUser(name: string, email: string, password: string){
        try{
            const users = await this.repo.Create(name,email,password);
            return users
        }catch(error){
            throw new Error("ERRO ao registrar usuario:" + error);
        }
    }
    async updateUser(id: number, name: string, email: string, password: string){
            if(!id){
                throw new Error("Id não encontrado!")
            }
            try{
                const users = await this.repo.Update(id,name,email,password)
            }catch(error){
                    throw new Error("Erro ao atualizar usuario:" + error)
            }
    }
    async deleteUser(id: number){
        try {
            if(!id){
                return console.log("Id não encontrado!")
            }
            const users = await this.repo.Delete(id)
        }catch(error){
            throw new Error("ERRO ao deletar usuario" + error)
        }
    }

}