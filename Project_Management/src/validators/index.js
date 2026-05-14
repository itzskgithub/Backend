import {body} from "express-validator"
import { AvailableUserRole } from "../utils/constants.js"

const userRegisterValidator = () => {
    return [
        body("email")
            //It trims all the data removes extra space from the beginning and end of the data
            .trim()
            .notEmpty()
            //If there is a error in the just above method then withmessage is called here the just above message is notEmpty() so if it fails then withMessage() will be called by the express-validator//
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("username must be in the lowercase")
            .isLength({min : 3})
            .withMessage("Username must have atleast three characters"),
        
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        body("fullName")
            .optional()
            .trim(),
    ]
}

const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Email is inValid"),
        body("password").notEmpty().withMessage("Password is required"),
    ];
}

const userChangeCurrentPasswordValidator = () => {
    return [
        body("oldPassword").notEmpty().withMessage("old password is required"),
        body("newPassword").notEmpty().withMessage("new Password is required"),
    ];
};


const userForgotPasswordValidator = () => {
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is Invalid")
    ];
};

const userResetPasswordValidator = () => {
    return [
        body("newPassword").notEmpty().withMessage("Password is required")
    ]
}

const createProjectValidator = () => {
    return [
        body("name")
            .notEmpty()
            .withMessage("Name is required"),
        body("description")
            .optional()
    ]
}

const addMembertoProjectValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        
        body("role")
            .notEmpty()
            .withMessage("Role is required")
            .isIn(AvailableUserRole)
            .withMessage("Role is invalid")
    ]
}

export {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userResetPasswordValidator,
    createProjectValidator,
    addMembertoProjectValidator
}