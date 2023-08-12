import { db } from "src/lib/db";

export const teams = () => {
  return db.team.findMany();
};

export const team = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  });
};

export const createTeam = ({ input }) => {
  return db.team.create({
    data: input,
  });
};

export const updateTeam = ({ id, input }) => {
  return db.team.update({
    data: input,
    where: { id },
  });
};

export const deleteTeam = ({ id }) => {
  return db.team.delete({
    where: { id },
  });
};

export const Team = {
  tournament: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).tournament();
  },
  players: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).players();
  },
  Participant: (_obj, { root }) => {
    return db.team.findUnique({ where: { id: root?.id } }).Participant();
  },
};
