import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import productAir from "@/assets/product-air.jpg";
import productCctv from "@/assets/product-cctv.jpg";
import productSatellite from "@/assets/product-satellite.jpg";
import productWaterHeater from "@/assets/product-water-heater.jpg";
import productElectrical from "@/assets/product-electrical.jpg";

const products = [
  {
    id: 1,
    title: "แอร์",
    description: "จำหน่ายและติดตั้งแอร์ทุกยี่ห้อ รับประกันคุณภาพ",
    image: productAir,
    details: {
      name: "Mitsubishi Heavy Duty – SRK13YLV-S (Inverter)",
      specs: [
        { label: "ประเภท", value: "แอร์ติดผนัง (Inverter) – ระบบทำความเย็นเพียงอย่างเดียว (cooling only)" },
        { label: "ขนาดทำความเย็น", value: "~3.5 kW หรือประมาณ 13,000 BTU/hr เหมาะกับห้องขนาด ~12–16 ตร.ม." },
        { label: "พลังไฟฟ้า", value: "ใช้ไฟ 1 Phase 220–240V, 50Hz / กำลังไฟขณะทำงานประมาณ 0.98 kW" },
        { label: "สารทำความเย็น", value: "R410A (มาตรฐานทั่วไปของแอร์อินเวอร์เตอร์)" },
      ],
      dimensions: [
        { label: "ชุดภายใน (Indoor)", value: "~268 × 790 × 213 mm (สูง×กว้าง×ลึก) / น้ำหนัก ~9.5 kg" },
        { label: "ชุดภายนอก (Outdoor)", value: "~595 × 780(+62) × 290 mm / น้ำหนัก ~32 kg" },
      ],
      performance: [
        { label: "EER (Cooling Efficiency)", value: "~3.57 (ค่าประสิทธิภาพการทำงาน)" },
        { label: "ระดับเสียงภายนอก", value: "ประมาณ 62 dB(A)" },
      ],
      features: [
        "ตั้งเวลาทำงาน Timer On/Off",
        "Auto-Restart เมื่อไฟดับ ระบบจะกลับมาทำงานตามเดิมเมื่อติดไฟใหม่",
        "ควบคุมผ่านรีโมทไร้สาย (ปุ่มเรืองแสงสว่าง)",
        "โหมด Sleep / Night Mode ช่วยควบคุมอุณหภูมิช่วงนอนหลับ",
      ],
    },
  },
  {
    id: 2,
    title: "กล้องวงจรปิด",
    description: "ติดตั้งกล้องวงจรปิด CCTV ดูผ่านมือถือได้",
    image: productCctv,
    details: {
      name: "กล้องวงจรปิด Hi-view",
      models: [
        {
          name: "HW-33MPT302-4G",
          specs: [
            "ความละเอียด 3 ล้านพิกเซล",
            "รองรับการเชื่อมต่อ 4G และ Wi-Fi",
            "Mini Speed Dome (PT) หมุนได้ 355 องศา ก้มเงยได้ 90 องศา",
            "Night Colors (บันทึกภาพสี 24 ชั่วโมง) และแจ้งเตือนความเคลื่อนไหว",
            "มีไมโครโฟนและลำโพงในตัว รองรับการสื่อสารสองทาง",
          ],
        },
        {
          name: "Hiview HA-754B20M",
          specs: [
            "ความละเอียด 2 ล้านพิกเซล (1920x1080P)",
            "กล้อง 4 in 1 รองรับ AHD/TVI/CVI/CVBS",
            "มีไมโครโฟนในตัว บันทึกภาพพร้อมเสียง ระยะเสียง 7 เมตร",
            "อินฟราเรดระยะ 20 เมตร",
            "กันน้ำและฝุ่นมาตรฐาน IP66",
          ],
        },
        {
          name: "Hiview Night Colors",
          specs: [
            "ความละเอียด 2 ล้านพิกเซล",
            "รองรับ 4 ระบบในตัวเดียว (AHD / TVI / CVI / CVBS)",
            "ใช้ไฟ Warm Light 3000K/3500K และ Smart IR เพื่อให้ภาพสีในที่มืด",
            "เหมาะสำหรับติดตั้งภายนอกอาคาร",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "ดาวเทียม",
    description: "ติดตั้งจานดาวเทียม รับชมช่องรายการมากมาย",
    image: productSatellite,
    details: {
      name: "จานดาวเทียม PSI OK",
      description: "จานดาวเทียมขนาดเล็ก (Offset) ระบบ KU-Band ยอดนิยมของ PSI มีหน้าจานขนาด 60 ซม. และ 35 ซม. (OKD)",
      highlights: [
        "ขนาดเล็ก กะทัดรัด ประหยัดพื้นที่ ติดตั้งง่าย",
        "รับสัญญาณดี ให้ภาพคมชัดในระบบ KU-Band",
        "ใช้ได้กับกล่องรับสัญญาณดาวเทียมทุกรุ่น (PSI, IPM, GMMZ, Sunbox, etc.)",
        "รับชมฟรีทีวีไทยได้ครบถ้วน เช่น ช่อง 3, 5, 7, 9, NBT, TPBS",
        "มีหัว LNB ให้เลือก: OK-1 (1 ขั้ว), OK-2 (2 ขั้ว), OK-4 (4 ขั้ว) เพื่อเพิ่มจุดรับชม",
      ],
    },
  },
  {
    id: 4,
    title: "เครื่องทำน้ำอุ่น",
    description: "จำหน่ายและติดตั้งเครื่องทำน้ำอุ่นทุกรุ่น",
    image: productWaterHeater,
    details: {
      name: "Turbora รุ่น P-4500E",
      specs: [
        { label: "กำลังไฟ", value: "4,500 วัตต์" },
        { label: "ถังน้ำร้อน", value: "ทำจากวัสดุทนทาน ไม่เป็นสนิม" },
        { label: "ระบบตัดไฟอัตโนมัติ", value: "ELCB ป้องกันกระแสไฟรั่ว" },
        { label: "มาตรฐาน", value: "มอก. 1693-2547 และประหยัดไฟเบอร์ 5 ระดับ 5 ดาว" },
      ],
      features: [
        "ป้องกันไฟกระชาก",
        "ระบบความปลอดภัย 9 ระดับ",
      ],
    },
  },
  {
    id: 5,
    title: "อุปกรณ์ไฟฟ้า",
    description: "จำหน่ายอุปกรณ์ไฟฟ้าครบวงจร",
    image: productElectrical,
    details: {
      name: "CHANG รุ่น U-6 ขนาด 6 ช่อง",
      description: "ตู้ควบคุมไฟฟ้าพร้อมติดตั้งที่มาพร้อมเมนเบรกเกอร์กันดูด (RCBO) 1 ตัว และลูกเซอร์กิตอีก 5 ตัว (รวมเป็น 6 ช่อง)",
      specs: [
        { label: "ยี่ห้อ", value: "CHANG (ช้าง)" },
        { label: "รุ่น", value: "U-6 (6 ช่อง)" },
        { label: "อุปกรณ์ในชุด", value: "ตู้ + เมนกันดูด (RCBO) + ลูกย่อย 5 ตัว (รวม 6 ช่องใช้งาน)" },
        { label: "ขนาดลูกย่อย", value: "16A (1 ตัว), 20A (3 ตัว), 32A (2 ตัว)" },
      ],
      features: [
        "ตัวกล่องเป็นเหล็กทนทาน",
        "ฝาหน้าสลับได้",
        "คุณภาพดี ได้มาตรฐาน",
      ],
    },
  },
];

const ProductDetailDialog = ({ product }: { product: typeof products[0] }) => {
  const { details } = product;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          ดูรายละเอียด
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl text-primary">
            {details.name || product.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Image */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          {'description' in details && details.description && (
            <p className="text-muted-foreground">{details.description}</p>
          )}

          {/* Specs */}
          {'specs' in details && Array.isArray(details.specs) && details.specs.length > 0 && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                📋 ข้อมูลทางเทคนิค
              </h4>
              <div className="space-y-2">
                {details.specs.map((spec: any, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-border last:border-0">
                    <span className="font-medium text-primary min-w-[140px]">{spec.label}:</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dimensions */}
          {'dimensions' in details && details.dimensions && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                📐 ขนาดและน้ำหนัก
              </h4>
              <div className="space-y-2">
                {details.dimensions.map((dim: any, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-border last:border-0">
                    <span className="font-medium text-primary min-w-[140px]">{dim.label}:</span>
                    <span className="text-muted-foreground">{dim.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance */}
          {'performance' in details && details.performance && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                🌬️ ประสิทธิภาพและเสียง
              </h4>
              <div className="space-y-2">
                {details.performance.map((perf: any, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:gap-2 py-2 border-b border-border last:border-0">
                    <span className="font-medium text-primary min-w-[140px]">{perf.label}:</span>
                    <span className="text-muted-foreground">{perf.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {'features' in details && details.features && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                ✨ ฟังก์ชันและคุณสมบัติ
              </h4>
              <ul className="space-y-2">
                {details.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {'highlights' in details && details.highlights && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                ⭐ จุดเด่น
              </h4>
              <ul className="space-y-2">
                {details.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CCTV Models */}
          {'models' in details && details.models && (
            <div className="space-y-4">
              {details.models.map((model: any, modelIndex: number) => (
                <div key={modelIndex} className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3">{model.name}</h4>
                  <ul className="space-y-1">
                    {model.specs.map((spec: string, specIndex: number) => (
                      <li key={specIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="products" className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          ตัวอย่างสินค้า
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-8">
            {visibleProducts.map((product) => (
              <Card 
                key={product.id} 
                className="border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
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
                  <ProductDetailDialog product={product} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
