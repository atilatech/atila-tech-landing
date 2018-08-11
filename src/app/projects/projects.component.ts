import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ATILA_PROJECT_HTML} from '../_models/projects';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project = {
    title: 'Why We Chose Angular over React and Django Over Ruby on Rails for Atila.ca: The Essential Software Startup Tech Stack',
    slug: '',
    body: ATILA_PROJECT_HTML,
  }

  constructor(public route: ActivatedRoute,
              public titleService: Title) {
    this.project.slug = this.route.snapshot.params['project'];

    console.log('this', this);

    if (this.project.slug) {
      this.titleService.setTitle(this.project.title + ' - Atila Projects');
    }

  }

  ngOnInit() {
  }

}
