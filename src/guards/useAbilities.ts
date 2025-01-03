import { ActionsSubjectsAbility } from './ability'

export type UserType = 'ADMIN' | 'USER'

export const getAbilitiesByUser = (user: UserType) => {
  const abilities: Record<UserType, ActionsSubjectsAbility[]> = {
    USER: [
      {
        action: 'update',
        subject: 'Task',
      },
    ],
    ADMIN: [
      {
        action: 'create',
        subject: 'Task',
      },
      {
        action: 'delete',
        subject: 'Task',
      },
    ],
  }

  return abilities[user]
}

