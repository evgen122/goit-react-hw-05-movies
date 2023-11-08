import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useSearchParams } from 'react-router-dom';
// import { SearchBar } from './Searchbar.styled';

export const Searchbar = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  //   console.log(query);
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
          //   console.log(values);
          changQuery(values.filter);
          //   onSearch(values);
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
