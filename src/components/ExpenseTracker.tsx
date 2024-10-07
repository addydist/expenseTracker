import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Balance,
  BalanceText,
  AddButton,
  BoxContainer,
  Box,
  BoxTitle,
  BoxAmount,
  SearchInput,
  TransactionList,
  TransactionItem,
  RemoveButton,
} from ".././styles";
import Modal from "./Modal";
import ConfirmationModal from "./ConfirmationModal";

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

export default function Component() {
  const [balance, setBalance] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);
  const [transactionToRemove, setTransactionToRemove] = useState<number | null>(
    null
  );
  useEffect(() => {
    calculateBalance();
  }, [transactions]);

  const calculateBalance = () => {
    const newBalance = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setBalance(newBalance);
    setExpense(
      transactions
        .filter((t) => t.amount < 0)
        .reduce((acc, t) => acc + Math.abs(t.amount), 0)
    );
    setBudget(
      transactions
        .filter((t) => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0)
    );
  };

  const addTransaction = (description: string, amount: number) => {
    setTransactions([...transactions, { id: Date.now(), description, amount }]);
  };

  const removeTransaction = () => {
    if (transactionToRemove !== null) {
      setTransactions(transactions.filter((t) => t.id !== transactionToRemove));
      setTransactionToRemove(null);
    }
    setIsConfirmationModalOpen(false);
  };
  const openConfirmationModal = (id: number) => {
    setTransactionToRemove(id);
    setIsConfirmationModalOpen(true);
  };
  const filteredTransactions = transactions.filter((t) => {
    const amountMatches = t.amount.toString().includes(searchTerm);
    const descriptionMatches = t.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return amountMatches || descriptionMatches;
  });

  return (
    <Container>
      <Title>Expense Tracker</Title>
      <Balance>
        <BalanceText>Balance ₹{balance}</BalanceText>
        <AddButton onClick={() => setIsModalOpen(true)}>ADD</AddButton>
      </Balance>
      <BoxContainer>
        <Box>
          <BoxTitle>Expense</BoxTitle>
          <BoxAmount color="red">₹{expense}</BoxAmount>
        </Box>
        <Box>
          <BoxTitle>Budget</BoxTitle>
          <BoxAmount color="green">₹{budget}</BoxAmount>
        </Box>
      </BoxContainer>
      <h2>Transactions</h2>
      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionList>
        {filteredTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            isExpense={transaction.amount < 0}
          >
            <span>{transaction.description}</span>
            <div>
              <span style={{ marginRight: "10px" }}>
                ₹{Math.abs(transaction.amount)}
              </span>
              <RemoveButton
                onClick={() => openConfirmationModal(transaction.id)}
              >
                Remove
              </RemoveButton>
            </div>
          </TransactionItem>
        ))}
      </TransactionList>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTransaction={addTransaction}
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={removeTransaction}
      />
    </Container>
  );
}
