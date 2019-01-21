import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProBindComponent} from './pro-bind/pro-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { TwowayWoNgmodelComponent } from './twoway-wo-ngmodel/twoway-wo-ngmodel.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
const routes: Routes = [
 { path : 'property-binding', component : ProBindComponent},
 { path : 'event-binding' , component : EventBindComponent},
 { path : 'class-binding' , component : ClassBindComponent},
 { path : 'style-binding' , component : StyleBindComponent},
 { path : 'ng-if-demo' , component : NgIfDemoComponent},
 { path : 'ng-for-demo' , component : NgForDemoComponent},
 { path : 'ng-switch-demo' , component : NgSwitchComponent},
 { path : 'ng-model-demo' , component : NgModelDemoComponent},
 { path : 'twoway-wo-ngmodel' , component : TwowayWoNgmodelComponent},
 { path : 'childparent' , component : ChildParentComponent},
 { path : 'batchlist' , component : BatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
