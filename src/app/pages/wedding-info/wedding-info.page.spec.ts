import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeddingInfoPage } from './wedding-info.page';

describe('WeddingInfoPage', () => {
  let component: WeddingInfoPage;
  let fixture: ComponentFixture<WeddingInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeddingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
