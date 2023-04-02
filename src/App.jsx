import { Footer, PageTitle } from "./components";
import PageRouter from "./routes/SiteRouter";
import "./App.css";

function App() {

  
  return (
    <div className="App">
      <PageTitle title="React Forms" />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
