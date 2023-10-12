const taskModel = require("../models/TaskModel");


//to create task
const createTask = async (req, res) => {


    try {
        const { title, description } = req.body;
        const task = new taskModel({ title, description })
        const newTask = await task.save()
        res.status(200).json(newTask);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await taskModel.find()

        res.status(200).json(task);
    } catch {
        res.status(400).json({ error: e.message });
    }
}

// module.exports = {(createTask, getTask ) };
