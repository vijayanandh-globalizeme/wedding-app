import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BridePagePage } from './bride-page.page';

describe('BridePagePage', () => {
  let component: BridePagePage;
  let fixture: ComponentFixture<BridePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BridePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
