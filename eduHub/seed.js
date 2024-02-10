require("dotenv").config();
require("./config/database");

const Class = require("./models/class");
const User = require("./models/user");

//create a class in the DB
const createClass = async () => {
  await Class.create({
    name: "Algebra",
    description: "Algebra Principles",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-08-01"),
    grade: "Secondary",
  });
}

//call the function to create class
// createClass();

//create a user in the DB, no need its done through google

const createUser = async () => {
  await User.create({
    name: "John Doe",
    googleId: "111",
    email: "John@doe.com",
    avatar: "None",
    role: "teacher"
  });
}

//call the function to create a user
createUser();