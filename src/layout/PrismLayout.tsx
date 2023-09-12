import { Prism } from "@/components";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren{}

const Layout = (props:Props) => {
    const {children} = props;
    

    return(
        <div className="w-screen h-screen">
            <div className="absolute top-0 left-0 w-screen h-screen">
                <Prism/>
            </div>
            <div className="absolute top-0 left-0 w-screen h-screen">
                {children}
            </div>
        </div>
    )
}

export default Layout;