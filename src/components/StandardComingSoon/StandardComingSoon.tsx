
import { Inter } from "next/font/google";
import data from "../../../data/data";
const inter = Inter({ subsets: ["latin"] });
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Navigation from "../Navigation/Navigation";
import Image from "next/image";
import Garage_Filled_Orange from "../../../public/Garage_Filled_Orange.png";

export default function StandardComingSoon() {
  const {
    sitename,
    sitetagline,
    description,
    copyrightText,
    sitelogo,
    siteurl,
    socialIcons,
    socialIconsHeading,
    title,
  } = data;


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">
        <div className="container mx-auto p-4">
          <Navigation />
        </div>
        <div className="container mx-auto p-4 flex justify-between">
          <div className="flex flex-col justify-center w-2/3">
            <Header />
            <ComingSoonContent />
            <SubscribeForm />
          </div>
          <div className="w-1/3">
            <Image src={Garage_Filled_Orange} alt="Logo" className="w-auto" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
