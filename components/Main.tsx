import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow bg-[#C8DBBE] ">
      <div className="max-w-screen-xl w-full mx-auto px-4 py-4">{children}</div>
    </main>
  );
};
