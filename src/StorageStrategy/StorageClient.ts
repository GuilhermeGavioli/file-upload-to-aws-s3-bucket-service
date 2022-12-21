export class StorageClient{
    private saveFile?: SaveFile | void;
    private deleteFile?: DeleteFile | void;
    private retrieveFile?: RetrieveFile | void;

    public save(): void{
        this.saveFile?.execute();
    }

    public delete(): void{
        this.deleteFile?.execute();
    }

    public read(): String | void{
        return this.retrieveFile?.execute();
    }

    setSaveFile(saveFile: SaveFile): void {
        this.saveFile = saveFile;
    }
    setDeleteFile(deleteFile: DeleteFile): void {
        this.deleteFile = deleteFile;
    }
    setRetrieveFile(retrieveFile: RetrieveFile): void {
        this.retrieveFile = retrieveFile;
    }
}




