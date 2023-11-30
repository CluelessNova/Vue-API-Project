import Timeline from 'primevue/timeline'

export default {
    components: {
        Timeline
    },
    data() {
        return {
            skills: ["C#", "Java", "Python", "JavaScript", "TypeScript",
            "HTML", "CSS", "Blazor", "Django", "VueJs", "Bootstrap", "GitHub",
            "MSSQL", "Terraform", "RESTful API", ".NET"],
            events: [
                {
                    status: 'August 2022 - Present',
                    title: 'eGifter',
                    subtitle: 'Software Engineer I',
                    content: 'Spearheaded application project for sales team for opportunity leads and calculations,enabling employees to calculate revenue opportunities for sales prospects. Led cross-functional collaboration between multiple departments and external clients to ensure timely and successful project delivery. Designed and implemented an MSSQL database with a schema to store deal calculations, catering to the analytics and business intelligence needs of the company. Integrated RESTful APIs to synchronize the company`s database and Salesforce opportunity data with a deal calculator application, ensuring real-time data updates. Migrated and modernized legacy code to align with current standards during the transition to the company`s new messaging system to optimize reporting.'
                },
                {
                    status: 'December 2021 - March 2022',
                    title: 'College Senior Project',
                    content: 'Created an encryption algorithm taking inspiration from the Enigma Machine and Ceasar Cipher. Developed site using Django and created a Python oriented encryption algorithm. Algorithm consists of creating a random key which is used to determine the number of steps the alphabet is shifted to change a letter of the message into. Taught myself Python and Django to complete the project.'
                },
                {
                    status: 'July 2021 - January 2023',
                    title: 'Huntington Community First Aid Squad',
                    subtitle: 'Captain',
                    content: 'Scheduled 24-hour coverage and delegated workload for the agency`s volunteers. Managed the training of new members, ensuring they met the agency`s standards in emergency medical procedures and protocols.'
                },
                {
                    status: 'August 2018 - May 2022',
                    title: 'SUNY Purchase',
                    subtitle: 'College',
                    content: 'Got my degree in the Bachelor of Arts in Mathematics and Computer Science. Maintained a GPA of 3.04. Related Coursework: Computer Science I & II, Networking and Security, Data Structures, Linear Algebra, Introduction to the Web, Creating User Interfaces, Design Principles, Computability. Learned languages such as Java and JavaScript, technologies such as HTML and CSS, and how to create git repositories and contribute to them.'
                },
                {
                    status: 'June 2018 - Present',
                    title: 'BSA',
                    subtitle: 'Eagle Scout',
                    content: 'Achieved the highest rank in Scouts BSA. Educated scouts to achieve higher scouting ranks during weekly meetings and improve their skills. Guided and mentored three scouts to successfully attain the rank of Eagle Scout. Helped plan community service projects to aid the community and outdoor activities to create a fun and informative environment for the scouts to learn.'
                },
            ]
        }
    }
}