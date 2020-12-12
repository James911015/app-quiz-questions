import { from } from "rxjs";
import { Document } from 'mongoose'

export interface IProduct extends Document{
    readonly name:string,
    readonly description:string,
    readonly imageURL:String,
    readonly price:number,
    readonly createDate:Date,
}