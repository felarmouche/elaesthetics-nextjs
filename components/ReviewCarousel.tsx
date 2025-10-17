import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ReviewCard from "./ReviewCard"
import type { Review } from "@/types/Review"

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  return (
    <div className="w-full flex justify-center mx-auto">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-0 shadow-none p-0 bg-background-primary p-2 border-none">
                  <CardContent className="flex justify-center min-h-[400px] p-2 rounded-none min-h-[400px]">
                    <ReviewCard review={review} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  )
}