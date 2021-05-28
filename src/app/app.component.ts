import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'opclassproject';


  constructor() {
  }
  ngOnInit() {
  }

}
