import Head from "next/head";
import { useEffect, useState } from "react";
import Home1Banner from "../components/banner/Home1Banner";
// import Home1Blog from "../components/blog/Home1Blog";
import Home1Category from "../components/category/Home1Category";
import InstagramFeed from "../components/common/InstagramFeed";
import Preloader from "../components/common/Preloader";
import ScrollProgrssBtn from "../components/common/ScrollProgrssBtn";
import Home1Counter from "../components/countdown/Home1Counter";
import Home1Destination from "../components/destination/Home1Destination";
import Footer1 from "../components/footer/Footer1";
import Home1Form from "../components/form/Home1Form";
import Header1 from "../components/header/Header1";
// import Home1SearchBar from "../components/home/Home1SearchBar";
import Home1Offer from "../components/offer/Home1Offer";
// import Sponsor from "../components/sponsor/Sponsor";
// import SponsoreTitle from "../components/sponsor/SponsoreTitle";
// import Home1Testimonial from "../components/testimonial/Home1Testimonial";
import Home1TourPlan from "../components/tourPlan/Home1TourPlan";
import Home1Video from "../components/video/Home1Video";

export default function Home() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(false);
    setTimeout(() => setloading(true), 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <Head>
            <title>Loading</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/icons/logo-icon.svg" />
          </Head>
          <Preloader loader="home1preloader" />
        </>
      ) : (
        <>
          <Head>
            <title>
              Michaela Noam - vacation blog
            </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/icons/logo-icon.svg" />
          </Head>
          <ScrollProgrssBtn />
          <Header1 />
          <Home1Banner />
          <Home1Category />
          <Home1Offer />
          <Home1Destination />
          <Home1TourPlan />
          <Home1Video />
          <Home1Form />
          <InstagramFeed type="homeOneInstagram" />
          <Footer1 />
        </>
      )}
    </>
  );
}