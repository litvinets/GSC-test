import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderBonusComponent } from './preorder-bonus.component';

describe('PreorderBonusComponent', () => {
  let component: PreorderBonusComponent;
  let fixture: ComponentFixture<PreorderBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreorderBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreorderBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
