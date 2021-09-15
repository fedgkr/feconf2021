import { atom, useAtom } from "jotai";

export const mobileMenu = atom(false);
export const reservationModalState = atom(false);

export const useMobileMenu = () => useAtom(mobileMenu);
export const useReservationModal = () => useAtom(reservationModalState);
