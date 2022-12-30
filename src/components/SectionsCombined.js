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
            backgroundImg="sasha-set-GURzQwO8Li0-unsplash.jpg"
            leftBtnText="Order Now"
            rightBtnText="Existing Inventory"
        />

        <Section
            title="Aerial Lidar"
            tag="Lidar Services"
            description="Order Now"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section
            title="GIS"
            tag="Data Generation & Visualization"
            description="Order Now"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section
            title="Basemaps"
            tag="Mapping For Pre & Post Basecamps"
            description="Order Now"
            leftBtnText="Inquiry Now"
            rightBtnText="Learn More"
        />

        <Section

        />

    </Container>
  )
}

export default SectionsCombined
