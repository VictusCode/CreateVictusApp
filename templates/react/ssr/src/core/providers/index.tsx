import { QueryProvider } from "./query";
import { TRPCProvider } from "./trpc";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <QueryProvider>
        <TRPCProvider>
          {children}
        </TRPCProvider>
    </QueryProvider>
  );
};

export { AppProvider };
