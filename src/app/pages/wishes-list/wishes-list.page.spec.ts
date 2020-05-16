import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishesListPage } from './wishes-list.page';

describe('WishesListPage', () => {
  let component: WishesListPage;
  let fixture: ComponentFixture<WishesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
