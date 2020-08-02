import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Profile} from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileData: any;
  constructor( public afStore: AngularFirestore,
               public ngFireAuth: AngularFireAuth) { }
  /*saveProfile(profile: Profile){

  }*/
}

