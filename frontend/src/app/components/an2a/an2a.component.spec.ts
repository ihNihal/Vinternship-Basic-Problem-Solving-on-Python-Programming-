import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An2aComponent } from './an2a.component';

describe('An2aComponent', () => {
  let component: An2aComponent;
  let fixture: ComponentFixture<An2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An2aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
