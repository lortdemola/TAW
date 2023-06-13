import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiteItemImageComponent } from './Msite-item-image.component';

describe('MsiteItemImageComponent', () => {
  let component: MsiteItemImageComponent;
  let fixture: ComponentFixture<MsiteItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsiteItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsiteItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
