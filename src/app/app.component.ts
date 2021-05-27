import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'opclassproject';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  posts = [
    {
      title: 'Mon premier post',
      content: 'Ce post est blablabla',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Ce post est blablabla',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon post',
      content: 'GHHhh0',
      loveIts: 12,
      createdAt: Date.now()
    }

  ];
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    this.appareils = [];
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  appareils: any[];
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
