import { Component, OnInit } from '@angular/core';
import { HeaderService } from "../services/header-service/header.service";
import { Header } from "../models/header/header.model";

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header!: Header; // Declara la propiedad header para almacenar los datos

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    // Obtiene los datos desde el servicio
    this.headerService.getHeader().subscribe((data: Header[]) => {
      this.header = data[0]; // Asumiendo que solo hay un objeto de Header
      console.log(this.header);
    });
  }
}

