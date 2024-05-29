import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {StackComponent} from "./stack/stack.component";
import {QueuesComponent} from "./queues/queues.component";
import {LinkedlistsComponent} from "./linkedlists/linkedlists.component";
import {TreesComponent} from "./trees/trees.component";
import {GraphsComponent} from "./graphs/graphs.component";
import {MainComponentComponent} from "./main-component/main-component.component";

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'stack', component: StackComponent},
  { path: 'queues', component: QueuesComponent},
  { path: 'linkedlists', component: LinkedlistsComponent},
  { path: 'trees', component: TreesComponent},
  { path: 'graphs', component: GraphsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
