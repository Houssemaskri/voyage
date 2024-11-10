import { Component } from '@angular/core';
import { Voyage } from '../voyage';
import { VoyageService } from '../services/voyage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-voyage',
  templateUrl: './details-voyage.component.html',
  styleUrls: ['./details-voyage.component.css']
})
export class DetailsVoyageComponent {
  voyage!: Voyage;

  constructor(private vs:VoyageService, private ar:ActivatedRoute ){
    this.vs.getVoyageById(this.ar.snapshot.params['id']).subscribe
    ({
      next: (data) =>  {
      this.voyage =data;
      this.voyage.nb_view++;
      this.vs.updateVoyage(this.voyage.id,this.voyage).subscribe; // update the number of views
    }

    })

  }

}
