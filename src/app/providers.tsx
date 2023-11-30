import { Provider as JotaiProvider } from "jotai";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
