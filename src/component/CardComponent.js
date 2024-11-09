import Card from 'react-bootstrap/Card';
import './CardComponent.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function CardComponent() {

const [quote , setQuote]= useState('Protecting someone means giving them a place to belong. Giving them a place where they can be happy.');
const [author, setAuthor] = useState('Princess Lenessia');

useEffect(() => {
  fetchQuote();
}, []);

const fetchQuote = async () => {
  try {
    const response = await fetch('https://quotes-api-self.vercel.app/quote')
    .then(response => response.json())
    .then(data => {
      setQuote(data.quote);
      setAuthor(data.author);
      console.log('data.author: ',data.author);
      console.log('data.quote: ',data.quote);
    })
    
    .catch(error => {
      
      console.error(error);
    });
  
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
};


  return (
    <div className="card-container" >
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          {quote}
        </Card.Text>
        <div className='button'>
        <a  id="tweet-quote" 
           href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
           target="_blank" 
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
          </svg>
        </a>
        <Button onClick={fetchQuote} variant="primary">New Quote</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}
export default CardComponent;