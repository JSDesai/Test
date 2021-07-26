import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuskaComponent } from './anuska.component';

describe('AnuskaComponent', () => {
  let component: AnuskaComponent;
  let fixture: ComponentFixture<AnuskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
