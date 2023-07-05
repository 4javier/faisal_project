import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrierefreiheitComponent } from './components/pages/account/barrierefreiheit/barrierefreiheit.component';
import { EinstellungenComponent } from './components/pages/account/einstellungen/einstellungen.component';
import { CustomizingComponent } from './components/pages/administration/customizing/customizing.component';
import { NutzerverwaltungComponent } from './components/pages/administration/nutzerverwaltung/nutzerverwaltung.component';
import { EventpartnerComponent } from './components/pages/daten/eventpartner/eventpartner.component';
import { HotelsComponent } from './components/pages/daten/hotels/hotels.component';
import { ArchivComponent } from './components/pages/fahrten/archiv/archiv.component';
import { OrganisationComponent } from './components/pages/fahrten/organisation/organisation.component';
import { KalenderComponent } from './components/pages/planung/kalender/kalender.component';
import { VorlagenComponent } from './components/pages/planung/vorlagen/vorlagen.component';
import { AntragstellerComponent } from './components/pages/daten/antragsteller/antragsteller.component';
import { HonorarkrafteComponent } from './components/pages/daten/honorarkrafte/honorarkrafte.component';
import { ProgrammkatalogComponent } from './components/pages/daten/programmkatalog/programmkatalog.component';
import { KontingenteComponent } from './components/pages/planung/kontingente/kontingente.component';
import { AsPlatformComponent } from './components/pages/administration/as-plattform/as-plattform.component';

const routes: Routes = [
  { path: 'organisation', component: OrganisationComponent },
  { path: 'archiv', component: ArchivComponent },
  { path: 'calendar', component: KalenderComponent },
  { path: 'vorlagen', component: VorlagenComponent },
  { path: 'templates', component: KontingenteComponent },
  { path: 'hotels-overview', component: HotelsComponent },
  { path: 'event-partner', component: EventpartnerComponent },
  { path: 'honorary-staff', component: HonorarkrafteComponent },
  { path: 'program-catalogue', component: ProgrammkatalogComponent },
  { path: 'applicant', component: AntragstellerComponent },
  { path: 'customization', component: CustomizingComponent },
  { path: 'user-management', component: NutzerverwaltungComponent },
  { path: 'as-platform', component: AsPlatformComponent },
  { path: 'ideas', component: EinstellungenComponent },
  { path: 'accessibility', component: BarrierefreiheitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
