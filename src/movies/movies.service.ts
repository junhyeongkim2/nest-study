/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll():Movie[]{
        return this.movies;
    }
    getOne(id:number):Movie{
        console.log(id);
        //+는 스트링을 +로 만들어준다
        const movie =  this.movies.find(movie=>movie.id===id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        console.log(movie);
        return movie;

    } 
    deleteOne(id:number){
        this.getOne(id)
        this.movies = this.movies.filter(movie=>movie.id!==id);

    }
    create(movieData:CreateMovieDto){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
        console.log(this.movies);
    }

    update(id:number,updateData:UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie,...updateData});
        console.log(this.movies);


    }


}
