import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return <div className='container'>dashboard</div>;
};

export default Dashboard;
