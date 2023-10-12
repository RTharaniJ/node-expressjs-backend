const express = require('express');
const TaskModel = require('../models/TaskModel');

const router = express.Router();

// const {createTask, getTask} = require("../controllers/TaskController");



router.post("/", async (req, res) => {
    
    try {
        const { title, description } = req.body;
        const task = new TaskModel({ title, description })
        const newTask = await task.save()
        res.status(200).json(newTask);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/", async (req, res ) => {
    try {
        const task = await TaskModel.find()

        res.status(200).json(task);
    } catch(e) {
        res.status(400).json({ error: e.message });
    }
})

//to get single task
router.get("/:id", async (req, res ) => {
    try {
        const {id} = req.body;
        const task = await TaskModel.find()

        res.status(200).json(task);
    } catch(e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = router