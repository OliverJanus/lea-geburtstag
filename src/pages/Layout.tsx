import TerminalPage from "./terminal_page";
import VideoPage from "./video_page";
import usePasswordVerification from "../hooks/usePasswordVerification";
import "./Layout.css";

function Layout() {
  const [isPasswordCorrect, verifyPassword] = usePasswordVerification("FLAMPEJ");

  if (!isPasswordCorrect) return <TerminalPage verifyPassword={verifyPassword} />;
  return <VideoPage />;
}

export default Layout;
