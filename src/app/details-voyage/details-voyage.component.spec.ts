import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVoyageComponent } from './details-voyage.component';

describe('DetailsVoyageComponent', () => {
  let component: DetailsVoyageComponent;
  let fixture: ComponentFixture<DetailsVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsVoyageComponent]
    });
    fixture = TestBed.createComponent(DetailsVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
