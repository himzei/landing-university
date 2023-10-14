import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionFull from "./components/SectionFull";
import Consulting from "./components/Consulting";
import Poster from "./components/Poster";
import MainSlide from "./components/MainSlide";
import Features from "./components/Features";
import SectionSeven from "./components/SectionSeven";
import Process from "./components/Process";
import ProcessContents from "./components/ProcessContents";

function App() {
  return (
    <div className="relative">
      <Header />

      {/* 메인 */}
      <SectionSeven>
        <MainSlide />
      </SectionSeven>

      {/* 특징 */}
      <SectionFull>
        <Features />
      </SectionFull>

      {/* Poster */}
      <Section>
        <Poster />
      </Section>

      {/* 프로레스 */}
      <SectionFull>
        <Process />
      </SectionFull>

      {/* 프로세스 */}
      <Section>
        <ProcessContents />
      </Section>

      {/* 상담신청하기 */}
      <div className="py-20">
        <Consulting />
      </div>
      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
