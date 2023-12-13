import {Component, OnInit} from '@angular/core';

import {Posts} from "../common/interface";
import {DataService} from "../services/data.service";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


 posts: Posts[] = [];

 constructor(private dataService: DataService) {
 }

  ngOnInit(): void {
    this.loadPosts();
  }


  private loadPosts() {
    this.dataService.getPosts().subscribe(
      {
        next: (value: Posts[]) => {
          this.posts = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
 }
}
