import styled from 'styled-components';

export const FormWrapper = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 10px;

  &:nth-child(1) {
    margin-right: 5px;
  }

  &:nth-child(2) {
    margin-left: 5px;
  }
`