import knex from "../knex/knex.js"

export interface User {
    username: string;
    password: string;
}

export function createUser(user: User) {
    return knex("user").insert(user);
}

export function getUsers(): Promise<User[]> {
    return knex("user");
}
