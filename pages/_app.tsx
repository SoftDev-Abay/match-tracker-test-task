import type { AppProps } from "next/app";
import "../styles/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { LoadingContext, useLoading } from "@/app/context/LoadingContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
    </LoadingContext.Provider>
  );
}
