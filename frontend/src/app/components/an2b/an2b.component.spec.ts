import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An2bComponent } from './an2b.component';

describe('An2bComponent', () => {
  let component: An2bComponent;
  let fixture: ComponentFixture<An2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An2bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
