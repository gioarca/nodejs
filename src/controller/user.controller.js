const { model } = require("mongoose");
const User = require("../models/user.model");

// Endpoint per aggiungere un utente
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint per cercare un singolo utente
const getUsers = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit = parseInt(limit) || 100; // imposta un limite pari a 100 se non definito
    offset = parseInt(offset) || 0; // imposta un limite pari a 0 se non definito
    const users = await User.find({}).limit(limit).offset(offset);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint per mostrare un singolo utente
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint per modificare un utente
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(id, { name }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "Utente non trovato!" });
    }
    const updateUser = await User.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint per cancellare un utente
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "Utente non trovato!" }); // aggiunto un return
    }
    res
      .status(200)
      .json({ success: "L'utente è stato cancellato correttamente!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
