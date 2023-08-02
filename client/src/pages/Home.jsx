import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            {/* <img 
              src='./threejs.png'
              alt= 'logo'
              className= 'w-8 h-8 object-contain bg-slate-500'
            /> */}
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation} className='text-white'>
              <h1 className='head-text'>
              Do it  <br className='xl:block hidden'/> yourself.
              </h1>
            </motion.div>
            <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-white text-base'>Discover the world of personalized fashion with our cutting-edge 3D customization tool. Unleash your creativity and redefine your style with a unique and exclusive shirt designed by you.</p>

              <CustomButton
                type="filled"
                title= "Customize It"
                handleClick= {() => state.intro = false}
                customStyles= 'w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home