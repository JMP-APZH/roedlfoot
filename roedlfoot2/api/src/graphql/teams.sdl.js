export const schema = gql`
  type Team {
    id: Int!
    tournament: Tournament!
    tournamentId: Int!
    players: [User]!
    score: Int!
    Participant: [Participant]!
  }

  type Query {
    teams: [Team!]! @requireAuth
    team(id: Int!): Team @requireAuth
  }

  input CreateTeamInput {
    tournamentId: Int!
    score: Int!
  }

  input UpdateTeamInput {
    tournamentId: Int
    score: Int
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team! @requireAuth
    updateTeam(id: Int!, input: UpdateTeamInput!): Team! @requireAuth
    deleteTeam(id: Int!): Team! @requireAuth
  }
`;
