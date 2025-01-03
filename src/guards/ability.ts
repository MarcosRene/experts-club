import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'

export type Action = 'create' | 'update' | 'delete'
export type Subject = 'Task'

export type ActionsSubjectsAbility = {
  action: Action
  subject: Subject
}

export const buildAbility = (rules: ActionsSubjectsAbility[]) => {
  const ability = createMongoAbility<[Action, Subject]>()

  ability.update(rules)

  return ability
}

