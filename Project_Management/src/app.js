import express from 'express'
import cors from 'cors'


const app = express();

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended : true, limit : '16kb'}))
app.use(express.static("public"))


//Cors configuration

app.use(
    cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    allowedHeaders : ["Content-Type", "Authorization"],
    credentials : true,
    methods : ["PUT" , "GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    }),
);

app.get('/' , (req, res) => {
    res.send("This is my first code in express")
})

export default app