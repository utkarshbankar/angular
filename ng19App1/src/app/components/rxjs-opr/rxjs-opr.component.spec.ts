import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOprComponent } from './rxjs-opr.component';

describe('RxjsOprComponent', () => {
  let component: RxjsOprComponent;
  let fixture: ComponentFixture<RxjsOprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOprComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
