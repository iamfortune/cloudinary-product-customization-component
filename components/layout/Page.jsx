import Head from "next/head";
import { Navbar } from "../Base/Navbar";

export const Page = ({ children }) => {
  return (
    <div className="min-h-screen relative h-screen max-w-full">
      <Head>
        <meta name="author" content="Fortune Ikechi" />
        <meta name="description" content="Cloudinary Product Personalization" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>Product Personalization Demo</title>
      </Head>
      <div className={`flex flex-col items-center min-h-screen w-full`}>
        <div className={`w-full pl-44`}>
          <Navbar className={`w-8/12 ml-20`} />
        </div>
        {children}
      </div>
    </div>
  );
};
