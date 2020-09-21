import React from 'react'
import { FaHome, FaAppStore, FaSquarespace, FaPencilAlt, FaBuffer, FaChartPie,FaTools } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className="nav bg-dark m-4 navigation">
            <ul className="list-links w-100">
                <li className="mt-2 pl-3 pr-3"><span><FaHome className='text-info mr-1' /></span><span className="text-info">Dashboard</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaAppStore className='text-info mr-1' /></span><span className="text-info">Apps</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaSquarespace className='text-info mr-1' /></span><span className="text-info">Ui Elemetns</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaPencilAlt className='text-info mr-1' /></span><span className="text-info">Forms and Tables</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaBuffer className='text-info mr-1' /></span><span className="text-info">Pages</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaChartPie className='text-info mr-1' /></span><span className="text-info">Charts and Maps</span></li>
                <li className="mt-2 pl-3 pr-3"><span><FaTools className='text-info mr-1' /></span><span className="text-info">Others</span></li>
            </ul>
        </nav>
    )
}

export default Nav  
