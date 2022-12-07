import moment from "moment";
import Link from "next/link";
import { Articles } from "../types/news.type";

type newsProps = {
  news: Articles;
  index: number;
};

function News({ news, index }: newsProps) {
  const { url, title, source, publishedAt } = news;

  return (
    <>
      <div className="news">
        <span className="numbering">{index + 1}. </span>
        <div className="news-title">
          <Link href={url}>{title}</Link>
          <span className="news-url">
            (<Link href={url}>{source.name}</Link>)
          </span>
        </div>
        <div className="news-misc">
          {moment.utc(publishedAt).local().startOf("seconds").fromNow()}
        </div>
      </div>
    </>
  );
}

export default News;
