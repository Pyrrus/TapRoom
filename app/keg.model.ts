  export interface IKeg {
      name: string;
      brand: string;
      price: number;
      ABV: number;
      pints: number;
    }

    export class Keg implements IKeg {
      pints: number = 124;
      constructor(public name: string, public brand: string, public price: number,public ABV: number){}
    }
