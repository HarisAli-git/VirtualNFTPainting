import React from "react";
import { useEffect, useState } from "react";
import { Main } from "../Components/Main";
import { Dropdown } from "react-bootstrap";
import { Fetch_Tags } from "../Middleware/Rest_Api";
import { Alert } from "react-bootstrap";

const FilterBar = () => {
  const [tags, settags] = useState("");
  const [currentTag, setTag] = useState(false);

  const FetchTags = async (e) => {
    const resp = await Fetch_Tags();
    settags(resp.data.data);
  };

  useEffect(() => {
    console.log("Tags Mounted in Filter Categories!!");
    FetchTags();
  }, []);

  return (
    <div>
      {!currentTag && <Alert variant="info"> Choosen Tags: Any Tags! </Alert>}
      {currentTag && <Alert variant="info"> Choosen Tag: {currentTag} </Alert>}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter By Tags
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setTag(false);
            }}
          >
            Any Category
          </Dropdown.Item>
          {Object.values(tags).map((tagss, index) => (
            <Dropdown.Item key={index} onClick={(e) => settags(tagss.name)}>
              {tagss.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <Main value={currentTag}></Main>
    </div>
  );
};

export default FilterBar;
