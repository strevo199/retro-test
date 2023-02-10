import React from 'react'
import {imageIcon, ImageIconType} from "../../assets";
export const  SideBar = () => {

    type sideBarListType = {
        name: string;
        link: string;
        icon: ImageIconType
    }

  const sideBarList = [
    {name: 'Dashboard',link: 'Dashboard', icon:imageIcon.dashboard},
    {name: 'products',link: 'Products', icon:imageIcon.groceryShelf},
    {name: 'Blog',link: 'Dashboard', icon: imageIcon.blog},
    {name: 'Transaction',link: 'Dashboard', icon:imageIcon.transactions},
    {name: 'Users',link: 'Users', icon:imageIcon.users},
    {name: 'Users',link: 'Users', icon:imageIcon.analytic},
    {name: 'Users',link: 'Users', icon:imageIcon.businessReport},
    {name: 'Settings',link: 'Settings', icon:imageIcon.gear},
  ]

  return (
    <div className=' border-l-2 bg-white border-l-slate-100 w-80 px-8' >
      <div className='  flex w-full'>
        <div className=' text-6xl font-bold text-blue-900'>RETRO</div>
      </div>

      <div>
          {
              sideBarList.map((item, index) => {
                  return (
                      <div className={'flex-row p-2 items-center gap-3 flex  my-1'}>
                          <img className={'h-5 w-5'} src={item.icon} />
                          <div>{item.name}</div>
                      </div>
                  )
              })
          }
      </div>
    </div>
  )
}
