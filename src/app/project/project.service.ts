import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private util:UtilService) { }
}
