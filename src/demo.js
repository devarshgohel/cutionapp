import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button } from 'antd';
export const Demo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-fuchsia-200'>
        <Flex align='center' justify='center' className='p-7'>
          <div>
            <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf557faed0e04aded5_4.png' style={{ width: "500px", height: '650px' }} />
          </div>
          <div className='bg-fuchsia-500 text-white p-14 ml-[-900px] '>
            <h5>ABOUT ME</h5>
            <p className='text-5xl'>I'm a trendy</p>
            <p className='text-5xl'>Cushion Designer</p>
            <Button type='text' className='text-white'>LEARN MORE</Button>
          </div>
        </Flex>
      </div>

      <Flex align="center" justify='space-around' className="p-7" >
        <div >
          <h5 className="text-fuchsia-400">BEGINNINGS</h5>
          <p className="text-xl">Credibly innovate granular internal or organic </p>
          <p className="text-xl">sources whereas high standards in web-readiness.</p>
          <p className="text-xl">Energistically scale future-proof core competencies</p>
          <p className="text-xl">vis-a-vis impactful experiences.</p>
          <p className="text-xl">Dramatically synthesize integrated schemas. with </p>
          <p className="text-xl">optimal networks.</p>
        </div>
        <div className="bg-fuchsia-200 p-5">
          <img src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash-p-1080.jpeg" style={{ width: '600px', height: '400px' }} />
        </div>
      </Flex>
      <Flex align="center" justify='space-around' className="p-7 " >
        <div className="bg-fuchsia-200 p-5">
          <img src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6-p-800.jpeg" style={{ width: '600px', height: '400px' }} />
        </div>
        <div>
          <h5 className="text-fuchsia-400">CARRER</h5>
          <p className="text-xl">Collaboratively administrate turnkey channels </p>
          <p className="text-xl">whereas virtual e-tailers.</p>
          <p className="text-xl">Objectively seize scalable metrics whereas proactive</p>
          <p className="text-xl">e-services seamlessly empower fully researched</p>
          <p className="text-xl">growth strategies. </p>
          <p className="text-xl">And interoperable internal or “organic” sources.</p>
          <Button type='default' className=' text-fuchsia-300 border-fuchsia-300'>Learn more</Button>
        </div>
      </Flex>
      <Flex align="center" justify='space-around'  className="p-7 ">
        <div >
          <h5 className="text-fuchsia-400">PRODUCTS</h5>
          <p className="text-xl">Seamlessly empower fully researched growth</p>
          <p className="text-xl">strategies and interoperable internal or “organic”</p>
          <p className="text-xl">sources.</p>
          <p className="text-xl">Credibly innovate granular internal or “organic”</p>
          <p className="text-xl">sources whereas high standards in web-readiness. </p>
          <p className="text-xl">Energistically scale future-proof core competence</p>
        </div>
        <div className="bg-fuchsia-200 p-5">
          <img src="https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash-p-1080.jpeg" style={{ width: '600px', height: '400px' }} />
        </div>
      </Flex>

      <Flex align='center' justify='center' className='p-7 bg-fuchsia-200 mb-3'>
        <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8e067cf26d350857abf3a_7.jpg' style={{ height: "650px", width: "550px" }} />
        <div className='bg-fuchsia-500 ml-[-100px] text-white p-14'>
          <h5>New</h5>
          <p className='text-5xl'>Spring Cushion</p>
          <p className='text-5xl'>Collection 2019</p>
          <Button type='text' className='text-white'>BUY NOW</Button>
        </div>
      </Flex>

  
    </>)
};