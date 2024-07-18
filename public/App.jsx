
import './App.css'

function App() {
  let kami = ""

  function display(){
    kami= "kami"
  }


  return (
    <>
    <section className='flex justify-center'>
        <div>
            <img src="./src/assets/Rectangle 90.png" alt="" />
               <div className='bg-[#1A1B21] w-[317px] h-[490px]'>
                {/* texts */}
                  <div className='flex flex-col items-center gap-1'>
                    <p className='text-3xl font-bold text-[#FFFFFF]'>Laura Smith</p>
                    <p className=' text-[#F3BF99]'>Frontend Developer</p>
                    <p className='text-xs text-[#F5F5F5]'>laurasmith.website</p>
                    </div>
                    {/* buttons */}
                    <div className='flex gap-2 mt-4 px-5'>
                       <button className='bg-white w-[115px] h-[34px] rounded-md flex items-center gap-1 justify-center'>
                           <img src="./src/assets/Icon.svg" alt="" />
                           <p>Email</p> 
                        </button>
                       <button onClick={display}  className='bg-[#5093E2] w-[115px] h-[34px] rounded-md text-white flex items-center gap-1 justify-center'>
                            <img src="./src/assets/Vector.svg" alt="" />
                            <p >Linedin </p>
                        </button>
                    </div>

                    <h1 className=' text-white font-bold text-5xl'><p >{kami}</p></h1>

                    {/* words */}
                    <div  className='text-white flex flex-col mt-5 px-5 gap-3' >
                        <div>
                          <p className='font-bold text-xl'>About</p>
                          <span className='text-[#DCDCDC] text-sm'>
                           I am a frontend developer with a particular interest in making 
                          things simple and automating daily tasks. I try to keep up with security 
                           and best practices, and am always looking for new things to learn.
                         </span>
                        </div>

                       <div>
                       <p className='font-bold text-xl'>Intersts</p>
                       <span className='text-[#DCDCDC] text-sm'>
                       Food expert. Music scholar. Reader. Internet fanatic.
                       Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
                       Coffee fanatic.
                       </span>
                       </div>
                           
                           {/* images */}
                           <div className='flex gap-7 ml-5 mt-4'>
                            <img src="./src/assets/Twitter Icon.svg" alt="" />
                            <img src="./src/assets/Facebook Icon.svg" alt="" />
                            <img src="./src/assets/Instagram Icon.svg" alt="" />
                            <img src="./src/assets/GitHub Icon.svg" alt="" />
                           </div>
                      
                    </div>
             </div>
        </div>
    </section>
    </>
  )
}

export default App
