import { BackgroundGradient } from "./components/ui/BackgroundGradient";
import { BackgroundGrid } from "./components/ui/BackgroundGrid";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

// hooks
import useTheme from "./hooks/useTheme"

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <BackgroundGrid />
      <BackgroundGradient />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </>
  )
}

export default App;
