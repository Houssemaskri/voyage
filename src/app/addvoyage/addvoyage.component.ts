import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoyageService } from '../services/voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvoyage',
  templateUrl: './addvoyage.component.html',
  styleUrls: ['./addvoyage.component.css']
})
export class AddvoyageComponent {

  voyage: FormGroup;

  constructor(private vs:VoyageService,  private router:Router){
  this.voyage = new FormGroup({
    description: new FormControl('', [Validators.required]),
    depart: new FormControl('Vdepart', [Validators.required, Validators.pattern(/^Vdepart.*/)]),
    arrive: new FormControl('', [Validators.required]),
    nb_place: new FormControl('', [Validators.required, Validators.min(1)]),
    
  });
}


add(){
  this.voyage.value.nb_view=0;
  this.vs.addVoyage(this.voyage.value).subscribe({
    next: () => {
      this.router.navigate(['/list'])  
    }
  });
}

}
