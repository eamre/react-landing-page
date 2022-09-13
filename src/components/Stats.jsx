import React from 'react'
import {stats} from "../constant"
import styles from '../style'

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat,index)=>(
        <div key={stat.id} 
        className=" flex-1 flex flex-row justify-start items-center m-2">
          <h4 className='font-poppins font-semibold xs:text-[40px] 
          text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-semibold xs:text-[20px] 
          text-[15px] xs:leading-[26px] leading-[21px] text-white
          text-gradient uppercase ml-3'>
            {stat.title}
          </p> 
          {/* <h1 className={`text-white ml-2
          ${index===stats.length-1 ? "hidden" :"flex"} `}>
            |
          </h1> */}
        </div>
      ))}
    </section>
  )

export default Stats