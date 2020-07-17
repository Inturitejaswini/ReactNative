let noteConfigApi = {
  noteAdd: '/notes/addNotes',
  getNotes: '/notes/getNotesList',
  editNotes: '/notes/updateNotes',
  archiveNotes: '/notes/archiveNotes',
  deleteNotes: '/notes/trashNotes',
  pinNotes: '/notes/pinUnpinNotes',
  UnPinNotes: '/notes/pinUnpinNotes',
  colorNotes: '/notes/changesColorNotes',
  updateReminder: '/notes/addUpdateReminderNotes',
  addLabel: '/noteLabels',
  deleteForever: '/notes/deleteForeverNotes',
  restoreNotes: '/notes/deleteForeverNotes',
  unarchiveNotes: '/notes/archiveNotes',
  notecollaborator:'/notes/AddcollaboratorsNotes',
  getLabels: '/noteLabels/getNoteLabelList',
};
export default noteConfigApi;
