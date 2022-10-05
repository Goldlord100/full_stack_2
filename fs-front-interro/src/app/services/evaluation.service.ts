import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { Evaluation } from '../dtos/restaurant';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private httpClient: HttpClient) { }

  public addEvaluation(evaluateur: string, commentaire: string, note: number): Observable<Evaluation>{
    return this.httpClient.post<Evaluation>('http://localhost:8080/restaurants/:id/evaluations', {evaluateur: evaluateur, commentaire: commentaire, note:note})
   }
}
