import React, { Fragment, useEffect } from 'react';
import { getProfileById } from '../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile.profiles);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [getProfileById]);

  return (
    <div className='container'>
      <Fragment>
        <Link to='/profiles' className='btn btn-light'>
          Back to profiles
        </Link>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user.id === profile.user.id && (
            <Link to='/edit-profile' className='btn btn-dark'>
              Edit Profile
            </Link>
          )}
        <div className='profile-grid my-1'>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
        </div>
      </Fragment>
    </div>
  );
};

export default Profile;
