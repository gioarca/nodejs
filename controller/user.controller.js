const { model } = require("mongoose");
const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(_id, { name }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "Utente non trovato!" });
    }
    const updateUser = await User.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: "Utente non trovato!" });
    }
    res
      .status(200)
      .json({ success: "L'utente è stato cancellato correttamente!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser };
