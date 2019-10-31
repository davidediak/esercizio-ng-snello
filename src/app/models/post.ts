import { Author } from './author';

export class Post {
  id: string;
  titolo: string;
  content: string;
  attachments: string;
  autore_id: string;
  autore?: Author;
  pathImage?: string;
}
