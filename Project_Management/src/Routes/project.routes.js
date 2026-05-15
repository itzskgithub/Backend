import { Router } from "express";
import {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    addMemberToProject,
    getProjectMembers,
    updateMemberRole,
    deleteMember
} from "../controllers/project.controller.js";
import { validate } from "../middlewares/validator.middlewares.js"
import { verifyJWT, validateProjectPermission } from "../middlewares/auth.middlewares.js";

import {
    createProjectValidator,
    addMembertoProjectValidator
} from "../validators/index.js";
import { AvailableUserRole, UserRoleEnum } from "../utils/constants.js";

const router = Router();
router.use(verifyJWT)

router
    .route("/")
    .get(getProjects)
    .post(createProjectValidator(), validate,createProject)


router
    .route("/:projectId")
    .get(validateProjectPermission(AvailableUserRole), getProjectById)
    .put(
        validateProjectPermission([UserRoleEnum.ADMIN]),
        createProjectValidator(),
        validate,
        updateProject
    )
    .delete(
        validateProjectPermission([UserRoleEnum.ADMIN]),
        deleteProject
    )



router
    .route("/projectId/members")
    .get(getProjectMembers)
    .post(
        validateProjectPermission([UserRoleEnum.ADMIN]),
        addMembertoProjectValidator(),
        validate,
        addMemberToProject
    )


router
    .route("/projectId/members/:userId")
    .put(validateProjectPermission([UserRoleEnum.ADMIN]),
    updateMemberRole)
    .delete(validateProjectPermission([UserRoleEnum.ADMIN]), deleteMember);

export default router