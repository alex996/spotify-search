import React, { useState } from 'react'
import clsx from 'clsx'
import { searchUrl } from '../api'
import { search } from '../icons'
import { Artists } from '../components'

const Search = () => {
  const [query, setQuery] = useState('')
  const [artists, setArtists] = useState([])
  const handleChange = e => setQuery(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()

    if (query) {
      const res = await fetch(`${searchUrl}?q=${query}&type=artist`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })

      if (res.ok) {
        const { artists } = await res.json()

        const number = new Intl.NumberFormat()

        setArtists(artists.items.map(
          ({ id, name, images, followers, popularity }) => ({
            id,
            name,
            image: images[1] ? images[1].url : 'https://via.placeholder.com/250',
            followers: number.format(followers.total),
            stars: Math.round(popularity / 20)
          })
        ))
      }
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx('flex', !artists.length && 'fullscreen')}
      >
        <div className='box search'>
          <input
            className='search-box'
            placeholder='Search for an artist...'
            value={query}
            onChange={handleChange}
          />
          <input type='image' src={search} alt='Search' draggable={false} />
        </div>
      </form>
      <Artists artists={artists} />
    </>
  )
}

export default Search
