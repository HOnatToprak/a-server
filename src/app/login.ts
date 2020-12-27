import express from "express";
import {login} from "../models_actions/user.js";

const router = express.Router();

router.post("/", (req, res, next) => {
    login(req.body).then(login_response => {
        if (!login_response) {
            res.sendStatus(401)
        } else {
            res.json(login_response);
        }
    }).catch(next);
});
