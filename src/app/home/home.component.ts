import {Component, OnInit} from '@angular/core';
import {AtilaApiService} from '../_services/atila-api.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  PROJECTS = [
    {
      title: 'Atila',
      image: '../../assets/images/projects/atila.jpg',
      description: 'Our flaship Product. A web application that helps students automatically' +
      ' find and apply to scholarships in one click. Students can also learn and share stories, questions and answers on school, career and general life advice.',
      projectUrl: 'https://atila.ca',
    },
    {
      title: 'Smart Capsule',
      image: '../../assets/images/projects/smart-capsule.jpg',
      description: 'Canada 10X Dynamics turned to Atila when they needed some mechanical and civil engineering research ' +
      'for a cost estimate report on an innovative transportation mechanism in Dubai.',
    },
    {
      title: 'Phlock',
      image: '../../assets/images/projects/phlock.jpg',
      description: 'An electronic device that helps users unlock doors using their phone and digitally share keys with friends.',
      projectUrl: 'http://phlock.ca',
    },
    {
      title: 'Austrian Quant',
      image: '../../assets/images/projects/austrian-quant.jpg',
      description: 'A machine learning trading algorithm which outperformed the SP500 over a 10 year period.',
      projectUrl: 'http://blog.tomiwa.ca/austrian-quant/',
    },
  ];
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
      linkedInUrl: 'https://linkedin.com/in/matharumanpreet',
      profileUrl: 'https://atila.ca/profile/manpreet',
    },
    {
      name: 'Kitan Ademidun',
      title: 'Engineering, Marketing',
      image: '../../assets/images/team/kitan.jpg',
      shortBio: 'Kitan is currently enrolled in the dual degree computer engineering and business program at Ivey Business School \n' +
      'She also works at TD in the data science analytics group.',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/kitan-ademidun-881330149/',
      profileUrl: 'https://atila.ca/profile/orekitan',
    },
    {
      name: 'Rahim Shamsy',
      title: 'Engineering',
      image: '../../assets/images/team/rahim.jpg',
      shortBio: 'Rahim recently graduated from the civil engineering and business program at the Ivey Business School in Canada.' +
      'After graduation, he plans to learn more about machine learning and blockchain and apply those skills to help' +
      ' various industries in his home country of Tanzania.',
      longBio: 'Sensational scenes',
      linkedInUrl: 'https://linkedin.com/in/rahimshamsy',
      profileUrl: 'https://atila.ca/profile/orekitan',
    },
    {
      name: 'Zion Oginni',
      title: 'Engineering',
      image: '../../assets/images/team/zion.jpg',
      shortBio: 'Zion studies computer science at Queen\'s University.' +
      ' He is interested in using software and technology to solve problems in the healthcare space',
      longBio: 'Senscational scenes',
      linkedInUrl: 'https://linkedin.com/in/zion-oginni-960a56146/',
      profileUrl: 'https://atila.ca/profile/zion',
    },
    {
      name: 'Valentin Kuznetcov',
      title: 'Engineering',
      image: '../../assets/images/team/valentine.jpg',
      shortBio: 'Valentin studied at the Ivey Business School at Western University. ' +
      'He is currently the CFO (NA) of in-lite Outdoor Lighting.',
      longBio: 'Sensational scenes',
      linkedInUrl: 'https://linkedin.com/in/valentin-kuznetcov/',
      profileUrl: 'https://atila.ca/profile/valkuz',
    },
  ];

  contactData = {
    message: '',
    email: ''
  };

  constructor(public atilaService: AtilaApiService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  sendContactEmail(contactForm: NgForm) {

    console.log({contactForm});
    if (!this.contactData.email.includes('@')) {
      const snackBarRef = this.snackBar.open('Invalid Email', 'Clear Email', {duration: 3000});

      snackBarRef.onAction().subscribe(() => {
        this.contactData.email = '';
      });

      return;
    }
    const emailData = {
      body: this.contactData.message,
      from_email: this.contactData.email,
      subject: 'Atila Tech Consulting Contact Form'
    };

    this.atilaService.sendEmail(emailData)
      .subscribe(
        res => {
          console.log('res', res);
        },
        err => {
          console.log('err', err);
        }
      );


  }

}
