import { atom, useAtom } from "jotai";

export const mobileMenu = atom(false);
export const reservationModalState = atom(false);
export const sessionDetailModalState = atom<{ active: boolean; data?: Session }>({ active: false });

export const useMobileMenu = () => useAtom(mobileMenu);
export const useReservationModal = () => useAtom(reservationModalState);
export const useSessionDetail = () => useAtom(sessionDetailModalState);
