import { IDB } from "./db.interface";

export class ArrayDB implements IDB {
    private static _instance: ArrayDB;
    private _data: any;

    private constructor() {
        this._data = {}
    }
    public static getInstance(): ArrayDB{
        if (!ArrayDB._instance) {
            ArrayDB._instance = new ArrayDB();
        }

        return ArrayDB._instance;
    }

    create(type: string, data: any) {
        let objeto: any;

        if(this._data[type] === undefined){
            this._data[type] = [];
        }

        data.iduser = this._data[type] ? this._data[type].lenght:0;
        objeto = data;
        this._data[type].push(objeto);
    }

    update(type: string, data: any): boolean {
        let objeto: any;
        
        objeto = data;

        if(objeto.iduser === undefined)
            return false;
        
        this._data[type][objeto.iduser] = objeto;

        return objeto;
    }

    list(type: string): any[] {
        let objetos: any[] = [];

        if(this._data[type] === undefined){
            return [];
        }

        for(let data of this._data[type])
        objetos.push(data);

        return objetos;
    }

    delete(type: string, dataId: number): boolean {

        if(this._data[type] === undefined){
            return false;
        }

        const iduser = this._data.findIndex((objeto: any) => {
                return objeto.iduser === dataId;
        });
        

        if(iduser === undefined)
            return false;

        this._data[type].splice(iduser, 1);

        return true;
    }

    read(type: string, dataId: number): any {

        if(this._data[type] === undefined){
            return undefined;
        }

        const data = this._data[type].find((obj: any) => {
                return obj.iduser === dataId;
        });

        if(!data)
            return false;

        return data;
    }
}


