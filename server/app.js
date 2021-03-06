const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

// this is saying when you chose route /graphql let graphql handle request

app.use('/graphql', graphqlHTTP({ 
    schema
}))

app.listen(4000,()=>{
    console.log('now listening today')
})