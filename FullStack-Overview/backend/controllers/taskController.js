const Task = require("../models/taskModel");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.status(200).json(tasks); // Send the tasks as JSON response
  } catch (error) {
    console.error("Error getting tasks:", error);
    res.status(500).json({ message: "Server error" }); // Handle server error
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body; // Extract title and description from request body
    const newTask = new Task({ title, description }); // Create a new task instance
    await newTask.save(); // Save the new task to the database
    res.status(201).json(newTask); // Send the new task as JSON response
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server error" }); // Handle server error
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Extract task ID from request parameters
    const { title, description, completed } = req.body; // Extract updated task details from request body
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true } // Return the updated task
    );
    res.status(200).json(updatedTask); // Send the updated task as JSON response
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Server error" }); // Handle server error
  }
};

// Delete an existing task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Extract task ID from request parameters
    await Task.findByIdAndDelete(id); // Find and delete the task by ID
    res.status(200).json({ message: "Task deleted successfully" }); // Send success message
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" }); // Handle server error
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
