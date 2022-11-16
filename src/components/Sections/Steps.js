import React from 'react';
import stepsInfographic from '../../assets/steps_infographic.png';

function Steps() {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-3xl font-bold leading-tight text-red-800 sm:text-4xl lg:text-5xl">It's this Simple</h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">We drilled it down to <strong>three</strong> simple steps ...</p>
            </div>

            <div className="relative">
                {/* <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={stepsInfographic} alt="" /> */}

                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={stepsInfographic} alt="" />
            </div>
        </div>
    </div>
</section>

  )
}

export default Steps