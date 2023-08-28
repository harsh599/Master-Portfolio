import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: any[] = [
    {
      name: 'Web Development',
      description: 'Expertise in JavaScript, Vue.js, Angular, React, HTML/CSS.',
      icons: [
        'assets/javascript.gif',
        'assets/Angular.svg',
        'assets/Vue.svg',
        'assets/react.gif',
      ],
    },
    {
      name: 'Backend Development',
      description: 'Proficiency in Node.js and Java for backend development.',
      icons: ['assets/node.svg', 'assets/java.gif'],
    },
    {
      name: 'Database Management',
      description: 'Skillful in relational and non-relational databases.',
      icons: ['assets/sql.svg', 'assets/mongo.svg', 'assets/firestore.svg'],
    },
    {
      name: 'Cloud Services',
      description: 'Familiarity with AWS and Google Cloud for cloud solutions.',
      icons: ['assets/aws.svg', 'assets/gcp.svg'],
    },
    {
      name: 'Testing and QA',
      description:
        'Experienced in JEST and JUnit for testing and quality assurance.',
      icons: ['assets/Jest.svg', 'assets/JUnit.svg'],
    },
    {
      name: 'Design and Prototyping',
      description:
        'Proficient in Figma and PhotoPea for design and prototyping.',
      icons: ['assets/figma.gif', 'assets/photopea.png'],
    },
    {
      name: 'State Management',
      description: 'Adept at VueX and Redux for state management.',
      icons: ['assets/vuex.png', 'assets/redux.svg'],
    },
  ];
}
