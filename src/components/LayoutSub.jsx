import Footer from "./Footer";
import Header from "./Header";

export default function LayoutSub({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
