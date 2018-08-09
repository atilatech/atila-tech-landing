import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PROJECTS = [
    {
      title: 'Atila',
      image: '../../assets/images/more-from-1.png',
      description: 'Our flaship Product. A web app that helps students automatically' +
      ' find and apply to scholarships in one click.',
      projectUrl: 'https://atila.ca',
    },
    {
      title: 'Smart Capsule',
      image: '../../assets/images/more-from-2.png',
      description: 'Canada 10X Dynamics turned to Atila when they needed some mechanical and civil engineering research ' +
      'for a cost estimate report on an innovative transportation mechanism in Dubai.',
    },
    {
      title: 'Smart Capsule',
      image: '../../assets/images/more-from-3.png',
      description: 'We Helped Canada 10X dynamics put together a price estimate on' +
      ' launching a Hyperloop type device in Dubai.',
    },
  ]
  TEAM_MEMBERS = [
    {
      name: 'Tomiwa Ademidun',
      title: 'Founder, Engineering',
      image: '../../assets/images/team/tomiwa.jpg',
      shortBio: 'Tomiwa is currently enrolled in the dual degree software engineering' +
      ' and business program at Ivey Business School He also works at Properly as a software developer.' +
      'He enjoys playing soccer and is a big Arsenal F.C. fan.',
      longBio: 'Sensational scenes',
      linkedInUrl: 'https://linkedin.com/in/tademidun',
      profileUrl: 'https://atila.ca/profile/tomiwa',
    },
    {
      name: 'Manpreet Matharu',
      title: 'Engineering',
      image: '../../assets/images/team/manpreet.jpg',
      shortBio: 'Manpreet studied computer technology at Seneca College. \n' +
      'Manpreet also works at RBC as a software developer.',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/tademidun',
      profileUrl: 'https://atila.ca/profile/manpreet',
    },
    {
      name: 'Kitan Ademidun',
      title: 'Engineering, Marketing',
      image: '../../assets/images/team/kitan.jpg',
      shortBio: 'Kitan is currently enrolled in the dual degree computer engineering and business program at Ivey Business School \n' +
      'She also works at TD in the data science analytics group.',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/tademidun',
      profileUrl: 'https://atila.ca/profile/orekitan',
    },
    {
      name: 'Zion Oginni',
      title: 'Engineering',
      image: '../../assets/images/team/zion.jpg',
      shortBio: 'Zion studies computer science at Queen\'s University.',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/tademidun',
      profileUrl: 'https://atila.ca/profile/zion',
    },
    {
      name: 'Valentin Kuznetcov',
      title: 'Engineering',
      image: '../../assets/images/team/valentine.jpg',
      shortBio: 'Valentin studied at the Ivey Business School at Western University. He is currently the CFO of ${SomeCompany}.',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/tademidun',
      profileUrl: 'https://atila.ca/profile/valkuz',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
