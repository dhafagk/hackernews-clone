import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useRouter } from "next/router";
import React from "react";
import { Layout, NewsList, SearchBox } from "../components";
import * as Configs from "../configs";

export const getServerSideProps = Configs.wrapper.getServerSideProps(
  (store) => async (context) => {
    const query = context.params?.query;
    if (typeof query === "string") {
      store.dispatch(Configs.getNewsListSearch.initiate(query));
    }

    await Promise.all(store.dispatch(Configs.getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

function SearchResult() {
  const router = useRouter();
  const query = router.query.keyword;
  const results = Configs.useGetNewsListSearchQuery(
    typeof query === "string" ? query : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { isLoading, error, data: newsData } = results;
  const newsList = newsData?.articles;

  return (
    <Layout>
      <SearchBox />
      <div className="pb-2">
        Search query : <b>{query}</b>
      </div>
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

export default SearchResult;
