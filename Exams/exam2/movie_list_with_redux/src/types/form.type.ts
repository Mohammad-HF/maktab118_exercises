export interface IForm{
    movieName : string;
    score : number;
    genre : string;
}

export interface IMovie extends IForm {
    id : string;
}