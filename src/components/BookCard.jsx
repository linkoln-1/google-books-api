import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";

function BookCard({
  thumbnail,
  tittle,
  pageCount,
  language,
  authors,
  publisher,
  description,
  previewLink,
  infoLink,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Card style={{ width: "235px" }} className="m-auto mt-5">
      <CardImg
        top
        style={{ width: "100%", height: "233px" }}
        src={thumbnail}
        alt={tittle}
      />
      <CardBody>
        <CardTitle className="card-title">{tittle}</CardTitle>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {tittle}
          </h5>
          <button
            aria-label="close"
            className="btn-close"
            type="button"
            onClick={toggle}
          />
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img src={thumbnail} alt={tittle} style={{ height: "233px" }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language: {language}</p>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher}</p>
            </div>
          </div>
          <div className="mt-3">{description}</div>
        </div>
        <div className="modal-footer">
          <div className="left-slide">
            <a
              href={previewLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              preview Link
            </a>
          </div>
          <div className="divider">
            <div className="right-slide">
              <a
                href={infoLink}
                className="btn-link"
                color="default"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Info Link
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </Card>
  );
}

export default BookCard;
