import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

const Centred = ({ children }: Props) => <Container>{children}</Container>;

export { Centred };
