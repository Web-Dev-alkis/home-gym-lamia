import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Facilities from "@/components/sections/Facilities";
import PersonalTraining from "@/components/sections/PersonalTraining";
import GroupPrograms from "@/components/sections/GroupPrograms";
import Aquatics from "@/components/sections/Aquatics";
import Membership from "@/components/sections/Membership";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Facilities />
        <PersonalTraining />
        <GroupPrograms />
        <Aquatics />
        <Membership />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
