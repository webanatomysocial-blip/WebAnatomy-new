import "@/css/index.css";
import "./globals.css";
import "@/css/header.css";
import "@/css/footer.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SmoothScrolling>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
