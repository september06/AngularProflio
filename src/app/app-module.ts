import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { Home } from './home/home';
import { Protfolio } from './protfolio/protfolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { ProjectCard } from './project-card/project-card';

@NgModule({
  declarations: [
    App,
    Header,
    NavigationBar,
    Home,
    Protfolio,
    Resume,
    Contact,
    ProjectCard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
