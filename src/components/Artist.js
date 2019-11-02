import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import { star } from '../icons'

const Artist = ({ image, name, followers, stars }) => (
  <Card
    imgSrc={image}
    title={name}
    subtitle={`${followers} followers`}
    footer={Array.from(Array(stars), (_, index) => (
      <img key={index} className='star' src={star} alt='Star' />
    ))}
  />
)

Artist.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default Artist
