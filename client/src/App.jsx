import { Container } from "@mui/material";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div style={{ display: "flex", cursor: "default", widows: "100vw" }}>
      <Menu />
      <Container component={"main"} sx={{ flexGrow: "1" }}>
        <Header />
      </Container>
      <SideBar />
    </div>
  );
}

export default App;
