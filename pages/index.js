import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="custom-scrollbar">
      <Navbar />
      <div className="max-w-[100%] md:w-[73.3%] md:px-0 px-[10px] mx-auto ">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
