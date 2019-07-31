import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusAPIService {

  constructor() {
  }

  list() {
    return [
      {
        id: 1,
        user: {
          id: 1,
          username: 'admin',
          uri: 'http://127.0.0.1:8000/api/user/admin/'
        },
        content: 'content 1',
        image: 'http://127.0.0.1:8000/media/status/admin/Iron-Man-3-Header1.jpg',
        uri: 'http://127.0.0.1:8000/api/status/1/'
      },
      {
        id: 2,
        user: {
          id: 1,
          username: 'admin',
          uri: 'http://127.0.0.1:8000/api/user/admin/'
        },
        content: 'content 2',
        image: 'http://127.0.0.1:8000/media/status/admin/Iron-Man-3-Header1_fP4OC0r.jpg',
        uri: 'http://127.0.0.1:8000/api/status/2/'
      },
      {
        id: 3,
        user: {
          id: 1,
          username: 'admin',
          uri: 'http://127.0.0.1:8000/api/user/admin/'
        },
        content: 'content 3',
        image: 'http://127.0.0.1:8000/media/status/admin/Iron-Man-3-Header1_OSqEGyn.jpg',
        uri: 'http://127.0.0.1:8000/api/status/3/'
      },
      {
        id: 4,
        user: {
          id: 1,
          username: 'admin',
          uri: 'http://127.0.0.1:8000/api/user/admin/'
        },
        content: 'Some random content',
        image: 'http://127.0.0.1:8000/media/status/admin/logo.jpg',
        uri: 'http://127.0.0.1:8000/api/status/4/'
      },
      {
        id: 5,
        user: {
          id: 1,
          username: 'admin',
          uri: 'http://127.0.0.1:8000/api/user/admin/'
        },
        content: 'this new content post',
        image: 'http://127.0.0.1:8000/media/status/admin/logo_NkMp21t.jpg',
        uri: 'http://127.0.0.1:8000/api/status/5/'
      }
    ];
  }
}
