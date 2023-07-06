import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { menu } from '../pages/navItem-data';
import { NavItem } from 'src/app/models/navItem.model';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';


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


  
}
