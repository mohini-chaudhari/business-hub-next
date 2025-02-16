'use client'
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";
import { SnackbarProvider } from "notistack";

// import '../styles/globals.css';
interface LayoutProps {
  children: React.JSX.Element;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#ffffff" }}>
        <SnackbarProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
