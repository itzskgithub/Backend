import express from 'express'

const app = express();

app.get('/' , (req, res) => {
    res.send("This is my first code in express")
})

export default app