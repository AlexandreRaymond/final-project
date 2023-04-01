"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getMongoClient = async () => {
  try {
    console.log("MONGO", MONGO_URI);
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("I'm in handlers!");
    return client;
  } catch (err) {
    console.log("Error", err);
    return false;
  }
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
