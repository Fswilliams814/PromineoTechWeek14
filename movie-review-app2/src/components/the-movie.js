// a component that represents movie data (i.e. image, synopsis, rating, etc… [note: imported from movielist])

import React from 'react';
import Card  from 'react-bootstrap/Card';
import ReviewList from './review-list';
import Stars from './star-rating';
import { ErrorBoundary } from 'react-error-boundary';

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    //These props will be the description for the movie data
    this.state = {
      id: props.id,
      title: props.title,
      ratingImage: props.ratingImage,
      summary: props.summary,
      released: props.released,
      image: props.image
    };
  }
//used Error boundary to figure out why the app was not working
  render() {
    return (
     //create a card that will display the movie info from the props passed in
      <Card style={{ width: '15rem' }}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Card.Header>{this.props.title}</Card.Header></ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong</div>}><Card.Img variant="top" src={this.props.image} /></ErrorBoundary>
        <Card.Body>
          <div className="card-body">
            {this.props.summary}
            <br />
            <br/>
            {this.props.ratingImage}
          </div>
        </Card.Body>
        <br/>
        <div id='cardFooter'>
        <Card.Footer className="text-muted">
          <Stars />
          <ErrorBoundary fallback={<div>Something went wrong</div>}> <ReviewList /> </ErrorBoundary>
        </Card.Footer></div>
      </Card>
  
    )
	}
}