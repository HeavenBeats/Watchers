import { ICrew } from './credit'

export interface ISeason {
    _id: string;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
  }
  
  export interface Episode {
    air_date: string;
    crew: ICrew[];
    episode_number: number;
    guest_stars: Gueststar[];
    name: string;
    overview: string;
    id: number;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Gueststar {
    character: string;
    credit_id: string;
    gender?: number;
    id: number;
    name: string;
    order: number;
    profile_path?: string | string;
  }
  