import Task from "../models/taskModel.js";

export const addTask = async (req, res) => {
    try {
        const {name, lastName, email, mobileNo, project} = req.body;
    
        if (!name || !email || !lastName || !mobileNo || !project) {
            return res.json({
                message: "All field are required",
                status: 404
            })
        }
    
        const task = await Task.create({
            name,
            lastName,
            email,
            mobileNo,
            project
        })
    
        task.save();
    
        return res.json({
            message: "task created",
            status: 202,
            task
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;

        if (!id) {
            return res.json({
                message: "task not found"
            })
        }

        const deleteTask = await Task.findByIdAndDelete({
            _id: id
        })

        return res.json({
            message: "task deleted"
        })
    } catch (error) {
        console.log(error);   
    }
}

export const editTask = async (req, res) => {
    const {name, lastName, email, mobileNo, project} = req.body;
    const {id} = req.params;

    if (!id) {
        return res.json({
            message: "Task not found"
        })
    }

    try {
        const task = await Task.findById({
            _id: id
        })
    
        if (name || lastName || email || mobileNo || project) {
            task.name = name,
            task.lastName = lastName,
            task.email = email,
            task.mobileNo = mobileNo,
            task.project = project
        }
    
        await task.save();
    
        return res.json({
            message: "Task Updated",
            status: 202,
            task
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const allTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.json({
            message: "Task fetch successully",
            status: 202,
            tasks
        })
    } catch (error) {
        return res.json({
            message: "Tasks not fetch",
            status: 404
        })
    }
}