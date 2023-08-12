import { users, user, createUser, updateUser, deleteUser } from "./users";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("users", () => {
  scenario("returns all users", async (scenario) => {
    const result = await users();

    expect(result.length).toEqual(Object.keys(scenario.user).length);
  });

  scenario("returns a single user", async (scenario) => {
    const result = await user({ id: scenario.user.one.id });

    expect(result).toEqual(scenario.user.one);
  });

  scenario("creates a user", async () => {
    const result = await createUser({
      input: {
        username: "String4214275",
        fullName: "String",
        email: "String1185860",
        tournamentId: 600235,
      },
    });

    expect(result.username).toEqual("String4214275");
    expect(result.fullName).toEqual("String");
    expect(result.email).toEqual("String1185860");
    expect(result.tournamentId).toEqual(600235);
  });

  scenario("updates a user", async (scenario) => {
    const original = await user({ id: scenario.user.one.id });
    const result = await updateUser({
      id: original.id,
      input: { username: "String72592622" },
    });

    expect(result.username).toEqual("String72592622");
  });

  scenario("deletes a user", async (scenario) => {
    const original = await deleteUser({ id: scenario.user.one.id });
    const result = await user({ id: original.id });

    expect(result).toEqual(null);
  });
});
