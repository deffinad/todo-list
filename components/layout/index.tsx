import Head from "next/head";
import { Navbar } from "../navbar";

export const Layout = (props: any) => {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Todo Lists</title>
      </Head>
      <div className="container">
        <div className="main-content">
          <Navbar />
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};
