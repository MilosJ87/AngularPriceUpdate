import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlatneKovaniceComponent } from './zlatne-kovanice.component';

describe('ZlatneKovaniceComponent', () => {
  let component: ZlatneKovaniceComponent;
  let fixture: ComponentFixture<ZlatneKovaniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZlatneKovaniceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZlatneKovaniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
