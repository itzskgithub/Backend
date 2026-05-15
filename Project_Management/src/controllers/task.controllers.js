import { User } from "../models/user.models.js"
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js"
import { subTask } from "../models/subtask.models.js"

import { Apiresponses } from "../utils/api_responses.js";
import { Apierrors } from "../utils/api_errors.js";
import { asyncHandler } from "../utils/async_handler.js";
import mongoose from "mongoose"
import { AvailableUserRole, UserRoleEnum } from "../utils/constants.js";


const getTasks = asyncHandler(async(req, res) => {
    //test
})

const createTask = asyncHandler(async(req, res) => {
    //test
})

const getTaskById = asyncHandler(async(req, res) => {
    //test
})

const updateTask = asyncHandler(async(req, res) => {
    //test
})

const deleteTask = asyncHandler(async(req, res) => {
    //test
})

const createSubTask = asyncHandler(async(req, res) => {
    //test
})

const updateSubTask = asyncHandler(async(req, res) => {
    //test
})

const deleteSubTask = asyncHandler(async(req, res) => {
    //test
})

export {
    createSubTask,
    createTask,
    deleteTask,
    deleteSubTask,
    getTaskById,
    getTasks,
    updateSubTask,
    updateTask
}