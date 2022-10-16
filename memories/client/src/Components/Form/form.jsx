import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./form.module.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/apiCalls";
import FileBase from "react-file-base64";

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(dispatch, postData);
    console.log(postData);
    handleClear();
  };
  const handleClear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  //styles
  const TextContainer = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
  `;

  return (
    <div className={styles.container}>
      <form action="post" onSubmit={handleSubmit}>
        <div className={styles.form}>
          <TextContainer>Creating a Memory</TextContainer>
          <input
            className={styles.input}
            type="text"
            required
            autoComplete="off"
            name="creator"
            placeholder="creator"
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
            value={postData.creator}
          />
          <input
            className={styles.input}
            type="text"
            required
            autoComplete="off"
            name="Title"
            placeholder="Title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            value={postData.title}
          />
          <input
            className={`${styles.desc}`}
            type="textarea"
            required
            autoComplete="off"
            name="Message"
            placeholder="Message"
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            value={postData.message}
          />
          <input
            className={styles.input}
            required
            autoComplete="off"
            type="text"
            name="Tags"
            placeholder="Tags (comma separated)"
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            value={postData.tags}
          />

          <div className={styles.file}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
              value={postData.file}
            />
          </div>

          <Button
            type="submit"
            className={`${styles.submitbutton} `}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            onClick={handleClear}
            className={styles.button}
            variant="contained"
            color="error"
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
