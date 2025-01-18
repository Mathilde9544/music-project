function playSound(note) {
  const audio = new Audio(`sounds/${note}.wav`);
  audio.play();
}

document.querySelectorAll(".note").forEach(note => {
  note.addEventListener("click", () => {
    playSound(note.id)
    console.log("playing sound")
  })
});

const noteKeys = {
  'r': 'do',
  'f': 're',
  't': 'mi',
  'g': 'fa',
  'y': 'sol',
  'h': 'la',
  'u': 'si',
  'j': 'do-octave'
};

document.addEventListener('keydown', (event) => {
  const note = noteKeys[event.key];
  if (note) {
    playSound(note);
    playing(note);
  }
})

function playing(note) {
  const noteToHover = document.getElementById(note)
  if (noteToHover) {
    console.log("playing")
    noteToHover.classList.add('playing')
    setTimeout(() => {
      noteToHover.classList.remove('playing')
    }, 400);
  }
}
