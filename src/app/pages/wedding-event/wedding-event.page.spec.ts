import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeddingEventPage } from './wedding-event.page';

describe('WeddingEventPage', () => {
  let component: WeddingEventPage;
  let fixture: ComponentFixture<WeddingEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeddingEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
