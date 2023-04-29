import Head from "next/head";
import { Header } from "../header/header"
import { Footer } from "../footer/footer"

const MainLayout = ({ children }) => {
  return (
    <>
			<Head>
        <title>Events App</title>
        <meta name="description" content="This is an events app." />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
};

export default MainLayout;