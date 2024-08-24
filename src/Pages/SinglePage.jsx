import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ArticleContent from '../Componants/ArticleContent';

const SinglePage = () => {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        {/* Add other meta tags if needed */}
      </Helmet>

      <Container-fuild className=" container px-5">
        <div className="card mb-5 mt-2 p-1">
          <Image className="img-fluid" alt={article.title} src={article.img} />
          <main className="card-content p-3 p-md-5">
            <h1>
              <a href="/"> {article.title}</a> <span className="cute"></span>
            </h1>
            <h3>{article.desc}</h3>
            <p className="date">
              <a href={article.authorlink}>{article.author}</a>  {article.date}
            </p>
            <p className="dotted" />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </Container-fuild>
    </>
  );
};

export default SinglePage;
