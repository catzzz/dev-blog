import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Search from "./Search";
import {useRouter} from 'next/router'
import Showcase from './Showcase'
export default function Layout({ title, children, keywords, description }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Search />
        {/* {router.pathname ==='/' && <Showcase />} */}
        <main className="container mx-auto flex-grow">{children}</main>
        <Footer class="h-10"/>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  keywords: "development, coding, programming",
  description: "The best info and news in development ",
};
