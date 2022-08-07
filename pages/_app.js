import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SliderBar from "@/widgets/slider-bar/index";
import Router, { useRouter } from "next/router";
import GlobalContext from "../context/global";
import "@/shared/styles/globals.css";
import { SWRConfig } from "swr";
import { timeCache } from "@/shared/config";
import axiosClient, { fetcherClient } from "api-client/base/axios-client";
import { motion } from "framer-motion";

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps, commonData }) {
  const router = useRouter();
  // console.log(Component.removeSlide);
  return (
    <SWRConfig
      value={{
        refreshInterval: timeCache,
        fetcher: fetcherClient,
      }}
    >
      <GlobalContext data={commonData}>
        <Header />
        <Menu />

        <main className="container mx-auto flex mt-10">
          <div className={Component.removeSlide ? "w-full min-h-[70vh]" : "w-9/12"}>
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </div>

          {!Component.removeSlide && (
            <div className="w-3/12 ml-3">
              <SliderBar />
            </div>
          )}
        </main>
        <Footer />
      </GlobalContext>
    </SWRConfig>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const url_notifications =
    "/posts?&filters[notification][$eq]=true&sort=updatedAt:DESC&pagination[pageSize]=6";
  const post_notifications = axiosClient(url_notifications);
  const [notifications] = await Promise.all([post_notifications]);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, commonData: { notifications: notifications.data } };
};

export default MyApp;
