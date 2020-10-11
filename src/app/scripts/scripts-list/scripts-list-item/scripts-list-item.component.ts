import { Component, OnInit, Input } from '@angular/core';
import { Script } from '../../script-service/script';

@Component({
  selector: 'app-scripts-list-item',
  templateUrl: './scripts-list-item.component.html',
  styleUrls: ['./scripts-list-item.component.scss'],
})
export class ScriptsListItemComponent implements OnInit {
  @Input() script: Script;

  constructor() {}

  ngOnInit(): void {}
}
