import {Apiresponses} from '../utils/api_responses.js'
import { asyncHandler } from '../utils/async_handler.js';

/*

const healthCheck = async (req , res, next) => {
    try {
        const user = await getUserFromDB()
        res
        .status(200)
        .json(new Apiresponses(200 , {message: "server is running"}))
    } catch (error) {
        next(err)
    }
};

*/

const healthCheck = asyncHandler(async(req, res) => {
    res.status(200).json(new Apiresponses(200 , {message: "server is running"}));
});

export {healthCheck};