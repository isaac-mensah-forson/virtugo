import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { HelpComponent } from './pages/help/help.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SendRequestComponent } from './pages/send-request/send-request.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'summary', component: SummaryComponent, data: { title: 'Dashboard Summary' } },
            { path: 'activity', component: ActivityComponent, data: { title: 'Dashboard Activity' } },
            { path: 'send-request', component: SendRequestComponent, data: { title: 'Dashboard Send & Request' } },
            { path: 'wallet', component: WalletComponent, data: { title: 'Dashboard Wallet' } },
            { path: 'offers', component: OffersComponent, data: { title: 'Dashboard Offer' } },
            { path: 'help', component: HelpComponent, data: { title: 'Dashboard Help' } },
            { path: 'settings', component: SettingsComponent, data: { title: 'Dashboard Settings' } },
            { path: '', redirectTo: '/summary', pathMatch: 'full' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }