// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const hostController = require('../controllers/hostController');

userRouter.get("/", hostController.getHome);

exports.userRouter = userRouter;