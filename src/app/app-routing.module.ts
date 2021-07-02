import { HostogramComponent } from './hostogram/hostogram.component';
import { PieComponent } from './pie/pie.component';
import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ScatteredComponent } from './scattered/scattered.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/scatter', pathMatch: 'full' },
    { path: 'scatter', component: ScatteredComponent },
    { path: 'bubble', component: BubbleComponent },
    { path: 'line', component: LineComponent },
    { path: 'bar', component: BarComponent },
    { path: 'area', component: AreaComponent },
    { path: 'pie', component: PieComponent },
    { path: 'hostogram', component: HostogramComponent },


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
