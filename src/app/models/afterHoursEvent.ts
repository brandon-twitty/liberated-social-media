import {User} from './user';

export class AfterHoursEvent {
    euid: string;
    eventName: string;
    eventLocation: string;
    eventStartTime: string;
    eventOwner: string;
    cost: number;
    eventDescription: string;
    limitInvites: number;
    eventImage; string;
    socialMediaLink: string;
    users: User[];
}
