import MyInfo from "./components/MyInfo";
import Moreinfo from "./components/moreinfo";
import Works from "./components/works";
import Interests from './components/Interests';

export default function App() {
  return (
    <div className="min-h-screen bg-[#191411] text-white">
      <MyInfo />
      <Moreinfo />
      <Interests />
      <Works />
    </div>
  );
}