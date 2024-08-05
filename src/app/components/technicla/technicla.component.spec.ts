import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniclaComponent } from './technicla.component';

describe('TechniclaComponent', () => {
  let component: TechniclaComponent;
  let fixture: ComponentFixture<TechniclaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechniclaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechniclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
