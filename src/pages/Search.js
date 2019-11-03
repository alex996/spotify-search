import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { searchArtists } from '../api'
import { search } from '../icons'
import { Artists } from '../components'

const Search = ({ query, setQuery, artists, setArtists }) => {
  const handleChange = e => setQuery(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()

    if (query) {
      searchArtists(query).then(setArtists)
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

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArtists: PropTypes.func.isRequired
}

export default Search
