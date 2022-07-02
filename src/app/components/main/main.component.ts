import {Component, OnInit} from '@angular/core';
import {DataService} from "../../@services/data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public inputPerson!: string;

  constructor(
    public data: DataService,
  ) { }

  ngOnInit(): void {
    this.data.getData();
  }

  searchFollowers(){
    this.data.person = this.inputPerson;
    this.data.followers = [];
    this.data.getData();
  }
}
