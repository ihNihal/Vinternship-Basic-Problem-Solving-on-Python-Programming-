import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An5bComponent } from './an5b.component';

describe('An5bComponent', () => {
  let component: An5bComponent;
  let fixture: ComponentFixture<An5bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An5bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
