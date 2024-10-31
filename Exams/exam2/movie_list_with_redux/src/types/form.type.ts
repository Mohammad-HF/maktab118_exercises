export interface IForm{
    movieName : string;
    score : string;
    genre : string;
}

export interface IMovie extends IForm {
    id : string;
}