export const schema = gql`
  type Match {
    id: Int!
    name: String!
    startDate: DateTime!
    endDate: DateTime!
    participants: [Participant]!
    Team: [Team]!
  }

  type Query {
    matches: [Match!]! @requireAuth
    match(id: Int!): Match @requireAuth
  }

  input CreateMatchInput {
    name: String!
    startDate: DateTime!
    endDate: DateTime!
  }

  input UpdateMatchInput {
    name: String
    startDate: DateTime
    endDate: DateTime
  }

  type Mutation {
    createMatch(input: CreateMatchInput!): Match! @requireAuth
    updateMatch(id: Int!, input: UpdateMatchInput!): Match! @requireAuth
    deleteMatch(id: Int!): Match! @requireAuth
  }
`;
