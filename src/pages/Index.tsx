import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: 'PartyPopper',
      title: 'Корпоративные мероприятия',
      description: 'Организация и проведение корпоративов любого масштаба'
    },
    {
      icon: 'Cake',
      title: 'Детские праздники',
      description: 'Незабываемые дни рождения для детей всех возрастов'
    },
    {
      icon: 'Heart',
      title: 'Свадьбы и юбилеи',
      description: 'Элегантное ведение торжественных событий'
    },
    {
      icon: 'Music',
      title: 'Концерты и шоу',
      description: 'Профессиональное ведение музыкальных мероприятий'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/files/1aa7dd7b-8c2d-4160-9e97-c2c2ca1a28dc.jpg',
      title: 'Ведущая на мероприятии',
      type: 'Корпоратив'
    },
    {
      image: 'https://cdn.poehali.dev/files/86fc0a4a-7ace-4b01-b8c2-6b9f713d3593.jpg',
      title: 'Масленица',
      type: 'Народное гуляние'
    },
    {
      image: 'https://cdn.poehali.dev/files/96e355a9-c02b-4a1e-b306-48329c19ed0a.jpg',
      title: 'Детский праздник',
      type: 'День рождения'
    },
    {
      image: 'https://cdn.poehali.dev/files/29d668c9-7ef7-4ea2-ba21-bf903f2c528d.jpg',
      title: 'Корпоративный праздник',
      type: 'Корпоратив'
    },
    {
      image: 'https://cdn.poehali.dev/files/03e1d49c-9058-4047-bf31-2120f5eade10.jpg',
      title: 'Свадебное торжество',
      type: 'Свадьба'
    },
    {
      image: 'https://cdn.poehali.dev/files/f515c412-a6bd-4186-a6be-3279c34b7f65.jpg',
      title: 'Корпоративный тимбилдинг',
      type: 'Корпоратив'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Смирнова',
      company: 'ООО "ТехноПром"',
      text: 'Профессионализм на высшем уровне! Наш корпоратив прошёл великолепно, гости были в восторге.'
    },
    {
      name: 'Михаил Петров',
      company: 'Частное лицо',
      text: 'День рождения дочери стал незабываемым праздником благодаря вашему таланту и креативности!'
    },
    {
      name: 'Анна Васильева',
      company: 'Event Agency',
      text: '30 лет опыта чувствуются в каждой детали. Рекомендую как лучшего ведущего в городе!'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Ведущая праздников</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                Обо мне
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold mb-4">
                30 лет опыта
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создаю яркие<br />
                <span className="text-primary">незабываемые</span><br />
                праздники
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная ведущая с многолетним опытом сделает ваше мероприятие особенным и запоминающимся
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg">
                  Заказать мероприятие
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://cdn.poehali.dev/files/e8ebccd1-e666-4e59-90e4-69258ae6c18e.jpg"
                alt="Ведущая праздников"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-muted-foreground">мероприятий</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За 30 лет работы я провела сотни мероприятий — от камерных семейных праздников до масштабных корпоративных событий. 
              Моя экспертность позволяет создавать уникальную атмосферу на каждом празднике, учитывая все пожелания клиентов.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я знаю, как сделать так, чтобы каждый гость чувствовал себя особенным, а виновник торжества был в центре внимания. 
              Профессионализм, креативность и искренняя любовь к своему делу — вот что отличает мою работу.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Профессиональное ведение любых мероприятий</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Фото и видео с моих мероприятий</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer animate-fade-in">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <div className="text-sm font-semibold mb-1">{item.type}</div>
                          <div className="text-lg font-bold">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img src={item.image} alt={item.title} className="w-full rounded-lg" />
                  <div className="mt-4">
                    <div className="text-sm text-primary font-semibold mb-1">{item.type}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят мои клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover-scale">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь со мной, чтобы обсудить ваше мероприятие
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <div className="text-muted-foreground">+7 (922) 662-58-19</div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">host@example.com</div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" className="text-accent" size={24} />
                  </div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="text-lg">
              <Icon name="Send" className="mr-2" size={20} />
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Ведущая праздников. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;