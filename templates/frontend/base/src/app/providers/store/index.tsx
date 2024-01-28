import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => <RecoilRoot>{children}</RecoilRoot>;

export { StoreProvider };
