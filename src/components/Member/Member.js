import React from 'react';
import './Member.css';

const Member = (props) => {
  const { image, name } = props.member;
  return (
    <div className="members p-3 fw-bold">
      <img className="member__img" src={image} alt="" />
      <div className="text-start ps-3">
        <h6> {name} </h6>
      </div>
    </div>
  );
};

export default Member;
