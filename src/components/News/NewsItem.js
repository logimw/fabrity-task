import { StyledNewsItem } from "./NewsItem.styles";

const NewsItem = ({ article: { title, image, date, text } }) => {
  let formatDate = new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return (
    <StyledNewsItem>
      <h3>{title}</h3>
      <p className="date">Data dodania: {formatDate}</p>
      <img src={image} alt={title} />
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: `${text}` }}
      />
    </StyledNewsItem>
  );
};

export default NewsItem;
