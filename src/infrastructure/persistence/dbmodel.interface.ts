import { IDB } from "./db.interface";

export interface IDBModel extends IDB {
    createModel(name: string, properties: any): any,
    read(type: any, dataId: number, includes?: object): any,
    list(type: any, includes?: object): any,
}