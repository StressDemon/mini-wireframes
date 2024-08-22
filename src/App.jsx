import "./App.css";
import Basic from "./page/Basic.jsx";
import TwoColumns from "./page/TwoColumns.jsx";
import ThreeColumns from "./page/ThreeColumns.jsx";
import FourColumns from "./page/FourColumns.jsx";
import TwoRows from "./page/TwoRows.jsx";
import ThreeRows from "./page/ThreeRows.jsx";
import FourRows from "./page/FourRows.jsx";
import ArticleRight from "./page/ArticleRight.jsx";

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
    </>
  );
}

export default App;
