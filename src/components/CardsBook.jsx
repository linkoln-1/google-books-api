import React from "react";
import BookCard from "./BookCard";
import { Spinner } from "reactstrap";
import { useSelector } from "react-redux";

function CardsBook(props) {
  const cards = useSelector((state) => state.cards);
  const loading = useSelector((state) => state.loading);
  const handleCards = () => {
    console.log(cards);
    const items = cards.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            tittle={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        </div>
      );
    });
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return <div>{handleCards()}</div>;
}

export default CardsBook;
