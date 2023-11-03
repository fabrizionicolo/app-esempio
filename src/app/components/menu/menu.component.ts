import { Component, Input, OnInit } from '@angular/core';
import { VociMenu } from '../../../assets/vociMenu';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  vociMenu: { title: string, route: string, auth: string[] }[] = []

  constructor(private profileService: ProfileService) { }

  checkRuolo(ruoliAutorizzati: string[]) {
    return ruoliAutorizzati.includes(this.profileService.getRuolo());
  }

  ngOnInit(): void {
    this.vociMenu = VociMenu;
  }

}
