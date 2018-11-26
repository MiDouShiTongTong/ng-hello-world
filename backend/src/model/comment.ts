export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public username: string,
    public content: string,
    public rating: number,
    public created_at: string
  ) {

  }
}
