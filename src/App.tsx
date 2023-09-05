import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <button onClick={() => (modalOpen ? closeModal() : openModal())}>
        Open modal
      </button>
      <Modal isOpen={modalOpen} className="modal" handleClose={closeModal}>
        <p>i'm your reusable modal!</p>
      </Modal>
    </>
  );
}

export default App;
