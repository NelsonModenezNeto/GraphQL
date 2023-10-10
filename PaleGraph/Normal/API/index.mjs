import { ApolloServer, gql } from 'apollo-server';
import knex from './mysql.mjs';


const typeDefs = gql`
    type Aluno{
    id: ID!
    ra: Int!
    nome: String!
    email: String!
    }

    type Query{
        alunos: [Aluno]!
        aluno(id: ID!): Aluno!
    }

    type Mutation{
        createAluno(ra: Int!, nome: String!, email: String!): Aluno!
        updateAluno(ra: Int!, nome: String, email: String!): Aluno!
        excluirAluno(ra: Int!): Aluno!
    }
`;

const resolvers = {
    Query: {
        alunos: async () => {
			return knex("alunospale").select("*");
		},
        aluno: async (_, { id }) => {
            const bancada = await knex("alunospale").where("id", id).first();
            return bancada;
		},
    },
    Mutation: {
        createAluno: async (_, {ra, nome, email}) => {
            await knex("alunospale").insert({ra, nome, email});
            const novoAluno = await knex("alunospale").where("ra", ra).first();
            return novoAluno;
        }
    },
    
};

const server = new ApolloServer({ typeDefs, resolvers, });
server.listen().then(({ url }) => {
    console.log(`Servidor GraphQL rodando em ${url}`);
});