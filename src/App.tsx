import { AbilityContext } from './contexts/ability-context'
import { buildAbility } from './guards/ability'
import { getAbilitiesByUser } from './guards/useAbilities'
import { Home } from './pages/Home'

function App() {
  const abilities = getAbilitiesByUser('USER')
  const ability = buildAbility(abilities)

  return (
    <AbilityContext.Provider value={ability}>
      <div className="App">
        <Home />
      </div>
    </AbilityContext.Provider>
  )
}

export default App

