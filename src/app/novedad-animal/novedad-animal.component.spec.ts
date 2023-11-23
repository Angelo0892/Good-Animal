import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadAnimalComponent } from './novedad-animal.component';

describe('NovedadAnimalComponent', () => {
  let component: NovedadAnimalComponent;
  let fixture: ComponentFixture<NovedadAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovedadAnimalComponent]
    });
    fixture = TestBed.createComponent(NovedadAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
