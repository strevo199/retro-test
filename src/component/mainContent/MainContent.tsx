import React from 'react'
import {imageIcon} from "../../assets";

export const  MainContent = () => {
  return (
    <div className=' flex-col gap-y-4 flex flex-1 rounded-t-2xl px-6 py-4 bg-slate-100 '>
      {/*  header*/}
      <div className={'justify-between w-full flex flex-row'}>
          <div>
          <input type={"search"} placeholder={'search...'} className={'bg-slate-200 outline-0 h-10 w-60 rounded-xl px-4'} />
          </div>
          <div className={' flex flex-row'}>
              <div className={'text-right mr-2'}>
                  <div className={'text-xs'}>jamesbrown@example.com</div>
                  <div className={'text-xs text-slate-500'}>admin</div>

              </div>
              <img src={imageIcon.users} className={' h-8 w-8 rounded-full'} />
          </div>
      </div>
        {/*top chart*/}
      <div className={'bg-white rounded-xl shadow-xl  w-full'}>
        <div  className={'border-b-2 border-b-slate-100 p-4 items-center flex justify-between'}>
            <div className={'font-bold text-xl'}>Sales Overview</div>
            <button className={'bg-blue-500 py-2 rounded-2xl px-12 text-white'}>  Add Offer</button>
        </div>

      </div>
        {/*cards*/}
      <div></div>
        {/*radar and latset product*/}
      <div></div>
    </div>
  )
}
