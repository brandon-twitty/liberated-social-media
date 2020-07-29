import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateFriendPage } from './create-friend.page';

describe('CreateFriendPage', () => {
  let component: CreateFriendPage;
  let fixture: ComponentFixture<CreateFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
