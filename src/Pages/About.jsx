import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const facts =[
  {
  id: 1,
  name: 'J.K. Rowling and Harry Potter have the same birthday, which is July 31.'
  },
  {
  id: 2,
  name: ' Dumbledore has a deeper meaning. It\'s actually an Old English word for "bumblebee."'
  },
  {
  id: 3,
  name: 'Although Hogwarts is in England and Harry lived in London, much of the series is inspired by Edinburgh, Scotland, where Rowling lives.'
  },
  {
    id: 4,
  }
]

const About = () => {

  return (
    <>
    <div>
      <h2>About</h2>
      <p>A full list of Harry Potter characters would require dozens of entries. 
        The series covers various students at Hogwarts, each in a different House. 
        When students first arrive, they are sorted into one of four Houses: 
        Gryffindor, Slytherin, Ravenclaw, and Hufflepuff. 
        Selection is based on the student's strengths, competence, and desires. 
        The two main houses in the narrative are Gryffindor and Slytherin. 
        With the main protagonists, Harry Potter characters in Gryffindor are typically depicted as being good. 
        Most Slytherin characters, on the other hand, are antagonists.</p>
    </div>

    <div className='facts'>
    {facts.map(fact => (
          <Link key={fact.id} to={`/about/facts/${fact.id}`}>
            Fact {fact.id}
          </Link>
        ))}
    </div>
    <Outlet/>

   
    </>
  )
}

export default About