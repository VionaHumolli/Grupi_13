

import React, { useState } from 'react';

const ThankYouPage: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleRating = (star: number) => {
    setRating(star);
    setSubmitted(true);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim()) {
      setReviewSubmitted(true);
    }
  };

  return (
    <div
      style={{
        minHeight: '99vh',
        width: '99vw',          
        background: '#162f66',
        padding: '80px 60px',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
        paddingBlock:'50px',
        paddingRight:'30px',
        margin:'0px'
      }}
    >
      
      <div
        style={{
          width: '85%',       
          background: '#ffffff',
          borderRadius: '20px',
          padding: '60px',
          paddingRight:'100px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
        }}
      >
        
        <h1
          style={{
            color: '#162f66',
            fontSize: '38px',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          Thank You for Booking with YACHTERA
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#555',
            marginBottom: '50px',
            textAlign: 'center',
          }}
        >
          We appreciate your trust. Your luxury experience begins now.
        </p>

        
        <div
          style={{
            background: '#9abcff65',
            borderRadius: '18px',
            padding: '50px',
            maxWidth: '900px',     
            margin: '0 auto',      
          }}
        >
          <p
            style={{
              fontSize: '22px',
              color: '#162f66',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            How would you rate your booking experience?
          </p>

         
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={starValue}
                  style={{
                    fontSize: '40px',
                    cursor: 'pointer',
                    color: starValue <= (hover || rating) ? '#FFD700' : '#ccc',
                  }}
                  onClick={() => !submitted && handleRating(starValue)}
                  onMouseEnter={() => !submitted && setHover(starValue)}
                  onMouseLeave={() => !submitted && setHover(0)}
                >
                  ★
                </span>
              );
            })}
          </div>

          {submitted ? (
            <p style={{ textAlign: 'center', color: '#162f66', fontWeight: 600 }}>
              Thank you for your {rating}-star rating!
            </p>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#777' }}>
              Click a star to submit your rating
            </p>
          )}

          <p
            style={{
              marginTop: '35px',
              marginBottom: '10px',
              color: '#162f66',
              fontWeight: 600,
            }}
          >
            Share your thoughts
          </p>

          {reviewSubmitted ? (
            <p style={{ color: '#162f66', fontWeight: 600 }}>
              Thank you for your review!
            </p>
          ) : (
            <>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                style={{
                  width: '97%',
                  minHeight: '130px',
                  padding: '14px',
                  fontSize: '15px',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  marginBottom: '15px',
                  resize: 'none',
                  
                }}
              />

              <button
                onClick={handleReviewSubmit}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: '#162f66',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                Submit Review
              </button>
            </>
          )}
        </div>

        
        <div
          style={{
            margin:'auto',
            marginTop: '80px',
            
            padding: '50px',
            borderRadius: '18px',
            textAlign: 'center',
            background: '#9abcff65',
            
            
            maxWidth: '900px',     
            
          }}
        >
          <h3 style={{ color: '#162f66' }}>Get 5% Off Your Next Booking</h3>
          <p style={{ fontSize: '15px', color: '#555' }}>
            Tag YACHTERA on social media and send proof to{' '}
            <a href="mailto:support@yacht.com">support@yacht.com</a>
          </p>
        </div>

        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="/"
            style={{
              padding: '14px 32px',
              background: '#162f66',
              color: '#fff',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
