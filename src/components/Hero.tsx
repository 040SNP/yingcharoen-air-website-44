import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import shop1 from "@/assets/shop1.jpg";
import shop2 from "@/assets/shop2.jpg";
import shop3 from "@/assets/shop3.jpg";
import shop4 from "@/assets/shop4.jpg";
import shop5 from "@/assets/shop5.jpg";

const shopImages = [
  { src: shop1, alt: "หน้าร้านยิ่งเจริญแอร์ - พัดลม" },
  { src: shop2, alt: "สินค้าไฟฟ้าหลากหลาย" },
  { src: shop3, alt: "เครื่องใช้ไฟฟ้าในครัว" },
  { src: shop4, alt: "อุปกรณ์เครื่องเสียง" },
  { src: shop5, alt: "อุปกรณ์ไฟฟ้าและสายไฟ" },
];

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 gradient-hero min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              ร้านยิ่งเจริญแอร์
              <span className="block text-gradient">วังชิ้น</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              จำหน่าย - ติดตั้ง - ซ่อม - ล้าง
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              บริการติดตั้งเดินสายไฟฟ้าภายใน-ภายนอก แอร์ กล้องวงจรปิด ดาวเทียม 
              เครื่องทำน้ำอุ่น และอุปกรณ์ไฟฟ้าทุกชนิด
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:0834749339">
                  <Phone className="w-5 h-5" />
                  โทร. 083-4749339
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:0959530570">
                  โทร. 095-9530570
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-sky-medium/30 rounded-2xl blur-xl"></div>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                  }),
                ]}
                className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-background/50"
              >
                <CarouselContent>
                  {shopImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-background/80 hover:bg-background" />
                <CarouselNext className="right-2 bg-background/80 hover:bg-background" />
              </Carousel>
              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-4">
                {shopImages.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
