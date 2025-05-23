interface ResumeData {
  name: string;
  title: string;
  summary: string;
  profile: {
    title: string;
    detail: {
      name: string;
      gender: string;
    };
  };
  experience: {
    title: string;
    data: {
      company: string;
      location: string;
      year: string;
      role: string;
      description: string[];
    }[];
  };
  contact: {
    title: string;
    data: {
      ic: string;
      type: string;
      value: string;
    }[];
  };
  education: {
    title: string;
    data: {
      year: string;
      detail: string;
      location: string;
    }[];
  };
}



const dataEN: ResumeData = {
  name: 'Supavadee Janmo',
  title: 'Full-Stack Web Developer',
  summary: 'I am a Full-Stack Web Developer focused on creating web applications and RESTful APIs with Node.js',
  profile: {
    title: 'Profile',
    detail: {
      name: 'Supavadee Janmo  (Noon)',
      gender: 'Female'
    }
  },
  experience: {
    title : 'experience',
    data: [
      {
        company: 'SILKSPAN Public Company Limited',
        location: 'SSP Tower(Ekkamai) Bangkok',
        year: 'Jun 2021 - Jan 2025',
        role: 'Programmer',
        description: [
          `- Fix and solve system problems
          - Developed systems based on assigned tasks and requirements.
          - Create Program spec and Unit test
          - Supported team members.
          - Learn and Research new technologies to improve company systems.
          - Develop systems to upload and download files FTP 
          - Develop systems to read CSV, TXT, and Excel files and save the data in a database
          - Develop systems to send data via Email or Line
          - Develop Webservice between insurance companies.
          - Review source code',
          - Develop systems using ASP.NET, RESTful APIs with Node.js, HTML, JavaScript, CSS, and AJAX.
          `
        ]
      },
      {
        company: 'PTT Digital Solutions Co., Ltd.',
        location: 'Shinnawatra Tower 3 (Chatuchak) Bangkok ',
        year: 'February 2025 - Present',
        role: 'Mid-Level Developer',
        description: [
          `Development
           - Designed and implemented database structures using PostgreSQL and TypeORM
           - Improved and developed APIs
           - Unit tests using Jest
           - Developed backend systems using Node.js with TypeScript`,
          `Enhancements
           - Fix and solve system problems 
           - Developed services for API integration
           - Improved Function SQL-Store / Function SQL-View (MS SQL)
           - Created RDLC Report
           - Created Documented system workflows
           - Develop systems using .NET C# (mvc/web form/web api) , mssql
           `,
        ]
      }
    ]
  },
  contact: {
    title : 'contact',
    data: [
      {ic:'faEnvelope', type: 'email', value: 'noon.supavadee@gmail.com'},
      {ic:'faHouse', type: 'home', value: 'Lumpini Ville Pattanakarn - New Phetchaburi'},
      {ic:'faGithub', type: 'git', value: 'https://github.com/Nsnoonz'},
      {ic:'faGlobe', type: 'website', value: 'https://nsnoonz-react.vercel.app'},
    ]
  },
  education: {
    title : 'education',
    data:[
      { year: '2019-2021' , detail: 'Bachelor of information technology' , location: 'MAHASARAKAM UNIVERSITY' },
      { year: '2017-2019' , detail: 'Diploma major information technology' , location: 'KALASIN TECHNICAL COLLECT' },
      { year: '2010-2016' , detail: 'HIGH SCHOOL' , location: 'Thammasat Khlongluang Wittayakom School' },
    ]
  }
};

const dataTH: ResumeData = {
  name: 'สุภาวดี จันทร์โม้',
  title: 'Full-Stack Web Developer',
  summary: 'มีใจรักในการทำงาน ตรงต่อเวลา ซื่อสัตย์ \nยินดีและพร้อมที่จะเรียนรู้งานอย่างเต็มที่ ',
  profile: {
    title: 'ข้อมูลส่วนตัว',
    detail: {
      name: 'นางสาว สุภาวดี จันทร์โม้ (นุ่น)',
      gender: 'หญิง'
    }
  },
  experience: {
    title : 'ประสบการณ์การทำงาน',
    data: [
      {
        company: 'บริษัท ซิลค์สแปน จำกัด (มหาชน)',
        location: 'อาคาร เอส เอส พี (เอกมัย) กรุงเทพฯ 10110',
        year: 'มิถุนายน 2021 - มกราคม 2025',
        role: 'Programmer',
        description: [
          `- ตรวจสอบปัญหาและแก้ไขระบบ
          -ออกแบบฐานข้อมูล
          -ออกแบบและพัฒนาระบบที่ได้รับมอบหมายตาม\nพร้อมทั้งจัดทำเอกสาร Program spec และ Unit test
          -สนับสนุนเพื่อนร่วมทีม จัดทำเอกสารประกอบการพัฒนาระบบ
          -ศึกษาและค้นคว้า เทคโนโลยีต่างๆ เพื่อนำมาปรับใช้กับระบบของบริษัท
          -พัฒนาระบบ ดาวน์โหลด/อัปโหลดไฟล์ผ่าน FTP 
          -พัฒนาระบบสำหรับอ่านไฟล์จากรูปแบบ CSV, TXT, Excel และจัดเก็บข้อมูลในฐานข้อมูล
          -พัฒนาระบบสำหรับการส่งข้อมูล ผ่าน Email / Line
          -พัฒนาระบบ Webservice สำหรับการส่งข้อมูลระหว่างบริษัทประกัน
          -ตรวจสอบ source code ภายในทีมก่อนนำขึ้น Production
          -พัฒนาระบบด้วย .Net C#, RestFull API with Node js , HTML , js, css , ajax `
        ]
      },
      {
        company: 'บริษัท พีทีที ดิจิตอล โซลูชั่น จํากัด',
        location: 'อาคารชินวัตรทาวเวอร์ 3 เขตจตุจักร กรุงเทพฯ 10900',
        year: 'กุมภาพันธ์ 2025 - ปัจจุบัน',
        role: 'Mid.Developer',
        description: [
          `งาน Development
            - ออกแบบฐานข้อมูล (PostgreSQL) เชื่อมต่อแบบ Entity TypeORM
            - ปรับปรุงและพัฒนา API สำหรับบันทึกข้อมูล
            - Unit Test ด้วย Jest
            - พัฒนาระบบฝั่ง Backend ด้วย Node.js (TypeScript)
          `,
          `งาน Enhances
            - ตรวจสอบปัญหาและแก้ไขระบบ
            - พัฒนา Service การเชื่อมต่อ API
            - ปรับปรุง Function SQL-Store / Function SQL-View (MS SQL)
            - พัฒนารายงานแบบ RDLC
            - จัดทำเอกสารสรุปการทำงานของระบบ
            - พัฒนาระบบด้วย .NET C# (mvc/web form/web api) , mssql
          `
        ]
        
      },
    ]
  },
  contact: {
    title : 'ช่องทางการติดต่อ',
    data: [
      { ic:'faEnvelope', type: 'email', value: 'noon.supavadee@gmail.com'},
      { ic:'faHouse', type: 'home', value: 'ลุมพินี วิลล์ พัฒนาการ - เพชรบุรีตัดใหม่'},
      { ic:'faGithub', type: 'git', value: 'https://github.com/Nsnoonz'},
      { ic:'faGlobe', type: 'website', value: 'https://nsnoonz-react.vercel.app'},
    ]
  },
  education: {
    title : 'การศึกษา',
    data:[
      { year: '2019 - 2021' , detail: 'วิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ' , location: 'มหาวิทยาลัยมหาสารคาม' },
      { year: '2017-2019' , detail: 'ประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)\n สาขาวิชาเทคโนโลยีสารสนเทศ' , location: 'วิทยาลัยเทคนิคกาฬสินธุ์' },
      { year: '2010-2016' , detail: 'การศึกษาขั้นพื้นฐาน ระดับมัธยมศึกษา' , location: 'โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม' },
    ]
  }
};
export { dataEN, dataTH };