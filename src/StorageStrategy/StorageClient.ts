export class StorageClient{
    private saveFile: SaveFile;
    private deleteFile: DeleteFile;
    private retrieveFile: RetrieveFile;

    constructor( saveFile: SaveFile, deleteFile: DeleteFile, retrieveFile: RetrieveFile ) {
        this.saveFile = saveFile;
        this.deleteFile = deleteFile;
        this.retrieveFile = retrieveFile;
    }

    public save(): void{
        this.saveFile.execute();
    }

    public delete(): void{
        this.deleteFile.execute();
    }

    public read(): String | void{
        return this.retrieveFile.execute();
    }
}
