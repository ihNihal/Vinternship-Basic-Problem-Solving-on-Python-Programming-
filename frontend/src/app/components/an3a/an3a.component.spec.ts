import { ComponentFixture, TestBed } from '@angular/core/testing';

import { An3aComponent } from './an3a.component';

describe('An3aComponent', () => {
  let component: An3aComponent;
  let fixture: ComponentFixture<An3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ An3aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(An3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
