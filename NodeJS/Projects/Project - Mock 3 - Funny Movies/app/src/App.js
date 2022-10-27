import "./App.css";
import { Login } from "./pages/authentication/login/screen/index";
import { Register } from "./pages/authentication/register/screen/index";
import { Home } from "./pages/home/screen/index";
import { History } from "./pages/user/history/screen/index";
import { YourVideo } from "./pages/user/your-video/screen/index";
import { WatchLater } from "./pages/user/watch-later/screen/index";
import { LikedVideo } from "./pages/user/liked-video/screen/index";
import { VideoDetail } from "./pages/user/video-detail/screen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />

          <Route path="/home" exact element={<Home />} />
          <Route path="/history" exact element={<History />} />
          <Route path="/your-video" exact element={<YourVideo />} />
          <Route path="/watch-later" exact element={<WatchLater />} />
          <Route path="/liked-video" exact element={<LikedVideo />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route index exact element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
