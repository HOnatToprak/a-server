import express from "express"
import {login} from "../models_actions/user.js";
import {DatabaseError} from "../utils/errors/DatabaseError.js";
import {StructError, Failure} from "superstruct";

const app = express();
app.use(express.json())

app.route("/login")
    .post((req, res, next) => {
        login(req.body).then(login_response => {
            if(!login_response){
                res.sendStatus(401)
            } else {
                res.json(login_response);
            }
        })
        .catch(next);
    });

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(error instanceof DatabaseError){
        res.sendStatus(500);
    } else if(error instanceof StructError){
        console.log(error.failures());
        res.status(400).json(prepareFailures(error.failures()));
    }
});

function prepareFailures(failures: Failure[]) {
    return failures.map(failure => {return {key: failure.key, message: failure.message}});
}

app.listen(8080);
