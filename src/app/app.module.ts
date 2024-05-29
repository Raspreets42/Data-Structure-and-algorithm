import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackComponent } from './stack/stack.component';
import { QueuesComponent } from './queues/queues.component';
import { LinkedlistsComponent } from './linkedlists/linkedlists.component';
import { TreesComponent } from './trees/trees.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    QueuesComponent,
    LinkedlistsComponent,
    TreesComponent,
    GraphsComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
