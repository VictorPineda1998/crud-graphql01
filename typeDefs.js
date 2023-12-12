const {gql} = require ('apollo-server-express')

const typeDefs = gql`

type Task {
    id: ID
    nombre: String
    apellido: String
    edad: String
    pais: String
}

type Query {
    hello:String
    getAllTasks:[Task]
    getTask(id:ID): Task
}
input TaskInput {
    nombre:String 
    apellido:String 
    edad:String
    pais:String
}

type Mutation {
    createTask(task:TaskInput!): Task
    deleteTask(id:ID!): String
    updateTask(id:ID!, task: TaskInput): Task
}
`
module.exports = {typeDefs}