import {Deserializable} from './deserialization';

export class Friend implements Deserializable {
    fid: string;
    /* public FriendArray: [User];*/

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
