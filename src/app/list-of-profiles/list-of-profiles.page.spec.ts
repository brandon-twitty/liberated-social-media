import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOfProfilesPage } from './list-of-profiles.page';

describe('ListOfProfilesPage', () => {
  let component: ListOfProfilesPage;
  let fixture: ComponentFixture<ListOfProfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfProfilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfProfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
