import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';


const Home = () => {
  return (
    <>
      {/*=========hero section======*/}
        <section className='hero__section pt-[0px] 2xl:h-[800px]'>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/*=========hero content======*/}
              <div>
                <div className="lg:w-[600px]">
                  <h1 className="text-[36px]  text-headingColor font-[600] md:text-[60px] ">
                    We help patients live a healthy longer life.
                  </h1>
                  <p className='text_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ducimus quis porro aspernatur rem deserunt, architecto minus molestias</p>
                </div>
                <button className='btn'>Request an Appoinment</button>


                {/*=========hero counter======*/}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ' >
                      30+
                    </h2>
                    <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] '></span>
                    <p className='text_para'>Years of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ' >
                      15+
                    </h2>
                    <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] '></span>
                    <p className='text_para'>Clinic Location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ' >
                      100%
                    </h2>
                    <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] '></span>
                    <p className='text_para'>Patient Satisfaction</p>
                  </div>
                </div>
              </div>

              {/*=========hero content======*/}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className='w-full' src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
                  <img src={heroImg03} alt="" className='w-full'/>

                </div>
              </div>
            </div>
          </div>
        </section>
      {/*=========hero section end======*/}


      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className='text_para text-center'>
              World class care for everyone. Our health system offers unmatched expert health care
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;