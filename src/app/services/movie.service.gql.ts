import { Movies } from '../model/movies';
import { Movie } from '../model/movie';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

//queries
  private moviesQuery!: QueryRef<{ movies: Movie[] }, {}>;
  private movieQuery!: QueryRef<{movie: Movie}, { id: number}>;

//constructor
  constructor(private apollo: Apollo){

    this.moviesQuery = this.apollo.watchQuery( {
      query: gql`query { nowPlaying {
        id 
        title
        overview
        posterPath
        }
      }`
    }
    );

    this.movieQuery = this.apollo.watchQuery({
      query: gql`query movie($id: number!) {
        movie(name: $id) {
          id
          title
          overview
          posterPath
        }
      }`
    });

   }
   

  async nowPlaying(): Promise<Movie[]>  {
    const result = await this.moviesQuery.refetch();     
    return result.data.movies;
  }
  
  async movie(id : number) {
    const result = await this.movieQuery.refetch({ id });
    return result.data.movie;
  }
  
}
