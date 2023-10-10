import {ApolloServer} from 'apollo-server';
import typeDefs from './GhaphQL/typeDef.mjs';
import resolvers from './GhaphQL/resolver.mjs';


const server = new ApolloServer({ typeDefs, resolvers, });
server.listen().then(({ url }) => {
    console.log(`Servidor GraphQL rodando em ${url}`);
});