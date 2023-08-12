export const standard = defineScenario({
  participant: {
    one: {
      data: {
        tournament: {
          create: {
            name: "String",
            startDate: "2023-08-12T12:39:55.699Z",
            endDate: "2023-08-12T12:39:55.699Z",
          },
        },
        team: {
          create: {
            tournament: {
              create: {
                name: "String",
                startDate: "2023-08-12T12:39:55.699Z",
                endDate: "2023-08-12T12:39:55.699Z",
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        tournament: {
          create: {
            name: "String",
            startDate: "2023-08-12T12:39:55.699Z",
            endDate: "2023-08-12T12:39:55.699Z",
          },
        },
        team: {
          create: {
            tournament: {
              create: {
                name: "String",
                startDate: "2023-08-12T12:39:55.699Z",
                endDate: "2023-08-12T12:39:55.699Z",
              },
            },
          },
        },
      },
    },
  },
});
