import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An1bComponent } from './an1b.component';

describe('An1bComponent', () => {
  let component: An1bComponent;
  let fixture: ComponentFixture<An1bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An1bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
