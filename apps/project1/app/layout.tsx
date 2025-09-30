import StoryblokProvider from "./components/StoryblokProvider";
import "./styles/main.scss";

import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="maerklin">{children}</body>
      </html>
    </StoryblokProvider>
  );
}
