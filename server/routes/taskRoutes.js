import { Router } from "express";
import { addTask, deleteTask } from "../controller/taskController.js";

const taskRoutes = Router();

taskRoutes.post("/add-task", addTask);

taskRoutes.delete("/delete-task", deleteTask);

export default taskRoutes;