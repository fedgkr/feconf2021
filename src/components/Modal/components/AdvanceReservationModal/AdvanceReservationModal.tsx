import React from 'react';
import Modal from "~/components/Modal/Modal";
import { useReservationModal } from "~/data/states/modal.state";
import { useAuthenticating, useCurrentUser } from "~/data/states/auth.state";
import { container } from "./AdvanceReservationModal.module.scss";
import Agreements from "~/components/Modal/components/AdvanceReservationModal/components/Agreements/Agreements";
import GitHubUserMessageForm
  from "~/components/Modal/components/AdvanceReservationModal/components/GitHubUserMessageForm/GitHubUserMessageForm";

interface AdvanceReservationModalProps {}

const AdvanceReservationModal: React.FC<AdvanceReservationModalProps> = () => {
  const [active, setActive] = useReservationModal();
  const [authenticating] = useAuthenticating();
  const currentUser = useCurrentUser();
  const afterAuthenticated = authenticating || currentUser;
  return (
    <Modal active={active} onClose={() => setActive(false)}>
      <div className={container}>
        <h2>사전 예약</h2>
        <p>
          GitHub 계정으로 사전 등록해주세요. <br/>
          이메일을 통해 FEConf의 소식을 전달해드립니다.
        </p>
        { afterAuthenticated ? <GitHubUserMessageForm/> : <Agreements/> }
      </div>
    </Modal>
  );
}

export default AdvanceReservationModal;
