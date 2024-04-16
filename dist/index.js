"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3008;
app
    .get('/', (req, res) => {
    const a = 8;
    if (a > 5) {
        res.send('lala===');
    }
    else {
        res.send('Hello World!');
    }
})
    .get("/users", (req, res) => {
    res.send("some users!!");
})
    .post("/user", (req, res) => {
    res.send("some new user created");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// const http = require("http")
// const fs = require("fs")
//
// const delay = (ms) => {
//     return new Promise(res => {
//         setTimeout(() => res(), ms)
//     })
// }
//
// const myReadFile = (path) => {
//     return new Promise((res, rej) => {
//         fs.readFile(path, (err, data) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
// }
//
// const index = http.createServer(
//     async (request, response) => {
//         switch (request.url) {
//             case "/home": {
//                 try {
//                     const data = await myReadFile("pages/home.html")
//                     response.write(data)
//                 } catch (err) {
//                     response.write("some error")
//                 } finally {
//                     response.end()
//                 }
//                 break
//             }
//             case "/about": {
//                 await delay(3000)
//                 response.write("this is about (just a statement)")
//                 response.end()
//                 break
//             }
//             default: {
//                 response.write("404 not found")
//                 response.end()
//             }
//         }
//     }
// )
//
// index.listen(3007)
//
// fetch("http://localhost", {headers:{someKey: "ome value"}})
