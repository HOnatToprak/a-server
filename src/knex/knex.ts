import Knex from "knex";
import {DatabaseError} from "../utils/errors/DatabaseError.js";
import knex_config from "./knexfile.js"

const knex: Knex = Knex(knex_config.development);
export default async function knexCall(callback: (knex: Knex) => any): Promise<any> {
    try{
        return await callback(knex);
    } catch(e) {
        throw new DatabaseError(e);
    }
}
