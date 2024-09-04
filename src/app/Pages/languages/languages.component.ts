import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../UI/progress-bar/progress-bar.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
})
export class LanguagesComponent {
  stylesobj = { width: '35%' };
}
