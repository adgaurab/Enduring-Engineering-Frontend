import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


var myHeaders = new Headers();
myHeaders.append("Authorization", "Token 44d3cf18c2b44571aacc3c84661062440d74ec08");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: { "Authorization": "Token 44d3cf18c2b44571aacc3c84661062440d74ec08", "Content-Type": "application/json" },
  redirect: 'follow'
};

const API_URL = 'http://127.0.0.1:8000/';
// const API_URL = 'https://enduring-engineering.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})


export class ApiService {


  constructor(private http: HttpClient) { }

  public get(url): Observable<any> {
    return this.http.get(API_URL + url).pipe(map(res => res));
  }

  createArticle(data): Observable<any> {
    // return this.http.post(API_URL + 'post-article/'+ data  +'/' , requestOptions);
    return this.http.post(API_URL + 'post-article/', data);

  }

  createAccount(data): Observable<any> {
    return this.http.post(API_URL + 'rest-auth/login/', data);
  }

  createUser(data): Observable<any> {
    return this.http.post(API_URL + 'users/', data);
  }

  uploadImage(image): Observable<any> {
    return this.http.post('https://api.imgbb.com/1/upload', image);
  }

  getUserInfo(token): Observable<any> {
    return this.http.get(API_URL + 'user-key/?token=' + token);
  }

  deletepost(id): Observable<any> {
    console.log(API_URL + 'post-article/' + id)
    return this.http.delete(API_URL + 'post-article/' + id + '/');
  }

  updateArticle(id, data): Observable<any> {
    // return this.http.post(API_URL + 'post-article/'+ data  +'/' , requestOptions);
    return this.http.put(API_URL + 'post-article/' + id + '/', data);

  }

  tagArticle(tag): Observable<any> {
    return this.http.get(API_URL + 'tags-article/?tag=' + tag);
  }

  findByPlace(string) {
    console.log(API_URL + 'search-location/?tag=' + string)
    return this.http.get(API_URL + 'search-location/?tag=' + string);
  }
}
