import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Iwizard } from '../../shared/iwizard';
import { WizardService } from '../../shared/wizard.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  wizards$ = inject(WizardService).fetchAll();
}
