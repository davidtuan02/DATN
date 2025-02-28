import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ActionAvatarComponent } from './action-avatar/avatar.component';

const JiraControlComponents = [
  SvgDefinitionsComponent,
  SvgIconComponent,
  BreadcrumbsComponent,
  ButtonComponent,
  InputComponent,
  AvatarComponent,
  ActionAvatarComponent
];
@NgModule({
  declarations: JiraControlComponents,
  exports: JiraControlComponents,
  imports: [CommonModule, ReactiveFormsModule, NzDropDownModule]
})
export class JiraControlModule {}
