import { useState } from 'react';
import './styles/index.css'; // Tailwind
import './styles/theme.css'; //Theme CSS

import rifle_x from './assets/rifles/x_default.jpg';
import rifle_x_hunter from './assets/rifles/x_hunter.jpg';
import rifle_x_carbon_hunter from './assets/rifles/x_hunter_carbon.jpg';
import rifle_hybrid from './assets/rifles/hybrid.jpg';

import RifleSelector from './components/RifleSelector';
import RifleDisplay from './components/RifleDisplay';
export default function App() {
  const [selectedRifle, setSelectedRifle] = useState('default');

  const getRifleImage = () => {
    return selectedRifle === 'default' ? rifle_x : rifle_hybrid;
  };

  return (
    <>
      <div class="bg-grey-600 w-screen h-screen">
        <div className="pt-12 pb-12 h-full">
          <container class="flex flex-row m-4 h-full">
            <section class="h-full flex flex-col-reverse w-full">
              {/* Import component for image*/}
              <section class="w-f h-32 bg-red-500">
                <h1 class="f-bold">Price $1,650</h1>
              </section>
              <RifleDisplay/>
            </section>
            <aside class="h-full w-1/2 border-10 border-black ">
              <div className="container-text m-4">
                <h1 class="">CHOOSE YOUR RIFLE</h1>
                <RifleSelector/>
                <h1>YOU'RE INTERESTED IN?</h1>
                <fieldset>
                  <input type='radio' name='rifle_options' className='w-5 h-5'/>
                  <label><h6 className='inline' >Rifle Only</h6></label>
                  <input type='radio' name='rifle_options' className='w-5 h-5'/>
                  <label><h6 className='inline'>Rifle & Attachments</h6></label>
                </fieldset>
                <h1 className='text-1'>RIFLE DETAILS</h1>
                
                <button className='bg-color-primary block w-full h-15'><span class='font-bold text-5x1'>NEXT</span></button>

              </div>         
            </aside>
          </container>
        </div>
      </div>
    </>
  );
}
