import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: yellow;
  border-radius: 110px;
  border: 2px solid #0085a3;
  padding: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #00FF00, #00FF00)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, red, red)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    
   
    border-radius: 50px;
    color: white;
  
  }
`;
