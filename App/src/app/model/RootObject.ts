export interface RootObject {
    page: number;
    total_results: number;
    total_pages: number;
    results: IResult[];
  }

 export interface IResult {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    name: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    original_name: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
  }