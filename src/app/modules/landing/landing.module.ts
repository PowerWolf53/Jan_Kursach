import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingLayoutComponent} from './landing-layout/landing-layout.component';
import {ComponentsModule} from '../../components/components.module';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { StoryComponent } from './components/story/story.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { BookComponent } from './components/book/book.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { BookSigningComponent } from './components/book-signing/book-signing.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [LandingLayoutComponent, BestsellerComponent, StoryComponent, ExamplesComponent, BookComponent, SlideShowComponent, BookSigningComponent, ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SlideshowModule
  ]
})
export class LandingModule {
}
