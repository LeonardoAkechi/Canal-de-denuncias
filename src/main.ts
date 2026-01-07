import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { DenunciasComponent } from './app/denuncias/denuncias.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: DenunciasComponent },
    ]),
  ],
});
