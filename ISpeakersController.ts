import { Speaker } from "./Models/Speaker"

export interface ISpeakersController
{
    getSpeakers(): Promise<Speaker[]>;
}
