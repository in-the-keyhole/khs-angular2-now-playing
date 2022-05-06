import { Movie } from './movie';

export class Movies {
    constructor(
        public page: number,
        public results: Movie[],
        public total_pages: number,
        public total_results: number
    ) {}
}
