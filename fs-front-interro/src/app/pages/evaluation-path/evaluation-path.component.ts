import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-evaluation-path',
  templateUrl: './evaluation-path.component.html',
  styleUrls: ['./evaluation-path.component.css']
})
export class EvaluationPathComponent implements OnInit {

  public navigateEvaluation : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public NavigateToEvaluation(path: string) : void {
    this.navigateEvaluation.emit();
  }
}
