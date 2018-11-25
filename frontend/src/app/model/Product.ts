export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public description: string,
    public imageUrl: string,
    public categoryList: string[]
  ) {

  }
}
