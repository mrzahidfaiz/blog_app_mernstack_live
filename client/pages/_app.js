import "@/styles/globals.css";
import { Provider } from "react-redux";
import {store, wrapper} from "@/store/store";
import Navbar from "@/components/Navbar";
import useAutoLogin from "@/hooks/useAutoLogin";

function App({ Component, pageProps }) {
  const loading = useAutoLogin();

  return loading ? "" : (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(App);