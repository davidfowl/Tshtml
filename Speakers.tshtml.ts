import { Speaker } from "./Models/Speaker"
import { ISpeakersController } from "./ISpeakersController"

export class SpeakersModel
{
    private client: ISpeakersController;

    constructor(client: ISpeakersController) {
        this.client = client;
    }

    public speakers: Speaker[];

    async onLoad() : Promise<any> {
        this.speakers = await this.client.getSpeakers();
    }
}