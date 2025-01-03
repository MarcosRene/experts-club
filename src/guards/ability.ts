import { createMongoAbility } from '@casl/ability'

export type Action = 'create' | 'update' | 'delete'
export type Subject = 'Task'

export type ActionsSubjectsAbility = {
  actions: Action
  subjects: Subject
}

export const buildAbility = (rules: ActionsSubjectsAbility[]) => {
  const ability = createMongoAbility<[Action, Subject]>()

  rules.forEach(({ actions, subjects }) => {
    ability.can(actions, subjects)
  })

  return ability
}

