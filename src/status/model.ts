const allStatus = ['Happy', 'Sad', 'Hungry'] as const;
export type Status = (typeof allStatus)[number];

export type BadStatus = Extract<Status, 'Sad' | 'Hungry'>; // Generate routes error. GenerateMetadataError: Maximum call stack size exceeded

export type BadStatusRequest = BadStatus | Uppercase<BadStatus>;
