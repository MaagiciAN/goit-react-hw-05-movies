import { useState } from 'react';
import css from './MovieSearchForm.module.css';

export const MovieSearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <input
        className={css.input}
        name="movie"
        required
        value={query}
        onChange={handleChange}
      ></input>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};