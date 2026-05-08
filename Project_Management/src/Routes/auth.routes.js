import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import {validator} from "../middlewares/validator.middlewares.js"
import { userRegisterValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validator, registerUser);



export default router;