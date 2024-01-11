import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/sonner';
import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
      <Toaster richColors />
    </ThemeProvider>
  );
}
