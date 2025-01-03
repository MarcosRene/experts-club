import { createContextualCan } from '@casl/react'
import { MongoAbility } from '@casl/ability'
import { createContext } from 'react'
import { Action, Subject } from '../guards/ability'

type AbilityContextType = MongoAbility<[Action, Subject]>

export const AbilityContext = createContext<AbilityContextType>(
  {} as AbilityContextType
)
export const Can = createContextualCan(AbilityContext.Consumer)

