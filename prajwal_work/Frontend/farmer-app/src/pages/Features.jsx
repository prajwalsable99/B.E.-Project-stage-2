import React from 'react'
import Recommender from '../components/Recommender'
import Predictor1 from '../components/Predictor1'
const Features = () => {
  return (
    <div className=' bg-black w-full min-h-screen pt-16'>
      
      {/* <marquee>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magnam quam iure delectus dolorem quia expedita! Alias error animi debitis dicta culpa suscipit earum cupiditate sunt nobis, mollitia, corrupti a!</marquee> */}
        <Predictor1 cropname="rice"/>
        <Recommender/>

</div>


   
  )
}

export default Features
