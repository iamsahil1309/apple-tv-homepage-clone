import { Header } from "./components/Header";
import { Hero } from "./components/section/Hero";
import { Usps } from "./components/section/Usps";
import { VideoCarousel } from "./components/section/video-carousel";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>

        <VideoCarousel />
        {/* <div className='h-[300vh]'/> */}
      </main>
    </>
  );
};

export default App;
