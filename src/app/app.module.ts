import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { CommonModule } from "@angular/common";
import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";
import { FlatpickrModule } from "angularx-flatpickr";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [{ path: "", component: CalendarComponent }];
@NgModule({
  declarations: [AppComponent, CalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    GraphQLModule,
    HttpClientModule,
    FlatpickrModule.forRoot(),
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
