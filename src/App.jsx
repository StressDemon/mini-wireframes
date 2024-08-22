import "./App.css";
import Basic from "./page/Basic.jsx";
import TwoColumns from "./page/TwoColumns.jsx";
import ThreeColumns from "./page/ThreeColumns.jsx";
import FourColumns from "./page/FourColumns.jsx";
import TwoRows from "./page/TwoRows.jsx";
import ThreeRows from "./page/ThreeRows.jsx";
import FourRows from "./page/FourRows.jsx";
import ArticleRight from "./page/ArticleRight.jsx";
import ArticleLeft from "./page/ArticleLeft.jsx";
import LandingPage from "./page/LandingPage.jsx";
import MediumGrid from "./page/MediumGrid.jsx";
import SmallGrid from "./page/SmallGrid.jsx";
import LargeGrid from "./page/LargeGrid.jsx";

function App() {
  return (
    <>
      <Basic />;
      <TwoColumns />;
      <ThreeColumns />;
      <FourColumns />;
      <TwoRows />;
      <ThreeRows />;
      <FourRows />;
      <ArticleRight />;
      <ArticleLeft />;
      <LandingPage />:
      <LargeGrid />;
      <MediumGrid />;
      <SmallGrid />;
    </>
  );
}

export default App;
