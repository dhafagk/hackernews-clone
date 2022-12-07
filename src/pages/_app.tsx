import type { AppProps } from "next/app";
import "../styles/style.scss";
import { wrapper } from "../configs";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
