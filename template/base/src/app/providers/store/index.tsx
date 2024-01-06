import { RecoilRoot } from 'recoil';

type RecoilProviderProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: RecoilProviderProps) => <RecoilRoot>{children}</RecoilRoot>;

export { StoreProvider };
