import { Script } from './../script-service/script';
import { ScriptService } from './../script-service/script.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts-list',
  templateUrl: './scripts-list.component.html',
  styleUrls: ['./scripts-list.component.scss'],
})
export class ScriptsListComponent implements OnInit {
  scripts: Script[];

  constructor(private scriptService: ScriptService) {}

  ngOnInit(): void {
    this.scripts = this.scriptService.getScripts();
  }
}
