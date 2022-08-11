/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Movie } from './entities/mvoie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll():Movie[]{
        return this.movies;
    }
    getOne(id:string):Movie{
        //+는 스트링을 +로 만들어준다
        return this.movies.find(movie=>movie.id===+id);
    }
    deleteOne(id:string):boolean{
        this.movies.filter(movie => movie.id !== +id);
        return true;
    }
    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }


}
