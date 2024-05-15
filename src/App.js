import "./App.css";
import { useEffect, useState } from "react";
import data_posts from "./jsons/posts.json";
import data_authors from "./jsons/authors.json";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const authorsObject = data_authors.reduce((acc, author) => {
      acc[author.id] = author;
      return acc;
    }, {});

    const mapping_authors_post = data_posts.map((post) => ({
      ...post,
      author: authorsObject[post.author_id],
    }));
    setPosts(mapping_authors_post);
  }, []);

  return (
    <div className="App">
      <main className="container">
        <div className="title">MAQE Forum</div>
        <div className="current-timezone">
          Your Current Timezone is: {userTimezone}
        </div>
        <div className="block">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
