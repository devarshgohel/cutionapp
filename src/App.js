import './App.css';
import { Flex, Button } from 'antd';
import { Carousel } from 'antd';

function App() {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel afterChange={onChange}>

        <div className='bg-fuchsia-200' style={{ height: "500px" }}>

          <Flex align='center' justify='center' className='p-7'>
            <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd90a8aef82dc5918248baa_cushion.jpg' style={{ height: "650px" }} />
            <div className='bg-fuchsia-500 ml-[-150px] text-white p-14'>
              <h5>New</h5>
              <p className='text-5xl'>Spring Cushion</p>
              <p className='text-5xl'>Collection 2019</p>
              <Button type='text' className='text-white'>BUY NOW</Button>
            </div>
          </Flex>
          <div className=' bg-fuchsia-300 mt-[-272px]' style={{ height: "280px" }}>
          </div>
        </div>
        <div>

          <div className='bg-fuchsia-200' style={{ height: "500px" }}>
            
            <Flex align='center' justify='center' className='p-7'>
              <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8a753b7abc549d52f2255_noah-buscher-1118080-unsplash.jpg' style={{ height: "650px" }} />
              <div className='bg-fuchsia-500 ml-[-150px] text-white p-14'>
                <h5>ABOUT ME</h5>
                <p className='text-5xl'>I'm a trendy</p>
                <p className='text-5xl'>Cushion Designer</p>
                <Button type='text' className='text-white'>LEARN MORE</Button>
              </div>
            </Flex>
            <div className=' bg-fuchsia-300 mt-[-272px]' style={{ height: "280px" }}>
            </div>
          </div>
        </div>
      </Carousel>
      <div className='text-center p-7'>
        <h5 className='text-fuchsia-300'>I'M A CUSHION DESIGNER</h5>
        <p className='text-2xl'>Based in San Francisco, California I design trendy and fashion Cushions,</p>
        <p className='text-2xl'>since I have memory I always had a tendency to design and illustration.</p>
        <Button type='default' className=' text-fuchsia-300 border-fuchsia-300'>LEARN MORE</Button>
      </div>
      <Flex justify='space-around' className='p-7'>
        <div className='bg-fuchsia-300'>
          <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf557faed0e04aded5_4.png' style={{ width: '350px', height: '350px' }} />
          <p className='text-2xl text-white pl-2'>About me</p>
          <Button type='text' className='text-white'>Learn more</Button>
        </div>
        <div className='bg-fuchsia-300'>
          <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8e067cf26d350857abf3a_7.jpg' style={{ width: '350px', height: '350px' }} />
          <p className='text-2xl text-white pl-2'>My products</p>
          <Button type='text' className='text-white'>Learn more</Button>
        </div>
        <div className='bg-fuchsia-300'>
          <img src='https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png' style={{ width: '350px', height: '350px' }} />
          <p className='text-2xl text-white pl-2'>Contact me</p>
          <Button type='text' className='text-white'>Learn more</Button>
        </div>
      </Flex>
    </>
  );
}

export default App;