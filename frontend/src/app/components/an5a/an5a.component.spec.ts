import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An5aComponent } from './an5a.component';

describe('An5aComponent', () => {
  let component: An5aComponent;
  let fixture: ComponentFixture<An5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An5aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
