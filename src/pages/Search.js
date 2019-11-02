import React, { useState } from 'react'
import { searchUrl } from '../api'
import icon from '../icons/search.png'

const Search = () => {
  const [query, setQuery] = useState('')
  const handleChange = e => setQuery(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()

    if (query) {
      const res = await fetch(`${searchUrl}?q=${query}&type=artist`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })

      const body = await res.json()

      console.log(body)
    }
  }

  return (
    <form className='fullscreen' onSubmit={handleSubmit}>
      <div className='box search'>
        <input
          className='search-box'
          placeholder='Search for an artist...'
          value={query}
          onChange={handleChange}
        />
        <input type='image' src={icon} alt='Search' draggable={false} />
      </div>
    </form>
  )
}

export default Search
