import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlatnePolugeComponent } from './zlatne-poluge.component';

describe('ZlatnePolugeComponent', () => {
  let component: ZlatnePolugeComponent;
  let fixture: ComponentFixture<ZlatnePolugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZlatnePolugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZlatnePolugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
