export interface IPostEntity{
    idpost?: number,
    content:string,
    createdAt?:Date,
    updatedAt?:Date
    iduser: number
}