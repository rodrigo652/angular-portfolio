import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperinces.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Full-Stack Junior',
        p: 'Ebravo | Abr 2024 - Present',
      },
      text: '<p>Atuo como desenvolvedor fullstack na Ebravo',
    },
    {
      summary: {
        strong: 'Estagiário Java',
        p: 'Auto Geral | Mar 2023 - Ago 2023',
      },
      text: '<p>Atuei como desenvolvedor Java Backend fazendo manutenção e criação de novas funcionalidades para o ERP da empresa',
    },
    
  ]);
}
