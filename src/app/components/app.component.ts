import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {NameListService} from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES, ToolbarComponent, GreetingsComponent]
})
export class AppComponent {}
