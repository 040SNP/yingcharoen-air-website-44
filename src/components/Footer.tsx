import { MapPin, Phone, Clock, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">ลิงค์ด่วน</h3>
            <div className="rounded-lg overflow-hidden h-48 bg-muted/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4!2d99.6047167!3d17.9012177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d93426e8a42317%3A0xf7739390ab23981a!2z4Lij4LmJ4Liy4LiZ4Lii4Li04LmI4LiH4LmA4LiI4Lij4Li04LiN4LmE4Lif4Lif4LmJ4LiyJuC5geC4reC4o-C5jCDguYDguIvguK3guKPguYzguKfguLTguKo!5e0!3m2!1sth!2sth!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ที่ตั้งร้าน"
              />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                101 ตำบลวังชิ้น อำเภอวังชิ้น
              </p>
              <p className="text-muted-foreground">จังหวัดแพร่ 54160</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">ติดต่อ:</p>
                    <p className="text-primary-foreground/80">ร้านยิ่งเจริญไฟฟ้า&แอร์ เซอร์วิส</p>
                    <p className="text-primary-foreground/80">101 ต.วังชิ้น อ.วังชิ้น จ.แพร่ 54160</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">เบอร์โทร:</p>
                    <a href="tel:0834749339" className="text-primary hover:underline block">
                      083-474-9339
                    </a>
                  </div>
                </div>
              </div>

              {/* Social & Hours */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Facebook className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Facebook:</p>
                    <a 
                      href="https://www.facebook.com/search/top?q=%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A2%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C%20%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      อาร์ท ยิ่งเจริญแอร์
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Line:</p>
                    <a 
                      href="https://line.me/R/ti/p/~0959530570"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      0959530570
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">เวลาทำการ:</p>
                    <p className="text-primary-foreground/80">8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 ร้านยิ่งเจริญไฟฟ้า-แอร์ & เซอร์วิส. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
