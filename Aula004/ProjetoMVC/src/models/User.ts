export class User{
    private id?: number;
    private name: string;
    private email: string;
    private password: string

    constructor(id: number | undefined, name: string, email: string, password: string){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
    // mostrar a saida

    // Getters e Setters 
    getId(): number | undefined {
        return this.id;

    }
    setId(id: number):void {
        this.id = id 
    }
      getNome(): string {
        return this.name;

    }
    setName(name: string):void {
        this.name = name 
    }
      getEmail(): string {
        return this.email;

    }
    setEmail(email:string):void {
        this.email = email
    }
    getPassword(): string {
        return this.password;

    }
    setPassword(password: string):void {
        this.password = password 
    }
}