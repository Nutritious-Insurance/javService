/* eslint-disable  */
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
import '../styles.css';
import {
  Modal, ModalBody,
} from 'reactstrap';

const ReactStrapTest = props => {
  const {
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  const { reviews } = props;
  return (
    <div>
      <div className="reviewButton" onClick={toggle}>
        + Read All {reviews.length} Reviews
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalBody>
          <div className="reviewsModalTitle">Reviews</div>
          {reviews.map(review => (
            <div key={review._id}>
              <StarRatingComponent
                className="stars"
                name="rate1"
                starCount={review.rating}
                editing={false}
                value={5}
              />
              <div className="reviewTitle">
                {review.reviewTitle.charAt(0).toUpperCase() +
                  review.reviewTitle.slice(1)}
              </div>
              <div className="reviewAuthor">
                by {review.reviewAuthor} on{' '}
                {moment(review.reviewDate).format('LL')}
              </div>
              <div className="reviewBody">
                {review.rating === 1
                  ? review.reviewBody.toUpperCase()
                  : review.reviewBody}
              </div>
            </div>
          ))}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ReactStrapTest;
