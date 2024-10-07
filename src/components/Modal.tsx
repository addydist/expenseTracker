import React, { useState } from 'react';
import { ModalOverlay, ModalContent,Select, Title, Form, Label, Input, HelperText, ButtonContainer, CancelButton, AddTrac } from '.././styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (description: string, amount: number) => void;
}

export default function Modal({ isOpen, onClose, onAddTransaction }: ModalProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [transactionType, setTransactionType] = useState<'expense' | 'budget'>('expense'); // New state for transaction type

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (description.length > 15) {
      setError('Description must not exceed 15 characters');
      return;
    }
    
    if (amount.length > 10) {
      setError('Amount must not exceed 10 digits');
      return;
    }

    if (!description || !amount) {
      setError('Please fill in all fields');
      return;
    }

    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      setError('Please enter a valid number for the amount');
      return;
    }
    const adjustedAmount = transactionType === 'expense' ? -Math.abs(amountNumber) : Math.abs(amountNumber);

    onAddTransaction(description, adjustedAmount);
    resetFields();
    onClose();
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
    

    if (value.length <= 15) {
      setError(null);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setAmount(value);
      
      setError(null);
    }
  };

  const handleCancel = () => {
    resetFields();
    onClose();
  };

  const resetFields = () => {
    setDescription('');
    setAmount('');
    setError(null);
    setTransactionType('expense'); // Reset to default type
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Add Transaction</Title>
        <Form onSubmit={handleSubmit}>
        <Select
            id="transactionType"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value as 'expense' | 'budget')}
          >
            <option value="expense">Add Expense</option>
            <option value="budget">Add Budget</option>
          </Select>
          <Label htmlFor="description">Description*</Label>
          <Input
            id="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description..."
          />

          <Label htmlFor="amount">Amount*</Label>
          <Input
            id="amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />

          {error && <HelperText style={{ color: 'red' }}>{error}</HelperText>}

          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              CANCEL
            </CancelButton>
            <AddTrac type="submit">ADD TRANSACTION</AddTrac>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
