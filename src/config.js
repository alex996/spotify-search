export const clientId = '62f848b1fd034191b968798fbbe9b545'

export const loginUrl = (
  'https://accounts.spotify.com/authorize?' +
  `client_id=${clientId}&` +
  'response_type=token&' +
  `redirect_uri=${encodeURIComponent(window.location.href)}`
)

export const searchUrl = 'https://api.spotify.com/v1/search'
