import knex from "knex";
import knex_config from "./knexfile.js"

export default knex(knex_config.development);
