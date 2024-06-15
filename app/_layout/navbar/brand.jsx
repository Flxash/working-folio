'use client';

import { Copyright } from 'lucide-react';

export function NavbarBrand() {
  return (
    <div className='group flex cursor-pointer pb-5'>

      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Abdel's Portfolio
        </h5>
      </div>
    </div>
  );
}
