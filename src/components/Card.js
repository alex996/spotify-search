import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ imgSrc, href = '#', title, subtitle, body, footer }) => (
  <div className='card'>
    <a href={href}>
      <figure>
        <img src={imgSrc} alt={title} draggable={false} />
      </figure>
    </a>
    <div className='card-content'>
      <h2>{title}</h2>

      <h3>{subtitle}</h3>

      {body && <p>{body}</p>}
    </div>
    <div className='card-footer'>
      {footer}
    </div>
  </div>
)

Card.propTypes = {
  imgSrc: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.node
}

export default Card
