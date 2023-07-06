import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { menu } from '../pages/navItem-data';
import { NavItem } from 'src/app/models/navItem.model';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';
import { filter, map, merge, of, shareReplay, startWith } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  mobileQuery: MediaQueryList;
  treeControl = new NestedTreeControl<NavItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavItem>();
  private _mobileQueryListener: () => void;
  @ViewChild('snav') sideNav!: MatSidenav;
  showList$ = of(true);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 839px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   
    this.dataSource.data = menu;
  }
  
    hasChild = (_: number, node: NavItem) => !!node.children && node.children.length > 0;

  ngAfterViewInit() {
    this.showList$ = merge(
      this.sideNav.openedChange.pipe(filter(v => !v), map(() => true)),
      this.sideNav.openedStart.pipe(map(() => false))
    ).pipe(startWith(true))
  }

  showExpandedCat(cat: string) {
    const selCat = this.dataSource.data.find(node => node.displayName === cat)
    this.treeControl.expand(selCat)
    this.sideNav.open()
  }

  
}
