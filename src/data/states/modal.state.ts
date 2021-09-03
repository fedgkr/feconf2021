import { atom, useAtom } from "jotai";

export const reservationModalState = atom(false);

export const useReservationModal = () => useAtom(reservationModalState);
