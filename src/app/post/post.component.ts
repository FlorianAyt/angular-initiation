import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: Date;
  @Input() loveIts: number;
  constructor() {
    this.title = '';
    this.content = '';
    this.createdAt = new Date();
    this.loveIts = 0;
  }

  ngOnInit(): void {
  }

  getloveit(){
    if ( this.loveIts === 0){
      return 'red';
    }
    else if (this.loveIts === 1){
        return 'green';
    }else{
      return 'white';
    }
  }
  onLove(){
    this.loveIts = 1;
  }
  onNotLove(){
    this.loveIts = 0;
  }
}
