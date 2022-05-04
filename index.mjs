import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Card from './card.mjs'
const app = express();

const port = 3000
//database

//database
const connection =
    'mongodb+srv://akshaysutar8860:eTYsI1FvuSuMxTTz@cluster0.n8qtr.mongodb.net/Mernstack?retryWrites=true&w=majority';

mongoose
    .connect(connection, { useNewUrlParser: true })
    .then((res) => {
        console.log('connection succesfull....for webapp');
    })
    .catch((err) => {
        console.log('sorry error occures in connection......');
    });
//middlewears

app.use(express.json());
app.use(cors());
//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/second', (req, res) => {
    res.send('welcome to second page')
})

app.use('/card', (req, res) => {
    Card.find((err,data) => {
        if (err) {
            console.log('data fetched error..')
        }
        else {
            res.send(data)
        console.log(data[0])
            console.log("datasent")
        }
    })

})

app.listen(port, () => {
    console.log(`Example app listening on portccxc ${port}`)
})