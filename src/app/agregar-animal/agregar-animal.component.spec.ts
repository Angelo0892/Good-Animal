import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnimalComponent } from './agregar-animal.component';

describe('AgregarAnimalComponent', () => {
  let component: AgregarAnimalComponent;
  let fixture: ComponentFixture<AgregarAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAnimalComponent]
    });
    fixture = TestBed.createComponent(AgregarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
