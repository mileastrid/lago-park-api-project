"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const passport_1 = __importDefault(require("passport"));
const router = express_1.Router();
router.post("/signup", user_controller_1.signUp);
router.post("/signin", user_controller_1.signIn);
router.post("/message", passport_1.default.authenticate("jwt", { session: false }), user_controller_1.message);
router.post("/auth", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    return res.status(400).json({ auth: true });
});
exports.default = router;
