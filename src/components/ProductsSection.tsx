import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import productAir from "@/assets/product-air.jpg";
import productCctv from "@/assets/product-cctv.jpg";
import productSatellite from "@/assets/product-satellite.jpg";
import productWaterHeater from "@/assets/product-water-heater.jpg";
import productElectrical from "@/assets/product-electrical.jpg";

const products = [
  {
    id: 1,
    slug: "air-conditioner",
    title: "แอร์",
    description: "จำหน่ายและติดตั้งแอร์ทุกยี่ห้อ รับประกันคุณภาพ",
    image: productAir,
  },
  {
    id: 2,
    slug: "cctv",
    title: "กล้องวงจรปิด",
    description: "ติดตั้งกล้องวงจรปิด CCTV ดูผ่านมือถือได้",
    image: productCctv,
  },
  {
    id: 3,
    slug: "satellite",
    title: "ดาวเทียม",
    description: "ติดตั้งจานดาวเทียม รับชมช่องรายการมากมาย",
    image: productSatellite,
  },
  {
    id: 4,
    slug: "water-heater",
    title: "เครื่องทำน้ำอุ่น",
    description: "จำหน่ายและติดตั้งเครื่องทำน้ำอุ่นทุกรุ่น",
    image: productWaterHeater,
  },
  {
    id: 5,
    slug: "electrical",
    title: "อุปกรณ์ไฟฟ้า",
    description: "จำหน่ายอุปกรณ์ไฟฟ้าครบวงจร",
    image: productElectrical,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          ตัวอย่างสินค้า
        </h2>

        <div className="relative px-12">
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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
                    <CardHeader className="p-0">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center pt-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Link to={`/product/${product.slug}`}>
                        <Button variant="outline" size="sm">
                          ดูรายละเอียด
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
