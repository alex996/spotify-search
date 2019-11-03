# spotify-search

Search artists and their albums on Spotify.

## Demo

See this project live on [GitHub Pages](https://alex996.github.io/spotify-search/). Just beware that GitHub Pages [doesn't support](https://github.com/isaacs/github/issues/408) SPA routing, so manual page reloads may cause a 404 page. In general, the front-end handles reloads gracefully as long as the server is configured to fall back to `index.html`. As such, you won't encounter this issue in dev, for example.

## Installation

```sh
# Clone the repo
git clone https://github.com/alex996/spotify-search.git

cd spotify-search
```

### Development

```sh
# Start a dev server
npm start
```

### Production

```sh
# Build a prod bundle
npm run build

# Serve prod bundle
npm run serve
```
