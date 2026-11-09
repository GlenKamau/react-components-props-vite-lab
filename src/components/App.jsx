import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <Article
        title={blogData.posts[0].title}
        date={blogData.posts[0].date}
        preview={blogData.posts[0].preview}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
