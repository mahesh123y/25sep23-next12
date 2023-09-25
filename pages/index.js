//1.

import Head from "next/head";
import Header from "../component/layout/Header";
import Main from "../component/layout/Main";
import Footer from "../component/layout/Footer";


export default function Home() {
  return (
    <div className="container p-0 bd">
      <Head>
        <title>
          Find Businesses Near You on Local Search Engine - Justdial
        </title>
        <meta
          name="description"
          content="Justdial, India's No. 1 local search engine, for Restaurants, Hotels, Salons, Real Estate, Travel, Healthcare, Education, B2B Businesses and more. Find addresses, phone numbers, reviews and ratings, photos, maps of businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
      

    </div>
  );
}
