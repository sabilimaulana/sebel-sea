import type { GetStaticProps, NextPage } from "next";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Banner from "components/Banner";
import Explore from "components/Explore";
import TopArtists from "components/TopArtists";
import RecentActivities from "components/RecentActivities";
import axios from "axios";
import { Artwork, Activity, Artist } from "types";
import Head from "next/head";
import { useState } from "react";

interface HomeProps {
  featuredArtworks: Artwork[];
  recentActivities: Activity[];
  topArtists: Artist[];
}

const Home: NextPage<HomeProps> = ({
  featuredArtworks,
  recentActivities,
  topArtists,
}) => {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-primary-black font-poppins text-white">
      <Head>
        <title>Sebel Sea</title>
        <meta
          name="description"
          content="Discover limited-edition digital artwork. Create, Sell, and Collect yours now!"
        />
        <meta property="og:title" content="One Stop NFT Marketplace" />
        <meta
          property="og:description"
          content="Discover limited-edition digital artwort. Create, Sell, and Collect yours now!"
        />
      </Head>

      <Sidebar
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className="py-4 sm:p-5 flex flex-col w-full gap-4 sm:gap-7 overflow-x-hidden">
        <Header setIsShowSidebar={setIsShowSidebar} />
        <section className="border-b border-white w-screen opacity-10 sm:hidden" />

        <div className="flex flex-col xl:flex-row gap-5 mb-1 sm:mb-14">
          <div className="w-full">
            <Banner />

            <Explore featuredArtworks={featuredArtworks} />
          </div>

          <div className="flex flex-col md:flex-row xl:flex-col gap-7 px-4 sm:px-0">
            <TopArtists topArtists={topArtists} />
            <RecentActivities recentActivities={recentActivities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.API_URL || "";
  let response: any;

  try {
    // response = await axios.get(`${baseUrl}/users`);
    // const users = response.data;

    response = await axios.get(`${baseUrl}/featured-artworks`);
    const featuredArtworks = response.data;

    response = await axios.get(`${baseUrl}/recent-activities`);
    const recentActivities = response.data;

    response = await axios.get(`${baseUrl}/top-artist`);
    const topArtists = response.data;

    return {
      props: {
        // users,
        featuredArtworks,
        recentActivities,
        topArtists,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        // users: [],
        featuredArtworks: [],
        recentActivities: [],
        topArtists: [],
      },
      revalidate: 60,
    };
  }
};

export default Home;
