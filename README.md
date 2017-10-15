### Spotify Explorer

## Play around with Spotify API to access account info like top tracks, artist info, etc.

## Usage

Register an application on Spotify Developer website
Under My Applications, get Client Key and Secret Key, and add these to a .env file as variables clientID and clientSecret
In My Applications, under Redirect URIs, add the URI http://localhost:8080/callback/
Scroll to the bottom and save your Application settings

In app:
Install dependencies and start the server

```
npm install
node server.js
open http://localhost:8080
```

In browser
Go to localhost:8080
Sign into your Spotify account via the html page borrowed from Spotify developer
Under index.html, there is an ajax call with a comment about Wolf Alice in it. That was my experiment to make a GET request for artist info.
The rest of the code in that script is Spotify's, and will probably be cut down once we know what's actually necessary