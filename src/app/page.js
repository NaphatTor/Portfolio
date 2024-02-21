import Skills from "@/components/skills";
import About from "@/components/about";
import Expreience from "@/components/expreience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonBackToTop from "@/components/backtotop";
import SectionDividerSkills from "@/components/section-divider-skill";
import SectionDividerExp from "@/components/section-divider-exp"
import SectionDividerEnd from "@/components/section-divider-end"


export default function Home() {
  return (
    <div className="bg-slate-100 w-full h-full flex flex-col items-center">
      <Navbar />
      <div className="max-w-screen-lg w-full flex flex-col items-center">
        <About />
        <SectionDividerExp />
        <Expreience />
        <SectionDividerSkills />
        <Skills />
        <SectionDividerEnd />
        <Footer />
      </div>
      <ButtonBackToTop />
    </div>
  );
}
