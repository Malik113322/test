import { useState } from "react"
import Hero from "./components/Hero"

const App = () => {

  const [showRightData, setShowRightData] = useState(false);

  return (

    <div className="">
   <Hero showRightData={showRightData} setShowRightData={setShowRightData}/>
    </div>
  )
}

export default App