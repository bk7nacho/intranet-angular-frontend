import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutingModule} from './pages-routing.module';
import { BlankComponent } from './blank/blank.component';
import {FormsModule} from '@angular/forms';
import {IncreementadorComponent} from '../components/increementador/increementador.component';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    BlankComponent,
    IncreementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule {}
