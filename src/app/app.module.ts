import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import { ColumnsContainerComponent } from './components/columns-container/columns-container.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    ColumnsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
