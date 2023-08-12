import { db } from "src/lib/db";

export const tournaments = () => {
  return db.tournament.findMany();
};

export const tournament = ({ id }) => {
  return db.tournament.findUnique({
    where: { id },
  });
};

export const createTournament = ({ input }) => {
  return db.tournament.create({
    data: input,
  });
};

export const updateTournament = ({ id, input }) => {
  return db.tournament.update({
    data: input,
    where: { id },
  });
};

export const deleteTournament = ({ id }) => {
  return db.tournament.delete({
    where: { id },
  });
};

export const Tournament = {
  teams: (_obj, { root }) => {
    return db.tournament.findUnique({ where: { id: root?.id } }).teams();
  },
  Participant: (_obj, { root }) => {
    return db.tournament.findUnique({ where: { id: root?.id } }).Participant();
  },
};
