import React from "react";
import Nav from "./nav";
import Footer from "./footer";

type PropType = {
    children: React.ReactNode
}

const PageLayout = (props: PropType) => {
    return (
        <div className="px-20 pt-5 max-w-[1600px] mx-auto">
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageLayout;