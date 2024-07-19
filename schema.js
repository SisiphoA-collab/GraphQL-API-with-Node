 const { ApolloServer, gql } = require('apollo-server');

    // Hardcoded array of startups
    const startups = [
      { id: 1, name: "Startup A", industry: "Tech", location: "East London" },
      { id: 2, name: "Startup B", industry: "Health", location: "Cape Town" },
      { id: 3, name: "Startup C", industry: "Finance", location: "Johannesburg" },
    ];
    
    // Define the schema using GraphQL schema language

    const typeDefs = gql`
      type Startup {
        id: ID!
        name: String!
        industry: String!
        location: String!
      }
    
      type Query {
        startups: [Startup]
        startup(id: ID!): Startup
      }
    `;
    
    // Define the resolvers
    const resolvers = {
      Query: {
        startups: () => startups,
        startup: (parent, args) => startups.find(startup => startup.id === parseInt(args.id)),
      },
    };
    
    // Create an Apollo Server instance
    const server = new ApolloServer({ typeDefs, resolvers });
    
    // Start the server
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });