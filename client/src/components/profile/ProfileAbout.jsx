import React, { Fragment } from 'react';

const ProfileAbout = (props) => {
  const profile = props;
  const { bio, skills, user } = profile;

  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{user.name}</h2>
          <p>{bio}</p>
          <div className='line'></div>
        </Fragment>
      )}

      <h2 className='text-primary'>Skill Set</h2>
    </div>
  );
};

export default ProfileAbout;
