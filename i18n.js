// Kafea Budapest - Kétnyelvű szótár (Hungarian / English)
const translations = {
  hu: {
    // Navigation
    "nav.brand": "KAFEA",
    "nav.tagline": "Kávézó & Brunch • Tűzoltó utca",
    "nav.about": "Rólunk",
    "nav.menu": "Kínálat",
    "nav.highlights": "Specialitások",
    "nav.hours": "Nyitvatartás",
    "nav.contact": "Kapcsolat",
    "nav.reserve": "Asztalfoglalás",
    "nav.openStatus": "Nyitva ma: 07:30 – 18:00",

    // Hero Section
    "hero.badge": "☀️ Budapest IX. • Tűzoltó utca 33.",
    "hero.title": "Specialty kávék és lassú reggelik a Tűzoltó utcában.",
    "hero.desc": "Kézműves brunch, dűlőszelektált specialty kávék és frissen sült kovászos péksütemények a Ferencváros szívében – a Klinikák közvetlen szomszédságában.",
    "hero.ctaMenu": "Kínálatunk megtekintése",
    "hero.ctaReserve": "Asztalfoglalás",
    "hero.badge1": "100% Arabica Specialty",
    "hero.badge2": "Egész napos brunch",
    "hero.badge3": "Kutyabarát & Terasz",

    // Quick Highlights Strip
    "strip.feature1.title": "Specialty Pörkölések",
    "strip.feature1.desc": "Világos és közepes dűlőszelektált tételek, precíz espresso és V60 filter technológia.",
    "strip.feature2.title": "Egész Napos Brunch",
    "strip.feature2.desc": "Nálunk nem maradsz le a reggeliről: tojásételek, bagelek és bowlok délután 4-ig.",
    "strip.feature3.title": "Kovászos Pékáru",
    "strip.feature3.desc": "Helyben sült vajas croissant-ok, kardamomos tekercsek és kézműves kenyerek.",
    "strip.feature4.title": "Tűzoltó Utcai Nyugalom",
    "strip.feature4.desc": "Árnyas terasz, kutyabarát vendégtér, csendes sarkok munkához vagy baráti beszélgetéshez.",

    // Menu Section
    "menu.subtitle": "ÍZLELŐBIMBÓKNAK TERVEZVE",
    "menu.title": "Brunch & Kávé Kínálat",
    "menu.desc": "Minden reggeli friss, minőségi termelői alapanyagokból készül, a kávéinkat pedig a legjobb hazai mikropörkölőktől válogatjuk.",
    "menu.tab.brunch": "🍳 All-Day Brunch",
    "menu.tab.coffee": "☕ Specialty Kávék",
    "menu.tab.bakery": "🥐 Péksütemény & Édesség",
    "menu.tab.drinks": "🥤 Frissítők & Teák",

    // Menu Items - Brunch
    "menu.item1.name": "Kafea Signature Benedict",
    "menu.item1.desc": "Vajas házi briós, 2 buggyantott szabadtartásos tojás, érlelt sonka vagy füstölt lazac, krémes sárga hollandi mártás, snidling.",
    "menu.item1.price": "3 890 Ft",
    "menu.item1.tag": "Ház Specialitása",

    "menu.item2.name": "Avocado & Zöldfűszer Toast",
    "menu.item2.desc": "Kovászos parasztkenyér, lime-os friss avokádókrém, buggyantott tojás, pirított magvak, chilipehely, mikrozöldek.",
    "menu.item2.price": "3 490 Ft",
    "menu.item2.tag": "Vegetáriánus",

    "menu.item3.name": "Ferencvárosi Shakshuka",
    "menu.item3.desc": "Klasszikus fűszeres paradicsomos-paprikás ragu, 2 lágy tojás, krémes görög feta sajt, friss kovászos kenyérrel mártogatáshoz.",
    "menu.item3.price": "3 290 Ft",
    "menu.item3.tag": "Közönségkedvenc",

    "menu.item4.name": "Citromos-Ricottás Amerikai Palacsinta",
    "menu.item4.desc": "Pihe-puha vastag palacsinták, házi erdei gyümölcsragu, juharszirup, citromos mascarponehab, pisztáciatöret.",
    "menu.item4.price": "3 190 Ft",
    "menu.item4.tag": "Édes élvezet",

    "menu.item5.name": "Truffle Scrambled Brioche",
    "menu.item5.desc": "Krémes lágy rántotta szarvasgombás vajjal, pirított vadgombákkal és parmezán forgáccsal kézműves briós ágyon.",
    "menu.item5.price": "3 690 Ft",
    "menu.item5.tag": "Újdonság",

    "menu.item6.name": "Sárga Mangó & Acai Smoothie Tál",
    "menu.item6.desc": "Krémes mangó-acai smoothie alap, házi pirított granola, chia mag, friss banán, áfonya és kókuszpehely.",
    "menu.item6.price": "2 990 Ft",
    "menu.item6.tag": "Vegán & GF",

    // Menu Items - Coffee
    "menu.coffee1.name": "Espresso / Double Shot",
    "menu.coffee1.desc": "Szezonális single origin etióp vagy kolumbiai világos pörkölés, virágos-gyümölcsös jegyekkel.",
    "menu.coffee1.price": "950 Ft / 1 150 Ft",

    "menu.coffee2.name": "Flat White",
    "menu.coffee2.desc": "Dupla ristretto selymes, mikrohabos zsíros tejjel vagy zabtejjel.",
    "menu.coffee2.price": "1 450 Ft",

    "menu.coffee3.name": "Batch Brew / V60 Kézi Filter",
    "menu.coffee3.desc": "Frissen őrölt, tisztán csöpögtetett specialty filterkávé az igazi feketekedvelőknek.",
    "menu.coffee3.price": "1 250 Ft / 1 650 Ft",

    "menu.coffee4.name": "Arany Kurkuma & Zab Latte",
    "menu.coffee4.desc": "Koffeinmentes melegítő ital bio kurkumával, gyömbérrel, fahéjjal és habosított zabtejjel.",
    "menu.coffee4.price": "1 550 Ft",

    "menu.coffee5.name": "Iced Vanilla Cold Brew",
    "menu.coffee5.desc": "18 órán át hidegen áztatott etióp kávé, madagaszkári vanília, narancshéj és jég.",
    "menu.coffee5.price": "1 590 Ft",

    // Menu Items - Bakery
    "menu.bakery1.name": "Helyben Sült Vajas Croissant",
    "menu.bakery1.desc": "Francia vajjal rétegezett, ropogós héjú, belül habkönnyű.",
    "menu.bakery1.price": "1 150 Ft",

    "menu.bakery2.name": "Kardamomos-Fahéjas Tekercs",
    "menu.bakery2.desc": "Skandináv stílusú puha kelt tészta, barna cukros fűszerezéssel.",
    "menu.bakery2.price": "1 350 Ft",

    "menu.bakery3.name": "Sárgabarackos Baszk Sajttorta",
    "menu.bakery3.desc": "Karamellizált külső, lágy és krémes belső, házi baracklekvárral.",
    "menu.bakery3.price": "1 750 Ft",

    // About Section
    "about.badge": "A KAFEA TÖRTÉNET",
    "about.title": "Egy napsütötte pont a Tűzoltó utca szívében",
    "about.p1": "A Kafea abból a vágyból született, hogy Ferencváros egyetemvárosi és orvosi negyedében hozzunk létre egy olyan találkozóhelyet, ahol senkinek sem kell sietnie. Egy kávézó, ami reggel energiát ad az egyetem vagy műszak előtt, délben pedig kényelmes menedék egy ráérős brunchra.",
    "about.p2": "A sárga és fehér színeink a reggeli napsütést, a frissességet és a jókedvet jelképezik. Nálunk az étel nem kötelező kör: a hollandi mártásunk mindig friss vajból kevert, a tojásaink szabadon kapirgáló tyúkoktól érkeznek, a kávészemek pedig etikus forrásból származnak.",
    "about.stat1.val": "100%",
    "about.stat1.label": "Specialty Arabica",
    "about.stat2.val": "08:00–16:00",
    "about.stat2.label": "All-Day Brunch",
    "about.stat3.val": "4.9 ★",
    "about.stat3.label": "Vendégértékelés",

    // Reservation Section
    "reserve.badge": "ASZTALFOGLALÁS & LÁTOGATÁS",
    "reserve.title": "Biztosítsd a helyed egy finom reggelire",
    "reserve.desc": "Hétvégén és reggeli csúcsidőben érdemes előre asztalt foglalni. Töltsd ki az alábbi űrlapot, és azonnal rögzítjük az időpontodat!",
    "reserve.form.name": "Teljes név",
    "reserve.form.email": "E-mail cím",
    "reserve.form.phone": "Telefonszám",
    "reserve.form.date": "Dátum",
    "reserve.form.time": "Idősáv",
    "reserve.form.guests": "Személyek száma",
    "reserve.form.guests.opt": "fő",
    "reserve.form.note": "Megjegyzés / Ételérzékenység (opcionális)",
    "reserve.form.submit": "Asztal lefoglalása",
    "reserve.form.success": "Köszönjük! A foglalásodat rögzítettük, hamarosan találkozunk a Kafeában!",
    "reserve.call": "Gyors kérdésed van? Hívj minket:",

    // Location & Hours
    "location.badge": "HELYSZÍN & MEGKÖZELÍTÉS",
    "location.title": "Hol találsz meg minket?",
    "location.address.title": "Címünk",
    "location.address.val": "1094 Budapest, Tűzoltó utca 33.",
    "location.address.sub": "Semmelweis Klinikák M3 metrótól 2 perc kényelmes séta",
    "location.hours.title": "Nyitvatartás",
    "location.hours.weekdays": "Hétfő – Péntek: 07:30 – 18:00",
    "location.hours.weekend": "Szombat – Vasárnap: 08:30 – 17:00",
    "location.hours.kitchen": "A melegkonyha 16:00-ig üzemel",
    "location.contact.title": "Kapcsolat",
    "location.contact.phone": "+36 1 890 4210",
    "location.contact.email": "hello@kafea.hu",
    "location.contact.insta": "@kafea.budapest",

    // Footer
    "footer.rights": "Minden jog fenntartva.",
    "footer.created": "Készítette:",
    "footer.besztweb": "Besztweb Webstúdió"
  },
  en: {
    // Navigation
    "nav.brand": "KAFEA",
    "nav.tagline": "Specialty Coffee & Brunch • Tűzoltó utca",
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.highlights": "Highlights",
    "nav.hours": "Hours",
    "nav.contact": "Contact",
    "nav.reserve": "Book a Table",
    "nav.openStatus": "Open today: 07:30 – 18:00",

    // Hero Section
    "hero.badge": "☀️ Budapest IX. • Tűzoltó str. 33.",
    "hero.title": "Specialty coffee & relaxed brunch in Tűzoltó street.",
    "hero.desc": "Artisanal brunch, single-origin specialty coffees, and freshly baked sourdough pastries in the heart of Ferencváros – right next to Semmelweis Clinics.",
    "hero.ctaMenu": "Explore Our Menu",
    "hero.ctaReserve": "Book a Table",
    "hero.badge1": "100% Arabica Specialty",
    "hero.badge2": "All-Day Brunch",
    "hero.badge3": "Dog Friendly & Terrace",

    // Quick Highlights Strip
    "strip.feature1.title": "Specialty Roasts",
    "strip.feature1.desc": "Light and medium single-origin beans, calibrated espresso and V60 filter brew.",
    "strip.feature2.title": "All-Day Brunch",
    "strip.feature2.desc": "No rush for morning bites: signature egg dishes, toasts and bowls served until 4 PM.",
    "strip.feature3.title": "Sourdough Bakery",
    "strip.feature3.desc": "Warm flaky croissants, cardamom buns and artisan breads baked locally every morning.",
    "strip.feature4.title": "Tűzoltó Street Calm",
    "strip.feature4.desc": "Shaded terrace, dog-friendly space, cozy nooks for remote work or catching up with friends.",

    // Menu Section
    "menu.subtitle": "CRAFTED FOR YOUR TASTEBUDS",
    "menu.title": "Brunch & Coffee Menu",
    "menu.desc": "Every dish is cooked with farm-fresh ingredients, paired with specialty coffees selected from top local micro-roasters.",
    "menu.tab.brunch": "🍳 All-Day Brunch",
    "menu.tab.coffee": "☕ Specialty Coffee",
    "menu.tab.bakery": "🥐 Bakery & Sweets",
    "menu.tab.drinks": "🥤 Refreshers & Teas",

    // Menu Items - Brunch
    "menu.item1.name": "Kafea Signature Benedict",
    "menu.item1.desc": "Toasted brioche, 2 free-range poached eggs, aged ham or smoked salmon, silky golden hollandaise, fresh chives.",
    "menu.item1.price": "3 890 HUF",
    "menu.item1.tag": "House Signature",

    "menu.item2.name": "Avocado & Herb Sourdough Toast",
    "menu.item2.desc": "Artisan sourdough bread, zesty avocado mash, poached egg, toasted seeds, chili flakes, organic microgreens.",
    "menu.item2.price": "3 490 HUF",
    "menu.item2.tag": "Vegetarian",

    "menu.item3.name": "Ferencváros Shakshuka",
    "menu.item3.desc": "Rich spiced tomato & bell pepper stew, 2 soft-baked eggs, creamy Greek feta cheese, served with fresh crusty bread.",
    "menu.item3.price": "3 290 HUF",
    "menu.item3.tag": "Crowd Favorite",

    "menu.item4.name": "Lemon Ricotta Fluffy Pancakes",
    "menu.item4.desc": "Fluffy souffle-style pancakes, homemade wild berry compote, pure maple syrup, whipped lemon mascarpone, pistachios.",
    "menu.item4.price": "3 190 HUF",
    "menu.item4.tag": "Sweet Treat",

    "menu.item5.name": "Truffle Scrambled Brioche",
    "menu.item5.desc": "Creamy soft scramble infused with truffle butter, sauteed wild mushrooms, shaved parmesan on artisan brioche.",
    "menu.item5.price": "3 690 HUF",
    "menu.item5.tag": "New Item",

    "menu.item6.name": "Golden Mango & Acai Smoothie Bowl",
    "menu.item6.desc": "Smooth mango-acai smoothie base, toasted coconut granola, chia seeds, fresh banana, wild blueberries, coconut flakes.",
    "menu.item6.price": "2 990 HUF",
    "menu.item6.tag": "Vegan & GF",

    // Menu Items - Coffee
    "menu.coffee1.name": "Espresso / Double Shot",
    "menu.coffee1.desc": "Seasonal Ethiopian or Colombian light roast with floral and fruity notes.",
    "menu.coffee1.price": "950 HUF / 1 150 HUF",

    "menu.coffee2.name": "Flat White",
    "menu.coffee2.desc": "Double ristretto with velvety micro-foamed whole milk or organic oat milk.",
    "menu.coffee2.price": "1 450 HUF",

    "menu.coffee3.name": "Batch Brew / V60 Pour Over",
    "menu.coffee3.desc": "Freshly ground single-origin filter coffee for pure black coffee lovers.",
    "menu.coffee3.price": "1 250 HUF / 1 650 HUF",

    "menu.coffee4.name": "Golden Turmeric Oat Latte",
    "menu.coffee4.desc": "Caffeine-free soothing blend with organic turmeric, ginger, cinnamon, and steamed oat milk.",
    "menu.coffee4.price": "1 550 HUF",

    "menu.coffee5.name": "Iced Vanilla Cold Brew",
    "menu.coffee5.desc": "18-hour slow-steeped Ethiopian cold brew, Madagascar vanilla, orange peel over ice.",
    "menu.coffee5.price": "1 590 HUF",

    // Menu Items - Bakery
    "menu.bakery1.name": "Fresh Butter Croissant",
    "menu.bakery1.desc": "Flaky layered pastry made with French butter, crisp on the outside, airy within.",
    "menu.bakery1.price": "1 150 HUF",

    "menu.bakery2.name": "Cardamom & Cinnamon Bun",
    "menu.bakery2.desc": "Nordic-style twisted sweet bun with cardamom and brown sugar glaze.",
    "menu.bakery2.price": "1 350 HUF",

    "menu.bakery3.name": "Apricot Basque Burnt Cheesecake",
    "menu.bakery3.desc": "Caramelized crust with an ultra-creamy custard center and homemade apricot jam.",
    "menu.bakery3.price": "1 750 HUF",

    // About Section
    "about.badge": "THE KAFEA STORY",
    "about.title": "A sunlit haven in vibrant Tűzoltó street",
    "about.p1": "Kafea was born from a simple desire: to create an unhurried sanctuary in the university and medical district of Ferencváros. A neighborhood café that charges your mornings before class or shifts, and welcomes you for a slow, soul-warming brunch in the afternoon.",
    "about.p2": "Our bright yellow and clean white palette reflects morning sunshine, warmth, and genuine optimism. We believe good food is honest: our hollandaise is whisked fresh from real butter, our eggs come from local pasture farms, and our coffee beans are directly traded.",
    "about.stat1.val": "100%",
    "about.stat1.label": "Specialty Arabica",
    "about.stat2.val": "08:00–16:00",
    "about.stat2.label": "All-Day Brunch",
    "about.stat3.val": "4.9 ★",
    "about.stat3.label": "Customer Rating",

    // Reservation Section
    "reserve.badge": "TABLE RESERVATION",
    "reserve.title": "Reserve your spot for delicious brunch",
    "reserve.desc": "We recommend booking ahead for weekends and peak breakfast hours. Fill out the form below to secure your table instantly!",
    "reserve.form.name": "Full Name",
    "reserve.form.email": "Email Address",
    "reserve.form.phone": "Phone Number",
    "reserve.form.date": "Date",
    "reserve.form.time": "Time Slot",
    "reserve.form.guests": "Number of Guests",
    "reserve.form.guests.opt": "people",
    "reserve.form.note": "Notes / Allergies (optional)",
    "reserve.form.submit": "Confirm Reservation",
    "reserve.form.success": "Thank you! Your table has been reserved. See you soon at Kafea!",
    "reserve.call": "Quick question? Give us a call:",

    // Location & Hours
    "location.badge": "LOCATION & DIRECTIONS",
    "location.title": "Where to find us",
    "location.address.title": "Address",
    "location.address.val": "1094 Budapest, Tűzoltó utca 33.",
    "location.address.sub": "2 minutes walk from Semmelweis Klinikák M3 Metro Station",
    "location.hours.title": "Opening Hours",
    "location.hours.weekdays": "Monday – Friday: 07:30 – 18:00",
    "location.hours.weekend": "Saturday – Sunday: 08:30 – 17:00",
    "location.hours.kitchen": "Hot kitchen closes at 16:00",
    "location.contact.title": "Contact",
    "location.contact.phone": "+36 1 890 4210",
    "location.contact.email": "hello@kafea.hu",
    "location.contact.insta": "@kafea.budapest",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.created": "Designed & Built by:",
    "footer.besztweb": "Besztweb Studio"
  }
};

window.KafeaI18n = {
  currentLang: 'hu',
  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('kafea_lang', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update active lang button UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },
  init() {
    const saved = localStorage.getItem('kafea_lang') || 'hu';
    this.setLanguage(saved);
  }
};
