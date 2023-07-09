const BillsModel = require("../models/BillsModel");

const getBillsController = async (req, res) => {
  try {
    const bills = await BillsModel.find();
    res.status(200).send(bills);
  } catch (error) {
    console.log(error);
  }
};

const addBillsController = async (req, res) => {
  try {
    const newBill = new BillsModel(req.body);
    await newBill.save();
    res.status(201).send(`Bill created successfully`);
  } catch (error) {
    res.status(500).send(`Error occur: ${error}`);
    console.log(error);
  }
};

module.exports = {
  getBillsController,
  addBillsController,
};
