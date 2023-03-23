import Navbar from "components/Layout/Navbar";
import NotFound from "components/NotFound";
import { SongProvider } from "contexts/SongContext";
import { useCurrentUser, UserProvider } from "contexts/UserContext";
import HomePage from "pages/Home";
import MyPlaylist from "pages/MyPlaylist";
import UserDataPage from "pages/UserData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

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
      <ToastContainer />
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
