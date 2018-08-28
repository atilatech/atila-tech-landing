import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ATILA_PROJECT_HTML} from '../_models/projects';
import {Title} from '@angular/platform-browser';
import {AtilaApiService} from '../_services/atila-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project = {
    title: 'Why We Chose Angular over React and Django Over Ruby on Rails for Atila.ca: The Essential Software Startup Tech Stack',
    slug: '',
    // body: ATILA_PROJECT_HTML,
  }

  approvedSlugs = [
    'atila',
    'why-we-chose-angular-over-react-and-django-over-ruby-on-rails-for-atila-the-essential-software-startup-techstack',
  ];

  constructor(public route: ActivatedRoute,
              public titleService: Title,
              public atilaApiService: AtilaApiService,) {
    this.project.slug = this.route.snapshot.params['project'];

    console.log('this', this);

    if (this.project.slug) {
      this.titleService.setTitle(this.project.title + ' - Atila Projects');

      if (this.project.slug === 'atila') {
        this.project.slug = this.approvedSlugs[1];
      }
      this.atilaApiService.getAtilaContent(`blog/blog/tomiwa/${this.project.slug}`)
        .subscribe(
          res => {
            console.log({res});
            this.project = res.blog;
          },
          err => {
            console.log({err});
          },
        );
    }

  }

  ngOnInit() {
  }

}
