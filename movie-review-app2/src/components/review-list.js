// a container inside of a Movie that houses Review components

// a container inside of a Movie that houses Review components

import React from 'react'
import ReviewForm from './review-form';
import { ErrorBoundary } from 'react-error-boundary';


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
      this.state = {reviews: new Array()};
  }

  //console log reviews to make sure that new array was created
  
  onFormSubmit(formState) {
    const reviews = this.state.reviews.slice();
    reviews.push(formState);
    this.setState ({
      reviews
    })
  }

  render() {
    return (
     
      <div className='form'>
         
        {this.state.reviews.map(function(review, index) {
          return <div key={index}> {review.reviewInfo}</div>
        })}
       
        <ReviewForm onSubmit={(formState) => this.onFormSubmit(formState)} />
      </div>
    )
  }
}
console.log(ReviewForm)
console.log(Array);

// import React from 'react'
// import ReviewForm from './review-form';

// "use client";
// import { ErrorBoundary } from "react-error-boundary";

// export default class ReviewList extends React.Component {
//   constructor(props) {
//     super(props);
//     //creating the array each time a review is passed into the input field and updates the state
//       this.state = {reviews: new Array()};
//   }

//   // onHandleChange()
//   onFormSubmit(formState) {
//     const reviews = this.state.reviews.slice();
//     reviews.push(formState);
//     this.setState ({
//       reviews
//     })
//   }

//   render() {
//     return (
//       <div>
//         <ErrorBoundary fallback={<div>Something went wrong</div>}>
//         <ReviewForm onFormSubmit={(formState) => this.onFormSubmit(formState)} />
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }