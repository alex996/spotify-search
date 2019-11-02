import React from 'react'
import PropTypes from 'prop-types'
import Artist from './Artist'

const Artists = ({ artists }) => (
  <div className='cards'>
    {!!artists.length && (
      artists.map(artist => <Artist {...artist} key={artist.id} />)
    )}
  </div>
)

Artists.propTypes = {
  artists: PropTypes.array
}

export default Artists
