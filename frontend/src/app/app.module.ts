// EXTERNAL IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeContentComponent } from './components/page-content/home-content/home-content.component';
import { CategoryContentComponent } from './components/page-content/category-content/category-content.component';
import { AboutContentComponent } from './components/page-content/about-content/about-content.component';
import { ContactContentComponent } from './components/page-content/contact-content/contact-content.component';
import { ThreadListContentComponent } from './components/page-content/thread-details-content/thread-details-content.component';
import { ProfileContentComponent } from './components/page-content/profile-content/profile-content.component';

import { CategoryMenuComponent } from './components/category/category-menu/category-menu.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryCardComponent } from './components/category/category-card/category-card.component';

import { ThreadHeaderComponent } from './components/threads/thread-header/thread-header.component';
import { ThreadListComponent } from './components/threads/thread-list/thread-list.component';
import { ThreadCardComponent } from './components/threads/thread-card/thread-card.component';
import { ThreadDetailsComponent } from './components/threads/thread-details/thread-details.component';

import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentReplyListComponent } from './components/comments/comment-reply-list/comment-reply-list.component';
import { CommentReplyComponent } from './components/comments/comment-reply/comment-reply.component';

import { AccountComponent } from './components/user/account/account.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { DiscussionParticipantsComponent } from './components/user/discussion-participants/discussion-participants.component';
// FORM COMPONENTS
import { LoginComponent } from './components/forms/login/login.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { LogoutComponent } from './components/forms/logout/logout.component';
import { SearchComponent } from './components/forms/search/search.component';
import { InteractionGroupComponent } from './components/forms/interaction-group/interaction-group.component';

import { CreateThreadComponent } from './components/forms/create-thread/create-thread.component';
import { CreateCommentComponent } from './components/forms/create-comment/create-comment.component';
import { CreateReplyComponent } from './components/forms/create-reply/create-reply.component';
import { CreateCategoryComponent } from './components/forms/create-category/create-category.component';
import { EditThreadComponent } from './components/forms/edit-thread/edit-thread.component';
import { EditCommentComponent } from './components/forms/edit-comment/edit-comment.component';
import { EditReplyComponent } from './components/forms/edit-reply/edit-reply.component';

// SERVICES
import { ThreadsService } from './services/threads.service';
import { CommentsService } from './services/comments.service';
import { UserService } from './services/user.service';
import { ThreadMarginService } from './services/thread-margin.service';
import { AuthentificationService } from './services/authentification.service';

// PIPES
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HeaderInterceptor } from './services/header-interceptor.interceptor';

// DIRECTIVES
// import { ModHighlightDirective } from './directives/mod-highlight.directive';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeContentComponent
  },
  {
    path: 'about',
    component: AboutContentComponent
  },
  {
    path: 'contact',
    component: ContactContentComponent
  },
  {
    path: 'profile/:username',
    component: ProfileContentComponent
  },
  {
    path: 'friends',
    component: ProfileContentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'my_threads',
    component: CategoryContentComponent
  },
  {
    path: `thread/:id`,
    component: ThreadListContentComponent
  },
  {
    path: 'category/:category_name',
    component: CategoryContentComponent
  },
  {
    path: 'category/:category_name/search',
    component: CategoryContentComponent,
  },
  {
    path: 'category/:category_name/search/:keyword',
    component: CategoryContentComponent,
  },
];
// Make order
@NgModule({
  declarations: [
    AppComponent,
    // Pipes
    FilterPipe,
    SearchPipe,
    SortPipe,
    // Layout Components
    HeaderComponent,
    FooterComponent,
    // Content Components
    HomeContentComponent,
    CategoryContentComponent,
    AboutContentComponent,
    ContactContentComponent,
    ThreadListContentComponent,
    ProfileContentComponent,
    // Category Components
    CategoryMenuComponent,
    CategoryListComponent,
    CategoryCardComponent,
    // Thread Components
    ThreadCardComponent,
    ThreadDetailsComponent,
    ThreadHeaderComponent,
    ThreadListComponent,
    // Comment Components
    CommentListComponent,
    CommentComponent,
    CommentReplyListComponent,
    CommentReplyComponent,
    // User Related Components
    AccountComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    DiscussionParticipantsComponent,
    CreateThreadComponent,
    CreateCommentComponent,
    CreateReplyComponent,
    CreateCategoryComponent,
    EditThreadComponent,
    EditCommentComponent,
    EditReplyComponent,
    // Interaction Components
    SearchComponent,
    InteractionGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    // Services
    ThreadsService,
    CommentsService,
    UserService,
    ThreadMarginService,
    AuthentificationService,
    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
    // Directives,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
