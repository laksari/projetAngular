import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { timer } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  user = new FormControl("Hello");

  constructor() { }

  ngOnInit(): void {

    timer(1000,2000).pipe(  map( (nb1)=> {return nb1+1;})).subscribe(
        (nb)=>{
          console.log(nb);
        }
    )
  }

}
