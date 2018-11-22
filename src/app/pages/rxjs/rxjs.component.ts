import {Component, OnInit, OnDestroy} from '@angular/core';
import {EmpleadoService} from '../../services/service.index';
import {retry} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public empleados = [];
  subscripcion: Subscription;

  constructor(private _empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.subscripcion = this._empleadoService.getEmpleados()
      .pipe(retry(2))
      .subscribe(data => this.empleados = data,
        error => console.error('Error ---', error));
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

}
