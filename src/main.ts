import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Model, StylesManager, SurveyNG } from 'survey-angular';

StylesManager.applyTheme('devaultV2');

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
})
export class App implements OnInit {
  title = 'My First Survey';

  surveyJson = {
    elements: [
      {
        name: 'about',
        tile: 'About You',
        type: 'panel',
        elements: [
          {
            name: 'firstname',
            title: 'Firstname',
            type: 'text',
            isRequired: true,
          },
          {
            name: 'middlename',
            title: 'Middlename',
            type: 'text',
          },
          {
            name: 'lastname',
            title: 'Lastname',
            type: 'text',
            isRequired: true,
          },
          {
            name: 'sex',
            title: 'Sex',
            type: 'radiogroup',
            colCount: 3,
            isRequired: true,
            choices: ['Female', 'Male', 'Other'],
          },
        ],
      },
      {
        name: 'contact',
        title: 'Contact (Optional)',
        type: 'panel',
        state: 'collapsed',
        elements: [
          {
            name: 'KEKW',
            title: 'KEKW',
            type: 'text',
          },
        ],
      },
    ],
  };

  alertResults(sender: { data: any }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }

  ngOnInit(): void {
    const survey = new Model(this.surveyJson);
    SurveyNG.render('surveyContainer', { model: survey });
    survey.onComplete.add(this.alertResults);
  }
}

bootstrapApplication(App);
