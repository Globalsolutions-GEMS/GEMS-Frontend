import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/abch'
	},
	{
		id: uuid(),
		title: 'Academic',
		icon: 'home',
		children: [
			{ 
				id: uuid(), 
				link: '#', 
				title: 'Master',
				children: [
					{ 
						id: uuid(), 
						link: '#', 
						title: 'Academic Data',
						children: [
							{ id: uuid(), link: '/pages/academic/master/academicdata/academicsession', name: 'Academic Session'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/paymenttype', name: 'Payment Type'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/studenttype', name: 'Student Type'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/concession', name: 'Concession'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/medium', name: 'Medium'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/section', name: 'Section'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/certificate', name: 'Certificate'},
							{ id: uuid(), link: '/pages/academic/master/academicdata/occupation', name: 'Occupation'},
						]
					},
					{ 
						id: uuid(), 
						link: '#', 
						title: 'Common Master',
						children: [
							{ id: uuid(), link: '/pages/academic/master/commonmaster/caste', name: 'Caste'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/castecategory', name: 'Caste Category'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/subcaste', name: 'Sub Caste'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/title', name: 'Title'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/gender', name: 'Gender'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/religion', name: 'Religion'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/maritalstatus', name: 'Marital Status'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/handicap', name: 'Handicap'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/bloodgroup', name: 'Blood Group'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/universityandboard', name: 'University And Board'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/nationality', name: 'Nationality'},
							{ id: uuid(), link: '/pages/academic/master/commonmaster/mothertongue', name: 'Mother Tongue'},

						]
					},
				]
			},
			{ 
				id: uuid(), 
				link: '#', 
				title: 'Pre Admission',
				children: [
					{ 
						id: uuid(), 
						link: '#', 
						title: 'Course',
						children: [
							{ id: uuid(), link: '/pages/academic/preadmission/course/year', name: 'Year'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/semester', name: 'Semester'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/degree', name: 'Degree'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/faculty', name: 'Faculty'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/feepattern', name: 'Fee Pattern'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/coursepattern', name: 'Course Pattern'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/cashbook', name: 'Cashbook'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/feehead', name: 'Fee Head'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/feeheadgrouping', name: 'Fee Head Grouping'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/feeheadaccountmapping', name: 'Fee Head Account Mapping'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/cashbookrights', name: 'Cashbook Rights'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/copycashbookrights', name: 'Copy Cashbook Rights'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/coursecertificate', name: 'Course Certificate'},
							{ id: uuid(), link: '/pages/academic/preadmission/course/usermapping', name: 'User Mapping'},
						]
					},
					{ 
						id: uuid(), 
						link: '#', 
						title: 'Fees',
						children: [
							{ id: uuid(), link: '/pages/academic/preadmission/fees/basiccourse', name: 'Basic Course'},
							{ id: uuid(), link: '/pages/academic/preadmission/fees/coursecreation', name: 'Course Creation'},
							{ id: uuid(), link: '/pages/academic/preadmission/fees/courseupdation', name: 'Course Updation'},
							{ id: uuid(), link: '/pages/academic/preadmission/fees/coursesection', name: 'Course Section'},
							{ id: uuid(), link: '/pages/academic/preadmission/fees/standardfee', name: 'Standard Fee'},
							{ id: uuid(), link: '/pages/academic/preadmission/fees/copystandardfee', name: 'Copy Standard Fee'},
						]
					},
					{ 
						id: uuid(), 
						link: '#', 
						title: 'Other Fees Definition',
						children: [
							{ id: uuid(), link: '/pages/academic/preadmission/otherfeesdefination/generalfine', name: 'General Fine'},
							{ id: uuid(), link: '/pages/academic/preadmission/otherfeesdefination/installmentfees', name: 'Installment Fees'},
							{ id: uuid(), link: '/pages/academic/preadmission/otherfeesdefination/studentwiseinstallmentfees', name: 'Studentwise Installment Fees'},
							{ id: uuid(), link: '/pages/academic/preadmission/otherfeesdefination/certificatefee', name: 'Certificate Fee'},
							{ id: uuid(), link: '/pages/academic/preadmission/otherfeesdefination/studentwiseinstallmentclear', name: 'Studentwise Installment Clear'},
						]
					},
				]
			}
		]
	},	
 ];

export default DashboardMenu;
