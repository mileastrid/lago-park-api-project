"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema();
const MenuSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    items: {
        type: Array,
        required: true,
    },
});
exports.default = mongoose_1.model("Menu", MenuSchema);
