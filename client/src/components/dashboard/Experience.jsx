import React from 'react';
import Moment from 'react-moment';

const Experience = ({ experience }) => {
  const experiences = experience.map((experience) => {
    return (
      <tr key={experience.id}>
        <td>{experience.company}</td>
        <td className='hide-sm'>{experience.title}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{experience.from} </Moment> -{' '}
          {experience.to === null ? (
            ' Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{experience.to}</Moment>
          )}
        </td>
        <td>
          <button className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className='container'>
      <h2 className='my-2'>Experiences</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

export default Experience;
