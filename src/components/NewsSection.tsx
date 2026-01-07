import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import news1 from "@/assets/news1.png";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3-new.jpg";
import promoPanasonic from "@/assets/promo-panasonic.png";

const newsItems = [
  {
    id: 1,
    title: "โปรส่งท้ายปี เครื่องทำน้ำอุ่น Panasonic 4500W",
    description: "เครื่องทำน้ำอุ่น Panasonic รุ่น DH-4VL1TW ราคาพิเศษเหลือเพียง 3,250 บาท (จากปกติ 3,990 บาท) รับประกัน 5 ปี",
    image: promoPanasonic,
    link: "https://www.facebook.com/share/p/1ATJihGLP9/",
  },
  {
    id: 2,
    title: "ติดตั้งแอร์ Daikin Inverter",
    description: "บริการติดตั้งแอร์ Daikin Inverter R32 ประหยัดไฟ พร้อมรับประกันงานติดตั้ง",
    image: news1,
    link: "https://www.facebook.com/share/p/1ADBtTGk9S/",
  },
  {
    id: 3,
    title: "โปรโมชั่นเครื่องทำน้ำอุ่น TURBORA",
    description: "เครื่องทำน้ำอุ่น TURBORA ราคาพิเศษเพียง 1,990 บาท พร้อมติดตั้ง",
    image: news2,
    link: "https://www.facebook.com/share/p/1DGDfuacdT/",
  },
  {
    id: 4,
    title: "สายไฟ BCC THW 2.5 SQ.MM ราคาพิเศษ",
    description: "สายไฟ BCC THW 2.5 SQ.MM (30 ม.) คุณภาพดี มาตรฐาน มอก.",
    image: news3,
    link: "https://www.facebook.com/share/p/1Buh7diU7L/",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            อัปเดตล่าสุด
          </span>
          <h2 className="text-3xl font-bold text-foreground font-kanit">
            ข่าวสารและโปรโมชั่น
          </h2>
          <p className="text-muted-foreground mt-2">ติดตามข่าวสารและโปรโมชั่นสุดพิเศษจากทางร้าน</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    ดูรายละเอียด
                  </span>
                </div>
              </div>
              <CardContent className="pt-5 pb-3">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-kanit line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-5">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <span>ดูโพสต์ Facebook</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
