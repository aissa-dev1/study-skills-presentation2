import { HomeScreen } from "./components/home-screen";
import { MeetTheParts } from "./components/meet-the-parts";
import { PCBuild } from "./components/pc-build";
import { FunFactsAndQuiz } from "./components/fun-facts-and-quiz";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="container mx-auto font-sans">
      <HomeScreen />
      <MeetTheParts />
      <PCBuild />
      <FunFactsAndQuiz />
      <Footer />
    </div>
  );
}

export default App;
