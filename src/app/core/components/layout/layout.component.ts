import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../../../shared/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('menu') menu: MatSidenav;

  constructor( private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.menu = this.menu;
  }

}
