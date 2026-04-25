import React from 'react'
import Intro from './intro';
import Card from './card';
import Choose from './choose';

const Home = () => {


  return (
    <section className='h-auto'>
      <Intro />
      <Card />
      <Choose />
    </section>
  )
}

export default Home