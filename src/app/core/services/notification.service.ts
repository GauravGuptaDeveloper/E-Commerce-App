import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
   
  showSuccess(message: string, title: string){
      // this.toastr.success(message, title)
  }
   
  showError(message: string, title: string){
      // this.toastr.error(message, title)
  }
   
  showInfo(message: string, title: string){
      // this.toastr.info(message, title)
      
  }
   
  showWarning(message: string, title: string){
      // this.toastr.warning(message, title)
  }
}
