import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import inputForm from './inputForm';
import songList from './songList';
import useSongState from './useSongState';
import './styles.css';

const App = () => {
  const { songs, addSong, deleteSong } = useSongState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Music List
      </Typography>

      <inputForm
        saveSong={songText => {
          const trimmedText = songText.trim();

          if (trimmedText.length > 0) {
            addSong(trimmedText);
          }
        }}
      />

      <songList songs={songs} deleteSong={deleteSong} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
