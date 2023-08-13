export const schema = gql`
  type Participant {
    id: Int!
    team: Team!
    userId: Int!
    teamId: Int!
    match: Match!
    matchId: Int!
  }

  type Query {
    participants: [Participant!]! @requireAuth
    participant(id: Int!): Participant @requireAuth
  }

  input CreateParticipantInput {
    userId: Int!
    teamId: Int!
    matchId: Int!
  }

  input UpdateParticipantInput {
    userId: Int
    teamId: Int
    matchId: Int
  }

  type Mutation {
    createParticipant(input: CreateParticipantInput!): Participant! @requireAuth
    updateParticipant(id: Int!, input: UpdateParticipantInput!): Participant!
      @requireAuth
    deleteParticipant(id: Int!): Participant! @requireAuth
  }
`;
