import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedComponent } from './customized.component';

describe('CustomizedComponent', () => {
  let component: CustomizedComponent;
  let fixture: ComponentFixture<CustomizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
