import knexCall from "../knex/knex.js";
import {LoginRequest, LoginResponse} from "a-common";
import {assert} from "superstruct";

/**
 * @returns Token if account credentials are correct, otherwise null. 
 */
export async function login(loginRequest: LoginRequest): Promise<LoginResponse | null> {
    assert(loginRequest, LoginRequest);
    const users = await knexCall(knex => knex("user").where(loginRequest));
    if(users.length === 0)
        return null;
    return {Token: "Token " + loginRequest.username};
}
