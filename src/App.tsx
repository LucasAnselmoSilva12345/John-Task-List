import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Home } from '@/pages/Home';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
      <Toaster
        richColors
        closeButton
        position="bottom-center"
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
            closeButton: 'bg-lime-400',
          },
        }}
      />
    </ThemeProvider>
  );
}
