import { AnimatePresence } from "framer-motion";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <ModalWrapper handleClose={close}>
          <p>I'm your reusable modal!</p>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
