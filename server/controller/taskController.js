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