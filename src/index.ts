import { StorageClient } from "./StorageStrategy/StorageClient";

console.log('hello')

import express from 'express'
const app = express();


app.get('/', (req, res) => { 
    res.send('oklok');
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))