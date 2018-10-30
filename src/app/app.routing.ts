import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Story1Component } from './story1/story1.component';
import { Story2Component } from './story2/story2.component';
import { Story3Component } from './story3/story3.component';

const appRoutes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'story1',
        component: Story1Component
    },
    {
        path: 'story2',
        component: Story2Component
    },
    {
        path: 'story3',
        component: Story2Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);