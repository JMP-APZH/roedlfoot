import { db } from "src/lib/db";

export const participants = () => {
  return db.participant.findMany();
};

export const participant = ({ id }) => {
  return db.participant.findUnique({
    where: { id },
  });
};

export const createParticipant = ({ input }) => {
  return db.participant.create({
    data: input,
  });
};

export const updateParticipant = ({ id, input }) => {
  return db.participant.update({
    data: input,
    where: { id },
  });
};

export const deleteParticipant = ({ id }) => {
  return db.participant.delete({
    where: { id },
  });
};

export const Participant = {
  team: (_obj, { root }) => {
    return db.participant.findUnique({ where: { id: root?.id } }).team();
  },
  match: (_obj, { root }) => {
    return db.participant.findUnique({ where: { id: root?.id } }).match();
  },
};
