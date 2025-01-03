import { ActionsSubjectsAbility } from './ability'

export type UserType = 'ADMIN' | 'USER'

export const getAbilitiesByUser = (user: UserType) => {
  const abilities: Record<UserType, ActionsSubjectsAbility[]> = {
    USER: [
      {
        actions: 'create',
        subjects: 'Task',
      },
    ],
    ADMIN: [
      {
        actions: 'create',
        subjects: 'Task',
      },
      {
        actions: 'update',
        subjects: 'Task',
      },
    ],
  }

  return abilities[user]
}

