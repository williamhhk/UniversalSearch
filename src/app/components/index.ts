import {NgModule } from '@angular/core'
import { CommonModule} from '@angular/common'
import { MaterialModule} from '@angular/material'
import { SearchInputComponent } from './search-input/search-input.component'
import { HeaderBarComponent } from './header-bar/header-bar.component'
import { HeaderMenuComponent } from './header-menu/header-menu.component'
import { IndexPageComponent } from './index-page/index-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

export const COMPONENTS = [
    SearchInputComponent,
    HeaderBarComponent,
    HeaderMenuComponent,
    IndexPageComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
	CommonModule,
	MaterialModule,
      FormsModule,
    ReactiveFormsModule,
	
  ],
  exports : COMPONENTS
  
})
export class ComponentsModule {}