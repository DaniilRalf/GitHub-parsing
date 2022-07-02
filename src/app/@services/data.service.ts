import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Follower} from "../@interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
  ) { }

  public person: string = '';
  public followers: Follower[] = [];

  getData(){
    return this.http.get(`http://api.github.com/users/${this.person}/followers`).subscribe((value: any) => {
      this.followers = value;
    });
  }
}
