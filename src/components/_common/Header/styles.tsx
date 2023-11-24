import styled from 'styled-components';

// Styled components
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: white;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    // Adjust styles for mobile view
  }
`;

export const Logo = styled.img`
  // Add styles for your logo
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; // Hide on mobile, show dropdown instead
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px; // Adjust based on actual header height
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #eaeaea;
  padding: 16px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const CloseIcon = styled.div`
  // Style your close icon
`;

export const Bar = styled.div`
  width: 20px; // Adjust width as needed
  height: 2px; // Adjust thickness as needed
  background-color: #007BFF; // Color of the bars
  margin: 4px 0; // Adjust spacing between bars as needed
`;
