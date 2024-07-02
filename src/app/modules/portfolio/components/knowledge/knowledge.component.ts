import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de java',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Ícone de conhecimento de springboot',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de typescript',
    }
  ]);
}
