import { RecoilRoot } from 'recoil';

type RecoilProviderProps = {
  children: React.ReactNode;
};

const RecoilProvider = ({ children }: RecoilProviderProps) => <RecoilRoot>{children}</RecoilRoot>;

export default RecoilProvider;
