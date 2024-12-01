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
        location: 'SSP Tower(Ekkamai) Bangkok - Thailand',
        year: '2021 - Present',
        role: 'Full-Stack Web Deveoloper',
        description: [
          'Analyzed and solved system issues.',
          'Developed systems based on assigned tasks and requirements.',
          'Supported team members.',
          'Developed systems including download/upload file functionalities via FTP on API Node.js.',
          'Developed systems for reading files from formats CSV, TXT, and Excel, and storing data in databases.',
          'Developed systems for sending email and file attachment.',
          'Developed systems for data transmission between insurance companies.',
          'Tested systems and documented unit tests',
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
      {ic:'faGlobe', type: 'website', value: 'http://www.nsnoonz.com'},
    ]
  },
  education: {
    title : 'education',
    data:[
      { year: '2019 - 2021' , detail: 'Bachelor of information technology' , location: 'MAHASARAKAM UNIVERSITY' },
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
        year: '2021 - ปัจจุบัน',
        role: 'Full-Stack Web Deveoloper',
        description: [
          'ตรวจสอบปัญหาและแก้ไขระบบ', 
          'พัฒนาระบบที่ได้รับมอบหมายภายในระยะเวลาที่กำหนด',
          'สนับสนุนช่วยเหลือเพื่อนร่วมทีม จัดทั้งเอกสารประกอบการพัฒนาระบบ',
          'ศึกษาและค้นคว้า เทคโนโลยีต่างๆ เพื่อนำมาปรับใช้กับระบบของบริษัท',
          'พัฒนาระบบ ดาวน์โหลด/อัปโหลดไฟล์ผ่าน FTP บน API Node.js',
          'พัฒนาระบบสำหรับอ่านไฟล์จากรูปแบบ CSV, TXT, และ Excel และจัดเก็บข้อมูลในฐานข้อมูล',
          'พัฒนาระบบสำหรับการส่งอีเมลและแนบไฟล์',
          'พัฒนาระบบสำหรับการส่งข้อมูลระหว่างบริษัทประกัน',
          'ทดสอบระบบ พร้อมจัดทำเอกสาร unit test',
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
      { ic:'faGlobe', type: 'website', value: 'http://www.nsnoonz.com'},
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