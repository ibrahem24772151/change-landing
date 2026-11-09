import { defineStore } from "pinia";

// =====================================
// DEFAULT SERVICES
// =====================================

const defaultServices = [
  {
    id: 1,
    name: "webDevelober",
    des: "we ar the best in this work",
    link: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg",
  },
  {
    id: 2,
    name: "frontEnd",
    des: "we are the profishnal in this case",
    link: "https://www.rishabhsoft.com/wp-content/uploads/2017/09/case-study-web-application-testing-using-selenium.png",
  },
  {
    id: 3,
    name: "backEnd",
    des: "we are the profishnal in this case",
    link: "https://avatars.mds.yandex.net/i?id=0bbc780efc41f4c1411b9e0328de80e3e0c5b9f7-12569903-images-thumbs&n=13",
  },
];

// =====================================
// DEFAULT PORTFOLIO
// =====================================

const defaultPortfolio = [
  {
    id: 1,
    name: "Portfolio 1",
    des: "Description of portfolio 1.",
    link: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2025/7-JULY/70th-anniversary-club-coupe/2025.05.11_PCA-70th-Vehicle_L1040987.jpg/jcr:content/2025.05.11_PCA%2070th%20Vehicle_L1040987.jpg",
  },
  {
    id: 2,
    name: "Portfolio 2",
    des: "Description of portfolio 2.",
    link: "https://www.rishabhsoft.com/wp-content/uploads/2017/09/case-study-web-application-testing-using-selenium.png",
  },
  {
    id: 3,
    name: "Portfolio 3",
    des: "Description of portfolio 3.",
    link: "https://avatars.mds.yandex.net/i?id=0bbc780efc41f4c1411b9e0328de80e3e0c5b9f7-12569903-images-thumbs&n=13",
  },
];

// =====================================
// DEFAULT CONTACT
// =====================================

const defaultContact = {
  name: "Ibrahim",
  email: "example@example.com",
  phone: "+1 (234) 567-890",
  message: "Send me a message",
};

// =====================================
// STORE
// =====================================

export const landingPage = defineStore("landingPage", {
  // =====================================
  // STATE
  // =====================================

  state: () => ({
    // =====================================
    // HERO
    // =====================================

    name: "",
    age: 23,
    state: false,
    localeName: "",
    des: "",
    localdes: "",

    // =====================================
    // SERVICES
    // =====================================

    servicesState: true,

    services: defaultServices.map((service) => ({
      ...service,
    })),

    localservices: defaultServices.map((service) => ({
      ...service,
    })),

    // =====================================
    // PORTFOLIO
    // =====================================

    portfolioState: true,

    portfolio: defaultPortfolio.map((item) => ({
      ...item,
    })),

    localportfolio: defaultPortfolio.map((item) => ({
      ...item,
    })),

    // =====================================
    // CONTACT
    // =====================================

    contactState: true,

    contact: {
      ...defaultContact,
    },

    localContact: {
      ...defaultContact,
    },

    // =====================================
    // FOOTER
    // =====================================

    footer: {
      title: "My Website",
      description: "Welcome to my personal website.",
      copyright: "Created with Ibrahim © 2026",
    },

    localFooter: {
      title: "My Website",
      description: "Welcome to my personal website.",
      copyright: "Created with Ibrahim © 2026",
    },
  }),

  // =====================================
  // GETTERS
  // =====================================

  getters: {},

  // =====================================
  // ACTIONS
  // =====================================

  actions: {
    // =====================================
    // HERO
    // =====================================

    saveEedit() {
      this.localeName = this.name;
      this.localdes = this.des;
      this.state = true;

      console.log("تم حفظ بيانات Hero");
    },

    cansel() {
      this.state = false;

      console.log("تم إلغاء تعديل Hero");
    },

    // =====================================
    // SERVICES
    // =====================================

    startEditServices() {
      // نسخ البيانات المحفوظة إلى النسخة المؤقتة
      // this.localservices = this.services.map((service) => ({
      //   ...service,
      // }));

      // الدخول إلى وضع التعديل
      this.servicesState = false;
    },

    saveEeditServicses() {
      // التأكد أن جميع الحقول مكتملة
      const allComplete = this.localservices.every((service) => {
        return (
          service.name.trim() !== "" &&
          service.des.trim() !== "" &&
          service.link.trim() !== ""
        );
      });

      if (!allComplete) {
        console.log("يجب إكمال جميع حقول الخدمات");
        return;
      }

      // حفظ النسخة المؤقتة داخل النسخة الأصلية
      // this.services = this.localservices.map((service) => ({
      //   ...service,
      // }));

      // العودة إلى وضع العرض
      this.servicesState = true;

      console.log("تم حفظ تعديل الخدمات");
    },

    canselEeditServicses() {
      // إرجاع النسخة المؤقتة إلى آخر نسخة محفوظة
      this.localservices = this.services.map((service) => ({
        ...service,
      }));

      // العودة إلى وضع العرض
      this.servicesState = true;

      console.log("تم إلغاء تعديل الخدمات");
    },

    addservice() {
      const newService = {
        id: this.localservices.length + 1,
        name: "New service",
        des: "New service description",
        link: "https://placeimg.dev/400x225/1E293B?pattern=dots&icon=photo",
      };

      this.localservices.push(newService);

      // الدخول إلى وضع التعديل
      this.servicesState = false;
      console.log(this.localservices);
    },

    deleteService(id) {
      // حذف الخدمة
      this.localservices = this.localservices.filter(
        (service) => service.id !== id
      );

      // إعادة ترتيب الـ IDs
      this.localservices.forEach((service, index) => {
        service.id = index + 1;
      });

      // نبقى في وضع التعديل
      // this.servicesState = false;
      console.log(this.localservices);
    },

    // =====================================
    // PORTFOLIO
    // =====================================

    startEditPortfolio() {
      // نسخ البيانات المحفوظة إلى النسخة المؤقتة
      // this.localportfolio = this.portfolio.map((item) => ({
      //   ...item,
      // }));

      // الدخول إلى وضع التعديل
      this.portfolioState = false;
    },

    saveEditPortfolio() {
      // التأكد أن جميع الحقول مكتملة
      const allComplete = this.localportfolio.every((item) => {
        return (
          item.name.trim() !== "" &&
          item.des.trim() !== "" &&
          item.link.trim() !== ""
        );
      });

      if (!allComplete) {
        console.log("يجب إكمال جميع حقول المعرض");
        return;
      }

      // حفظ التعديلات
      // this.portfolio = this.localportfolio.map((item) => ({
      //   ...item,
      // }));

      // العودة إلى وضع العرض
      this.portfolioState = true;

      console.log("تم حفظ تعديل المعرض");
    },

    cancelEditPortfolio() {
      // إلغاء التعديلات
      this.localportfolio = this.portfolio.map((item) => ({
        ...item,
      }));

      // العودة إلى وضع العرض
      this.portfolioState = true;

      console.log("تم إلغاء تعديل المعرض");
    },

    addPortfolio() {
      const newPortfolio = {
        id: this.localportfolio.length + 1,
        name: "New Portfolio",
        des: "New Portfolio description",
        link: "https://placeimg.dev/400x225/1E293B?pattern=dots&icon=photo",
      };

      this.localportfolio.push(newPortfolio);

      // الدخول إلى وضع التعديل
      this.portfolioState = false;
    },

    deletePortfolio(id) {
      // حذف العنصر
      this.localportfolio = this.localportfolio.filter(
        (item) => item.id !== id
      );

      // إعادة ترتيب الـ IDs
      this.localportfolio.forEach((item, index) => {
        item.id = index + 1;
      });

      // نبقى في وضع التعديل
      this.portfolioState = false;
    },

    // =====================================
    // CONTACT
    // =====================================

    startEditContact() {
      this.localContact = {
        ...this.contact,
      };

      this.contactState = false;
    },

    saveEditContact() {
      if (
        this.localContact.name.trim() === "" ||
        this.localContact.email.trim() === "" ||
        this.localContact.phone.trim() === "" ||
        this.localContact.message.trim() === ""
      ) {
        console.log("يجب إكمال جميع بيانات Contact");
        return;
      }

      this.contact = {
        ...this.localContact,
      };

      this.contactState = true;

      console.log("تم حفظ Contact");
    },

    cancelEditContact() {
      this.contact = {
        ...defaultContact,
      };

      this.contactState = true;

      console.log("تم إلغاء Contact");
    },

    // =====================================
    // FOOTER
    // =====================================

    startEditFooter() {
      // نسخ البيانات المحفوظة إلى النسخة المؤقتة
      this.localFooter = {
        ...this.footer,
      };

      console.log("بدأ تعديل Footer");
    },

    saveEditFooter() {
      // حفظ البيانات
      this.footer = {
        ...this.localFooter,
      };

      console.log("تم حفظ بيانات الفوتر");
    },

    cancelEditFooter() {
      // إلغاء التعديلات
      this.localFooter = {
        ...this.footer,
      };

      console.log("تم إلغاء تعديل Footer");
    },
  },
});
