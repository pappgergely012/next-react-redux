import App from "next/app";
import { Provider } from "react-redux";
import initStore, { useStore } from "../src/store";
import "../src/styles/globals.css";

function MyApp({ Component, props }) {
  const store = useStore(props.initStateStore);

  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const store = initStore();

  const componentProps = await App.getInitialProps({ ...appContext, store });

  return {
    props: {
      initStateStore: store.getState(),
      ...componentProps,
    },
  };
};

export default MyApp;
