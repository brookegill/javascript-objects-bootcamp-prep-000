var playlist = {
  artistName: "songTitle"
};

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  playlist['Slowdive'] = "Alison"
  playlist['My Bloody Valentine'] = "Sometimes"
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
=======
  return Object.assign({}, playlist, { [Alison]: "Slowdive", [My Bloody Valentine]: "Sometimes", [Phil Ochs]: "Here's to the State of Mississippi"})
>>>>>>> 8811d2d13af0bc886a912c5c4ae92051a1ab556c
};
