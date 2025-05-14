// import React from 'react'

// const Button = ({title , id , rightIcon , leftIcon, containerClass}) => {
//   return (
//     <button id= {id} className={`group relativ z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50
//     px-7 py-3 text-black  ${containerClass} `}>
// {leftIcon}
// <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
//     {title}
// </span>
// {rightIcon}
//     </button>
//   )
// }

// export default Button


import React from 'react'

const Button = ({title , id , rightIcon , leftIcon, containerClass}) => {
  return (
 
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50
      px-7 py-3 text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md
      before:absolute before:inset-0 before:z-[-1] before:scale-0 before:rounded-full before:bg-[#edff66] before:transition-transform before:duration-300 before:origin-center hover:before:scale-100 ${containerClass}`}>
      
{leftIcon}
<span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
    {title}
</span>
{rightIcon}
    </button>
  )
}

export default Button




