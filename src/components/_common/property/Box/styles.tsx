import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Price = styled.div`
  padding: 8px 16px;
  background-color: #eee;
  text-align: right;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #000
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;