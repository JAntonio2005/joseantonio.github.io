import { Component } from '@angular/core';
import {HeaderService} from "../services/header-service/header.service";
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
	constructor (public headerServices: HeaderService)
	{
	console.log(this.headerServices);
	}

}
