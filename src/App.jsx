import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionFull from "./components/SectionFull";

function App() {
  return (
    <>
      {/* 메뉴 */}
      <Header />
      {/* 메인 */}
      <SectionFull>
        <div className="font-thin text-2xl h-[550px]"></div>
      </SectionFull>
      <Section>
        <div>2번째</div>
      </Section>
      {/* 푸터 */}
      <Footer />5
    </>
  );
}

export default App;
