import path from "path";
import express, { Request, Response } from 'express'
import cors from 'cors'


import {  StorageClient } from "./StorageStrategy/StorageClient";
import {  BucketSaveFileImpl } from './StorageStrategy/Concrete/AWS_S3/BucketSaveFileImpl'
import {  BucketDeleteFileImpl } from './StorageStrategy/Concrete/AWS_S3/BucketDeleteFileImpl'
import {  BucketRetrieveFileImpl } from './StorageStrategy/Concrete/AWS_S3/BucketRetrieveFileImpl'

import { upload } from './multer'
import { StorageClientBuilderImpl } from "./Builder/StorageClientBuilderImpl";




  

const storageClientBuilder = new StorageClientBuilderImpl();
const bucketSaveFile: SaveFile = new BucketSaveFileImpl()
const bucketDeleteFile: DeleteFile = new BucketDeleteFileImpl()
const BucketRetrieveFile: SaveFile = new BucketRetrieveFileImpl()

storageClientBuilder.setSaveFile(bucketSaveFile)
storageClientBuilder.setDeleteFile(bucketDeleteFile)
storageClientBuilder.setRetrieveFile(BucketRetrieveFile)
const storageClient: StorageClient = storageClientBuilder.getResult()


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/views')));

// app.post('/file', (req: Request, res: Response) => {
// })



app.post('/file', upload.single('file'), async function (req: Request, res: Response) {

    console.log(req.body)
    console.log(req.file)
    // await storageClient.save();
    res.json({ok: true});
})

app.get('/page', (req, res) => { 
    res.render(path.join(__dirname, 'views', 'index'))
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))