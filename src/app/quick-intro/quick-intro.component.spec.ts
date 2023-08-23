import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickIntroComponent } from './quick-intro.component';

describe('QuickIntroComponent', () => {
  let component: QuickIntroComponent;
  let fixture: ComponentFixture<QuickIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickIntroComponent]
    });
    fixture = TestBed.createComponent(QuickIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
