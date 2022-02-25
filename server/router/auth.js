const express = require('express');
const router = express.Router();
const app = express()
const mongoose = require('mongoose');
const Students = require('../models/schema')
require("chromedriver");
let swd = require("selenium-webdriver");
const url = 'mongodb://localhost:27017/grades';
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log('Connected correctly to database')
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);



router.post('/add', async (req, res) => {
    const { rollno, password } = req.body
    var gradeArray
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
        .then((gradeData) => gradeData.split('\n').map((arr) => arr.split(' ')))
        .then((gradeText) => gradeText.map(arr => {
            if (arr[arr.length - 2].length === 1)
                return Object.fromEntries([["Course", arr[1]], ["Credits", arr[arr.length - 3]], ["Grade", arr[arr.length - 2]]])
            else return null
        }).filter((obj) => obj != null)
        )
        .then((gradeArr) => gradeArray = gradeArr)
        .then(() => tab.findElement(swd.By.xpath(`/html/body/center/table[1]/tbody/tr`)).getText())
        .then((data) => data.split(" - "))
        .then((data) => {
            const newStu = Students({
                Rollno: data[0],
                Name: data[1],
                Program: data[2],
                Grades: gradeArray
            })
            return newStu.save()
                .catch(() => {
                    res.send("User already found!!!");
                });
        })
        .then(() => res.status(200).send("Grade Data Added to Database"))
        .then(() => tab.close())
        .catch(() => {
            tab.close()
            res.send("Invalid Login Credentials!!!")
        });
})

router.post('/view', async (req, res) => {
    const { rollno } = req.body
    Students.findOne({ 'Rollno': rollno.toUpperCase() })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            throw err;
        });
})

router.get('/viewall', async (req, res) => {
    Students.find({})
        .then((data) => {
            console.log(data)
            res.send(data)
        })
})

router.delete('/deleteall', async (req, res) => {
    Students.deleteMany({})
        .then(() => console.log("Done"))
        .catch((err) => console.log(err))
})

router.post('/delete', async (req, res) => {
    const { rollno } = req.body
    Students.findOneAndDelete({ 'Rollno': rollno.toUpperCase() })
        .then(() => {
            res.status(200).send(`${rollno.toUpperCase()} data Deleted`);
        })
        .catch((err) => {
            throw err;
        });
})


module.exports = app;

