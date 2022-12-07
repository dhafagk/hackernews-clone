import { Input } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

function SearchBox() {
  const { Search } = Input;
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const onSearch = (query: string) => {
    setSearch("");
    router.push(
      {
        pathname: "/search",
        query: { keyword: query },
      },
      undefined,
      { shallow: true }
    );
  };
  return (
    <Search
      placeholder="search news..."
      onSearch={onSearch}
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      className="pb-2"
    />
  );
}

export default SearchBox;
