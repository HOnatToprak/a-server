import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("user", function(table) {
            table.increments("id");
            table.string("username", 20);
            table.string("password", 20);
        });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("user");
}

