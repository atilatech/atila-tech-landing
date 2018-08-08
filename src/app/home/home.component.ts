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
      description: 'Our flaship Product. A web app that allows students to automatically' +
      ' find and apply to scholarships at the click of a button.',
      projectUrl: 'https://atila.ca',
    },
    {
      title: 'Smart Capsule',
      image: '../../assets/images/more-from-2.png',
      description: 'Canada 10X Dynamics turned to Atila when they needed some mechanical and civil engineering research ' +
      'for a cost estimate report on an innovative transportation mechanism.',
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
      shortBio: 'Every good boy deserves fudge.',
      longBio: 'Sensational scenes',
    },
    {
      name: 'Manpreet Matharu',
      title: 'Engineering',
      image: '../../assets/images/team/manpreet.jpg',
      shortBio: 'Every good boy deserves fudge.',
      longBio: 'Senscational scenes',
    },
    {
      name: 'Kitan Ademidun',
      title: 'Engineering, Marketing',
      image: '../../assets/images/team/kitan.jpg',
      shortBio: 'Every good boy deserves fudge.',
      longBio: 'Senscational scenes',
    },
    {
      name: 'Zion Oginni',
      title: 'Engineering',
      image: '../../assets/images/team/zion.jpg',
      shortBio: 'Every good boy deserves fudge.',
      longBio: 'Senscational scenes',
    },
    {
      name: 'Valentin Kuznetcov',
      title: 'Engineering',
      image: '../../assets/images/team/valentine.jpg',
      shortBio: 'Every good boy deserves fudge.',
      longBio: 'Senscational scenes',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
