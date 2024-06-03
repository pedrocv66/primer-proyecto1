export interface Usuario {
    uid: string | any; //atributos del tipo "any" reciben vacios o individual
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}
