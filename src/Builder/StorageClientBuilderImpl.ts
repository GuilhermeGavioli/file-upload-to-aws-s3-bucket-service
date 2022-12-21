import { StorageClient } from "../StorageStrategy/StorageClient";
import { StorageClientBuilder } from "./StorageClientBuilder";

export class StorageClientBuilderImpl implements StorageClientBuilder {
    private storageClient: StorageClient;

    constructor() {
        this.storageClient = new StorageClient();
    }

    public setSaveFile(saveFile: SaveFile): void {
        this.storageClient.setSaveFile(saveFile);
    }

    public setDeleteFile(deleteFile: DeleteFile): void {
        this.storageClient.setDeleteFile(deleteFile);
    }
    public setRetrieveFile(retrieveFile: RetrieveFile): void {
        this.storageClient.setRetrieveFile(retrieveFile);
    }
    public getResult(): StorageClient {
        return this.storageClient;
    }
}
