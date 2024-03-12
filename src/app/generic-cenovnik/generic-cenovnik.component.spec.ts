import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCenovnikComponent } from './generic-cenovnik.component';

describe('GenericCenovnikComponent', () => {
  let component: GenericCenovnikComponent;
  let fixture: ComponentFixture<GenericCenovnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericCenovnikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericCenovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
