import {User} from './user';

export class AfterHoursEvent {
    euid: string;
    eventName: string;
    eventLocation: string;
    eventStartTime: string;
    eventOwner: string;
    cost: number;
    limitInvites: number;
    uses: User[];
}
