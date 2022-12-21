import path from "path";
import express, { Request, Response } from 'express'
import cors from 'cors'

import { StorageClient } from "./StorageStrategy/StorageClient";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/views')));

app.post('/file', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({ok: true});
})

app.get('/page', (req, res) => { 
    res.render(path.join(__dirname, 'views', 'index'))
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))