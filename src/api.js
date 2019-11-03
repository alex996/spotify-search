const clientId = '62f848b1fd034191b968798fbbe9b545'

export const loginUrl = (
  'https://accounts.spotify.com/authorize?' +
  `client_id=${clientId}&` +
  'response_type=token&' +
  `redirect_uri=${encodeURIComponent(window.location.origin)}`
)

const searchUrl = 'https://api.spotify.com/v1/search'

const number = new Intl.NumberFormat()

const mapArtist = ({ id, name, images, followers, popularity }) => ({
  id,
  name,
  image: images[1] ? images[1].url : 'https://via.placeholder.com/250',
  followers: number.format(followers.total),
  stars: Math.round(popularity / 20)
})

export const searchArtists = query =>
  fetch(`${searchUrl}?q=${query}&type=artist`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
  }).then(({ artists }) => artists.items.map(mapArtist))
