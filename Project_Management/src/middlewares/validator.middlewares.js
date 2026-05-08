import {validationResult } from "express-validator";
import { Apierrors } from "../utils/api_errors.js";

export const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => 
        extractedErrors.push({
        [err.path] : err.msg,
        })
    );

    throw new Apierrors(402, "Recieved data is not valid", extractedErrors);
};