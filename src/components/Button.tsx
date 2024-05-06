import { twMerge } from "tailwind-merge"

type Props = {
    children : React.ReactNode
    size? : 'small' | 'medium' | 'large',
    classname? : string
}

export const Button = ({children, size = 'medium', classname}  : Props) => {
    const sizeClassNames = {
        //12px
        small: 'text-xs px-2 py-1',
        //14px
        medium: 'text-sm px-5 py-3',
        //17px
        large: 'text-lg px-8 py-4',
    }
return <button className={twMerge("bg-white text-textBlack rounded-full",sizeClassNames[size], classname)}>{children}</button>
}




