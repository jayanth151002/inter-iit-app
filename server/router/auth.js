const express = require('express');
const router = express.Router();
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(express.json());

router.get('/trial', async (req, res) => {
    console.log("In server")
    res.status(200).send("Connected to server")
})


module.exports = app;