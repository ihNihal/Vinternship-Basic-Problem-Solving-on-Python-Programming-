import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An4aComponent } from './an4a.component';

describe('An4aComponent', () => {
  let component: An4aComponent;
  let fixture: ComponentFixture<An4aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An4aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
