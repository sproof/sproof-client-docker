let config = {
  api:{
    port: 6001
  },
  commit: {
    time: '17:00',
    //interval: 10
  },

  validateOnlyConfirmedIssuers: true,

  sproof: {
    uri: 'https://api.sproof.io/',
    sproofPremium: true,
    credentials: {
      sproofCode: 'YOUR SPROOF CODE'
    },

    chainId: '3',
    chain: 'ethereum',
    version: '0.42',
  },

  env: 'development',
  debug: true
};

module.exports = config;
