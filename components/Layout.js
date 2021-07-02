import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Search from "./Search";
export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto ">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  keywords: "development, coding, programming",
  description: "The best info and news in development ",
};
