import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = (props) => {
  return (
    <div className='profile bg-light'>
      <img src={props.profile.user.avatar} className='round-img' />
      <div>
        <h2>{props.profile.user.name}</h2>
        <p>
          {props.profile.status}{' '}
          {props.profile.company && <span>at {props.profile.company}</span>}
          <Link
            to={`/profile/${props.profile.user._id}`}
            className='btn btn-primary'
          >
            View Profile
          </Link>
        </p>
      </div>
      <ul>
        {props.profile.skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
