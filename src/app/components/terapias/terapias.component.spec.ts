import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiasComponent } from './terapias.component';

describe('TerapiasComponent', () => {
  let component: TerapiasComponent;
  let fixture: ComponentFixture<TerapiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerapiasComponent]
    });
    fixture = TestBed.createComponent(TerapiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
