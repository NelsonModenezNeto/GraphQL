import knex from '../mysql.mjs';

const resolvers = {
  Query: {
    alunos: async () => {
      return knex("alunospale").select("*");
    },
    aluno: async (_, { ra }) => {
      const aluno = await knex("alunospale").where("ra", ra).first();
      return aluno;
    },
    professores: async () => {
      return knex("professorespale").select("*");
    },
  },
  Mutation: {
    createAluno: async (_, { ra, nome, email }) => {
      await knex("alunospale").insert({ ra, nome, email });
      const novoAluno = await knex("alunospale").where("ra", ra).first();
      return novoAluno;
    }
  },

};

export default resolvers;