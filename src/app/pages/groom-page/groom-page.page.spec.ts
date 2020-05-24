import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroomPagePage } from './groom-page.page';

describe('GroomPagePage', () => {
  let component: GroomPagePage;
  let fixture: ComponentFixture<GroomPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
