import dotenv from 'dotenv'
dotenv.config();
import jsonObj from './mockAPI.js'
const PORT = 8081
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import path from 'path';
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))
app.get('/', (req, res)=> {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const MEAN_CLOUD_API_KEY = process.env.API_KEY;
app.post('/sentiment', async (req, res) => {
    const url = req.body.url;
    const data = await fetch(`${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`);
    const retruedData = await data.json();
    res.send(retruedData)
});
app.get('/test', function (req, res) {
    res.send(jsonObj)
})
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})
