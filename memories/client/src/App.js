import Posts from "./Components/Posts/posts";
import Form from "./Components/Form/form";
import styled from "styled-components";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./redux/apiCalls";

function App() {
  const dispatch = useDispatch();
  console.log(styles);

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);

  //Styling
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Wrapper = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    min-width: 60%;
    margin-top: 1%;
    padding-left: 2%;
    padding-top: 1%;
    padding-right: 3%;
  `;
  const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-width: 60%;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
    color: #02d0f5;
  `;
  const Text = styled.span`
    font-size: 4rem;
  `;
  return (
    <Container>
      <TextContainer>
        <Text>Memories</Text>
      </TextContainer>
      <Wrapper>
        <Posts />
        <Form />
      </Wrapper>
    </Container>
  );
}

export default App;
