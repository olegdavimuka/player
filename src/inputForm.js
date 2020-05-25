import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const inputForm = ({ saveSong }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveSong(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add song"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default inputForm;
