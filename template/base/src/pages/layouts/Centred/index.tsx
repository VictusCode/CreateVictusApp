import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Centred = ({ children }: Props) => <Container>{children}</Container>;

export { Centred };
