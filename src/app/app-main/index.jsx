import { Route, BrowserRouter } from "react-router-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutContainer from "./../domains/Layout/containers/LayoutContainer";
const App = () => {
  const queryCache = new QueryCache();
  const queryClient = new QueryClient({
    queryCache,
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Route path="/" component={LayoutContainer} />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
