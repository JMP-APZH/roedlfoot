export const schema = gql`
  type Team {
    id: Int!
    players: [User]!
    score: Int!
    participants: [Participant]!
    match: Match!
    matchId: Int!
  }

  type Query {
    teams: [Team!]! @requireAuth
    team(id: Int!): Team @requireAuth
  }

  input CreateTeamInput {
    score: Int!
    matchId: Int!
  }

  input UpdateTeamInput {
    score: Int
    matchId: Int
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team! @requireAuth
    updateTeam(id: Int!, input: UpdateTeamInput!): Team! @requireAuth
    deleteTeam(id: Int!): Team! @requireAuth
  }
`;
