import {
  matches,
  match,
  createMatch,
  updateMatch,
  deleteMatch,
} from "./matches";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("matches", () => {
  scenario("returns all matches", async (scenario) => {
    const result = await matches();

    expect(result.length).toEqual(Object.keys(scenario.match).length);
  });

  scenario("returns a single match", async (scenario) => {
    const result = await match({ id: scenario.match.one.id });

    expect(result).toEqual(scenario.match.one);
  });

  scenario("creates a match", async () => {
    const result = await createMatch({
      input: {
        name: "String",
        startDate: "2023-08-13T12:08:05.247Z",
        endDate: "2023-08-13T12:08:05.247Z",
      },
    });

    expect(result.name).toEqual("String");
    expect(result.startDate).toEqual(new Date("2023-08-13T12:08:05.247Z"));
    expect(result.endDate).toEqual(new Date("2023-08-13T12:08:05.247Z"));
  });

  scenario("updates a match", async (scenario) => {
    const original = await match({ id: scenario.match.one.id });
    const result = await updateMatch({
      id: original.id,
      input: { name: "String2" },
    });

    expect(result.name).toEqual("String2");
  });

  scenario("deletes a match", async (scenario) => {
    const original = await deleteMatch({
      id: scenario.match.one.id,
    });
    const result = await match({ id: original.id });

    expect(result).toEqual(null);
  });
});
