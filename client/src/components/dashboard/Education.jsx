import React from 'react';
import Moment from 'react-moment';

const Education = ({ education }) => {
  const educations = education.map((edu) => {
    return (
      <tr key={edu.id}>
        <td>{edu.school}</td>
        <td className='hide-sm'>{edu.degree}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{edu.from} </Moment> -{' '}
          {edu.to === null ? (
            ' Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
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
      <h2 className='my-2'>Education</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

export default Education;
