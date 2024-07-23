import {} from 'react'
import Marquee from 'react-marquee-slider'
import gpt from '../assets/gpt.png'
import { FaGitAlt, FaPython } from 'react-icons/fa'
import { RiFileExcel2Fill, RiJavascriptFill } from 'react-icons/ri'
import { TbBrandDatabricks, TbBrandMysql } from 'react-icons/tb'
import { HiOutlineChartBarSquare } from 'react-icons/hi2'
import { IoLogoDocker, IoLogoTableau } from 'react-icons/io5'
import { GiSnowflake1 } from 'react-icons/gi'
import { SiMicrosoftazure } from 'react-icons/si'


function TechSlide() {

  return (
    <Marquee velocity={30} className="flex items-center px-7 text-5xl">
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i className='text-3xl'><FaPython /></i><span>Python</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><RiJavascriptFill /></i><span>JavaScript</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><TbBrandMysql /></i><span>MySql</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <img src={gpt} alt="" className='w-8'/><span>ChatGPT</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><HiOutlineChartBarSquare /></i><span>Power BI</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><IoLogoTableau /></i><span>Tableau</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><RiFileExcel2Fill /></i><span></span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><IoLogoDocker /></i><span>docker</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><TbBrandDatabricks /></i><span>databricks</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><GiSnowflake1 /></i><span>snowflake</span>
        </p>
        <p className="flex items-center gap-[2px] mr-7 text-3xl">
            <i><SiMicrosoftazure /></i><span>Azure</span>
        </p>
        <p className="flex items-center gap-[2px] text-3xl mr-7">
            <i><FaGitAlt /></i><span>git</span>
        </p>
    </Marquee>
  )
}

export default TechSlide