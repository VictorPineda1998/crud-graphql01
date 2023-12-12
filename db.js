const {connect} = require('mongoose')

const connectDB = async () =>{
    try {
        await connect("mongodb+srv://victor:Victor1998@cluster0.epa37vx.mongodb.net/?retryWrites=true&w=majority")
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
};

module.exports = {connectDB};