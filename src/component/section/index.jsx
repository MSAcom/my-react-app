import React, { useState} from 'react'
import './index.css'
const Section = ({ content, image, background, isReverseColumn , isReverseRow}) => {
   

    const wrapReverseColumnToggle = (isReverseColumn) => {
        if(isReverseColumn) {
            return "wrap-reverse"
        }else return "wrap"
    }
      const wrapReverseRowToggle = (isReverseRow) => {
        if(isReverseRow) {
            return "row-reverse"
        }else return "row"
    }
    
  return (
      <div className='section' style={{backgroundColor : background, flexWrap: wrapReverseColumnToggle(isReverseColumn), flexDirection: wrapReverseRowToggle(isReverseRow)  }}>
          
          <div className="left_section" >
              <div className="container">
              <h2 className={"left_section_head font-bold text-76"}>{content.h2}</h2>
              <p className='left_section_p'>{ content.p}</p>
              <button className='readmore'>Read More</button>
              </div>
          </div>
          <div className="rigth_section">
              <img src={image} alt="mon image" />
          </div>
    </div>
  )
}

export default Section