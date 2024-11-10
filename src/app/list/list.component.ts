import { Component } from '@angular/core';
import { Voyage } from '../voyage';
import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  voyages : Voyage[] = [];
  
  constructor(private vs:VoyageService){
    this.vs.getVoyage().subscribe({
      next : (data) => this.voyages = data,
      error : (e) => console.log(e)
    })
  }

  reserver (v: Voyage)
  {
    v.nb_place--;
    this.vs.updateVoyage(v.id,v).subscribe({
      next: ()=> {
        let index = this.voyages.findIndex(e=>e.id == v.id)  // get the index of the voyage in the array of voyages 
        this.voyages[index]=v  // update the voyage in the array of voyages
      }
    })
  }
  



}
