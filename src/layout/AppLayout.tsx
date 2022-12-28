import Header from "components/header";
import React from "react";
type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <main className='flex flex-grow p-4'>{children}</main>
    </>
  );
};

export default AppLayout;
