import React from 'react'
import Section from "./Section"
function Home() {
    return (
        <div>
             <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                bgImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             
             />
              <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                bgImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             
             />
              <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                bgImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             
             />
             <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                bgImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             
             />
        </div>
    )
}

export default Home
