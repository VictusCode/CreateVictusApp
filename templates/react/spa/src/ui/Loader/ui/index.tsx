import styled from 'styled-components';

const Loader = styled.div`
  border-radius: 50%;
  border-top: 2px solid var(--primary-color);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s ease infinite;
  animation: spin 2s ease infinite;
`;

export { Loader };
