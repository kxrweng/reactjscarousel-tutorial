import React, {useState, useEffect} from 'react'
import "../styles/Carousel.css"

function Carousel({images}) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null
    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        },3000)
    })
    const slideRight = () => {
       setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
  return (
    <div id = "carousel" 
    onMouseEnter={() => 
        {setAutoPlay(false);
        clearTimeout(timeOut);}}
    onMouseLeave = {() => {setAutoPlay(true)}}>
        <div id = "carousel_wrapper">
        {images.map((image,index) => {
            return (
                <div key = {index}
                 className = {index == current
                 ? "carousel_card carousel_card-active"
                : "carousel_card"}>
                    <img src = {image.image} id = "card_image"/>
                    <div id = "card_overlay">
                        <h2 id = "card_title">{image.title}</h2>
                        </div>
                 </div>
            )
        })}
        <div className="carousel_arrow_left" onClick = {slideLeft}>&lsaquo;</div>
        <div className="carousel_arrow_right" onClick = {slideRight}>&rsaquo;</div>

        <div className = "carousel_pagination">
            {images.map((image,index) =>{
                return (
                    <div key = {index}
                    className = {index == current ? "pagination_dot pagination_dot-active"
                :"pagination_dot"} onClick ={() => setCurrent(index)}> </div>
                )
            })}
        </div>
        </div>
       
    </div>
  )
}

export default Carousel