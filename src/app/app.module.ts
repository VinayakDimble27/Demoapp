import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProBindComponent } from './pro-bind/pro-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { ClassBindComponent} from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { TwowayWoNgmodelComponent } from './twoway-wo-ngmodel/twoway-wo-ngmodel.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { TemplateReferComponent } from './template-refer/template-refer.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchserviceService } from './batchservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ProBindComponent,
    EventBindComponent,
    ClassBindComponent,
    StyleBindComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    NgSwitchComponent,
    NgModelDemoComponent,
    TwowayWoNgmodelComponent,
    ParentChildComponent,
    ChildParentComponent,
    TemplateReferComponent,
    BatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BatchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
