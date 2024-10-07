import styled from "styled-components";
interface TransactionItemProps {
    isExpense: boolean;
  }
export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const BalanceText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const AddButton = styled.button`
  background-color: #41EF65;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 45%;
  border-radius: 5px;
`;

export const BoxTitle = styled.div`
  font-size: 14px;
  color: #666;
`;

export const BoxAmount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color || 'black'};
`;

export const SearchInput = styled.input`
  width: 96%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

export const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const TransactionItem = styled.li<TransactionItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: ${props => props.isExpense ? 'red' : 'green'};
  }
`;
export const RemoveButton = styled.button`
  background-color: #41EF65;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 90%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  text-align:left;

`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const HelperText = styled.small`
  color: #666;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
`;

export const CancelButton = styled(Button)`
  background-color: #ccc;
`;

export const AddTrac = styled(Button)`
  background-color: #41EF65;
  color: white;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:focus {
    border-color: #41EF65; /* Change border color on focus */
    outline: none; /* Remove default outline */
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ConfirmButton = styled.button`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    background-color: #41EF65; 
    color: white;
  }

  &:last-child {
    background-color: #dc3545; 
    color: white;
  }
`;