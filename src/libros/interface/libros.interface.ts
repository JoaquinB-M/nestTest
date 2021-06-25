import { Document } from "mongoose";
export interface LibroI extends Document{
    id: string;
    titulo: string;
    autor: string;
    descripcion?: string;
}