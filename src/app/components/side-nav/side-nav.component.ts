import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { menu } from '../pages/navItem-data';
import { NavItem } from 'src/app/models/navItem.model';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  route: string = '';
  name: string = '';
  icon: string = '';
  badge: number = 0;

  sideNavToggle: boolean = true;
  toggle: boolean = false;
  topbarToggle: boolean = false;

  totalNotification: number = 0;

  data = menu;

  private _mobileQueryListener: () => void;

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].children) {
        for (let j = 0; j < this.data[i].children.length; j++) {
          this.data[i].notification += this.data[i].children[j].notification;
          this.totalNotification += this.data[i].children[j].notification;
        }
      }
    }
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 839px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.mobileQuery.matches === true) {
      this.toggle = true;
      this.sideNavToggle = false;
      this.topbarToggle = true;
    }
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.route = event.url.substring(1);
        this.route;
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].children) {
            for (let j = 0; j < this.data[i].children.length; j++) {
              if (this.data[i].children[j].route === this.route) {
                this.name = this.data[i].displayName;
                this.icon = this.data[i].iconName;
                this.badge = this.data[i].notification;
              }
            }
          }
        }
      }
    });

  }

  collapse() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].children) {
        this.data[i].children_disabled = true;
      }
    }
    this.toggle = false;
  }

  expand(item: NavItem) {
    if (this.toggle === true) item.children_disabled = !item.children_disabled;
    else this.toggle = true;
  }

  topbar() {
    this.topbarToggle = !this.topbarToggle;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
