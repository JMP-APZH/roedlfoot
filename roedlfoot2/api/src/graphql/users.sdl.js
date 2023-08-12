export const schema = gql`
  type User {
    id: Int!
    username: String!
    fullName: String!
    email: String!
    hashedPassword: String
    refreshToken: String
    tournamentsA: [Participant]!
    tournamentsB: [Participant]!
    tournamentId: Int!
    Team: Team
    teamId: Int
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    fullName: String!
    email: String!
    hashedPassword: String
    refreshToken: String
    tournamentId: Int!
    teamId: Int
  }

  input UpdateUserInput {
    username: String
    fullName: String
    email: String
    hashedPassword: String
    refreshToken: String
    tournamentId: Int
    teamId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
