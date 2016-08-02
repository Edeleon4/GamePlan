function compare_note_startTimes(note1,note2) {
  if (note1.startTime < note2.startTime)
     return -1;
  if (note1.startTime > note2.startTime)
    return 1;
  return 0;
}

function sortNotes(notes) {
   notes.sort(compare_note_startTimes);
}

function addNote(content, time, play_name) {
  play = data[play_name];
  var note = {text: content, startTime: time};
  notes = play.notes;
  notes.push(note);
  sortNotes(notes);
  localStorage.setItem('data', JSON.stringify(data));

}

function deleteNote(index, play_name) { 
  play = data[play_name];
  notes = play.notes;
  notes.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(data));
}

function editNote(index, play_name, new_text) { 
  play = data[play_name];
  notes = play.notes;
  note = notes[index];
  note.context = new_text;
  localStorage.setItem('data', JSON.stringify(data));
}
