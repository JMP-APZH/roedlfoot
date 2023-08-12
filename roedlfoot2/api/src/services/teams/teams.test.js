import { teams, team, createTeam, updateTeam, deleteTeam } from "./teams";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("teams", () => {
  scenario("returns all teams", async (scenario) => {
    const result = await teams();

    expect(result.length).toEqual(Object.keys(scenario.team).length);
  });

  scenario("returns a single team", async (scenario) => {
    const result = await team({ id: scenario.team.one.id });

    expect(result).toEqual(scenario.team.one);
  });

  scenario("creates a team", async (scenario) => {
    const result = await createTeam({
      input: { tournamentId: scenario.team.two.tournamentId },
    });

    expect(result.tournamentId).toEqual(scenario.team.two.tournamentId);
  });

  scenario("updates a team", async (scenario) => {
    const original = await team({ id: scenario.team.one.id });
    const result = await updateTeam({
      id: original.id,
      input: { tournamentId: scenario.team.two.tournamentId },
    });

    expect(result.tournamentId).toEqual(scenario.team.two.tournamentId);
  });

  scenario("deletes a team", async (scenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id });
    const result = await team({ id: original.id });

    expect(result).toEqual(null);
  });
});
