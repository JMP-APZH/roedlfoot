import {
  tournaments,
  tournament,
  createTournament,
  updateTournament,
  deleteTournament,
} from "./tournaments";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("tournaments", () => {
  scenario("returns all tournaments", async (scenario) => {
    const result = await tournaments();

    expect(result.length).toEqual(Object.keys(scenario.tournament).length);
  });

  scenario("returns a single tournament", async (scenario) => {
    const result = await tournament({ id: scenario.tournament.one.id });

    expect(result).toEqual(scenario.tournament.one);
  });

  scenario("creates a tournament", async () => {
    const result = await createTournament({
      input: {
        name: "String",
        startDate: "2023-08-12T12:38:58.270Z",
        endDate: "2023-08-12T12:38:58.270Z",
      },
    });

    expect(result.name).toEqual("String");
    expect(result.startDate).toEqual(new Date("2023-08-12T12:38:58.270Z"));
    expect(result.endDate).toEqual(new Date("2023-08-12T12:38:58.270Z"));
  });

  scenario("updates a tournament", async (scenario) => {
    const original = await tournament({
      id: scenario.tournament.one.id,
    });
    const result = await updateTournament({
      id: original.id,
      input: { name: "String2" },
    });

    expect(result.name).toEqual("String2");
  });

  scenario("deletes a tournament", async (scenario) => {
    const original = await deleteTournament({
      id: scenario.tournament.one.id,
    });
    const result = await tournament({ id: original.id });

    expect(result).toEqual(null);
  });
});
