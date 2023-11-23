import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAnimalComponent } from './catalogo-animal.component';

describe('CatalogoAnimalComponent', () => {
  let component: CatalogoAnimalComponent;
  let fixture: ComponentFixture<CatalogoAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoAnimalComponent]
    });
    fixture = TestBed.createComponent(CatalogoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
