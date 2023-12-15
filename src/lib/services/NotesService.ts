import type { Note } from "$lib/models/Note";

export class NotesService {
  public notesList: Note[] = [
    {
      id: 1,
      title: "Collaborative Coding Chronicles: Mastering Git in a Scrum Team",
      link: "mastering-git-in-a-scrum-team",
      date: "12 Dec 2023",
      tags: [
        "git",

      ]
    },
    {
      id: 2,
      title: "Mastering Flags and Bitwise Operations in Programming",
      link: "mastering-flags-and-bitwise-programming",
      date: "12 Dec 2023",
      tags: [
        "bitwise",
        "flags",
        "enum",

      ]
    },

  ];

  public getNotesList(searchTerm?: string): Note[] {
    if (!searchTerm)
      return this.notesList.reverse();
    searchTerm = searchTerm.toLowerCase();
    return this.notesList.filter(note => note.title.toLowerCase().includes(searchTerm!) || note.tags.some(tag => tag.toLowerCase().includes(searchTerm!)))
      .reverse();
  }
}