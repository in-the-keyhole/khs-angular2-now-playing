export class Movie {
    constructor(
        public adult : boolean,
        public backdrop_path : string,
        public budget : number,
        public genres: {
          id: number,
          name: string
        }[],
        public genre_ids : number,
        public homepage: string,
        public overview : string,
        public id : number,
        public imdb_id : string,
        public original_language : string,
        public original_title : string,
        public ovierview : string,
        public popularity : number,
        public posterPath : string,
        public production_companies: {
          id: number,
          name: string
        }[],
        public production_countries: {
          iso_3166_1: string,
          name: string
        }[],
        public release_date : string,
        public revenue : number,
        public runtime : number,
        public spoken_languages: {
          iso_3166_1: string,
          name: string
        }[],
        public status : string,
        public title : string,
        public tagline : string,
        public video : boolean,
        public vote_average : number,
        public vote_count : number) { }
}
