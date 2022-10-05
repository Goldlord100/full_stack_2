import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPathComponent } from './evaluation-path.component';

describe('EvaluationPathComponent', () => {
  let component: EvaluationPathComponent;
  let fixture: ComponentFixture<EvaluationPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
