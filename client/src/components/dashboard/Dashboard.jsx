import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';
import { deleteAccount } from '../../actions/profile';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return (
    <div className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>Welcome {auth.user && auth.user.name}</p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className='my-2'>
            <button
              className='btn btn-danger'
              onClick={() => dispatch(deleteAccount())}
            >
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>No profile found</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
