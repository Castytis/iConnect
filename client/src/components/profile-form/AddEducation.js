import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const clickCheckbox = (event) => {
    setFormData({
      ...formData,
      current: !current,
    });
    toggleDisabled(!toDateDisabled);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(addEducation(formData));
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Add Your education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add School, bootcamp and others
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* School'
            name='school'
            required
            value={school}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree'
            name='degree'
            required
            value={degree}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Field of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={clickCheckbox}
            />{' '}
            Current studying
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </div>
  );
};

export default AddEducation;
