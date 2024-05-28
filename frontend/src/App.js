import NotesListPage from "./pages/NotesListPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="flex flex-row justify-between px-4 mx-5 bg-main"></div>
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
