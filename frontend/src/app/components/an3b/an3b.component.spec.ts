import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An3bComponent } from './an3b.component';

describe('An3bComponent', () => {
  let component: An3bComponent;
  let fixture: ComponentFixture<An3bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An3bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
