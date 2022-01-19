import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityListService {

  constructor() { }

    universityList : any = [
      {
        id: 1,
        title:'Taylor University World Class Scholarship',
        image:'../../assets/images/taylor-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 2,
        title:'Summer Research Scholarship',
        image:'../../assets/images/boston-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 3,
        title:'Postgraduate Research Scholarship',
        image:'../../assets/images/california-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 4,
        title:'Taylor University Mechanical Engineering Scholarship',
        image:'../../assets/images/career-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 5,
        title:'The Gates Scholarship',
        image:'../../assets/images/cornel-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 6,
        title:'Higher Classes Scholarship',
        image:'../../assets/images/drew-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 7,
        title:'Master Classes Scholarship',
        image:'../../assets/images/korea-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
      {
        id: 8,
        title:'P.hd Research Scholarship',
        image:'../../assets/images/boston-university.jpg',
        universityName:'Taylor University',
        detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        deadline:'18 March 2020',
        validity:'Domestic & International',
        amount:'2915',
        studyLevel:'Degree | Postgraduate',
        inTake:'May 2020'
      },
    ]
}
