import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import "../Css/articleList.css"
const ArticleList = ({ articles }) => {
  const [page, setPage] = useState(1); // Current page state
  const blogsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / blogsPerPage);

  // Function to handle next page
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Calculate the start and end index for the current page
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = page * blogsPerPage;

  // Slice the articles array to get articles for the current page
  const visibleArticles = articles.slice(startIndex, endIndex);

  return (
    <>
    <div>
      <div className="row app d-flex align-items-center justify-content-center ">
        {visibleArticles.map((article, index) => (
          <div className="col-md-4 mx-5 card mb-3 mt-5 d-flex align-items-center" key={index}>
            <Link className="b  card-1 " to={`/article/${article.name}`}>
              <div className='image-container'>
              <img
                className="img-fluid startedImg img-size my-div"
                alt={article.title}
                src={article.img}
              />
              </div>
             
              <section className="card-content p-3 ">
               <div> 
               <h3>
                  {article.title} <span className="cute"></span>
                </h3>
                <p className="date ">
                  <a href={article.authorlink}>{article.author}</a> {' '}
                  {article.date}
                </p>
               </div>
               <div className="row">
                <div className="price d-flex align-items-center justify-content-around">
                  <h5>{article.price}</h5>

                  <p>{article.rating}</p>
                </div>
                <div className='price mb-3 d-flex align-items-center justify-content-around'>
                  <h6>{article.priceCity}</h6>
                  <h6>{article.petrol}</h6>
                </div>
              </div>
                <p>{article.content[0].substring(0, 100)}...</p>
              </section>

            
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination mb-3 gap-2 d-flex align-items-center justify-content-center">
        {/* Previous button */}
        <button
          className="btn btn-primary"
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        {/* Page buttons */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn ${i + 1 === page ? 'btn-primary active' : 'btn-outline-primary'}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {/* Next button */}
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
  
    </div>


   
    </>
    
  );
};

export default ArticleList;
