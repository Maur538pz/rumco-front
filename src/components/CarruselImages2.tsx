'use client'
import { useState, useEffect, useRef } from "react"
import '@/styles/carrusel2.css'

interface Image {
  index: number
  url: string
  description: string
}

const images: Image[] = [
  {index:0, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel1.webp', description: 'construccions de obra'},
  {index:1, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel2.webp', description: 'vista panoramica'},
  {index:2, url:'https://raw.githubusercontent.com/Maur538pz/001-Construccion/master/public/images/carrusel3.webp', description: 'obrero laborando'},]

export const CarruselImages2 = () => {
  const [ index, setIndex ] = useState(0)
  const [ valueDirection, setValueDirection ] = useState(-1)
  const [ classSliderFilm, setClassSliderFilm ] = useState('slider-fill')
  // const sizeArray = 3
  const [ toClass] = useState(['slider-fill','to-image2','to-image3'])
  // const [ iteration, setIteration ] = useState(0)
  const refIndex = useRef(index)
  const refDirection = useRef(valueDirection)
  const selectDot = (index: number): void => {
    setIndex(index)
  }

  useEffect(() => {
    refIndex.current = index
    refDirection.current= valueDirection
  },[index, valueDirection])

  useEffect(() => {
    const newDir = [0]
    const interval = setInterval(() => {
      
      if (refIndex.current === 0 || refIndex.current ===2) {
        newDir[0] = refDirection.current * -1
        setValueDirection(newDir[0]) 
        
        
        
      }
      

      let moduleIndex = refIndex.current % 3
      const initialClass = toClass.slice(0,(moduleIndex + 1)).reduce((acc, curr) => {
        return `${acc} ${curr}`
      },'')
      setClassSliderFilm(initialClass)
      setIndex(moduleIndex + newDir[0])

    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [toClass])

  return (
    <div className="container-carruse-slider">
      <div className="slider-window">
        <figure className={classSliderFilm}>
          {
            images.map( img => 
            <img 
              key={img.description} 
              src={img.url} 
              alt={img.description}
              className="image-slider-c" 

              style={{ left:`calc(${img.index * 100}% + ${img.index * 10 }px)`}}
            />)
          }
        </figure>

      </div>
      <div className="slider-nav-carrusel2">
        {
          images.map( img => <div className={`dot-index ${img.index===refIndex.current ? 'dot-select':''}`} key={img.description} onClick={() => {selectDot(img.index)}}></div>)
        }

      </div>
      

    </div>
  ) 
}

