import { Component, OnInit } from '@angular/core';
import { EvaluationFormContent } from 'src/app/components/evaluation-form/evaluation-form.component';
import { Evaluation } from 'src/app/dtos/restaurant';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public evaluations: Evaluation[] = []

  constructor(private evaluationService: EvaluationService) { }

  ngOnInit(): void {
  }

  public addEvaluation(evaluation: EvaluationFormContent): void {
    this.evaluationService.addEvaluation(evaluation.evaluateur, evaluation.commentaire, evaluation.note).subscribe({
      next: value => this.evaluations.push(value)
    })
  }
}
