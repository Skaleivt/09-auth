import { NewNote, Note } from "@/types/note";
import { nextServer } from "./api";
import { User } from "@/types/user";
// import { cookies } from "next/headers";

export interface NoteSearchResponse {
  notes: Note[];
  totalPages: number;
  page: number;
  perPage: number;
}

// async function getAuthHeaders() {
//   const cookieStore = await cookies();
//   return {
//     Cookie: cookieStore.toString(),
//   };
// }

export async function fetchNotes({
  searchQuery,
  tag,
  page,
}: {
  searchQuery?: string;
  tag?: string;
  page?: number;
}): Promise<NoteSearchResponse> {
  const response = await nextServer.get<NoteSearchResponse>(`/notes`, {
    params: {
      ...(searchQuery && { searchQuery: searchQuery }),
      ...(tag && tag !== "All" && { tag }),
      perPage: 9,
      page,
    },
  });

  return {
    ...response.data,
  };
}

// Створення нової нотатки
export async function createNote(noteData: NewNote): Promise<Note> {
  const response = await nextServer.post<Note>(`/notes`, noteData);
  return response.data;
}

// Видалення нотатки
export async function deleteNote(id: string): Promise<Note> {
  const response = await nextServer.delete<Note>(`/notes/${id}`);
  return response.data;
}
// Деталі нотатки
export async function fetchNoteById(id: string) {
  const response = await nextServer.get<Note>(`/notes/${id}`);

  return response.data;
}

export const getServerMe = async (): Promise<User> => {
  const { data } = await nextServer.get("/auth/me");
  return data;
};
