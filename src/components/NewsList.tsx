import { Articles } from "../types/news.type";
import { News } from "./index";

type NewsListProps = {
  data?: Articles[];
};

function NewsList({ data = [] }: NewsListProps) {
  return (
    <div className="news-list">
      {data?.map((news, index) => (
        <News key={index} news={news} index={index} />
      ))}
    </div>
  );
}

export default NewsList;
