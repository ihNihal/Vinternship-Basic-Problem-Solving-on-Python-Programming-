import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An1aComponent } from './an1a.component';

describe('An1aComponent', () => {
  let component: An1aComponent;
  let fixture: ComponentFixture<An1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An1aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
