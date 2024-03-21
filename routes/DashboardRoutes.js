import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  // {
  // 	id: uuid(),
  // 	title: 'Authentication',
  // 	icon: 'lock',
  // 	children: [
  // 		{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
  // 		{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
  // 		{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}
  // 	]
  // },
  // {
  //   id: uuid(),
  //   title: "Dashboard",
  //   icon: "home",
  //   link: "/",
  // },
  {
    id: uuid(),
    title: "Extra Pages",
    icon: "lock",
    children: [
      { id: uuid(), link: "/profile", name: "Profile", icon: "file-text" },
      { id: uuid(), link: "/settings", name: "Settings", icon: "file-text" },
      { id: uuid(), link: "/accordion", name: "Accordion", icon: "file-text" },
      { id: uuid(), link: "/verticaltabs", name: "Vertical Tabs", icon: "file-text" },
      {
        id: uuid(),
        link: "/pages/nep/master/masters/applycertificate",
        name: "Apply Certificate",
        icon: "file-text",
      },
      {
        id: uuid(),
        link: "/pages/nep/master/masters/canceladmission",
        name: "Cancel Admission",
        icon: "file-text",
      },
      {
        id: uuid(),
        link: "/pages/nep/master/masters/scholarshipdetailsentry",
        name: "Schloarship Details Entry",
        icon: "file-text",
      },
      {
        id: uuid(),
        link: "/pages/nep/master/masters/payablefees",
        name: "Payable Fees",
        icon: "file-text",
      },
    ],
  },
  {
    id: uuid(),
    title: "Academic",
    icon: "book",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Master",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Academic Master",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/bankdetails",
                name: "Bank Details",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/academicyear",
                name: "Academic Year",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/feecategory",
                name: "Fee Category",
                icon: "file-text",
              },
              // {
              //   id: uuid(),
              //   link: "/pages/academic/master/academicmaster/studenttype",
              //   name: "Student Type",
              // },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/concession",
                name: "Concession",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/medium",
                name: "Medium",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/division",
                name: "Division",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/certificate",
                name: "Certificate",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicmaster/occupation",
                name: "Occupation",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Common Master",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/castedetails",
                name: "Caste Details",
                icon: "file-text",
              },
              // { id: uuid(), link: '/pages/academic/master/commonmaster/castecategory', name: 'Caste Category' },
              // { id: uuid(), link: '/pages/academic/master/commonmaster/subcaste', name: 'Sub Caste' },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/title",
                name: "Title",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/gender",
                name: "Gender",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/religion",
                name: "Religion",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/maritalstatus",
                name: "Marital Status",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/handicap",
                name: "Handicap",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/bloodgroup",
                name: "Blood Group",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/universityandboard",
                name: "University And Board",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/nationality",
                name: "Nationality",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/mothertongue",
                name: "Mother Tongue",
                icon: "file-text",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Pre Admission",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Course Configuration",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/year",
                name: "Year",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/semester",
                name: "Semester",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/degree",
                name: "Degree",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/stream",
                name: "Stream",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/feepattern",
                name: "Fee Pattern",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/coursepattern",
                name: "Course Pattern",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/receiptbook",
                name: "Receipt Book",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/feehead",
                name: "Fee Head",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/feeheadgrouping",
                name: "Fee Head Grouping",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/feeheadaccountmapping",
                name: "Fee Head Account Mapping",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/receiptbookaccess",
                name: "Receipt Book Access",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/copycashbookrights",
                name: "Copy Cashbook Rights",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/coursecertificate",
                name: "Course Certificate",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/useraccess",
                name: "User Access",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/courseconfiguration/prnnumberconfig",
                name: "PRN Number Config",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Fees Configuration",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/generalfine",
                name: "General Fine",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/courseinstallment",
                name: "Course Installment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/basiccourse",
                name: "Programme",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/coursecreation",
                name: "Course Creation",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/courseupdation",
                name: "Course Updation",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/coursedivision",
                name: "Course Division",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/feestructure",
                name: "Fee Structure",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/copyfeesstructure",
                name: "Copy Fees Structure",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/erasestudentinstallment",
                name: "Erase Student Installment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/studentinstallment",
                name: "Student Installment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/feesconfiguration/certificatefee",
                name: "Certificate Fee",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Subject",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/subject/subjecttype",
                name: "Subject Type",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/subject/subjectdefinition",
                name: "Subject Definition",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/subject/subjectfee",
                name: "Subject Fee",
                icon: "file-text",
              },
              
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Transaction",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Admission Fees",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/studentadmission",
                name: "Student Admission",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/feescollection",
                name: "Fees Collection",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/receiptreconciliation",
                name: "Receipt Reconciliation",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/outstandingfees",
                name: "Outstanding Fees",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/feesconcession",
                name: "Fees Concession",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/feesrefund",
                name: "Fees Refund",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/receivedscholarshipentry",
                name: "Received Scholarship Entry",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/changefeesstudent",
                name: "Change Fees- Student",
                icon: "file-text",
              },

              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/changefeesbulk",
                name: "Change Fees - Bulk",
                icon: "file-text",
              }, 
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/createfeesregisteredpromoted",
                name: "Create Fees - Registered/Promoted",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/studentdirectadmission",
                name: "Student Direct Admission",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/admissionfees/canceladmissionapproval",
                name: "Cancel Admission Approval",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Other Fees",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/collectotherfees",
                name: "Collect Other Fees",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/createotherfeesbulk",
                name: "Create Other Fees - Bulk",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/generalfinecollection",
                name: "General Fine Collection",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/changeotherfeesstudent",
                name: "Change Other Fees -Student",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/changeotherfeesbulk",
                name: "Cancel Other Fees - Bulk",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/feeheadwisechangeotherfeesbulk",
                name: "Fee Head Wise Change Other Fees - Bulk",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Receipts",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/canceladmission",
                name: "Cancel Admission",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/cancelpromotion",
                name: "Cancel Promotion",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/receiptcancellationandreprint",
                name: "Receipt Cancel and Reprint",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/adminreceiptcancellation",
                name: "Admin Receipt Cancellation",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/changecourse",
                name: "Change Course",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/changefeecategory",
                name: "Change Fee Category",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/onlinepaymentrequery",
                name: "Online Payment Requery",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Administrative Work",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/studentinformation",
                name: "Student Details",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/studentsubject",
                name: "Student Subject",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/rollnoupdation",
                name: "Roll No Allotment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/bulkupdation",
                name: "Student Data Update -Bulk",
                icon: "file-text",
              },

              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/outstandingfeesremainder",
                name: "Outstanding Fees Remiander",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/scholarshipdataentry",
                name: "Sanctioned Scholarship Entry",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/bulkemail",
                name: "Send Email - Bulk",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/scholarshipdetailsentry",
                name: "Scholarship Application Entry",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/railwayconcessionapproval",
                name: "Railway Concession Approval",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/studentdocumentdetails",
                name: "Student Document Details",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/studentdocumentreceipt",
                name: "Student Document Receipt",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/prnallotment",
                name: "PRN Allotment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/administrativework/divisionallotment",
                name: "Division Allotment",
                icon: "file-text",
              },
              // { id: uuid(), link: '/pages/academic/transaction/administrativework/sectionallocation', name: 'Section Allocation(YE/PROADM)' },
              // { id: uuid(), link: '', name: 'Subject Groupwise Roll No' },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Finance Reports",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Fees Report",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/dailycollectionreport",
                name: "Daily Collection Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/demandreport",
                name: "Demand Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/studentledger",
                name: "Student Ledger",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/bankreport",
                name: "Bank Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/receiptcancellationreport",
                name: "Receipt Cancellation Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/userwisecollectionreport",
                name: "Userwise Collection Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/outstandingfeesreport",
                name: "Outstanding Fees Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/admissioncancellationreport",
                name: "Admission Cancellation Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/feesrefundreport",
                name: "Fees Refund Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/feesconcessionreport",
                name: "Fees Concession Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/feesreceivablereport",
                name: "Fees Receivable Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/adjustedreceiptreport",
                name: "Adjusted Receipt Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/outstandingsummaryreport",
                name: "Outstanding Summary Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/coursewisedcrreport",
                name: "Course Wise DCR Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/challanreconciliationreport",
                name: "Challan Reconciliation Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/installmentoutstandingreport",
                name: "Installment Outstanding Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/feesreconciliationreport",
                name: "Fees Reconciliation Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/duereport",
                name: "Due Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/feesreport/receiptreprintbulk",
                name: "Receipt Reprint-Bulk",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Online Payment Report",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/financereports/onlinepaymentreport/pgtransactionreport",
                name: "PG Transaction Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/onlinepaymentreport/settlementdcrreport",
                name: "Settlement DCR Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/onlinepaymentreport/settlementdatewisedcr",
                name: "Settlement DateWise DCR",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/onlinepaymentreport/settlementreportcashbook",
                name: "Settlement Report-Cashbook",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/financereports/onlinepaymentreport/settlementstatus",
                name: "Settlement Status",
                icon: "file-text",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Student Reports",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Admission",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/promotedapplicationreport",
                name: "Promoted Application Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/customizedstudentreportexcel",
                name: "Customized Student Report - Excel",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/provisionaladmissionreport",
                name: "Provisional Admission Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/admissionreport",
                name: "Admission Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/coursewisestrengthreport",
                name: "Coursewise Strength Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/admissionpositionreport",
                name: "Admission Position Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentcompletedetailsexcel",
                name: "Student Complete Details - Excel",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/courseandcategorychange",
                name: "Course & Fee Category Change",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/blankattendancesheet",
                name: "Blank Attendance Sheet",
                icon: "file-text",
              },
              //extra//{ id: uuid(), link: '/pages/academic/studentreport/admission/coursewisestudentadmissionreport', name: 'Coursewise Student Admission Report' },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/rollcallreport",
                name: "Roll Call Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/smsemailreport",
                name: "SMS/Email Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/lateraladmissionreport",
                name: "Lateral admission Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/photosignreport",
                name: "Photo Sign Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentapplycertificatereport",
                name: "Student Apply Certificate Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentadmissioncancellationrequestreport",
                name: "Student Admission Cancellation Request Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studenteligibilityreport",
                name: "Student Eligibility Report",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "MIS",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/studentmis",
                name: "Student MIS Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/receiptbookmis",
                name: "Receipt Book MIS",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/castewisemisreport",
                name: "Caste Wise MIS Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/subjectwisereport",
                name: "Subject Wise Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/subjectdivisionreport",
                name: "Subject & Division Report",
                icon: "file-text",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    title: "Attendance",
    icon: "lock",
    children:  [
      {
        id: uuid(),
        link: "#",
        title: "Master",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Common Master",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/attendancesession",
                name: "Attendance Session",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/room",
                name: "Room",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/attendancestatus",
                name: "Attendance Status",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/slotmaster",
                name: "Slot Master",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/slotallotment",
                name: "Slot Allotment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/commonmaster/backdetedattendanceconfig",
                name: "Backdeted Attendance Config",
                icon: "file-text",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Holiday",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/master/holiday/holidayentry",
                name: "Holiday Entry",
                icon: "file-text",
              },
              
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Batch",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/master/batch/createpracticalbatch",
                name: "Create Practical Batch",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/master/batch/createtheorybatch",
                name: "Create Theory Batch",
                icon: "file-text",
              },
              
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Reports",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Timetable Reports",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/reports/timetablereports/classtimetable",
                name: "Class Timetable",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/reports/timetablereports/teachertimetable",
                name: "Teacher Timetable",
                icon: "file-text",
              },
             
            ],
          },
          
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Transaction",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Attendance",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendance/markattendance",
                name: "Mark Attendance",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendance/unmarkattendance",
                name: "Unmark Attendance",
                icon: "file-text",
              },
              
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Configuration",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/transaction/configuration/batchallotment",
                name: "Batch Allotment",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/transaction/configuration/subjectteacherallotment",
                name: "Subject Teacher Allotment",
                icon: "file-text",
              },
              
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Communication",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/transaction/communication/dailyattendancesms",
                name: "Daily Attendance SMS",
                icon: "file-text",
              },
              
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Attendance Report",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendancereport/attendancereport",
                name: "Attendance Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendancereport/subjectwiseattendancereport",
                name: "Subject Wise Attandance Report",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendancereport/defaulterlist",
                name: "Defaulter List",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/attendance/transaction/attendancereport/missingtimetable",
                name: "Mising Timetable",
                icon: "file-text",
              },
            ],
          },
        ],
      },
    ],
    },
    
  {
    id: uuid(),
    link: "#",
    title: "NEP",
    icon: "home",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Master",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Masters",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/nep/master/masters/boardofstudy",
                name: "Board Of Study",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/nep/master/masters/subjectcategory",
                name: "Subject Category",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/nep/master/masters/discipline",
                name: "Discipline",
                icon: "file-text",
              },
            ],
          },
          
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Transaction",
        icon: "folder",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Transactions",
            icon: "book-open",
            children: [
              {
                id: uuid(),
                link: "/pages/nep/transaction/transactions/subjectbucketcreation",
                name: "Subject Bucket Creation",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/nep/transaction/transactions/majorsubjectbucket",
                name: "Major Subject Bucket",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/nep/transaction/transactions/subjectallocationtostudent",
                name: "Subject Allocation To Student",
                icon: "file-text",
              },
              {
                id: uuid(),
                link: "/pages/nep/transaction/transactions/subjectcategoryanddisciplineallocation",
                name: "Subject Category & Discipline Allocation",
                icon: "file-text",
              },
              
            ],
          },
          
        ],
      },
      
    ],
  },
];

export default DashboardMenu;
