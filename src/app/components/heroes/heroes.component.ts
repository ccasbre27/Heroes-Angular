import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  

  constructor(private _heroesService: HeroesService,
    private _router:Router) {

  }

  ngOnInit() {
    // ngOnInit se ejecuta cuando la página ya está renderizada
    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe(index: number){
    this._router.navigate(['/heroe', index]);
    
  }
  
  
}
