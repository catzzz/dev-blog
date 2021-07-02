import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <main className="container mx-auto my-7">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  keywords: "development, coding, programming",
  description: "The best info and news in development ",
};
