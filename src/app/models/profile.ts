import {Deserializable} from './deserialization';
import {User} from './user';
import {FriendList} from './friend';
import {AfterHoursEvent} from './afterHoursEvent';
import {Chat} from './chat';

export class Profile {
    puid: string;
    photoURL: string;
    handle: string;
    user: Array<User>;
    friend: Array<FriendList>;
    event: Array<AfterHoursEvent>;
    chats: Array<Chat>;
}

