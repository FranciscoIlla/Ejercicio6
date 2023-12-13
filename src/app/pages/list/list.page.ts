import { Component, OnInit } from '@angular/core';
import {Posts} from "../../common/interface";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  posts: any[] = [];
  skeleton = false;

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

  doRefresh(event: any){
    setTimeout(()=> {
      this.posts.push(Array(10));
      this.skeleton = true;
      event.target.complete();
    },1500);
    this.skeleton = false;
  }

}
