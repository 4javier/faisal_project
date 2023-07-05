import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganisationComponent } from './components/pages/fahrten/organisation/organisation.component';
import { ArchivComponent } from './components/pages/fahrten/archiv/archiv.component';
import { KalenderComponent } from './components/pages/planung/kalender/kalender.component';
import { VorlagenComponent } from './components/pages/planung/vorlagen/vorlagen.component';
import { KontingenteComponent } from './components/pages/planung/kontingente/kontingente.component';
import { HotelsComponent } from './components/pages/daten/hotels/hotels.component';
import { EventpartnerComponent } from './components/pages/daten/eventpartner/eventpartner.component';
import { HonorarkrafteComponent } from './components/pages/daten/honorarkrafte/honorarkrafte.component';
import { ProgrammkatalogComponent } from './components/pages/daten/programmkatalog/programmkatalog.component';
import { AntragstellerComponent } from './components/pages/daten/antragsteller/antragsteller.component';
import { CustomizingComponent } from './components/pages/administration/customizing/customizing.component';
import { NutzerverwaltungComponent } from './components/pages/administration/nutzerverwaltung/nutzerverwaltung.component';
import { AsPlatformComponent } from './components/pages/administration/as-plattform/as-plattform.component';
import { EinstellungenComponent } from './components/pages/account/einstellungen/einstellungen.component';
import { BarrierefreiheitComponent } from './components/pages/account/barrierefreiheit/barrierefreiheit.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    ArchivComponent,
    KalenderComponent,
    VorlagenComponent,
    KontingenteComponent,
    HotelsComponent,
    EventpartnerComponent,
    HonorarkrafteComponent,
    ProgrammkatalogComponent,
    AntragstellerComponent,
    CustomizingComponent,
    NutzerverwaltungComponent,
    AsPlatformComponent,
    EinstellungenComponent,
    BarrierefreiheitComponent,
    SideNavComponent,
    WrapperComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
