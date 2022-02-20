const express = require('express');
const router = express.Router();
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


router.get('/trial', async (req, res) => {
    console.log("In server")
    res.status(200).send("Connected to server")
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    res.status(200).send("Logged In")
})


module.exports = app;