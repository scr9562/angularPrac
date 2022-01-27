import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  today!: Date;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
    this.getTime();
  }

  getTime(): void {
    this.today = new Date();
    var hur = this.today.getHours();		// 시
		var min = this.today.getMinutes();	//분
		var sec = this.today.getSeconds();	//초
    var timeBoard = document.getElementById("test");
    var time = "현재 시간 : " + hur + "시 " + min + "분 " + sec + "초";
    timeBoard!.innerHTML = time;
    setInterval(this.getTime, 1000);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  changeColor(color: string): void {
    color = color.trim();
    var t = document.getElementById("color");
    switch (color) {
      case 'blue':
        t!.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        t!.style.backgroundColor = 'yellow';
        break;
      case 'green':
        t!.style.backgroundColor = 'green';
        break;
      case 'red':
        t!.style.backgroundColor = 'red';
        break;
      case 'white':
        t!.style.backgroundColor = 'white';
    }
  }


  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}