import express from 'express'

const app = express()
app.use(express.json()) // middleware
const port = process.env.PORT || 3008

const db = {
    users: [
        {id: 1, name: "Gago jaja"},
        {id: 2, name: "Suso tota"},
        {id: 3, name: "Valo jaja"},
        {id: 4, name: "Luso tota"},
        {id: 5, name: "Peto jaja"}
    ]
}

app
    .get('/', (req, res) => {
        res.json("Hello !")
    })
    .get('/users', (req, res) => {
        res.json(db)
    })
    .post("/user", (req, res) => {
        if (!req.body.name) {
            res.sendStatus(400)
            return
        }
        const user = {id: +(new Date()), name: req.body.name}
        db.users.push(user)
        res
            .status(201)
            .json(user)
    })
    .get("/user/:id", (req, res) => {
        const user = db.users.find(u => u.id === +req.params.id)

        if (!user) {
            res.sendStatus(404)
            return
        }

        res.json(user)

    })
    .delete("/user/:id", (req, res) => {
        db.users = db.users.filter(u => u.id !== +req.params.id)
        res.sendStatus(204)
    })
    .put("/user/:id", (req, res) => {
        if (!req.body.name) {
            res.sendStatus(400)
            return
        }
        const user = db.users.find(u => u.id === +req.params.id)
        if (!user) {
            res.sendStatus(404)
            return
        }
        user.name = req.body.name
        res.json(user)
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
