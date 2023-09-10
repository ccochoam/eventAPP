import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastr: ToastrService) { }

  showSuccesfulMessage() {
    this.toastr.success('El evento se guardó con éxito', 'Éxito', {
      toastClass: 'toast-success'
    });
  }
  showErrorMessage() {
    this.toastr.error('Ocurrió un error al guardar el evento', 'Error', {
      toastClass: 'toast-error'
    });
  }
}
