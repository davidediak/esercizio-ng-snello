import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorsComponent } from './authors/authors.component';
import { AdminComponent } from './admin/admin.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminAuthorsAddComponent } from './admin-authors-add/admin-authors-add.component';
import { AdminAuthorsModifyComponent } from './admin-authors-modify/admin-authors-modify.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NavbarComponent,
    AuthorsComponent,
    AdminComponent,
    ActivityListComponent,
    AdminAuthorsComponent,
    AdminAuthorsAddComponent,
    AdminAuthorsModifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
