import React, { useState } from "react";

const App = () => {
  // <---- 자바스크립트 영역 ---->
  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", con: "내용1", isDone: true },
    { id: 2, title: "제목2", con: "내용2", isDone: false },
    { id: 3, title: "제목3", con: "내용3", isDone: false },
    { id: 4, title: "제목4", con: "내용4", isDone: false },
  ]);
  const [con, setCon] = useState("");
  const [title, setTitle] = useState("");

  const addHandler = () => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      con: con,
      isDone: false,
    };
    setPosts([...posts, newPost]);
  };
  const deleteHandler = (id) => {
    const newPostList = posts.filter((post) => post.id !== id);
    setPosts(newPostList);
  };
  const toggleHandler = (isDone) => {};
  // isdone = false 가 디폴트값
  // 완료를 누르면 isDone 이 True가 됨
  // if(isDone==True){done에 뿌리기}elseif{todo에 뿌리기}
  // list를 찍었을때 각각의 list마다 고유값이 있다 -> id
  // 버튼을 누르면 해당 id 의 isDone 의 값이 True/False 로 바뀌어야함

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div>
      <div>MyTodoList</div>
      <div>
        {"제목  "}
        <input
          type={"text"}
          value={title}
          placeholder="제목입력"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        {"내용  "}
        <input
          type={"text"}
          value={con}
          placeholder="내용입력"
          onChange={(event) => setCon(event.target.value)}
        ></input>
        <button onClick={addHandler}>추가하기</button>
      </div>

      <div>
        {"Todo.."}
        <div className="">
          {posts.map((post) => {
            if (post.isDone === false) {
              return (
                <Post
                  handleDelete={deleteHandler}
                  hadleToggle={toggleHandler}
                  post={post}
                  key={post.id}
                ></Post>
              );
            }
          })}
        </div>
      </div>
      <div>
        {"Done.."}
        <div className="">
          {posts.map((post) => {
            if (post.isDone === true) {
              return (
                <Post
                  handleDelete={deleteHandler}
                  hadleToggle={toggleHandler}
                  post={post}
                  key={post.id}
                ></Post>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

function Post(props) {
  return (
    <div className="">
      {props.post.title}
      <br />
      {props.post.con} <br />
      <button
        onClick={() => {
          props.handleDelete(props.post.id);
        }}
      >
        del
      </button>
      <button
        onClick={() => {
          props.toggleHandler(props.post.isDone);
        }}
      >
        toggle
      </button>
    </div>
  );
}

export default App;
