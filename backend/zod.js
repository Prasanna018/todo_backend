const zod = require("zod");

const TodoZod = zod.object({
    title: zod.string(),
    description: zod.string()
})
const CompleteZod = zod.object({
    id: zod.string()
})


module.exports = {
    TodoZod: TodoZod,
    CompleteZod: CompleteZod
}

