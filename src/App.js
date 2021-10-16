import Analysis from "./components/Analysis/Analysis";
import ClientReview from "./components/ClientReview/ClientReview";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Video from "./components/Video/Video";

function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
      <Services></Services>
      <Analysis></Analysis>
      <Summary></Summary>
      <Project></Project>
      <Courses></Courses>
      <Video></Video>
      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
