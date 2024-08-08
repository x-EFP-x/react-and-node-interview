import { useState, useEffect } from 'react'
import { Articles } from './articles/Articles';
import { List } from './List/List';
import { Assistant } from './assitant/Assitant';
import './App.css'

function App() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/articles/')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <List>
        {articles.map(article => (
          <Articles
            key={article._id}
            title={article.title}
            author={article.author}
            description={article.description}
            urlToImage={article.urlToImage}
            url={article.url}
          />
        ))}
      </List>
      <Assistant></Assistant>
    </>
  )
}

export default App
