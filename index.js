import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// db
import db from './_db.js'

// types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: { 
        startups() {
            return db.startups
        } 
    }
}
// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)