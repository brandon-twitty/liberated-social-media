import {Deserializable} from './deserialization';
import {User} from './user';

export class FriendList /*implements Deserializable*/ {
    fuid: string;
    friends: Array<User>;

  /*  deserialize(input: any): this {
        return Object.assign(this, input);
    }*/
}
