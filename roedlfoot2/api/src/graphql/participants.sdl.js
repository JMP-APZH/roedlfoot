export const schema = gql`
  type Participant {
    id: Int!
    tournament: Tournament!
    team: Team!
    userId: Int!
    tournamentId: Int!
    teamId: Int!
    teamA: User
    teamB: User
  }

  type Query {
    participants: [Participant!]! @requireAuth
    participant(id: Int!): Participant @requireAuth
  }

  input CreateParticipantInput {
    userId: Int!
    tournamentId: Int!
    teamId: Int!
  }

  input UpdateParticipantInput {
    userId: Int
    tournamentId: Int
    teamId: Int
  }

  type Mutation {
    createParticipant(input: CreateParticipantInput!): Participant! @requireAuth
    updateParticipant(id: Int!, input: UpdateParticipantInput!): Participant!
      @requireAuth
    deleteParticipant(id: Int!): Participant! @requireAuth
  }
`;
