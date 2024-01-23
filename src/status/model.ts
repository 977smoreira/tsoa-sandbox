export type Status = 'Happy' | 'Sad' | 'Hungry';

export type BadStatus = Extract<Status, 'Sad' | 'Hungry'>;

export type BadStatusRequest = BadStatus | Uppercase<BadStatus>;
