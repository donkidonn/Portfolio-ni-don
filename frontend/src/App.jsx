import MyInfo from "./components/MyInfo";
import Skills from "./components/skills";
import Works from "./components/works";
import Interests from './components/Interests';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <MyInfo />
      <Skills />
      <Interests />
      <Works />
      <Footer />
    </div>
  );
}