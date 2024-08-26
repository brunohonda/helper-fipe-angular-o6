import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FipeFormComponent } from './fipe-form.component';

describe('FipeFormComponent', () => {
  let component: FipeFormComponent;
  let fixture: ComponentFixture<FipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FipeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
