import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService:CustomToastrService) {
    toastrService.message("Merhaba", "Samet", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopFullWidth
    })
  }
}
