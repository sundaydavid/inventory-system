const ItemModel = require("../models/ItemModel");

const getItemController = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

const addItemController = async (req, res) => {
  try {
    const newItem = new ItemModel(req.body);
    await newItem.save();
    res.status(201).send(`Item created successfully`);
  } catch (error) {
    res.status(500).send(`Error occur: ${error}`);
    console.log(error);
  }
};

const editItemController = async (req, res) => {
  try {
    await ItemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.status(201).send(`Item Updated successfully`);
  } catch (error) {
    res.status(500).send(`Error occur: ${error}`);
    console.log(error);
  }
};

const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await ItemModel.findOneAndDelete({ _id: itemId });
    res.status(200).send(`Item Deleted successfully`);
  } catch (error) {
    res.status(500).send(`Error occur: ${error}`);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
