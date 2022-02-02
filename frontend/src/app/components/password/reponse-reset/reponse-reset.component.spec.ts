import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseResetComponent } from './reponse-reset.component';

describe('ReponseResetComponent', () => {
  let component: ReponseResetComponent;
  let fixture: ComponentFixture<ReponseResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
