import { styled } from 'styled-components';

// Styled-components button
export const GradientButton = styled.button`
  width: 100%;
  background: linear-gradient(to right, #cccccc, #e6e6e6, #cccccc);
  border: none;
  padding: 10px 20px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;