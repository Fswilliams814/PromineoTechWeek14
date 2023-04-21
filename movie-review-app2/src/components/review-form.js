// a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment

// todo: functioning change state, review pushed to array

import React from 'react';
//import button and form from react bootstrap to build out the review form
import {Button, Form} from 'react-bootstrap';
import ReviewList from './review-list';

//create variable for the save review button
// const saveReview = document.getElementsByClassName('save')
// console.log(saveReview);
// //create variable for the form
//const formForReview = document.getElementById('userReview')

export default class ReviewForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        userReview: '',
      }
      // this.id = props.id;
      // this.userReview = props.userReview;
      // this.updateReviewState = props.updateReviewState;
      // todo: update functions to arrow functions, don't need to bind
      this.submitReview = this.submitReview.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  resetReview() {
    this.setState({
      userReview: '',
    });
  }

  submitReview() {
    this.props.onSubmit(this.state);
    this.resetReview();
    return false;
  }

  handleChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
    console.log({value})
  }

  render() {
    return (
      <Form className="reviewForm" onChange={this.handleChange}>
          <div className="form-group container mb-3" controlid="exampleForm.ControlTextarea1">
          <label>Leave a Comment:</label>
          <Form.Control type='text' className='form-control' placeholder='Add Your Review Here' defaultValue={this.state.userReview} as="textarea" id="userReview" rows={3} value={this.userReview}/>
       </div>
        <div className="d-grid gap-2">
          <Button variant="primary" active size="lg" onClick={this.submitReview}>Save Review</Button>
        </div>
        <input type='hidden' name='movieId' id='movieId' value={this.id}/>
        <input type='hidden' id='showMovieId' placeholder={this.id}/>
      </Form>
    )
  }
}


// export default class ReviewForm extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("current props:", this.props)
//       this.state = {
//         userReview: "",
//       }
     
//       // this.id = props.id;
//       // this.userReview = props.userReview;
//       // this.updateReviewState = props.updateReviewState;
//       // todo: update functions to arrow functions, don't need to bind
//       this.submitReview = this.submitReview.bind(this);
//       this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount = () => {
//     console.log("it is working")
//   };

//   //creating the function to be used with the onclick method

//   resetReview() {
//     this.setState({
//       userReview: '',
//     });
//   }

//   //need to figure out how to submit the review when button is clicked
//   submitReview() {
//    this.props.onsubmit(this.state);
   
//    this.resetReview();
//     return false;
   

//   }


//   // I think this should be onChange, parent gets handleChange
//   handleChange(event) {
//     console.log(event)
//     this.setState({
//       userReview: this.props.userReview
//     });
    
//   }

//   render() {
  
//     return (
//       <div>
//       <Form className="reviewForm" onChange={this.handleChange}>
//         <div className="form-group container mb-3" controlid="exampleForm.ControlTextarea1">
//          <label>Leave a Comment:</label>
//           <input type='text' className='form-control' placeholder='Add Your Review Here' defaultValue={this.state.userReview} />
          

//           </div>
      
//         <div className="d-grid gap-2">
//           <Button  type='submit' className='save btn btn-primary' variant="primary" onChange={this.submitReview}>Save Review</Button>
//         </div>
       
//         <input type='hidden' name='movieId' id='movieId' value={this.id}/>
//         <input type='hidden' id='showMovieId' placeholder={this.id}/>
//       </Form>
//       </div>
//     )
//   }
// }

