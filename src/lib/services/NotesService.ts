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
    {
      id: 3,
      title: "How I Used Certbot to Get a Free SSL Certificate",
      link: "how-i-used-certbort-to-get-a-free-ssl-certificate",
      date: "21 Jan 2024",
      tags: [
        "Certbot",
        "Let’s Encrypt",
        "SSL",
        "Spring Boot",
      ]
    },
    {
      id: 4,
      title: "How to Configure Spring Boot App to Use Different .properties Files Depending on the Environment",
      link: "configure-springboot-to-use-different-properties-files",
      date: "21 Jan 2024",
      tags: [
        "Environments",
        "Profiles",
        "Spring Boot",
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