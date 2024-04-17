"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware
const port = process.env.PORT || 3008;
const db = {
    users: [
        { id: 1, name: "Gago jaja" },
        { id: 2, name: "Suso tota" },
        { id: 3, name: "Valo jaja" },
        { id: 4, name: "Luso tota" },
        { id: 5, name: "Peto jaja" }
    ]
};
app
    .get('/', (req, res) => {
    res.json("I have done it");
})
    .post("/user", (req, res) => {
    if (!req.body.name) {
        res.sendStatus(400);
        return;
    }
    const user = { id: +(new Date()), name: req.body.name };
    db.users.push(user);
    res
        .status(201)
        .json(user);
})
    .get("/user/:id", (req, res) => {
    const user = db.users.find(u => u.id === +req.params.id);
    if (!user) {
        res.sendStatus(404);
        return;
    }
    res.json(user);
})
    .delete("/user/:id", (req, res) => {
    db.users = db.users.filter(u => u.id !== +req.params.id);
    res.sendStatus(204);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
