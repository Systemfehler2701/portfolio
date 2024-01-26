import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacypolicy', component: PrivacypolicyComponent },
];
