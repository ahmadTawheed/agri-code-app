import React from 'react'
import HeadText from './head'
import SearchBox from './search'
import LibraryCards from './libCards'

const Library = () => {
  return (
    <section className='h-auto pt-35'>
        <HeadText/>
        <SearchBox />
        <LibraryCards />
    </section>
  )
}

export default Library