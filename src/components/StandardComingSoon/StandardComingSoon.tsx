
import { Inter } from "next/font/google";
import data from "../../../data/data";
const inter = Inter({ subsets: ["latin"] });
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";
import Navigation from "../Navigation/Navigation";

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
        <div className="container mx-auto p-4">
          <Header />
          <ComingSoonContent />
          <SubscribeForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
