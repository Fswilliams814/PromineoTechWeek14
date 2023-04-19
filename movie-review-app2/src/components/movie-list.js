// a container for all the Movie components and their data
import React from 'react';
import Movie from './the-movie';




export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    //this.addUserReview = this.addUserReview.bind(this);
    this.updateReviewState = this.addUserReview;
  }

  // todo: fix/replace ratings images, too small
  render() {
    return (
  <div className='container'>
    <div>
  <Movie {...
    {id: 1,
    key: 1,
    title: 'Boyz N The Hood',
    ratingImage: <img src='./assets/ratedPg13.png' alt='movie rating'/>,
    summary: "Three young males living in the Crenshaw ghetto of Los Angeles, dissecting questions of race, relationships, violence, and future prospects.",
    released: '1991',
    image: 'https://m.media-amazon.com/images/M/MV5BYzQ4OWQyNjEtNmYxOS00N2Y1LTk1NmItNmM5ODc3NGRlMDMzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_UX100_CR0,0,100,100_AL_.jpg'}
  } /> </div>

<div>
  <Movie {...
    {id: 2,
    key: 2,
    title: 'Coming to America',
    ratingImage: <img src='./assets/ratedR.png' alt='movie rating'/>,
    summary: "An extremely pampered African prince travels to Queens, New York and goes undercover to find a wife that he can respect for her intelligence and strong will.",
    released: '1988',
    image: 'https://m.media-amazon.com/images/M/MV5BMjEwNzA3MTAzOV5BMl5BanBnXkFtZTYwMzk1Mzk4._V1_UX100_CR0,0,100,100_AL_.jpg'}
  } /> </div>
  <div>
  <Movie {...
    {id: 3,
    key: 3,
    title: 'Waiting to Exhale',
    ratingImage: <img src='./assets/ratedPg.png' alt='movie rating'/>,
    summary: "Four African American women and their relationships with me",
    release: '1995',
    image: 'https://m.media-amazon.com/images/M/MV5BYTQ1YmFlMDktMDQ4MC00ZmUwLWExMjktMGNjMGNjNzQ0M2VjXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_UX100_CR0,0,100,100_AL_.jpg'}
  } /> </div>
  <div>
  <Movie {...
    {id: 4,
    key: 4,
    title: 'House Party',
    ratingImage: <img src='./assets/ratedPg13.png' alt='movie rating'/>,
    summary: "Kid goes to a party at his friend Play's house but neither of them know that it's going to be one of the wildest nights of their lives.",
    released: '1990',
    image: 'https://m.media-amazon.com/images/M/MV5BMTcyMjM1MTU2M15BMl5BanBnXkFtZTgwMDU1NTk4NjE@._V1_UX100_CR0,0,100,100_AL_.jpg'}
  } /> </div>
  <div>
  <Movie {...
    {id: 5,
    key: 5,
    title: 'Soul Food',
    ratingImage: ' Not Rated (tv movie)',
    summary: "One person can keep a family together and, when that one person is gone, a family can be torn apart.",
    released: '1997',
    image: 'https://m.media-amazon.com/images/M/MV5BMTgzOTA5OTc0OF5BMl5BanBnXkFtZTYwNzkxNDA5._V1_UX100_CR0,0,100,100_AL_.jpg'}
  } />
  </div>
  </div>
);
}
}


// console.log(<MovieList/>)