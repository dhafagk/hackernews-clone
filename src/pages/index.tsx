import * as Configs from "../configs";
import { useRouter } from "next/router";
import { Layout, NewsList, SearchBox } from "../components";

export const getServerSideProps = Configs.wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(Configs.getDefaultNewsList.initiate());

    await Promise.all(store.dispatch(Configs.getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default function Home() {
  const router = useRouter();
  const results = Configs.useGetDefaultNewsListQuery();
  const { isLoading, error, data: newsData } = results;
  const newsList = newsData?.articles;

  return (
    <Layout>
      <SearchBox />
      {error ? (
        <>Oh no, there was an error</>
      ) : router.isFallback || isLoading ? (
        <>Loading...</>
      ) : newsData ? (
        <NewsList data={newsList} />
      ) : null}
    </Layout>
  );
}
