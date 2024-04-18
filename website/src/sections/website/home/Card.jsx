import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
  

const Cards = () => {
    
  const content = [
    { 
      title: "Competent", 
      text: "We believe that being competent in our skills and abilities is essential for personal and professional growth. We encourage our members to develop their skills and talents through experiential learning, mentorship, and coaching.By providing opportunities to learn and practice new skills, we empower our members to become more self-sufficient and independent."
    }, {
      title: "Confident",
      text: "At the same time, we recognize the importance of being confident in oneself and one’s abilities. We strive to create a supportive environment where our members can feel comfortable taking risks, speaking up, and pursuing their goals with determination and resilience. By promoting confidence as a key value, we hope to inspire our members to be leaders in their communities and role models for others."
    }, {
      title: "Content",
      text: "Being content with oneself and one’s circumstances is important for achieving happiness and fulfillment. We encourage our members to cultivate a positive and grateful mindset, and to find joy in their personal relationships, the natural world, and their own unique talents and abilities. By promoting contentment we hope to inspire our members to find purpose and meaning in their lives, while also being mindful of their impact on others."
    }

  ]

  const cardContent = content.map((item, index) => {
    return(
      <div key={index} className="w-[90%] lg:w-[28%] mx-auto my-6 lg:my-0 cursor-default bg-muted-foreground" 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-easing="ease-in-sine" 
      data-aos-offset="100">
        <Card className="transition-all ease-in-out duration-500 -translate-x-2 -translate-y-2 rounded-none h-full hover:translate-x-0 hover:translate-y-0 border-spacing-2 border-black bg-primary hover:bg-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-500 text-center lg:text-left text-sm md:text-md">{item.text}</CardContent>
        </Card>
      </div>
    )
  })

  return (
    <div className="max-w-[1440px] flex justify-center w-full mx-auto">
        <div className="mx-5 lg:mx-10  py-10 lg:py-32">
          <h1 className="text-center text-2xl lg:text-3xl font-bold">What Does It Mean To Be</h1>
          <div className="grid lg:flex justify-evenly py-14">
            {cardContent}
          </div>
        </div>
    </div>
  )
}

export default Cards