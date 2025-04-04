import React from 'react'
import {Element} from "react-scroll";
import clsx from "clsx";

const Pricing = () => {

    const[isMonthly, setIsMonthly] = React.useState(false);

    return (
      <section>
        <Element name="pricing">
          <div className="container">
            <div className="max-w-960 border-2 border-red-500">
              <h3
                className="h3 max-lg:h4 max-md:h5 z-3
    relative  mx-auto mb-14/"
              >
                {" "}
                Flexible Pricing for teams of all sizes
              </h3>
              <div>
                <button className={clsx("pricing-head_btn", isMonthly && 'text-p4')} onClick={()=>setIsMonthly(true)}>Monthly</button>
                <button className={clsx("pricing-head_btn", !isMonthly && 'text-p4')} onClick={()=>setIsMonthly(false)}>Annual</button>
              </div>
            </div>
          </div>
        </Element>
      </section>
    );
}
export default Pricing
