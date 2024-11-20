import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})

export class PokemonListComponent implements OnInit {
  selectedPokemon!: PokemonDetailDto;
  selected: boolean = false;
  pokemons: PokemonDetailDto[] = [];


  constructor(private pokemonService: PokemonService) { }

  onselect(pokemon : PokemonDetailDto) {
    this.selectedPokemon = pokemon;
    this.selected = true;
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
