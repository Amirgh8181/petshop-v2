"use client"
import { useLocale } from 'next-intl';
import { AiOutlineGlobal } from 'react-icons/ai';

const LanguageChanger = () => {
    const local = useLocale()

    const options = [
        { optionName: "select language", optionKey: "foo" },
        { optionName: "فارسی", optionKey: "fa" },
        { optionName: "english", optionKey: "en" },
    ];

    const changeLang = (arg: string) => {
        if (arg !== "foo" && arg !== local) {
            document.cookie = `NEXT_LOCALE=${arg}; path=/; max-age=31536000; SameSite=lax`
            window.location.reload()
        }
    };
    return (
        <div className="dropdown dropdown-end">
            <button tabIndex={0} role='button' className="navbarBtn">
                <AiOutlineGlobal className='navIconSize' />
            </button>
            <ul className="dropdown-content menu shadow bg-base-300 rounded-btn text-center space-y-1 mt-2">
                {options.map((option, index) => (
                    <li
                        key={option.optionKey}
                    >
                        <button
                            onClick={() => changeLang(option.optionKey)}
                            className={
                                `${index === 0 ? "btn-disabled" : option.optionKey !== local ? "hover:bg-petBlue/40 hover:text-gray-100 cursor-pointer"
                                    : option.optionKey === local && "bg-petBlue/70 hover:bg-petBlue transition-colors duration-300 text-white cursor-default disabled"} 
                                rounded-btn p-2 hocTextSize2 text-nowrap`}

                        >
                            {option.optionName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageChanger;



















// "use client"
// import * as React from 'react';
// import { AiOutlineGlobal } from "react-icons/ai";
// import { useLocale } from 'next-intl';
// import { useRouter } from 'next/navigation';




// export default function LanguageChanger() {
//
//     const router = useRouter();

//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const open = Boolean(anchorEl);

//     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = (arg:string) => {
//         document.cookie=`NEXT_LOCALE=${arg}; path=/; max-age=31536000; SameSite=lax`
//         setAnchorEl(null);
//         router.refresh()
//     };


//     return (
//         <div>
//             <IconButton
//                 aria-label="more"
//                 id="long-button"
//                 aria-controls={open ? 'long-menu' : undefined}
//                 aria-expanded={open ? 'true' : undefined}
//                 aria-haspopup="true"
//                 onClick={handleClick}
//                 className='text-white md:text-pouyamYellow'
//             >
//                 <AiOutlineGlobal />
//             </IconButton>
//             <Menu
//                 id="long-menu"
//                 MenuListProps={{
//                     'aria-labelledby': 'long-button',
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//             >
//                 {options.map((option,index) => (
//                     <MenuItem disabled={index===0} key={option.optionKey} selected={option.optionKey === local} onClick={()=>handleClose(option.optionKey)}>
//                         {option.optionName}
//                     </MenuItem>
//                 ))}
//             </Menu>
//         </div>
//     );
// }



















// // 'use client';

// // import { useLocale } from "next-intl";
// // import { usePathname, useRouter } from "next/navigation";


// // export default function LanguageChanger() {
// //     const router = useRouter();
// //     const pathname = usePathname();
// //


// //     return (
// //         // <select value={local} onChange={handleChange}>
// //         //     <option value="en">English</option>
// //         //     <option value="fa">فارسی</option>
// //         // </select>
// //         <></>
// //     );
// // }