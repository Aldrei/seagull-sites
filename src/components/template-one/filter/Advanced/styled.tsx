import styled from 'styled-components';

export const FormWrapper = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  max-width: 800px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  flex-basis: 100%;
  color: #777;
  margin: 5px 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #555;
  }
`;