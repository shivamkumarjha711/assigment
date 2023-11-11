import { Router } from "express";
import { addTask, allTasks, deleteTask, editTask } from "../controller/taskController.js";

const taskRoutes = Router();

taskRoutes.get("/all-tasks", allTasks)

taskRoutes.post("/add-task", addTask);

taskRoutes.delete("/delete-task/:id", deleteTask);

taskRoutes.put("/edit-task/:id", editTask);

export default taskRoutes;