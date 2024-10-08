interface ICoffee{
    name : keyof IValues;
    img: string;
    price : number;
    quantity : number;
}

interface IValues{
    Cappuccino  : number;
    Latte  : number;
    Espresso  : number;
    Mocha  : number;
    Americano  : number;
}

type OnClickHandler = (e : React.MouseEvent<SVGElement> , Name :  keyof IValues) => void