"use client";

import "@/app/page.scss"
import { useState, useRef, useCallback } from "react";

export default function Home() {
  const [listState, setListState] = useState('left')
  const listWrapper = useRef(null)
  const [listStyle, setListStyle] = useState({
    transform: 'translateX(0)'
  })

  // 为什么不使用tailwind的translate：https://github.com/tailwindlabs/tailwindcss/discussions/12046
  const handleClick = useCallback((state) => {
    setListStyle({
      ...listStyle,
      transform: `translateX(${state === 'left' ? '0' : '-29.25rem'})`
    })
    setListState(state)
  })

  return (
    <div className="container mx-auto max-w-screen-2xl px-31 relative overflow-hidden">
      <div className="flex flex-none transition-all duration-300" ref={listWrapper} style={listStyle}>
        <div className="box box1 mr-13 flex-none relative w-[26rem] h-[17.375rem]">
          <img src="/svg/box1-active.svg" className="w-full h-full absolute left-0 top-0 z-10" />
          <div className="box-inner px-10 pt-9 bg-[url('/svg/box1.svg')] w-full h-full absolute left-0 top-0 z-20 bg-no-repeat bg-center bg-cover cursor-pointer transition-all hover:top-auto hover:left-1 hover:bottom-1">
            <div className="bold-line h-1 w-[2.875rem] bg-gradient-to-b from-[#38C1A5] to-[#0891D5] rounded-lg"></div>
            <h3 className="text-[#ededed] font-bold text-base/4 mt-[1.81rem]">Introduction to programming</h3>
            <div className="tag text-white text-[0.5625rem] leading-none py-1 px-2 rounded-[1.25rem] border border-[#676767] my-4 inline-block">Beginner</div>
            <p className="desc text-[#676767] text-xs leading-[0.825rem] mb-[4rem]">This course covers the most basic concepts in programming using Solidity as an example.</p>
            <div className="foot flex flex-row justify-between items-center">
              <div className="time font-['neuemachina'] text-[#F2F2F2] text-xs/3 flex items-center">
                <img className="icon w-3.5 h-3.5 mr-2" src="/svg/watch.svg"></img>
                <span>36 Hour</span>
              </div>
              <div className="num font-['neuemachina'] text-[#F2F2F2] text-xs/3 flex items-center">
                <img className="icon w-3.5 h-3.5 mr-2" src="/svg/book.svg"></img>
                <span>5 Course</span>
              </div>
              <div className="complete bg-[#2A2A2A] py-2 px-4 rounded-[2.5rem] flex flex-row items-center">
                <img className="icon w-5 h-5 mr-2 relative bottom-0.5" src="/svg/complete.svg"></img>
                <span className="text-[#9EFA13] text-[0.625rem] leading-[0.6875rem]">45% COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box box2 mr-13 flex-none relative w-[26rem] h-[17.375rem]">
          <img src="/svg/box2-active.svg" className="w-full h-full absolute left-0 top-0 z-10" />
          <div className="box-inner px-10 pt-9 bg-[url('/svg/box2.svg')] w-full h-full absolute left-0 top-0 z-20 bg-no-repeat bg-center bg-cover cursor-pointer transition-all hover:top-auto hover:left-1 hover:bottom-1">
            <h3 className="text-[#ededed] font-bold text-base/4">Moonshot 2023 Summer Hackathon</h3>
            <div className="tag-group flex mt-4 mb-[4.2rem]">
              <div className="tag text-white text-[0.5625rem] leading-none py-1 px-2 rounded-[1.25rem] border border-[#676767] inline-block mr-4">All Tracks</div>
              <div className="tag text-white text-[0.5625rem] leading-none py-1 px-2 rounded-[1.25rem] border border-[#676767] inline-block mr-4">Solidity</div>
              <div className="tag text-white text-[0.5625rem] leading-none py-1 px-2 rounded-[1.25rem] border border-[#676767] inline-block">ZK</div>
            </div>
            <ul>
              <li className="flex flex-row justify-between border-b border-[#282828] pb-[0.3rem] mb-[1.06rem]">
                <span className="left text-[#676767] text-xs leading-[0.825rem]">Signup</span>
                <span className="right font-['neuemachina'] text-[#F2F2F2] text-xs/3">4/15 - 6/15</span>
              </li>
              <li className="flex flex-row justify-between border-b border-[#282828] pb-[0.3rem] mb-[1.06rem]">
                <span className="left text-[#676767] text-xs leading-[0.825rem]">Event</span>
                <span className="right font-['neuemachina'] text-[#F2F2F2] text-xs/3">6/15 - 7/15</span>
              </li>
              <li className="flex flex-row justify-between border-b border-[#282828] pb-[0.3rem] mb-[1.06rem]">
                <span className="left text-[#676767] text-xs leading-[0.825rem]">Grant size</span>
                <span className="right font-['neuemachina'] text-[#F2F2F2] text-xs/3">200K</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="box box3 mr-13 flex-none relative w-[26rem] h-[17.375rem]">
          <img src="/svg/box3-active.svg" className="w-full h-full absolute left-0 top-0 z-10" />
          <div className="box-inner px-10 pt-9 bg-[url('/svg/box3.svg')] w-full h-full absolute left-0 top-0 z-20 bg-no-repeat bg-center bg-cover cursor-pointer transition-all hover:top-auto hover:left-1 hover:bottom-1">
            <div className="bold-line h-1 w-[2.875rem] bg-gradient-to-b from-[#D9E313] to-[#3CBC34] rounded-lg"></div>
            <h3 className="text-[#ededed] font-bold text-base/4 mt-[1.81rem]">Web 3.0 Programming Basics</h3>
            <div className="tag text-white text-[0.5625rem] leading-none py-1 px-2 rounded-[1.25rem] border border-[#676767] my-4 inline-block">Beginner</div>
            <p className="desc text-[#676767] text-xs leading-[0.825rem] mb-[4rem]">Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</p>
            <div className="foot flex flex-row items-center">
              <div className="time font-['neuemachina'] text-[#F2F2F2] text-xs/3 flex items-center mr-[1.6rem]">
                <img className="icon w-3.5 h-3.5 mr-2" src="/svg/watch.svg"></img>
                <span>36 Hour</span>
              </div>
              <div className="num font-['neuemachina'] text-[#F2F2F2] text-xs/3 flex items-center">
                <img className="icon w-3.5 h-3.5 mr-2" src="/svg/book.svg"></img>
                <span>5 Course</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box box4 mr-13 flex-none relative w-[26rem] h-[17.375rem]">
          <img src="/svg/box4-active.svg" className="w-full h-full absolute left-0 top-0 z-10" />
          <div className="box-inner px-10 pt-9 bg-[url('/svg/box4.svg')] w-full h-full absolute left-0 top-0 z-20 bg-no-repeat bg-center bg-cover cursor-pointer transition-all hover:top-auto hover:left-1 hover:bottom-1">
            <div className="bold-line h-1 w-[2.875rem] bg-gradient-to-b from-[#E0AD38] to-[#EB3E1C] rounded-lg"></div>
            <h3 className="text-[#ededed] font-bold text-base/4 absolute left-[1.94rem] bottom-[5.12rem]">What is Bitcoin</h3>
            <img src="/svg/bitcoin.svg" className="absolute right-[2rem] top-[2rem]" />
            <div className="time font-['neuemachina'] text-[#F2F2F2] text-xs/3 flex items-center absolute right-[5.38rem] bottom-[1.2rem]">
              <img className="icon w-3.5 h-3.5 mr-2" src="/svg/watch.svg"></img>
              <span>36 Hour</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`mask mask-left absolute left-0 top-0 h-full w-[12rem] z-40 flex items-center justify-end ${listState === 'left' ? 'invisible' : 'visible'}`}>
        <div onClick={() => handleClick('left')} className="rounded-full border border-[#676767] text-center w-12 h-12 text-[1.5rem] leading-[3rem] cursor-pointer transition-all bg-transparent hover:bg-[#303030] mr-[1.15rem]">&lt;</div>
      </div>
      <div className={`mask absolute top-0 right-0 h-full w-[12rem] z-40 flex items-center ${listState === 'right' ? 'invisible' : 'visible'}`}>
        <div onClick={() => handleClick('right')} className="rounded-full border border-[#676767] text-center w-12 h-12 text-[1.5rem] leading-[3rem] cursor-pointer transition-all bg-transparent hover:bg-[#303030] ml-[1.15rem]">&gt;</div>
      </div>
    </div>
  );
}
