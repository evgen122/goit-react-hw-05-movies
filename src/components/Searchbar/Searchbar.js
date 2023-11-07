import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { SearchBar } from './Searchbar.styled';

export const Searchbar = ({ movieData, searchMovies }) => {
  return (
    <div className="searchbar">
      <Formik
        initialValues={{
          filter: '',
        }}
        onSubmit={values => {
          searchMovies(values);
        }}
      >
        <Form>
          <label htmlFor="filter">
            <Field name="filter" autoFocus placeholder="Search movies" />
          </label>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
