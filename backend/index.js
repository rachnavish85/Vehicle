const express = require( 'express');
const app = express();
const port =5000;
const cors = require('cors')

const UserRouter = require('./router/UserRouter');
const VehicleRouter = require('./router/vehicle')
const UtilRouter = require('./router/Util')

app.use(cors({
    origin: ['http://localhost:5173']
}))

app.use(express.json());
app.use('/user',UserRouter)
app.use('/vehicle',VehicleRouter)
app.use('/util',UtilRouter)

app.use(express.static('./uploads'));
app.listen(port,()=>{console.log('server is running');
})

// app.get('/',(req, res) => {
//     res.send('Server is successfully running')
// })
// app.get('/about',(req, res) => {
//     res.send('This is about page')
// })
// app.get('/contact',(req, res) => {
//     res.send('This is contact page')
// })


//  const mongoose =require('./connection')