import './App.css'
import Navbar from './components/Navbar'
import ReceptInfo from './components/RecipeInfo'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Tips from './components/Tips'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <ReceptInfo></ReceptInfo>
      <Ingredients></Ingredients>
      <Instructions></Instructions>  
      <Tips></Tips>
     </>
  )
}

export default App
