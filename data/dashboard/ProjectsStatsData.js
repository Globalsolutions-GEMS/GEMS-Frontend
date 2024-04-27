import {
	Activity,
    People,
    GenderMale,
    GenderFemale
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Students",
       value : 192,
       icon: <Activity size={18}/>,
      //  statInfo: '<span className="text-dark me-2">2</span> Completed' 
    },
    {
        id:2,
        title : "Employees",
        value : 29,
        icon: <People size={18}/>,
      //   statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Male",
        value : 130,
        icon: <GenderMale size={18}/>,
      //   statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Female",
        value : 62,
        icon: <GenderFemale size={18}/>,
      //   statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     },
     
];
export default ProjectsStats;
