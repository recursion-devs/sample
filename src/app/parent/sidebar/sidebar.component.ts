import { Component, OnInit } from '@angular/core';
import { faSmoking } from '@fortawesome/free-solid-svg-icons';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import {faStore} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faSmoking= faSmoking
  faTachometerAlt=faTachometerAlt
  faStore=faStore
  faCog=faCog
  constructor() { }

  ngOnInit() {
  }

}
