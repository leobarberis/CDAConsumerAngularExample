import { Component } from '@angular/core';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private routingService: RoutingService) {}

  open!: boolean;

  handleMyBussinessMethodSuccess(): void {
    alert('CDA Válida');
  }

  handleMyBussinessMethodFailed() {
    alert('CDA Inválida');
  }

  myBussinessMethod() {
    this.openModal();
  }

  openModal(): void {
    this.open = true;
  }

  closeModal(): void {
    this.open = false;
  }

  validateCDA(result: any){
    if(result.status == 'OK') {
      this.handleMyBussinessMethodSuccess();
    } else {
      this.handleMyBussinessMethodFailed();
    }
    this.closeModal();
  }

  public navigate(path: string): void {
    this.routingService.navigate(path);
  }

}
