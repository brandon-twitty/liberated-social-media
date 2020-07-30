import {Deserializable} from './deserialization';
import {Friend} from './friend';
import {Component} from '@angular/core';

export class User /*implements Deserializable*/ {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
/*
    friend;
*/

   /* deserialize(input: any): this {
        Object.assign(this, input);
        this.friend = input.friend.map(data => new Friend().deserialize(data));
        return this;
    }*/
}
