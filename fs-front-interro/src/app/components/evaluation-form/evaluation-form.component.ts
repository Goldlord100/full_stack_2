import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  public evaluateurInput: string = "";
  public commentaireInput: string = "";
  public noteInput: number = -1;

  @Output()
  public evaluationAdd: EventEmitter<EvaluationFormContent> = new EventEmitter();

  constructor() { 

  }

  public ngOnInit(): void {
  }

  public add(form: NgForm): void {

      if (form.valid) {
        this.evaluationAdd.emit({
        evaluateur: this.evaluateurInput,
        commentaire: this.commentaireInput,
        note: this.noteInput
      });
    }
  }
}

export interface EvaluationFormContent {

  evaluateur: string;
  commentaire: string;
  note: number;

}
