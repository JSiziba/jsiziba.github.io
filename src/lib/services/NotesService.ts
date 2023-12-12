import type { Note } from "$lib/models/Note";

export class NotesService {
  public notesList: Note[] = [
    {
      id: 1,
      title: "Creating a new branch in git",
      link: "creating-a-new-branch-in-git",
      date: "2023-12-12",
      tags: [
        "git",
        "branch",
      ]
    }
  ];

  public getNotesList(searchTerm?: string): Note[] {
    if (!searchTerm)
      return this.notesList;
    searchTerm = searchTerm.toLowerCase();
    return this.notesList.filter(note => note.title.toLowerCase().includes(searchTerm!) || note.tags.some(tag => tag.toLowerCase().includes(searchTerm!)));
  }
}