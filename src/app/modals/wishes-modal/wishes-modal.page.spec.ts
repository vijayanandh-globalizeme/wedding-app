import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishesModalPage } from './wishes-modal.page';

describe('WishesModalPage', () => {
  let component: WishesModalPage;
  let fixture: ComponentFixture<WishesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
