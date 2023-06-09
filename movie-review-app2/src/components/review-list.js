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

  onFormSubmit(formState) {
    const reviews = this.state.reviews.slice();
    reviews.push(formState);
    console.log(reviews)
    this.setState ({
      reviews
    })
  }

  render() {
    return (
      <div className='container'>
        {this.state.reviews.map(function(review, index) {
          return <div key={index}> {review.reviewInfo}</div>
        })}
        <ReviewForm onSubmit={(formState) => {
          this.onFormSubmit(formState)
        }} />
      </div>
    )
  }
}

// export default class ReviewList extends React.Component {
//   constructor(props) {
//     super(props);
//       this.state = {reviews: new Array()};
//   }


//   //a function that will add the reviews to an array
//   onFormSubmit(formState) {
   
//     let reviews = this.state.reviews.slice();
//     reviews.push(formState);
//     console.log("review array", reviews)
//     this.setState ({
      
//       reviews
//     })
//     console.log("the review", this.reviews);
//   }
//   componentDidMount = () => {
//     console.log("it is working")
//   };

//   render() {
//     return (
     
//       <div className='container'>
         
//         {this.state.reviews.map(function(review, index) {
//           return <div key={index}> {review.reviewsInfo}</div>
//         })}
       
//         <ReviewForm onSubmit={(formState) => this.onFormSubmit(formState)} />
//       </div>
//     )
//   }
// }


// // import React from 'react'
// // import ReviewForm from './review-form';

// // "use client";
// // import { ErrorBoundary } from "react-error-boundary";

// // export default class ReviewList extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     //creating the array each time a review is passed into the input field and updates the state
// //       this.state = {reviews: new Array()};
// //   }

// //   // onHandleChange()
// //   onFormSubmit(formState) {
// //     const reviews = this.state.reviews.slice();
// //     reviews.push(formState);
// //     this.setState ({
// //       reviews
// //     })
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <ErrorBoundary fallback={<div>Something went wrong</div>}>
// //         <ReviewForm onFormSubmit={(formState) => this.onFormSubmit(formState)} />
// //         </ErrorBoundary>
// //       </div>
// //     )
// //   }
// // }