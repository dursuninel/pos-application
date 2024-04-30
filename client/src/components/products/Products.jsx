import React from 'react'

function Products() {
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
        <div className='products-wrapper grid grid-cols-card gap-4'>
            {data.map((data, key) => <div key={key} className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
                <div className='product-image'>
                    <img className='h-28 object-cover w-full border-b' src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
                </div>
                <div className="product-info flex flex-col p-3">
                    <span className="font-bold">{data.title}</span>
                    <span>12₺</span>
                </div>
            </div>)}
        </div>
    )
}

export default Products
