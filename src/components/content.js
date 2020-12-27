

const contentMyExper = {

  riverApp: {
       modalTitle: 'Web Project',
       projectName: 'River App',
       pictSRC: 'img/projects/river_app.png',
       projectDescription: 'App for drawing maps of your adventures',
       technologyDescription:'M.E.R.N',
       technologyList: ['NodeJS','MongoDB','Express','ReactJS','Bulma Framework','Liflet.js'],
       creationDescription:`My biggest and most difficult project at the moment.`,
       links: {
         github: 'https://github.com/andrewburw/Trip-Map',
         projectSite: 'https://tripmap.herokuapp.com/'
       },
       progress: 90

     },
      tankApp: {
           modalTitle: 'Web Project',
           projectName: 'Tank App',
           pictSRC: 'img/projects/tank_app.png',
           projectDescription: '<strong>Full Stack</strong> apllication -  Tank App is comunity of low-prices.Do not refuel at the highest price! Use the map to find the best gas station prices near you. .',
           technologyDescription:'I chose this development environment (M.E.R.N) as my main area of development as a developer. For more effective training, it was necessary to develop a more complex application.',
           technologyList: ['NodeJS','MongoDB','Express','ReactJS','Bootstrap framework','Liflet js','A lot of dependencies'],
           creationDescription:`In implementing this project, I explored a lot of new interesting information as developer. <blockquote>What I liked in this project: from a white sheet and ideas to a really working service.</blockquote>

                      `,
           links: {
             github: 'https://github.com/andrewburw/tank-app',
             projectSite: 'https://tankappplatvia.herokuapp.com/'
           },
           progress: 80

      },  guitTeacher: {
             modalTitle: 'Web Project',
             projectName: 'Guitar Teacher',
             pictSRC: 'img/projects/note_project.png',
             projectDescription: '<stong>Static aplication</strong> - for learning notes on the guitar fretboard. Studying gammas and visualizing them on a standard & non-standard neck.',
             technologyDescription:'I chose SVG graphics technology to implement this idea. The control of the graphical interface occurs through the library <strong> D3 </strong> .',
             technologyList: ['D3 framework','Jquery framework','SVG Technology','Bootstrap framework'],
             creationDescription:`First I drew the interface in illustrator and then transferred to html code, wrote interface control using d3 library. In implementing this project, I explored the possibilities of svg graphics, the possibility of
             libraries for web interfaces. <blockquote>In 2017, it seemed to me that the possibility of developing this idea through SVG was very interesting and quickly implemented.</blockquote>
              In the near future I plan to add a description of the help section and the elimination of bugs.
                        `,
             links: {
               github: 'https://github.com/andrewburw/Guitar-note-teacher',
               projectSite: 'https://andrewburw.github.io/Guitar-note-teacher'
             },
             progress: 90

        },
      workHours: {
           modalTitle: 'Web Project',
           projectName: 'Employe Work Hours',
           pictSRC: 'img/projects/timing_project.png',
           projectDescription: '<strong>Fullstack project</strong> - a really working project from my last work. The goal of the project is to view the set hours of work with the ability to watch the archive of months.',
           technologyDescription:'I chose from the available development tools.',
           technologyList: ['PHP','Jquery framework','PostGress(SQL)','Bootstrap framework'],
           creationDescription:`Task: display hours of work with PostGress db in a web environment. Backend - a simple API on php  (get the data from the database by SQL query).
           Frontend - jqery + bootstrap.One of the difficulties was to write api in php without experience in this language.
           <blockquote>What I liked in this project: receive positive feedback from employees about a well-functioning application.</blockquote>

                      `,
           links: {
             github: 'https://github.com/andrewburw/timing',
             projectSite: 'https://github.com/andrewburw/timing'
           },
           progress: 99

      },
      patterns: {
           modalTitle: 'Web Project',
           projectName: 'Patterns',
           pictSRC: 'img/projects/patterns.png',
           projectDescription: '<strong>JS Static Visualization</strong> - just visualization.',
           technologyDescription:'The goal of the project is to understand how the Jquery works. To write my own library on Vannila JS.',
           technologyList: ['Vannila JS'],
           creationDescription:`Task: display pattern by "Vannila JS".
           <blockquote>Memory leak consumption of large resources.</blockquote>
            In next version is idea to revrite pattren to "canvas". `,
           links: {
             github: 'https://github.com/andrewburw/patterns',
             projectSite: 'https://github.com/andrewburw/patterns'
           },
           progress: 99

      },

      thisSite: {
           modalTitle: 'Web Project',
           projectName: 'Portfolio Site',
           pictSRC: 'img/projects/this_site.png',
           projectDescription: '<strong>Portfolio Static Site</strong> - This site is about me and my achievements.',
           technologyDescription:'The goal of the project is write a site on bulma framework; create a modular system of modals; use only vanilla js.',
           technologyList: ['Vannila JS','Bulma','ab_lib.js','Google Firebase'],
           creationDescription:`Task: use only "Vannila JS" and do not use Bootstrap or JQuery or other labirarys.
            `,
           links: {
             github: 'https://github.com/andrewburw/personal-page',
             projectSite: 'none'
           },
           progress: 99

      },


};
const contentMySkilzz = {
  mySkilzz: {
      modalTitle: 'My Skillz',
      projectName: 'My Skillz Description',
      projectDescription: 'This section describes my skills and their approximate level.',
      skilzData: {
        JavaScript: {
          precentage: 60,
          description: 'My main programming language.',
          color: 'is-warning'
        },

        Html: {
          precentage: 80,
          description: '',
          color: 'is-danger'
        },
        Css: {
          precentage: 50,
          description: '',
          color: 'is-info'
        },
        MongoDB: {
          precentage: 40,
          description: 'My main DB.Need more practice.',
          color: 'is-primary'
        },
        mongooseJS: {
          precentage: 40,
          description: 'My main DB.Need more practice.',
          color: 'is-primary'
        },
        NodeJS: {
          precentage: 40,
          description: 'My main programming backend language.',
          color: 'is-success'
        },
        ReactJS: {
          precentage: 60,
          description: 'My favorite UI framework.',
          color: 'is-info'
        },
        Php: {
          precentage: 30,
          description: 'Small projects.',
          color: 'is-success'
        },
         Python: {
          precentage: 20,
          description: 'Coursera 5 courses.',

        },
        Git: {
          precentage: 20,
          description: 'Need more practice to work in team and large projects.',
          color: 'is-black'
        },
        FrameWorks: {
          precentage: 80,
          description: '<strong>Bootstrap</strong>, <strong>Bulma</strong>, <strong>Jquery</strong>, <strong>D3</strong> and more...'
        },
        Excel: {
          precentage: 80,
          description: '7 years of use of the Excel environment + experience in developing VBA applications(with PostGress DB).',
          color: 'is-success'
        },

        VisualBasic: {
          precentage: 99,
          description: ''
        },
        PostGress: {
          precentage: 20,
          description: 'Creating tables, linking tables through pgadmin.'
        },
        LibreBase: {
          precentage: 65,
          description: 'Application development in "Libre Base" interaction with postgres.'
        },

        Sql: {
          precentage: 50,
          description: 'Small applications.',
          color: 'is-link'
        }
        ,
        PowerBi: {
          precentage: 50,
          description: 'Creating a sql and exel database reports.'
        },
        AdobeIllustrator: {
          precentage: 20,
          description: 'Small graphic illustrations.'
        },
         Figma: {
          precentage: 80,
          description: 'Figma => HTML/CSS.'
        }
      }

  }


}

export default contentMyExper;