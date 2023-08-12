import {useState, useEffect} from 'react'
import './index.css' // Import your CSS file for styling

const FadeInOut = ({show}) => {
  const [isVisible, setIsVisible] = useState(show)

  useEffect(() => {
    setIsVisible(show)
  }, [show])

  return (
    <div className={`fade ${isVisible ? 'visible' : ''}`}>
      <h1>aisdhufi</h1>
      <p>DFas</p>
      <h1>dasf</h1>
    </div>
  )
}

export default FadeInOut
