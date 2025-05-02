import React from 'react'
import { useParams } from 'react-router-dom'
import {facts} from './About'
import Oops from '../assets/Ron Weasley.jpg'




const Facts = () => { 
const param = useParams()
const fact = facts.find(fct=>fct.id == param.id)

if(!fact.name){
return <div>
  <h1>No gossips for you! Sorry,may be next time</h1>
  <img src={Oops} className='ron' alt="Fact, not found" />
  </div>

}

  return (
    <div>
        <h1>Interesting facts about the novel</h1>
        <h2>{fact.name}</h2>
       
    </div>
  )
}

export default Facts