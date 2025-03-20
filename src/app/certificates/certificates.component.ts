import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  constructor(public certificatesService: CertificatesService) {
    console.log(this.certificatesService);
  }

}
