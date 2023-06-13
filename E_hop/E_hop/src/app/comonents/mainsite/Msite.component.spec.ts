import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiteComponent } from './Msite.component';

describe('MsiteComponent', () => {
  let component: MsiteComponent;
  let fixture: ComponentFixture<MsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
