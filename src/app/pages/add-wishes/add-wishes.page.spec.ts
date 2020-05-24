import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWishesPage } from './add-wishes.page';

describe('AddWishesPage', () => {
  let component: AddWishesPage;
  let fixture: ComponentFixture<AddWishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
