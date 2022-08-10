import React from "react";
import PostList from "./postList/PostList.jsx";
import ShortInfo from "./shortInfo/ShortInfo.jsx";

function Home() {
  return (
    <main>
      <div className="postList">
        <PostList />
      </div>
      <div className="shortInfo">
        <ShortInfo />
      </div>
    </main>
  );
}

export default Home;
