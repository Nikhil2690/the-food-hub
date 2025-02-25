const express = require('express')
const cors = require("cors");   
const app = express()
const port = 3000
const mongoDB = require("./db")
mongoDB();

const allowedOrigins = [
    "https://the-food-hub26.netlify.app",
    "http://localhost:5173",
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/DisplayData'))
app.use('/api', require('./Routes/OrderData'))


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})