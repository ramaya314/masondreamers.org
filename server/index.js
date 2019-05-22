const path = require('path')

const kokolibserv = require('kokolibserv');

const {render} = require('../babel-src/serverRender')
const {default: configureStore} = require('../babel-src/store')
const api = require('./routes/api')

const initialStoreConfigurator = require('./initialStoreConfigurator')

var server = new kokolibserv.KokoServer({
  renderer : render, //(string function(req, store, context))
  initialStoreFetcher : initialStoreConfigurator,
  storeConfigurator : configureStore, //(store function(initialState = {}))
  staticAssetsLocation: path.resolve(__dirname, '..', 'build'),
  indexLocation: path.resolve(__dirname, '..', 'build', 'index.html'),
  facebook: {
    accessToken: process.env.FACEBOOK_TOKEN,
    entityId: ""
  },
  mail: {
    service: 'gmail',
    auth: {
      user: 'noreplymasondreamers@gmail.com',
      pass: process.env.MD_SMTP_PW
    }
  },
  eventbrite: {
    authToken: process.env.EVENTBRITE_TOKEN
  },
  google: {
    clientSecretLocation: "",
    photos: {
      tokenPath: "",
      blackList: []
    },
    blogger : {
      blogId: "6529276562525328016",
      tokenPath: ""
    },
    sheets: {
      tokenPath: ""
    },
    drive: {
      tokenPath: ""
    }
  },
  apiExpansion : api //(router function(config))
});

server.startServer();
