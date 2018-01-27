module.exports = {
    "apiPrefix": "http://localhost:3001/",
    "serverPort": "3001",
    "cookieKey":  process.env.cookieKey,
    "mongo_URL":  process.env.mongo_URL,
    "googleAuth":{
        "googleClientId" : process.env.googleClientId,
        "googleClientSecret" : process.env.googleClientSecret,
        "callbackURL": process.env.callbackURL
    }
};

