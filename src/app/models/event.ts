import {Deserializable} from './deserialization';

export class Event implements Deserializable{
    eid: string;
    Event: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
