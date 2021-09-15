import { atom, useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";

export const authenticated = atom(false);
export const authenticating = atom(false);
export const currentUser = atom<User>(null);

export const useAuthenticated = () => useAtom(authenticated);
export const useAuthenticating = () => useAtom(authenticating);
export const useCurrentUser = () => useAtomValue(currentUser);
