import { Document } from "mongoose";

export class crearLibroDto extends Document{
    readonly id: string;
    readonly titulo: string;
    readonly autor: string;
    readonly descripcion: string;
}