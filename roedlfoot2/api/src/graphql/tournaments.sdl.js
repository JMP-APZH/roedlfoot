export const schema = gql`
  type Tournament {
    id: Int!
    name: String!
    startDate: DateTime!
    endDate: DateTime!
    teams: [Team]!
    Participant: [Participant]!
  }

  type Query {
    tournaments: [Tournament!]! @requireAuth
    tournament(id: Int!): Tournament @requireAuth
  }

  input CreateTournamentInput {
    name: String!
    startDate: DateTime!
    endDate: DateTime!
  }

  input UpdateTournamentInput {
    name: String
    startDate: DateTime
    endDate: DateTime
  }

  type Mutation {
    createTournament(input: CreateTournamentInput!): Tournament! @requireAuth
    updateTournament(id: Int!, input: UpdateTournamentInput!): Tournament!
      @requireAuth
    deleteTournament(id: Int!): Tournament! @requireAuth
  }
`;
