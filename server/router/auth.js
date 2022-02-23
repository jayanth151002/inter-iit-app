const express = require('express');
const router = express.Router();
const app = express()
require("chromedriver");
let swd = require("selenium-webdriver");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);



router.post('/login', async (req, res) => {
    const { rollno, password } = (req.body)
    let tab = new swd.Builder().forBrowser("chrome").build();
    let Opentab = tab.get("https://www.iitm.ac.in/viewgrades/");
    Opentab
        .then(() => tab.manage().setTimeouts({ implicit: 10000, }))
        .then(() => tab.findElement(swd.By.xpath('//*[@id="wrapper"]/div[1]/form/center/table[1]/tbody/tr[1]/td[2]/input')))
        .then((usernameBox) => usernameBox.sendKeys(rollno))
        .then(() => tab.findElement(swd.By.xpath('//*[@id="wrapper"]/div[1]/form/center/table[1]/tbody/tr[2]/td[2]/input')))
        .then((passwordBox) => passwordBox.sendKeys(password))
        .then(() => tab.findElement(swd.By.xpath('//*[@id="wrapper"]/div[1]/form/center/table[2]/tbody/tr/td[1]/input')))
        .then((signInBtn) => signInBtn.click())
        .then(() => console.log("Successfully signed in View Grades IITM!"))
        .then(() => tab.switchTo().frame(1))
        .then(() => tab.findElement(swd.By.xpath(`/html/body/center/center/table[1]/tbody`)).getText())
        .then((gradeData) => {
            var parsedArr = gradeData.split('\n');
            parsedArr = parsedArr.map((arr) => arr.split(' '))
            return parsedArr
        })
        .then((gradeText) => gradeText.map(arr => { if (arr[arr.length - 2].length === 1) console.log(arr[1], arr[arr.length - 3], arr[arr.length - 2]) }))
        .then(() => res.status(200).send("Logged In"))
        .catch((err) => console.log("Error ", err, " occurred!"));
})


module.exports = app;

