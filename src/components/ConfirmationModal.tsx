// ConfirmationModal.tsx
import React from "react";
import { ModalContainer, ConfirmModalContent, ConfirmButton } from "../styles"; // Adjust the import path accordingly

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ConfirmModalContent>
        <h2>Are you sure you want to remove this transaction?</h2>
        <div>
          <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
          <ConfirmButton onClick={onClose}>Cancel</ConfirmButton>
        </div>
      </ConfirmModalContent>
    </ModalContainer>
  );
};

export default ConfirmationModal;
