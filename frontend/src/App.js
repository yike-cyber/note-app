import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotesListPage from "./pages/NotesListPage";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col sm:px-40 sm:mx-60    justify-top h-screen  pt-3">
        <Header />
        <Routes>
          <Route path="/" exact Component={NotesListPage} />
          <Route path="/note/:id/" Component={NotePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
