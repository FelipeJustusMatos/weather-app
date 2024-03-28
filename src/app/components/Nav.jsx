import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <div>
            <div className='header flex w-[80%] justify-between m-auto py-[15px] '>
                <div className='logo'><h2>Weather </h2></div>
                <div className='Pesquisa'></div>
                <div className='menu'>
                    <nav>
                        <ul className='flex gap-[20px]'>
                            <li>
                                <Link href="">teste</Link>
                            </li>
                            <li>
                                <Link href="">teste</Link>
                            </li>
                            <li>
                                <Link href="">teste</Link>
                            </li>
                            <li>
                                <Link href="">teste</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav