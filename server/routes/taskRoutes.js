import { Router } from "express";
import { addTask, allTasks, deleteTask, editTask, singleTask } from "../controller/taskController.js";

const taskRoutes = Router();

taskRoutes.get("/all-tasks", allTasks)

taskRoutes.get("/task/:id", singleTask)

taskRoutes.post("/add-task", addTask);

taskRoutes.delete("/delete-task/:id", deleteTask);

taskRoutes.put("/edit-task/:id", editTask);

export default taskRoutes;