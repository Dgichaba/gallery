var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://dgichaba:<password>@mycluster1.jdcsfzz.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://dgichaba:<password>@mycluster1.jdcsfzz.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://dgichaba:<password>@mycluster1.jdcsfzz.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
