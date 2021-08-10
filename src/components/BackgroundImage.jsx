import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loadingBooks } from "../redux/actions";

function BackgroundImage() {
  const dispatch = useDispatch();
  const [maxResult, setMaxResult] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const errorParams = useSelector((state) => state.errorParams);
  const errorLoad = useSelector((state) => state.errorLoad);
  const KEY = useSelector((state) => state.key);
  const handleSumbit = () => {
    if (maxResult > 40 || maxResult < 1) {
      toast.error("max results must be between 1 and 40");
    } else {
      dispatch(loadingBooks(query, maxResult, startIndex, KEY));
      if (errorParams.isError) {
        toast.error(errorParams.title);
      } else if (errorLoad.isError) {
        toast.error(errorLoad.title);
      }
    }
  };
  return (
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
      {/* overlay - наложение*/}
      <div className="filter" />
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Google Books
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Book Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={handleSumbit}>
              <i className="fas fa-search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <div className="d-flex text-white justify-content-center ">
          <FormGroup className="ml-5" style={{ marginRight: "50px" }}>
            <Label for="maxResults">Max Results</Label>
            <Input
              type="number"
              id="maxResults"
              placeholder="Max Results"
              value={maxResult}
              onChange={(e) => setMaxResult(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="ml-5">
            <Label for="startIndex">start Index</Label>
            <Input
              type="number"
              id="startIndex"
              placeholder="start Index"
              value={startIndex}
              onChange={(e) => setStartIndex(e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
