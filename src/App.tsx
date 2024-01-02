import { ThemeProvider } from './components/theme-provider';
import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}
