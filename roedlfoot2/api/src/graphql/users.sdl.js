export const schema = gql`
  type User {
    id: Int!
    username: String!
    fullName: String
    email: String
    hashedPassword: String
    salt: String
    refreshToken: String
    Team: Team
    teamId: Int
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    fullName: String
    email: String
    hashedPassword: String
    salt: String
    refreshToken: String
    teamId: Int
  }

  input UpdateUserInput {
    username: String
    fullName: String
    email: String
    hashedPassword: String
    salt: String
    refreshToken: String
    teamId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
