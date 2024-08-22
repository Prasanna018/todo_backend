const express = require("express");
const bodyParser = require("body-parser")

const { TodoZod, CompleteZod } = require("./zod");
const Tododb = require("./db");
const app = express();
app.use(express.json());
app.use(bodyParser.json())


app.post('/add-todo', function (req, res) {
    const payload = req.body;
    const parsePayload = TodoZod.safeParse(payload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
    Tododb.create({
        title: payload.title,
        description: payload.description
    })
    res.json({
        msg: "todo added!"
    })
})

app.get('/todos', async function (req, res) {
    const todos = await Tododb.find({})
    res.json({
        todos: todos
    })

})


app.put('/completed', async function (req, res) {
    const complete = req.body;
    const parseComplete = CompleteZod.safeParse(complete)
    if (!parseComplete.success) {
        res.status(411).json({
            msg: "Your inputs are wrong"
        })
        return;

    }
    await Tododb.update({
        _id: req.body.id
    }, {
        completed: true

    })
    res.json({
        msg: "Mark as completed "
    })

})


app.listen(3000, () => {
    console.log("server is going on the port 3000")
})