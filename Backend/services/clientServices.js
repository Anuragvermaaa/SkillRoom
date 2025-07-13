
const clientModel = require("../models/clientModel");

const validateClientData = async (data) => {
  const { fullname, contact, email, organization, query, password } = data;
  const errors = [];

  if (!fullname?.firstname || fullname.firstname.length < 3) {
    errors.push("First name must be at least 3 characters long");
  }
  if (!fullname?.lastname || fullname.lastname.length < 3) {
    errors.push("Last name must be at least 3 characters long");
  }
  if (!contact || !/^\d{10}$/.test(contact)) {
    errors.push("Contact must be a 10-digit number");
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    errors.push("Invalid email");
  }
  if (!organization || organization.length < 3) {
    errors.push("Organization must be at least 3 characters long");
  }
  if (!query || query.length < 3) {
    errors.push("Query must be at least 3 characters");
  }
  if (!password || password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  const existingClient = await clientModel.findOne({ email });
  if (existingClient) {
    throw new Error("Business email already exists");
  }

  return true;
};

module.exports = { validateClientData };

