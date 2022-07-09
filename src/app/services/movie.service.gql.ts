import { Movie } from '../model/movie';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

//queries
  private nowPlayingQuery: QueryRef<{ nowPlaying: Movie[] }>;
  private movieQuery: QueryRef<{movie: Movie}, { id: number}>;

//constructor
  constructor(private apollo: Apollo){

    this.nowPlayingQuery = this.apollo.watchQuery( {
      query: gql`query nowPlaying { nowPlaying {
        id 
        title
        overview
        posterPath
        posterPathW342
        }
      }`
    }
    );

    this.movieQuery = this.apollo.watchQuery({
      query: gql`query movie($id: ID!) {
        movie(id: $id) {
          id
          title
          overview
          posterPath
          backdropPathW1280
          }        
      }`
    });

    
   }   

  async nowPlaying(): Promise<Movie[]>  {
    const result = await this.nowPlayingQuery.refetch();
    return result.data.nowPlaying;
  }
  
  async movie(id : number) {
    const result = await this.movieQuery.refetch({ id });
    return result.data.movie;
  }
  
}


