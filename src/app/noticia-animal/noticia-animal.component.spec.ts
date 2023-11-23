import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaAnimalComponent } from './noticia-animal.component';

describe('NoticiaAnimalComponent', () => {
  let component: NoticiaAnimalComponent;
  let fixture: ComponentFixture<NoticiaAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaAnimalComponent]
    });
    fixture = TestBed.createComponent(NoticiaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
