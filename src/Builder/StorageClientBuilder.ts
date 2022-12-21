import { StorageClient } from "../StorageStrategy/StorageClient";

export interface StorageClientBuilder{
    setSaveFile(saveFile: SaveFile): void;
    setDeleteFile(deleteFile: DeleteFile): void;
    setRetrieveFile(retrieveFile: RetrieveFile): void;
    getResult(): StorageClient;
}