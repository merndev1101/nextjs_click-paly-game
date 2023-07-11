import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { AuthProvider } from "../hooks/rootContext/rootContext";
import Header from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SYE2TNN6ZQ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SYE2TNN6ZQ', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />
      <main className="AppMain">
        <AuthProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </main>
    </>
  );
}
