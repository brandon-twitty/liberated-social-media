import {Deserializable} from './deserialization';


export class Profile implements Deserializable {

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
