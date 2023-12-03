import React from 'react'
import Menu from "../../images/menu.png";
import Section from '../../component/section'
const content2 = { h2: "Jerome Billings", p: "Jerome Billings dirige l'équipe de Qyru et s'adonne tout particuliairement à la cuisine moléculaire depuis très longtemps. Sa maitrise des éléments et des réactions chimiques lui permet de vous amenez vers un univers culinaire des plus particuliers." }

const About = () => {
  return (
    <div style={{ height: '100vh' }}>
     <Section content={content2} image={Menu} background={"#edd8996d"} isReverseColumn={true} />
    </div>
  )
}

export default About