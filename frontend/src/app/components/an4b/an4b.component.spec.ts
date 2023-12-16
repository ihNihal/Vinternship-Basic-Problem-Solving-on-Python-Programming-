import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An4bComponent } from './an4b.component';

describe('An4bComponent', () => {
  let component: An4bComponent;
  let fixture: ComponentFixture<An4bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An4bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An4bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
