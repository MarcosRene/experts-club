import { useState } from 'react'
import { AbilityContext } from './contexts/ability-context'
import { buildAbility } from './guards/ability'
import { getAbilitiesByUser, UserType } from './guards/useAbilities'
import { Home } from './pages/Home'
import { Button } from './components/button'

function App() {
  const [currentUser, setCurrentUser] = useState<UserType>('ADMIN')
  const abilities = getAbilitiesByUser(currentUser)
  const ability = buildAbility(abilities)

  function handleUserChange(user: UserType) {
    setCurrentUser(user)
  }

  return (
    <AbilityContext.Provider value={ability}>
      <Button onClick={() => handleUserChange('ADMIN')}>ADMIN</Button>
      <Button onClick={() => handleUserChange('USER')}>USER</Button>
      <Home />
    </AbilityContext.Provider>
  )
}

export default App

