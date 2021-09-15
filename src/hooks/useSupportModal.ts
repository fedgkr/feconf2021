import qs from 'query-string';
import { useEffect } from "react";
import { useAuthenticating } from "~/data/states/auth.state";
import { useReservationModal } from "~/data/states/modal.state";

export const useAfterLoginModal = () => {
  const [, setAuth] = useAuthenticating();
  const [, setModal] = useReservationModal();
  useEffect(() => {
    const parsed = qs.parseUrl(location.href);
    if (parsed.query.loginRedirect) {
      history.replaceState(null, '', '/');
      setAuth(true);
      setModal(true);
    }
  }, []);
}
