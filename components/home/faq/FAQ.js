const FAQ = () => {
    const toggle = (id)=> {
        id = id;
        document.getElementById('accordion-collapse-body-1').classList.add('hidden');
        document.getElementById('accordion-collapse-heading-1').querySelector('svg').classList.add('rotate-180');
        document.getElementById('accordion-collapse-body-2').classList.add('hidden');
        document.getElementById('accordion-collapse-heading-2').querySelector('svg').classList.add('rotate-180');
        document.getElementById('accordion-collapse-body-3').classList.add('hidden');
        document.getElementById('accordion-collapse-heading-3').querySelector('svg').classList.add('rotate-180');

        document.getElementById('accordion-collapse-body-'+id).classList.remove('hidden');
        document.getElementById('accordion-collapse-heading-'+id).querySelector('svg').classList.remove('rotate-180');
    }
    return (
        <section className="bg-[#fff] pt-[70px] pb-[100px]">
            <div className="myContainer">
                <h1 className='fpr text-[#0F2E3C] text-[85px] leading-[85px] text-center max-w-[700px] mx-auto'>Frequently asked questions</h1>
                <div id="accordion-collapse" className="mt-[80px]">
                    <h2 id="accordion-collapse-heading-1" onClick={()=>toggle('1')}>
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 text-gray-900 dark:text-white" >
                        <span className="fgr text-[28px] leading-[38px] text-[#292929]">What is Flowbite?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className="">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="fgr mb-2 text-[24px] leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2" onClick={()=>toggle('2')}>
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400" >
                        <span className="fgr text-[28px] leading-[38px] text-[#292929]">Is there a Figma file available?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="hidden">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="fgr mb-2 text-[24px] leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3" onClick={()=>toggle('3')}>
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400" >
                        <span className="fgr text-[28px] leading-[38px] text-[#292929]">What are the differences between Flowbite and Tailwind UI?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="hidden">
                        <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="fgr mb-2 text-[24px] leading-[34px] text-[#292929]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default FAQ;
