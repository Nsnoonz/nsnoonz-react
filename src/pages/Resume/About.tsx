import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import html2pdf from 'html2pdf-ts';
import html2pdf from 'html2pdf.js';
import { RootState, setLang } from '../../store/storeReducers'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsBrand from '@fortawesome/free-brands-svg-icons';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import ImgProfile from '../../assets/profile/profile-01.png';
import { dataEN, dataTH } from './DataResume';


const iconMappings: { [key: string]: IconDefinition } = {
  faEnvelope: Icons.faEnvelope,
  faHouse: Icons.faHouse,
  faGlobe: Icons.faGlobe,
  faGithub: IconsBrand.faGithub,
};

const About: React.FC = () => {
  const dispatch = useDispatch()
  const stLang = useSelector((state: RootState) => state.isLang)
  const currentData = stLang === 'en' ? dataEN : dataTH;
  const btnLangEN = stLang === 'en' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const btnLangTH = stLang !== 'en' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const fontTH = stLang === 'en' ? '' : 'font-SansThai';
  const pageA4 = { maxWidth: '210mm', maxHeight: '296mm', minHeight: '295mm', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}
  const [setPDF, fnSetPDF] = useState<'mb-2 -mt-2' | ''>('');
  const fnOnClickPrintResume = (text: string, filename: string) => {
    fnSetPDF('mb-2 -mt-2')
    setTimeout(() => {
      const element = document.querySelector(text) as HTMLElement;
      const opt = {
        /* margin: 1, */
        filename: filename,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1.8, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      }
      html2pdf().set(opt).from(element).save()
      fnSetPDF('')
    }, 100);
  };

  const fnOnClickSetLang = (payload: string) => {
    dispatch(setLang(payload))
  }

  return (
    <>
    <div className={`py-20 ${fontTH}`}>
      <div className={`flex justify-center pb-5 font-SansThai`}>
        <button className={`px-4 py-1 mr-2 rounded ${btnLangEN} `} onClick={() => fnOnClickSetLang('en')}> English </button>
        <button className={`px-4 py-1 mr-2 rounded ${btnLangTH}`} onClick={() => fnOnClickSetLang('th')} > ไทย </button>
        <button className={`px-4 py-1 bg-green-600 hover:bg-green-700 rounded text-white`} onClick={() => fnOnClickPrintResume('#resume2', `Resume_Supavadee_${stLang}.pdf`)}>Download PDF</button>
      </div>
      <div id="resume2" className={`container mx-auto border-2 `}  style={pageA4} >
        <div className={` resume ${fontTH}`}>
          <div className="relative w-full bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-sky-800 bg-nsnoonz-blue"></div>
            <div className="relative flex items-center p-6">
              <div className="mr-6">
                <img className="h-36 w-36 rounded-full object-cover border-4 border-white" src={ImgProfile} alt="Profile" />
              </div>
              <div >
                <h1 className={`text-4xl font-bold text-white pb-3 -mt-8`}>{currentData.name.toUpperCase()}</h1>
                <h2 className="text-2xl font-bold text-nsnoonz-blue mt-3 ">{currentData.title.toUpperCase()}</h2>
              </div>
            </div>
          </div>
          <div className=" mx-5 ">
            <div className="grid grid-cols-12  gap-0">
            <div className="border-r-2 col-span-5 border-nsnoonz-blue">
              <div className="max-w-sm mx-5 ">
              <div className=" bg-nsnoonz-blue text-white p-1">
                  <p className={` text-center font-bold ${setPDF}`}>{currentData.profile.title.toUpperCase()}</p>
                </div>
                <div className="pt-3 text-sm ">
                  <p className="flex flex-row items-center">{ stLang === 'th' ? 'ชื่อ' : 'Name' } : {currentData.profile.detail.name}</p>
                  <p className="flex flex-row items-center">{ stLang === 'th' ? 'เพศ' : 'Gender' } : {currentData.profile.detail.gender} </p>
                  <p className="flex flex-row items-center">{ stLang === 'th' ? 'อายุ' : 'Age' } : {new Date().getFullYear() - new Date('1998-08-16').getFullYear()}</p>
                  <p className="flex flex-row items-center pt-5" style={{ whiteSpace: 'pre-wrap' }} >{currentData.summary}  </p>
                </div>
              </div>

              <div className="max-w-sm mx-5 mt-8 ">
              <div className=" bg-nsnoonz-blue text-white p-1">
                <p className={` text-center font-bold ${setPDF}`}>{ stLang === 'th' ? 'ทักษะ' : 'SKILLS' } </p>
                </div>
                <div className="pt-3 text-sm  ">
                  <p className="flex flex-row items-center break-words" >Node.js, React (beginner), Tailwind (beginner), Typescript (beginner), ASP.Net, asp classic, PHP, MSSQL, MySQL, HTML, CSS, JavaScript, Jquery, Ajax, Bootstrap</p>
                </div>
              </div>

              <div className="max-w-sm mx-5 mt-8 ">
                <div className=" bg-nsnoonz-blue text-white p-1">
                  <p className={` text-center font-bold ${setPDF}`}>{currentData.contact.title.toUpperCase()}</p>
                </div>
                <div className="pt-3 text-sm ">
                  {currentData.contact.data.map((item, index) => (
                    <div key={index} className="flex items-center  mt-2 ">
                      <div className="flex justify-center items-center w-9 h-9 rounded-full p-2 mr-2 bg-nsnoonz-blue text-white ">
                        <FontAwesomeIcon icon={iconMappings[item.ic as keyof typeof iconMappings]} className="" />
                      </div>
                      {item.value.indexOf('http') > -1 ? (
                        <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <div>{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-sm mx-5 mt-8">
                <div className=" bg-nsnoonz-blue text-white p-1">
                  <p className={` text-center font-bold ${setPDF}`}>{currentData.education.title.toUpperCase()}</p>
                </div>
                <div className="pt-3 text-sm">
                  {currentData.education.data.map((item, index) => (
                    <div key={index}  className={`${index > 0 ? `mt-2` : ''}`}>
                    <p className="flex flex-row items-center  font-bold"> {item.year} </p>
                    <p className="flex flex-row items-center" style={{ whiteSpace: 'pre-wrap' }}>&nbsp;{item.detail} </p>
                    <p className="flex flex-row items-center">&nbsp;{item.location} </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="border-l-2 col-span-7 border-nsnoonz-blue">
              <div className="max-w-sm mx-5">
                  <div className=" bg-nsnoonz-blue text-white p-1 ">
                    <p className={` text-center font-bold ${setPDF}`}>{currentData.experience.title.toUpperCase()}</p>
                  </div>
                  <div className="pt-3" style={{ fontSize: "14px" }}>
                  {currentData.experience.data.map((item, index) => (
                    <>
                    <div key={index} className="font-bold">
                      <p className="flex flex-row items-center mt-1" style={{ fontSize: "16px" }}>{item.company}</p>
                      <p className="flex flex-row items-center"  >{item.location}</p>
                      <p className="flex flex-row items-center"  >{item.year}</p>
                      <p className="flex flex-row items-center underline underline-offset-1">{item.role}</p>
                    </div>
                    <div className="mt-2 pl-4" >
                      {/* {item.description.map((item2, index2) => (
                        <li key={index2} className=""><span>{item2}</span></li>
                      ))} */}
                      {item.description.map((item2, index2) => (
                        <p key={index2} className="">
                          {item2.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i !== item2.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>
                    </>
                  ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;