import NavBar from "@/components/navigasi/NavBar";
import Section from "@/components/section/Section";
import Section1 from "@/components/section/Section1";
import Section2 from "@/components/section/Section2";
import Section3 from "@/components/section/Section3";
import Section4 from "@/components/section/Section4";

export default function Home() {
  return (
    <div>
      <nav >
        <NavBar />
      </nav>
      <Section />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}
