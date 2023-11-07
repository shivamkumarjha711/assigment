import mongoose, { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: "String",
        required: [true, "Name is required"],
        trim: true
    },
    lastName: {
        type: "String",
        required: [true, "Last Name is required"],
        trim: true
    },
    email: {
        type: "String",
        required: [true, "email is required"],
        trim: true
    },
    mobileNo: {
        type: "Number",
        trim: true
    },
    project: {
        type: "String",
        trim: true
    }
})

const Task = model("task", taskSchema)

export default Task;