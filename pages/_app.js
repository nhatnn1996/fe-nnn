import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SliderBar from "@/widgets/slider-bar/index";
import ProgressBar from "@badrap/bar-of-progress";
import Router, { useRouter } from "next/router";
import GlobalContext from "../context/global";
import "@/shared/styles/globals.css";
import { SWRConfig } from "swr";
import { timeCache } from "@/shared/config";
import { fetcherClient } from "api-client/base/axios-client";
import { motion } from "framer-motion";

const progress = new ProgressBar({
  size: 5,
  color: "#00539f",
  className: "bar-of-progress",
  delay: 0,
});

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <SWRConfig
      value={{
        refreshInterval: timeCache,
        fetcher: fetcherClient,
      }}
    >
      <GlobalContext data={pageProps}>
        <Header />
        <Menu />

        <main className="container mx-auto flex mt-10">
          <div className="w-9/12">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </div>
          <div className="w-3/12 ml-3">
            <SliderBar />
          </div>
        </main>
        <Footer />
      </GlobalContext>
    </SWRConfig>
  );
}

export default MyApp;
