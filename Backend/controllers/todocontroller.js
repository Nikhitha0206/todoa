const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.addTodo = async (req, res) => {
    try {
        console.log("📩 Received Data:", req.body);

        const newTodo = new Todo(req.body);
        const savedTodo = await newTodo.save();

        console.log("✅ Data Saved in MongoDB:", savedTodo);
        res.json(savedTodo);
    } catch (error) {
        console.error("❌ Error in addTodo:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


exports.updateTodo = async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
};

exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted Successfully' });
};