import { Input } from "@material-tailwind/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionFull from "./components/SectionFull";
import Consulting from "./components/Consulting";

function App() {
  return (
    <>
      {/* 메뉴 */}
      <Header />
      {/* 메인 */}
      <SectionFull>
        <div className="font-thin text-2xl h-[550px]">hello</div>
      </SectionFull>
      <Section></Section>
      {/* 상담신청하기 */}
      <div className="py-20">
        <Consulting />
      </div>
      {/* 푸터 */}
      <Footer />5
    </>
  );
}

export default App;
