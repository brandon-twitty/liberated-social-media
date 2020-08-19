import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroProfPage } from './intro-prof.page';

describe('IntroProfPage', () => {
  let component: IntroProfPage;
  let fixture: ComponentFixture<IntroProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroProfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
