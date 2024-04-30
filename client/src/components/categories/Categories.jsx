import React from 'react'

function Categories() {

    let data = [{
        title: "Ürün 1"
    },
    {
        title: "Ürün 2"
    },
    {
        title: "Ürün 3"
    },
    {
        title: "Ürün 4"
    },
    {
        title: "Ürün 5"
    },
    {
        title: "Ürün 6"
    },
    {
        title: "Ürün 7"
    },
    {
        title: "Ürün 8"
    },
    {
        title: "Ürün 9"
    },
    {
        title: "Ürün 10"
    }
    ]

    return (
        <ul className="flex gap-4 md:flex-col text-lg">
            <li className="bg-green-700 px-6 py-10 flex justify-center items-center text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
                <span>Tümü</span>
            </li>
            {data.map((data, key) => <li key={key} className='text-center flex justify-center items-center whitespace-nowrap bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700'>
                <span>{data.title}</span>
            </li>)}
        </ul>
    )
}

export default Categories
