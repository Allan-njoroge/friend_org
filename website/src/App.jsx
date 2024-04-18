import React, { useEffect } from 'react'
import RoutePaths from './routes/RoutePaths'

// AOS animations
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <RoutePaths />
    </div>
  )
}

export default App;