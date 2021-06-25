import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { crearLibroDto } from './dto/crearLibro';
import { LibrosService } from './libros.service';
import { LibroI } from './interface/libros.interface';

@Controller('libros')
export class LibrosController {
    constructor(private readonly libroService: LibrosService) {
        
    }

    @Get()
    todosLibros(): Promise<LibroI[]> {
        return this.libroService.buscarTodo();
    }

    @Get(':id')
    buscarUno(@Param('id') idlibro: string): Promise<LibroI> {
        return this.libroService.buscarLibro(idlibro);
    }

    @Post() 
    crearLibro( @Body() dtolibro: crearLibroDto): Promise<LibroI> {
        return this.libroService.crearLibro(dtolibro);
    }

    @Put(':id')
    modificarLibro(@Param('id,libro') idLibro: string, @Body() libro: crearLibroDto): Promise<LibroI> {
        return this.libroService.modificarLibro(idLibro, libro);
    }

    @Delete(':id')
    borrarLibro(@Param('id') idLibro: string): Promise<LibroI> {
        return this.libroService.borrarLibro(idLibro);
    }

}
