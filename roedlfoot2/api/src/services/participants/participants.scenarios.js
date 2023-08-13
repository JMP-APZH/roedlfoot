export const standard = defineScenario({
  participant: {
    one: {
      data: {
        userId: 9381435,
        team: {
          create: {
            match: {
              create: {
                name: "String",
                startDate: "2023-08-13T11:59:58.974Z",
                endDate: "2023-08-13T11:59:58.974Z",
              },
            },
          },
        },
        match: {
          create: {
            name: "String",
            startDate: "2023-08-13T11:59:58.974Z",
            endDate: "2023-08-13T11:59:58.974Z",
          },
        },
      },
    },
    two: {
      data: {
        userId: 2625009,
        team: {
          create: {
            match: {
              create: {
                name: "String",
                startDate: "2023-08-13T11:59:58.974Z",
                endDate: "2023-08-13T11:59:58.974Z",
              },
            },
          },
        },
        match: {
          create: {
            name: "String",
            startDate: "2023-08-13T11:59:58.974Z",
            endDate: "2023-08-13T11:59:58.974Z",
          },
        },
      },
    },
  },
});
