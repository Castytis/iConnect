import React, { Fragment, useEffect } from 'react';
import { getProfiles } from '../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  return (
    <div className='container'>
      <Fragment>
        <h1 className='large text-primary'> Profiles</h1>
        <p className='lead'>Browse and connect with users</p>
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found </h4>
          )}
        </div>
      </Fragment>
    </div>
  );
};

export default Profiles;
