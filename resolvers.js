const Task = require('./models/Task')

const resolvers = {


    Query: {
        hello: () => "Hello word",
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        async getTask(_, {id}) {
            const task = await Task.findById(id)
            return task
        }
    },
    Mutation: {
        createTask: async (_, args) => {
            const { nombre, apellido, edad, pais } = args.task
            const newTask = new Task({ nombre, apellido, edad, pais })
            await newTask.save()
            return newTask
        },
        async deleteTask(_, { id }) {
            await Task.findByIdAndDelete(id)
            return "Task delete"
        },
         async updateTask(_, {task, id}){
            const taskUpdate = await Task.findByIdAndUpdate(id, {
                $set: task
            }, {new: true})
            return taskUpdate
        }
    }
}
module.exports = { resolvers };