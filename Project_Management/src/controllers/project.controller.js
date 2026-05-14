import { User } from "../models/user.models.js"
import { Project } from "../models/project.models.js";
import { ProjectMember } from "../models/projectmember.models.js"

import { Apiresponses } from "../utils/api_responses.js";
import { Apierrors } from "../utils/api_errors.js";
import { asyncHandler } from "../utils/async_handler.js";
import mongoose from "mongoose"
import { UserRoleEnum } from "../utils/constants.js";

const getProjects = asyncHandler(async (req, res) => {
    const projects = await ProjectMember.aggregate(
        [
            {
                $match: {
                    user: new mongoose.Types.ObjectId(req.user._id),
                },
            },
            {
                $lookup: {
                    from: 'projects',
                    localField: "projects",
                    foreignField: "_id",
                    as: "projects",
                    pipeline: [
                        {
                            $lookup: {
                                from: "projectmembers",
                                localField: "_id",
                                foreignField: "projects",
                                as: "projectmembers"
                            }
                        },
                        {
                            $addFields: {
                                members: {
                                    $size: "$projectmembers"
                                }
                            }
                        }
                    ]
                }
            },
            {
                $unwind: "$project"
            },
            {
                $project: {
                    project: {
                        _id: 1,
                        name: 1,
                        description: 1,
                        members: 1,
                        createdAt:1,
                        createdBy: 1
                    },
                    role: 1,
                    _id: 0
                }
            }
        ]
    );

    return res.status(200).json(new Apiresponses(200,projects, "Projects fetched successfully"))
});

const getProjectById = asyncHandler(async (req, res) => {
    //test
});

const createProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body
    const project = await Project.create({
        name,
        description,
        createdBy: new mongoose.Types.ObjectId(req.user._id),
    })

    await ProjectMember.create({
        user: new mongoose.Types.ObjectId(req.user._id),
        project: new mongoose.Types.ObjectId(project._id),
        role: UserRoleEnum.ADMIN
    })

    return res
        .status(201)
        .json(
            new Apiresponses(
                201,
                project,
                "Project created successfully"
            )
        )
});

const updateProject = asyncHandler(async (req, res) => {
    const { name, description } = req.body
    const { projectId } = req.params

    const project = await Project.findByIdAndUpdate(
        projectId,
        {
            name,
            description
        },
        { new: true }
    )

    if (!project) {
        new Apierrors(
            404,
            "Project not found"
        )
    }
    return res
        .status(200)
        .json(
            new Apiresponses(
                200,
                project,
                "Project updated successfully"
            )
        )
});

const deleteProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params

    const project = await Project.findByIdAndDelete(projectId)

    if (!project) {
        throw new Apierrors(
            404,
            "Project not found"
        )
    }
    return res
        .status(200)
        .json(
            new Apiresponses(
                200,
                project,
                "Project deleted successfully"
            )
        )
});

const addMemberToProject = asyncHandler(async (req, res) => {
    //test
});

const getProjectMembers = asyncHandler(async (req, res) => {
    //test
});

const updateMemberRole = asyncHandler(async (req, res) => {
    //test
});

const deleteMember = asyncHandler(async (req, res) => {
    //test
});

export {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    addMemberToProject,
    getProjectMembers,
    updateMemberRole,
    deleteMember
};