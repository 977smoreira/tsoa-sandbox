const allStatus = ['Happy', 'Sad', 'Hungry'] as const;
export type Status = (typeof allStatus)[number];

export type BadStatus = Extract<Status, 'Sad' | 'Hungry'>;

export type BadStatusRequest = BadStatus | Uppercase<BadStatus>;
