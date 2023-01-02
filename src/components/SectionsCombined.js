import React from 'react'
import Section from './Section'
import { Container } from 'semantic-ui-react'

function SectionsCombined() {
  return (
    <Container>

        <Section
            title="ASI"
            tag="Aerial Acquistions"
            description="Order Now"
            backgroundImg="https://images.unsplash.com/photo-1535979415128-363ec7898371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            leftBtnText="Order Now"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Aerial Lidar"
            h1Color="227C70"
            pColor="88A47C"
            tag="Lidar Services"
            description="Order Now"
            backgroundImg="https://images.unsplash.com/photo-1612187907335-b08cbe40edd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section
            title="GIS"
            tag="Data Generation & Visualization"
            description="Order Now"
            backgroundImg="https://images.unsplash.com/photo-1504697570352-47c3bbc09af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section
            title="Basemaps"
            tag="Mapping For Pre & Post Basecamps"
            description="Order Now"
            backgroundImg="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section
            title="About"
            tag="Aerial Services, Inc. is a Veteran-owned small business specializing in providing accurate, high-quality aerial surveys for a multitude of applications. (Including Lidar, Orthoimagery, Obliques, Photogrammetric Mapping, and web hosting services to planning and engineering firms, city, state, and federal governments)"
            description="About Us"
            backgroundImg="https://i.pinimg.com/originals/04/65/8e/04658e1a724c1830587bf1e33930a339.gif"
            leftBtnText="Markets"
            rightBtnText="Careers"
        />

    </Container>
  )
}

export default SectionsCombined
