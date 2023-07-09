const UserModel = require("../models/UserModel");

const loginController = async (req, res) => {
  try {
    const {userId, password} = req.body
    const user = await UserModel.findOne({userId, password,verified:true});
    if(user){
      res.status(200).send(user);
    }else{
      message:'Login Fail',
      user
    }
  } catch (error) {
    console.log(error);
  }
};

const registerController = async (req, res) => {
  try {
    const newUsers = new UserModel({...req.body,verified:true});
    console.log(newUsers)
    await newUsers.save();
    res.status(201).send(`User created successfully`);
  } catch (error) {
    res.status(500).send(`Error occur: ${error}`);
    console.log(error);
  }
};

module.exports = {
    loginController,
  registerController,
};
