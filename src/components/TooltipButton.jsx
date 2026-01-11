import React from 'react'

const TooltipButton = ({position= 'bottom', colors=['bg-red-700', 'bg-green-700', 'bg-blue-700']}) => {
    const positionClasses = {
        bottom:{
           tooltip: 'bottom-full left-1/2-lg transform -translate-x-1/2 mb-3' ,
           arrow: 'left-1/2 -bottom-2 -translate-x-1/2 -bottom-2 border-t'
        }
    }
    return (
        <div className='relative group'>
            <button className='relative p-4 text-xl rounded-full border-1 bg-white/20'>
                <div className={`absolute hidden p-2 space-x-1 rounded shadow-md group-hover:flex bg-white/20 ${positionClasses[position].tooltip}`}>
                {
                    colors.map((color, index)=>(
                        <div key={index} className={`${color} border-white rounded-full size-6`}></div>
                    ))
                }
                    {/* tooltip arrow */}
                    <div className={`absolute  w-0 h-0  border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/35 ${positionClasses[position].arrow}`}></div>
                </div>
            </button>

        </div>
    )
}

export default TooltipButton
