import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "components/Layout/Navbar";
import { SongProvider } from "contexts/SongContext";
import { useCurrentUser, UserProvider } from "contexts/UserContext";
import HomePage from "pages/Home";
import UserDataPage from "pages/UserData";
import MyPlaylist from "pages/MyPlaylist";
import NotFound from "components/NotFound";

const AppRoute = () => {
  const {currentUser} = useCurrentUser();
  // logged in
  if(currentUser){
    return (
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-data" element={<UserDataPage />} />
          <Route path="/my-playlist" element={<MyPlaylist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
  // guest
  return (
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function App() {
  return (
    <UserProvider>
      <SongProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoute />
          {/* <Playing /> */}
        </BrowserRouter>
      </SongProvider>
    </UserProvider>
  );
}

export default App;
