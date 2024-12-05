import Dexie, { type Table } from 'dexie';
import { TrainingSession, UserProfile, DogProfile } from '../types';

export class DogTrainerDB extends Dexie {
  trainingSessions!: Table<TrainingSession>;
  userProfiles!: Table<UserProfile>;
  dogProfiles!: Table<DogProfile>;

  constructor() {
    super('DogTrainerDB');
    this.version(1).stores({
      trainingSessions: '++id, command, timestamp, userId, dogId',
      userProfiles: '++id, email',
      dogProfiles: '++id, userId, name'
    });
  }
}

export const db = new DogTrainerDB();