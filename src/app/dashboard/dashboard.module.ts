import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module'
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { SendRequestComponent } from './pages/send-request/send-request.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { OffersComponent } from './pages/offers/offers.component';
import { HelpComponent } from './pages/help/help.component';
import { SettingsComponent } from './pages/settings/settings.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    SummaryComponent,
    ActivityComponent,
    SendRequestComponent,
    WalletComponent,
    OffersComponent,
    HelpComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
