import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJournalComponent } from './home-journal.component';

describe('HomeJournalComponent', () => {
  let component: HomeJournalComponent;
  let fixture: ComponentFixture<HomeJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
