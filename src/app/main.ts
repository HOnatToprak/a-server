import {createUser, getUsers} from "../models_actions/user.js";

await createUser({username: "onat", password: "123"});
const users = await getUsers();
console.log(users);
process.exit();

