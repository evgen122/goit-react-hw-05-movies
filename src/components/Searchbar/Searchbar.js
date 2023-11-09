import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const changQuery = values => {
    setParams({ query: values });
  };

  return (
    <div className="searchbar">
      <Formik
        initialValues={{
          filter: query,
        }}
        onSubmit={values => {
          changQuery(values.filter);
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
