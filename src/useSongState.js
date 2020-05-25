import { useState } from 'react';

export default initialValue => {
  const [songs, setSongs] = useState(initialValue);

  return {
    songs,
    addSong: songText => {
      setSongs([...songs, songText]);
    },
    deleteSong: songIndex => {
      const newSongs = songs.filter((_, index) => index !== songIndex);

      setSongs(newSongs);
    }
  };
};
