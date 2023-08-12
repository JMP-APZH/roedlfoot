import {
  participants,
  participant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} from "./participants";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("participants", () => {
  scenario("returns all participants", async (scenario) => {
    const result = await participants();

    expect(result.length).toEqual(Object.keys(scenario.participant).length);
  });

  scenario("returns a single participant", async (scenario) => {
    const result = await participant({ id: scenario.participant.one.id });

    expect(result).toEqual(scenario.participant.one);
  });

  scenario("creates a participant", async (scenario) => {
    const result = await createParticipant({
      input: {
        userId: scenario.participant.two.userId,
        tournamentId: scenario.participant.two.tournamentId,
        teamId: scenario.participant.two.teamId,
      },
    });

    expect(result.userId).toEqual(scenario.participant.two.userId);
    expect(result.tournamentId).toEqual(scenario.participant.two.tournamentId);
    expect(result.teamId).toEqual(scenario.participant.two.teamId);
  });

  scenario("updates a participant", async (scenario) => {
    const original = await participant({
      id: scenario.participant.one.id,
    });
    const result = await updateParticipant({
      id: original.id,
      input: { tournamentId: scenario.participant.two.userId },
    });

    expect(result.tournamentId).toEqual(scenario.participant.two.userId);
  });

  scenario("deletes a participant", async (scenario) => {
    const original = await deleteParticipant({
      id: scenario.participant.one.id,
    });
    const result = await participant({ id: original.id });

    expect(result).toEqual(null);
  });
});
