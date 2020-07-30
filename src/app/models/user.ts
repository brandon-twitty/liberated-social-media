import {Deserializable} from './deserialization';
import {Friend} from './friend';
import {Component} from '@angular/core';


export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    fullName: string;
    age: number;
    bio: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    dateCreated: string;
/*
    friend;
*/

   /* deserialize(input: any): this {
        Object.assign(this, input);
        this.friend = input.friend.map(data => new Friend().deserialize(data));
        return this;
    }*/
}
