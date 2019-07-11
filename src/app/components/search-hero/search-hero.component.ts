import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  heroes: Heroe[] = [];
  heroToSearch: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _router:Router) {

    this._activatedRoute.params.subscribe(params => {
      this.heroToSearch = params['name'];
      console.log('from params ' + this.heroToSearch);
      
      if (this.heroToSearch || this.heroToSearch != null && this.heroToSearch.length > 0) {
        this.heroes = this._heroesService.searchHero(this.heroToSearch);
      }
      
    });

  }

  ngOnInit() {
    

  }

  verHeroe(index: number){
    this._router.navigate(['/heroe', index]);
    
  }

}
