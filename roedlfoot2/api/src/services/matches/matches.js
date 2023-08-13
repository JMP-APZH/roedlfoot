import { db } from "src/lib/db";

export const matches = () => {
  return db.match.findMany();
};

export const match = ({ id }) => {
  return db.match.findUnique({
    where: { id },
  });
};

export const createMatch = ({ input }) => {
  return db.match.create({
    data: input,
  });
};

export const updateMatch = ({ id, input }) => {
  return db.match.update({
    data: input,
    where: { id },
  });
};

export const deleteMatch = ({ id }) => {
  return db.match.delete({
    where: { id },
  });
};

export const Match = {
  participants: (_obj, { root }) => {
    return db.match.findUnique({ where: { id: root?.id } }).participants();
  },
  Team: (_obj, { root }) => {
    return db.match.findUnique({ where: { id: root?.id } }).Team();
  },
};
