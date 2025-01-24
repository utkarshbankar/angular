import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdklibComponent } from './sdklib.component';

describe('SdklibComponent', () => {
  let component: SdklibComponent;
  let fixture: ComponentFixture<SdklibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdklibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdklibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
