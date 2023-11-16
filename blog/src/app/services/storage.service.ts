import { Injectable } from '@angular/core';
import { Blogpost } from 'src/blog-interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  //set data in localStorage
  setData(key: string, data: Blogpost[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // get data from localStorage, if there is data return it or return null.
  getData(key: string): Blogpost[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setProfile(key: string, data: string): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getProfile(key: string): string {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
