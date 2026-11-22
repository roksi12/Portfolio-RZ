/* ==========================================================================
   Page translation EN → PL (every page)
   English stays in the HTML (default, for search engines and no-JS visitors).
   When the language switch fires "langchange", texts, image descriptions,
   aria-labels, the page title and the meta description are swapped using the
   dictionary below. Keys are the English texts exactly as on the page
   (spaces collapsed); add a line here when you add or change a text.
   Every Polish text must be unique and must not equal a different English
   key – the reverse lookup (PL → EN) relies on it when switching back.
   Load this file BEFORE main.js.
   ========================================================================== */
(function () {
  'use strict';

  var PL = {
    /* ---------- Shared: header, footer, page titles ---------- */
    'Skip to content': 'Przejdź do treści',
    'Menu': 'Menu',
    'Close menu': 'Zamknij menu',
    'Home': 'Start',
    'Projects': 'Projekty',
    'About': 'O mnie',
    'Connect': 'Kontakt',
    'Copy e-mail': 'Kopiuj e-mail',
    'Copied!': 'Skopiowano!',
    'E-mail address copied': 'Adres e-mail skopiowany',
    'Could not copy. The address is': 'Nie udało się skopiować. Adres to',
    'Roksana Żytkowska – home': 'Roksana Żytkowska – strona główna',
    'Main': 'Główna',
    'Social media': 'Media społecznościowe',
    'Breadcrumb': 'Ścieżka nawigacji',
    'Case study sections': 'Sekcje case study',
    'Next Case Study': 'Następne case study',
    '(opens in a new tab)': '(otwiera się w nowej karcie)',

    'Roksana Żytkowska – Graphic Designer & UX/UI Designer': 'Roksana Żytkowska – projektantka graficzna i UX/UI',
    'Portfolio of Roksana Żytkowska – an engineer who became a UX/UI designer and graphic designer, creating user experiences and brand identities.':
      'Portfolio Roksany Żytkowskiej – inżynierki, która została projektantką UX/UI i graficzką. Projektuje doświadczenia użytkowników i identyfikacje marek.',
    'Waste Collection Schedule App – case study · Roksana Żytkowska': 'Aplikacja Harmonogram wywozu odpadów – case study · Roksana Żytkowska',
    'UX/UI case study: redesign of a mobile app that gives residents quick access to waste collection schedules in their local area.':
      'Case study UX/UI: redesign aplikacji mobilnej, która daje mieszkańcom szybki dostęp do harmonogramu wywozu odpadów w ich okolicy.',
    'SensoŁapki – Klub Malucha – case study · Roksana Żytkowska': 'SensoŁapki – Klub Malucha – case study · Roksana Żytkowska',
    'Visual identity case study: a warm, joyful brand for SensoŁapki, a sensory toddler club that supports children’s development through sensory play.':
      'Case study identyfikacji wizualnej: ciepła, radosna marka dla SensoŁapek, sensorycznego klubu malucha, który wspiera rozwój dzieci przez zabawę sensoryczną.',

    /* ---------- Homepage ---------- */
    'Graphic Designer & UX/UI Designer': 'Projektantka graficzna i UX/UI',
    'Introduction': 'Wprowadzenie',
    'An engineer who became a UX/UI designer and graphic designer, specializing in creating user experiences and building brand identities.':
      'Inżynierka, która została projektantką UX/UI i graficzką. Specjalizuję się w projektowaniu doświadczeń użytkowników i budowaniu identyfikacji marek.',
    'I enjoy creating intuitive solutions': 'Lubię tworzyć intuicyjne rozwiązania,',
    'that effectively': 'które skutecznie',
    'blend technology with aesthetics!': 'łączą technologię z estetyką!',
    'Discover my work': 'Zobacz moje projekty',

    'Skills': 'Umiejętności',
    'UI Design': 'Projektowanie UI',
    'UX Design': 'Projektowanie UX',
    'Social Media': 'Social Media',   // kept in English (as used in Polish); "Social media" is another key (footer label)
    'Visual Identity': 'Identyfikacje wizualne',
    'Userflows': 'User flow',
    'Accessibility': 'Dostępność',
    'Prototyping': 'Prototypowanie',
    'Usability testing': 'Testy użyteczności',
    'Wireframing': 'Makiety funkcjonalne',
    'Graphic Design': 'Projektowanie graficzne',

    'Filter projects by category': 'Filtruj projekty według kategorii',
    'All': 'Wszystkie',
    'Mobile app to diagnose problem with houseplants': 'Aplikacja mobilna do diagnozowania problemów z roślinami doniczkowymi',
    'Go to case study': 'Zobacz case study',
    'Waste Collection Schedule': 'Harmonogram wywozu odpadów',
    'A mobile application that gives residents quick access to waste collection schedules in their local area.':
      'Aplikacja mobilna, która daje mieszkańcom szybki dostęp do harmonogramu wywozu odpadów w ich okolicy.',
    'Three phone screens of the Waste Collection Schedule app: the schedule list, the main menu and notifications':
      'Trzy ekrany aplikacji Harmonogram wywozu odpadów: lista terminów, menu główne i powiadomienia',
    'SensoŁapki Klub Malucha': 'SensoŁapki Klub Malucha',
    'Visual identity for a sensory toddler club that supports children\'s development through sensory activities.':
      'Identyfikacja wizualna sensorycznego klubu malucha, który wspiera rozwój dzieci przez zajęcia sensoryczne.',
    'The SensoŁapki Klub Malucha logo in a white cloud next to a smiling toddler':
      'Logo SensoŁapki Klub Malucha w białej chmurce obok uśmiechniętej dziewczynki',

    'Let’s connect!': 'Porozmawiajmy!',
    '...and have some cheesecake together (I love it!)': '...i zjedzmy razem sernik (uwielbiam go!)',
    'Send me a message': 'Napisz do mnie',

    /* ---------- Case studies: shared ---------- */
    'Overview': 'O projekcie',
    'Tools': 'Narzędzia',
    'Problem': 'Problem',
    'Prototype': 'Prototyp',

    /* ---------- Case study: Waste Collection Schedule ---------- */
    'Discovery': 'Odkrywanie',
    'Define': 'Definiowanie',
    'Ideate': 'Pomysły',
    'Mobile app': 'Aplikacja mobilna',
    'Waste Collection Schedule App': 'Aplikacja Harmonogram wywozu odpadów',
    'A mobile application that gives residents quick access to waste collection schedules in their local area. The redesign focused on bringing clarity to a dense calendar, making it easy to scan upcoming pickups at a glance.':
      'Aplikacja mobilna, która daje mieszkańcom szybki dostęp do harmonogramu wywozu odpadów w ich okolicy. Redesign skupił się na uporządkowaniu gęstego kalendarza, tak żeby najbliższe odbiory dało się ogarnąć jednym spojrzeniem.',
    'Go to prototype': 'Przejdź do prototypu',
    'My contribution': 'Mój wkład',
    'User research': 'Badania z użytkownikami',
    'Product design': 'Projektowanie produktu',
    'Time': 'Czas',
    '2 weeks': '2 tygodnie',
    'The unintuitive interface and technical glitches of the legacy application caused user frustration, effectively discouraging them from regularly checking the waste collection schedule.':
      'Nieintuicyjny interfejs i błędy techniczne starej aplikacji frustrowały użytkowników i skutecznie zniechęcały ich do regularnego sprawdzania harmonogramu wywozu odpadów.',
    'Background': 'Kontekst',
    'The city’s municipal waste management system involves multiple waste categories, each with its own collection cycle. Schedules vary across districts and even down to specific individual addresses. Previously, residents had to manually save PDFs, check printed timetables on local bulletin boards, or call the city office directly.':
      'Miejski system gospodarki odpadami obejmuje wiele frakcji, a każda ma własny cykl odbioru. Harmonogramy różnią się między dzielnicami, a nawet między konkretnymi adresami. Wcześniej mieszkańcy musieli sami zapisywać pliki PDF, sprawdzać wydrukowane harmonogramy na tablicach ogłoszeń albo dzwonić do urzędu.',
    'Furthermore, the legacy app discouraged user adoption due to a lack of push notifications for upcoming collections, combined with an inconsistent and impractical UI/UX design. The redesign brief was to preserve the underlying data structure while completely overhauling the surrounding user experience and introducing essential features.':
      'Do tego stara aplikacja zniechęcała do korzystania z niej: nie miała powiadomień push o zbliżających się odbiorach, a jej UI/UX był niespójny i niepraktyczny. Brief zakładał zachowanie istniejącej struktury danych, przy całkowitej przebudowie doświadczenia użytkownika i dodaniu kluczowych funkcji.',
    'Redesigned screens: main menu with large tiles, the schedule list for one address, and pickup reminders in notifications':
      'Nowe ekrany: menu główne z dużymi kafelkami, lista terminów dla jednego adresu i przypomnienia o odbiorze w powiadomieniach',
    'Redesigned screens: adding a photo to a problem report, waste sorting tips in Education, and the list of waste drop-off points (PSZOK) with opening hours':
      'Nowe ekrany: dodawanie zdjęcia do zgłoszenia problemu, wskazówki segregacji w zakładce Edukacja i lista punktów PSZOK z godzinami otwarcia',
    'Research': 'Badania',
    'I analysed three Polish municipal waste apps (Moje Odpady, Kiedy Śmieci and Eco Harmonogram). All of them present the schedule as a scrollable list, not a calendar. The key insight: residents don’t want a calendar. They want to know what to put out tonight.':
      'Przeanalizowałam trzy polskie aplikacje odpadowe (Moje Odpady, Kiedy Śmieci i Eco Harmonogram). Wszystkie pokazują harmonogram jako przewijaną listę, a nie kalendarz. Najważniejszy wniosek: mieszkańcy nie potrzebują kalendarza. Chcą wiedzieć, co dziś wieczorem wystawić przed dom.',
    'Opportunities': 'Szanse',
    'Surface the next pickups front and centre, use colour coding that matches the physical bins, and send a push notification the day before pickup. The app should answer “is it tonight?” in two taps or less and meet WCAG standards.':
      'Pokazać najbliższe odbiory na pierwszym planie, oznaczać frakcje kolorami takimi jak na pojemnikach i wysyłać powiadomienie push dzień przed odbiorem. Aplikacja ma odpowiadać na pytanie „czy to dziś?” w maksymalnie dwóch kliknięciach i spełniać standardy WCAG.',
    'Ideation': 'Ideacja',
    'I sketched the schedule, news, notifications, “Report a problem” and “Education” screens, then developed them into hi-fi wireframes.':
      'Naszkicowałam ekrany harmonogramu, aktualności, powiadomień, „Zgłoś problem” i „Edukacji”, a potem rozwinęłam je w makiety hi-fi.',
    'Hand-drawn sketches of the four “Report a problem” steps: description, location, photo and contact details':
      'Odręczne szkice czterech kroków „Zgłoś problem”: opis, lokalizacja, zdjęcie i dane kontaktowe',
    'Hi-fi wireframes of the “Report a problem” flow: ten screens covering the description, location, photos, contact details, the thank-you message and the exit confirmation':
      'Makiety hi-fi procesu „Zgłoś problem”: dziesięć ekranów z opisem, lokalizacją, zdjęciami, danymi kontaktowymi, podziękowaniem i potwierdzeniem wyjścia',
    'UI & Branding': 'UI i branding',
    'I explored several app icon directions and built a colour palette based on the waste categories, with accessibility as a key consideration.':
      'Sprawdziłam kilka kierunków dla ikon aplikacji i zbudowałam paletę kolorów opartą na frakcjach odpadów, z dostępnością jako kluczowym kryterium.',
    'Menu tiles in shades of green and navy with line icons: pickup schedule, news, your PSZOK, education, contact, notifications and report a problem':
      'Kafelki menu w odcieniach zieleni i granatu z ikonami liniowymi: harmonogram odbioru, aktualności, twój PSZOK, edukacja, kontakt, powiadomienia i zgłoś problem',
    'Validation': 'Walidacja',
    'I ran an A/B test comparing a monthly calendar view with a chronological list of upcoming pickups. The list won: on mobile it left room for large, readable labels with full category names, while the calendar showed too many empty days. The list became the default schedule view.':
      'Przeprowadziłam test A/B, porównując widok miesięcznego kalendarza z chronologiczną listą najbliższych odbiorów. Wygrała lista: na telefonie zostawiała miejsce na duże, czytelne etykiety z pełnymi nazwami frakcji, a kalendarz pokazywał za dużo pustych dni. Lista została domyślnym widokiem harmonogramu.',
    'A/B test variants side by side: a monthly calendar with small waste icons, and the chronological list of upcoming pickups with full category names and colour badges':
      'Warianty testu A/B obok siebie: miesięczny kalendarz z małymi ikonami odpadów i chronologiczna lista najbliższych odbiorów z pełnymi nazwami frakcji i kolorowymi oznaczeniami',
    'Explore the interactive prototype in Figma.': 'Zobacz interaktywny prototyp w Figmie.',
    'Go to Figma': 'Otwórz w Figmie',
    'Two phones with the redesigned app: the main menu and the pickup schedule':
      'Dwa telefony z nową wersją aplikacji: menu główne i harmonogram odbioru',
    'Three phone screens of the redesigned app: the schedule list with colour-coded waste categories, the main menu and the notifications list':
      'Trzy ekrany nowej wersji aplikacji: lista terminów z frakcjami oznaczonymi kolorami, menu główne i lista powiadomień',

    /* ---------- Case study: SensoŁapki ---------- */
    'Brief': 'Brief',
    'Concept': 'Koncepcja',
    'Identity': 'Identyfikacja',
    'Applications': 'Zastosowania',
    'Visual identity': 'Identyfikacja wizualna',
    'A warm, joyful visual identity for SensoŁapki, a sensory toddler club that supports children’s development through sensory play.':
      'Ciepła, radosna identyfikacja wizualna dla SensoŁapek, sensorycznego klubu malucha, który wspiera rozwój dzieci przez zabawę sensoryczną.',
    'Go to applications': 'Zobacz zastosowania',
    'Role': 'Rola',
    'Visual identity & logo design': 'Identyfikacja wizualna i projekt logo',
    'SensoŁapki needed an identity that communicates care, safety and joy, centred on sensory activities, and is instantly readable to a parent looking for a toddler club. It had to feel warm and friendly, never clinical, stay playful, read clearly at any size and work in full colour and in one colour.':
      'SensoŁapki potrzebowały identyfikacji, która komunikuje troskę, bezpieczeństwo i radość, stawia w centrum zajęcia sensoryczne i od razu trafia do rodzica szukającego klubu dla malucha. Miała być ciepła i przyjazna, nigdy kliniczna, zabawna, czytelna w każdym rozmiarze i działać zarówno w pełnym kolorze, jak i w jednym.',
    'The name joins “senso” (the senses) with “łapki” (little hands), so the hand became the heart of the mark. A small palm holding a heart signals care and the hands-on nature of every activity.':
      'Nazwa łączy „senso” (zmysły) z „łapkami” (małymi rączkami), więc dłoń stała się sercem znaku. Mała dłoń z sercem w środku mówi o trosce i o tym, że każde zajęcia to praca rączkami.',
    'Logo': 'Logo',
    'The primary logo and signet in full colour, plus variants for navy, cream and white backgrounds.':
      'Główne logo i sygnet w pełnym kolorze oraz wersje na granatowe, kremowe i białe tło.',
    'Colour & Typography': 'Kolor i typografia',
    'A joyful, high-energy palette (sky blue, sunny yellow, orange, pink and cream) anchored by a trustworthy navy. It’s bright enough for children and calm enough for parents. Quicksand, a soft rounded display font, carries the brand voice. Lato handles body text for legibility at small sizes.':
      'Radosna, pełna energii paleta (błękit, słoneczny żółty, pomarańcz, róż i krem) zakotwiczona w budzącym zaufanie granacie. Jest wystarczająco jasna dla dzieci i wystarczająco spokojna dla rodziców. Głos marki niesie Quicksand, miękki, zaokrąglony krój nagłówkowy. Lato odpowiada za tekst, bo jest czytelny także w małych rozmiarach.',
    'Brand Elements': 'Elementy marki',
    'The supporting kit: the palm-and-heart symbol, a cloud-shaped container and playful illustrations that extend the brand.':
      'Zestaw uzupełniający: symbol dłoni z sercem, ramka w kształcie chmurki i zabawne ilustracje, które rozwijają markę.',
    'The identity across the materials the club uses every day: window graphics, banners, flyers, bookmarks and stickers.':
      'Identyfikacja na materiałach, z których klub korzysta na co dzień: grafikach na witrynach, banerach, ulotkach, zakładkach i naklejkach.',
    'The SensoŁapki logo in a white cloud next to a smiling toddler resting her chin on her hands':
      'Logo SensoŁapek w białej chmurce obok uśmiechniętej dziewczynki, która opiera brodę na dłoniach',
    'The signet: a white palm with an orange heart inside a navy rounded shape, on a cream pattern of hands, hearts, clouds and animal faces':
      'Sygnet: biała dłoń z pomarańczowym sercem w granatowym, zaokrąglonym kształcie, na kremowym wzorze z dłoni, serc, chmurek i zwierzęcych pyszczków',
    'The full-colour logo on its construction grid, and one-colour versions in navy on white, navy on cream and white on navy':
      'Kolorowe logo na siatce konstrukcyjnej oraz wersje jednobarwne: granat na bieli, granat na kremie i biel na granacie',
    'Six crayons labelled with the palette: navy #1C5E92, sky blue #1878F0, sunny yellow #F0C048, orange #F07830, pink #FF7890 and cream #FAF1E8, next to a board presenting Quicksand for headers and Lato for text':
      'Sześć kredek opisanych kolorami palety: granat #1C5E92, błękit #1878F0, słoneczny żółty #F0C048, pomarańcz #F07830, róż #FF7890 i krem #FAF1E8, obok tablicy z krojami Quicksand do nagłówków i Lato do tekstu',
    'Brand elements: the palm-and-heart signet, a photo of a toddler framed in a cloud shape, and colourful illustrations of hands, hearts, rainbows and animal faces':
      'Elementy marki: sygnet z dłonią i sercem, zdjęcie malucha w ramce w kształcie chmurki i kolorowe ilustracje dłoni, serc, tęcz i zwierzęcych pyszczków',
    'A wide banner with opening hours, fees and contact details, and a large “Otwarcie sierpień 2025” opening banner on the fence outside the building':
      'Szeroki baner z godzinami otwarcia, opłatami i kontaktem oraz duży baner „Otwarcie sierpień 2025” na ogrodzeniu przed budynkiem',
    'Frosted window graphics with a cloud border, the logo and illustrations on the club’s side entrance, with opening hours on the door':
      'Mleczne grafiki na szybach z chmurkowym brzegiem, logo i ilustracjami przy bocznym wejściu do klubu, z godzinami otwarcia na drzwiach',
    'Window graphics on the main sliding doors, with an illustrated monkey pointing to the entrance':
      'Grafiki na głównych drzwiach przesuwnych z ilustrowaną małpką, która wskazuje wejście',
    'Two flyers: one announcing the new club opening in August 2025 with free tuition, the other listing the activities on offer':
      'Dwie ulotki: jedna zapowiada otwarcie klubu w sierpniu 2025 z bezpłatnym czesnym, druga wymienia oferowane zajęcia'
  };

  /* ---------- Case study: Selectibles (+ homepage card) ---------- */
  Object.assign(PL, {
    'Selectibles – case study · Roksana Żytkowska': 'Selectibles – case study · Roksana Żytkowska',
    'Visual identity case study: Selectibles, an auction house for artefacts that exist only in fairy tales – logo, seal of authenticity, product page and social media.':
      'Case study identyfikacji wizualnej: Selectibles, dom aukcyjny artefaktów, które istnieją tylko w baśniach – logo, pieczęć autentyczności, strona produktu i social media.',
    'A visual identity for an auction house selling artefacts that exist only in fairy tales.':
      'Identyfikacja wizualna domu aukcyjnego, który sprzedaje artefakty istniejące tylko w baśniach.',
    'The Selectibles seal of authenticity embossed in bordeaux paper':
      'Pieczęć autentyczności Selectibles wytłoczona w bordowym papierze',
    'Audience': 'Odbiorcy',
    'Product Page': 'Strona produktu',
    'Selectibles is an auction house for objects that shouldn’t exist. Every item in the collection is one of a kind, comes with a certificate of authenticity and is presented with the gravity of a true relic. The concept: a museum of curiosities in the form of an auction house, where the serious presentation contrasts with the absurdity of the object.':
      'Selectibles to dom aukcyjny przedmiotów, które nie powinny istnieć. Każdy obiekt w kolekcji jest jedyny w swoim rodzaju, ma certyfikat autentyczności i jest prezentowany z powagą prawdziwej relikwii. Koncepcja: gabinet osobliwości w formie domu aukcyjnego, w którym poważna prezentacja kontrastuje z absurdem przedmiotu.',
    'Go to product page': 'Przejdź do strony produktu',
    'Scope': 'Zakres',
    'Branding, landing page, social media': 'Branding, landing page, social media',
    'Date': 'Data',
    'July 2026': 'Lipiec 2026',
    'AI': 'AI',
    'AI generated': 'Wygenerowane przez AI',
    'The Selectibles seal of authenticity embossed in bordeaux paper: a diamond and stars inside an oval with the inscription “Selectibles · Authenticitas est origo” and “Capillus Rapunzelae No. 0001”':
      'Pieczęć autentyczności Selectibles wytłoczona w bordowym papierze: diament i gwiazdy w owalu z napisami „Selectibles · Authenticitas est origo” i „Capillus Rapunzelae No. 0001”',
    'Audience & Tone': 'Odbiorcy i ton',
    'The brand speaks to collectors and fans of pop culture and fairy tales, people who buy with a wink, but with class. The tone is serious and exclusive, using the language of provenance and numbered editions.':
      'Marka mówi do kolekcjonerów oraz fanów popkultury i baśni – ludzi, którzy kupują z przymrużeniem oka, ale z klasą. Ton jest poważny i ekskluzywny, posługuje się językiem proweniencji i numerowanych edycji.',
    'The serif typeface underlines the gravity of an auction house. The diamond above the letter “i” refers to the uniqueness of every item in the collection. The signet also works on its own.':
      'Szeryfowy krój podkreśla powagę domu aukcyjnego. Diament nad literą „i” nawiązuje do unikatowości każdego przedmiotu w kolekcji. Sygnet działa też samodzielnie.',
    'The Selectibles logotype in bordeaux serif letters with a diamond signet above the “i”, next to the signet on its own: a diamond and two stars inside an oval':
      'Logotyp Selectibles z bordowych szeryfowych liter z sygnetem w kształcie diamentu nad „i”, obok samodzielny sygnet: diament i dwie gwiazdy w owalu',
    'The logo on four backgrounds: bordeaux on cream, cream on bordeaux, black on white and white on black':
      'Logo na czterech tłach: bordo na kremie, krem na bordo, czerń na bieli i biel na czerni',
    'Clear Space': 'Pole ochronne',
    'The minimum clear space around the logo equals the height of the letter S.':
      'Minimalne pole ochronne wokół logo równa się wysokości litery S.',
    'The logo with pink squares in the corners marking the clear space, each the height of the letter S':
      'Logo z różowymi kwadratami w narożnikach, które wyznaczają pole ochronne o wysokości litery S',
    'Bordeaux and cream form the core palette, with gold and rose as accents. Headlines are set in Bellefair, an elegant serif that matches the logo. Body text uses Lato for clean legibility.':
      'Bordo i krem tworzą główną paletę, a złoto i róż są akcentami. Nagłówki są złożone krojem Bellefair, eleganckim szeryfem dopasowanym do logo. Tekst główny używa Lato, który zapewnia czytelność.',
    'Primary colours bordeaux #3F0F24 and cream #E4DBD2, secondary colours gold #8D6B1A and rose #E3BDCF, and the typefaces Bellefair for headers and Lato for body text':
      'Kolory podstawowe bordo #3F0F24 i krem #E4DBD2, uzupełniające złoto #8D6B1A i róż #E3BDCF oraz kroje Bellefair do nagłówków i Lato do tekstu',
    'Seal of Authenticity': 'Pieczęć autentyczności',
    'A diamond and star seal appears on certificates and packaging as a recognisable mark of quality across the whole collection. The surrounding inscription combines the brand name with the item’s Latin name, and each piece carries its own unique edition number.':
      'Pieczęć z diamentem i gwiazdami pojawia się na certyfikatach i opakowaniach jako rozpoznawalny znak jakości całej kolekcji. Napis wokół łączy nazwę marki z łacińską nazwą przedmiotu, a każdy egzemplarz ma własny, unikatowy numer edycji.',
    'The seal of authenticity in bordeaux on cream and in gold on bordeaux, with the inscription “Selectibles · Authenticitas est origo” and “Capillus Rapunzelae No. 0001”':
      'Pieczęć autentyczności w bordo na kremie i w złocie na bordo, z napisami „Selectibles · Authenticitas est origo” i „Capillus Rapunzelae No. 0001”',
    'A mobile product page for Rapunzel’s Hair (Strand No. 0001). It is built like an auction catalogue entry: a unique-item badge, Latin name, price, a verified-authenticity block, provenance and product details.':
      'Mobilna strona produktu dla Włosa Roszpunki (Strand No. 0001). Jest zbudowana jak wpis w katalogu aukcyjnym: oznaczenie unikatu, łacińska nazwa, cena, blok potwierdzonej autentyczności, pochodzenie i szczegóły produktu.',
    'Four mobile screens of the product page for Rapunzel’s Hair: the product photo with a unique-item badge, the price with an add-to-cart button and the verified-authenticity block, the provenance and the product details':
      'Cztery ekrany mobilnej strony produktu Włos Roszpunki: zdjęcie produktu z oznaczeniem unikatu, cena z przyciskiem dodania do koszyka i blokiem potwierdzonej autentyczności, pochodzenie i szczegóły produktu',
    'Instagram posts that carry the auction-house tone into social media: product reveals, the brand tagline and packaging content.':
      'Posty na Instagram, które przenoszą ton domu aukcyjnego do social mediów: prezentacje produktów, hasło marki i treści o opakowaniach.',
    'Three Instagram posts: Rapunzel’s hair in a glass dome, the tagline “Artefakty, które istnieją tylko w Baśniach i w naszej kolekcji”, and a bordeaux gift box with the seal':
      'Trzy posty na Instagram: włos Roszpunki pod szklaną kopułą, hasło „Artefakty, które istnieją tylko w Baśniach i w naszej kolekcji” i bordowe pudełko z pieczęcią',
    'SensoŁapki': 'SensoŁapki'
  });

  /* ---------- Case study: Plantify ---------- */
  Object.assign(PL, {
    'Plantify – case study · Roksana Żytkowska': 'Plantify – case study · Roksana Żytkowska',
    'UX/UI case study: Plantify, a mobile app that helps people diagnose plant problems, remember about care and keep their plants healthy – from research to tested wireframes.':
      'Case study UX/UI: Plantify, aplikacja mobilna, która pomaga diagnozować problemy roślin, pamiętać o pielęgnacji i dbać o ich zdrowie – od badań po przetestowane makiety.',
    'Wireframes': 'Makiety',
    'A mobile app that helps people diagnose plant problems, remember about care and learn how to keep their plants healthy.':
      'Aplikacja mobilna, która pomaga diagnozować problemy roślin, pamiętać o pielęgnacji i uczyć się, jak utrzymać rośliny w zdrowiu.',
    'Go to wireframes': 'Przejdź do makiet',
    'My role': 'Moja rola',
    'UX/UI design': 'Projektowanie UX/UI',
    'Status': 'Status',
    'In progress. Final UI coming soon.': 'W trakcie. Finalne UI już wkrótce.',
    'Three wireframe screens of Plantify: the home screen with today’s care tasks, plant identification and the care calendar':
      'Trzy ekrany makiet Plantify: ekran główny z dzisiejszymi zadaniami pielęgnacji, rozpoznawanie rośliny i kalendarz pielęgnacji',
    'Three wireframe screens of the Plantify app: today’s care tasks, plant identification and the care calendar':
      'Trzy ekrany makiet aplikacji Plantify: dzisiejsze zadania pielęgnacji, rozpoznawanie rośliny i kalendarz pielęgnacji',
    'The Challenge': 'Wyzwanie',
    'Plant owners struggle to find out what’s wrong with their plants. Information online is scattered and contradictory, the same symptoms can have different causes, and people often lose motivation or simply forget about care. As a result, plants get thrown away instead of saved.':
      'Właściciele roślin mają problem z ustaleniem, co dolega ich roślinom. Informacje w internecie są rozproszone i sprzeczne, te same objawy mogą mieć różne przyczyny, a ludzie często tracą motywację albo po prostu zapominają o pielęgnacji. W efekcie rośliny lądują w koszu zamiast zostać uratowane.',
    'I ran user interviews with participants aged 16–62, from small flats to houses, in cities and villages, including people with disabilities. I wanted to understand how people care for their plants, where they look for help and what frustrates them when something goes wrong.':
      'Przeprowadziłam wywiady z uczestnikami w wieku 16–62 lat, od małych mieszkań po domy, w miastach i na wsiach, także z osobami z niepełnosprawnościami. Chciałam zrozumieć, jak ludzie dbają o rośliny, gdzie szukają pomocy i co ich frustruje, kiedy coś idzie nie tak.',
    'Empathy maps for Ursula, Chester and Mary, each split into says, thinks, does and feels':
      'Mapy empatii dla Urszuli, Chestera i Mary, każda podzielona na: mówi, myśli, robi i czuje',
    'Key Insights': 'Najważniejsze wnioski',
    'People don’t trust what they find, because the same symptom can mean overwatering, light or pests. Pet owners need to know whether a plant and its treatment are safe for animals. Beginners lose motivation quickly and forget to water. Less tech-savvy users want simple language and real people to ask.':
      'Ludzie nie ufają temu, co znajdują, bo ten sam objaw może oznaczać przelanie, złe światło albo szkodniki. Właściciele zwierząt muszą wiedzieć, czy roślina i jej leczenie są bezpieczne dla pupili. Początkujący szybko tracą motywację i zapominają o podlewaniu. Osoby mniej obeznane z technologią chcą prostego języka i prawdziwych ludzi, których można zapytać.',
    'Personas': 'Persony',
    'Three personas represent the main user groups: Ursula, an experienced owner of exotic plants and two cats; Chester, a busy student who forgets to water; and Mary, a skilled gardener who isn’t tech-savvy.':
      'Trzy persony reprezentują główne grupy użytkowników: Urszulę, doświadczoną właścicielkę egzotycznych roślin i dwóch kotów; Chestera, zapracowanego studenta, który zapomina o podlewaniu; oraz Mary, utalentowaną ogrodniczkę, która nie czuje się pewnie w technologii.',
    'Three persona cards – Ursula Hill, 32, English teacher; Chester Space, 25, student; Mary Forest, 56, cleaner – each with a quote, a short bio, goals and frustrations':
      'Trzy karty person – Ursula Hill, 32 lata, nauczycielka angielskiego; Chester Space, 25 lat, student; Mary Forest, 56 lat, sprzątaczka – każda z cytatem, krótkim opisem, celami i frustracjami',
    'Defining the Problem': 'Definiowanie problemu',
    'For each persona I defined a problem and a hypothesis. If users like Ursula get verified information and a guided way to match symptoms with causes, they will diagnose problems more accurately. If busy users like Chester get timely reminders, they will care for plants more consistently. If the experience stays simple, users like Mary will gradually build their skills.':
      'Dla każdej persony zdefiniowałam problem i hipotezę. Jeśli osoby takie jak Urszula dostaną sprawdzone informacje i prowadzony sposób dopasowania objawów do przyczyn, będą trafniej diagnozować problemy. Jeśli zapracowani użytkownicy jak Chester dostaną przypomnienia na czas, będą dbać o rośliny bardziej regularnie. Jeśli doświadczenie pozostanie proste, osoby takie jak Mary będą stopniowo rozwijać swoje umiejętności.',
    'Problem statements and hypothesis statements for Ursula, Chester and Mary':
      'Opisy problemów i hipotezy dla Urszuli, Chestera i Mary',
    'User Journey': 'Ścieżka użytkownika',
    'Mapping Ursula’s journey of saving a plant with yellow leaves showed where the experience breaks: she feels sceptical when verifying a diagnosis and careful about her cats’ safety. This led to ideas like a clear confidence score, a visual healthy-vs-unhealthy comparison and a “pet-safe” badge on treatments.':
      'Mapa ścieżki Urszuli, która ratuje roślinę z żółtymi liśćmi, pokazała, gdzie doświadczenie się sypie: przy weryfikacji diagnozy Urszula jest sceptyczna i ostrożna co do bezpieczeństwa swoich kotów. Stąd pomysły na czytelny wskaźnik pewności, wizualne porównanie zdrowego i chorego liścia oraz oznaczenie „bezpieczne dla zwierząt” przy metodach leczenia.',
    'User journey map for Ursula Hill: four actions from taking a picture of the plant to taking action, with her feelings and improvement opportunities for each step':
      'Mapa ścieżki użytkownika Ursuli Hill: cztery działania, od zrobienia zdjęcia rośliny po działanie, z jej odczuciami i możliwościami usprawnień na każdym kroku',
    'Information Architecture & User Flows': 'Architektura informacji i przepływy użytkownika',
    'I structured the app around five main areas in the navigation bar: Diagnose, My Plants, Care Calendar, Community and Learn. Then I mapped two key flows: diagnosing a sick plant and adding a new plant with a care reminder.':
      'Zbudowałam aplikację wokół pięciu głównych obszarów w pasku nawigacji: Diagnoza, Moje rośliny, Kalendarz pielęgnacji, Społeczność i Nauka. Potem rozpisałam dwa kluczowe przepływy: diagnozowanie chorej rośliny i dodawanie nowej rośliny z przypomnieniem o pielęgnacji.',
    'Sitemaps of the homepage, the dashboard and the navigation bar':
      'Mapy strony: ekran główny, pulpit i pasek nawigacji',
    'Two user flows: diagnosing a sick plant with the camera, and adding a new plant with a care reminder in the calendar':
      'Dwa przepływy użytkownika: diagnozowanie chorej rośliny aparatem i dodawanie nowej rośliny z przypomnieniem w kalendarzu',
    'Storyboards & Sketches': 'Storyboardy i szkice',
    'Storyboards helped me picture the app in real situations. Then I sketched several versions of the key screens on paper before moving to digital wireframes.':
      'Storyboardy pomogły mi wyobrazić sobie aplikację w prawdziwych sytuacjach. Potem naszkicowałam na papierze kilka wersji kluczowych ekranów, zanim przeszłam do cyfrowych makiet.',
    'Hand-drawn big-picture storyboard in six frames: Chester forgets to water his plant, sets a reminder in the app, waters it and is happy the plant is no longer dry':
      'Odręczny storyboard w sześciu kadrach: Chester zapomina podlać roślinę, ustawia przypomnienie w aplikacji, podlewa ją i cieszy się, że roślina nie jest już przesuszona',
    'Paper sketches of several versions of the home screen, the care calendar and the treatment screens':
      'Papierowe szkice kilku wersji ekranu głównego, kalendarza pielęgnacji i ekranów leczenia',
    'In the digital wireframes I designed three main flows: diagnosing a plant with up to three photos, identifying an unknown plant, and adding a plant to a room in My Plants, plus the care calendar.':
      'W cyfrowych makietach zaprojektowałam trzy główne przepływy: diagnozowanie rośliny na podstawie maksymalnie trzech zdjęć, rozpoznawanie nieznanej rośliny i dodawanie rośliny do pokoju w Moich roślinach, a do tego kalendarz pielęgnacji.',
    'Wireframes of the home screen, the diagnose flow with photos, the diagnosis and treatment plan, the care calendar and My Plants':
      'Makiety ekranu głównego, procesu diagnozy ze zdjęciami, diagnozy i planu leczenia, kalendarza pielęgnacji i Moich roślin',
    'Wireframes of identifying an unknown plant and adding a plant to a room in My Plants':
      'Makiety rozpoznawania nieznanej rośliny i dodawania rośliny do pokoju w Moich roślinach',
    'Usability Testing': 'Testy użyteczności z użytkownikami',
    'I tested the wireframes with 6 participants on four tasks: checking a sick plant, adding a care plan to the calendar, adding a new plant and checking a plant in a shop.':
      'Przetestowałam makiety z 6 uczestnikami na czterech zadaniach: sprawdzenie chorej rośliny, dodanie planu pielęgnacji do kalendarza, dodanie nowej rośliny i sprawdzenie rośliny w sklepie.',
    'Four usability test tasks on sticky notes: check what is wrong with your plant, add a treatment plan to the calendar, add a new plant to My Plants, check a plant you found in a shop':
      'Cztery zadania testowe na karteczkach: sprawdź, co dolega roślinie, dodaj plan leczenia do kalendarza, dodaj nową roślinę do Moich roślin, sprawdź roślinę znalezioną w sklepie',
    'Affinity Mapping': 'Mapowanie podobieństw',
    'I wrote every observation on a sticky note and grouped them into nine themes. For each theme I made a decision and gave it a priority: Now, Later or To check.':
      'Każdą obserwację zapisałam na karteczce i pogrupowałam je w dziewięć tematów. Dla każdego tematu podjęłam decyzję i nadałam priorytet: Teraz, Później albo Do sprawdzenia.',
    'Affinity map of colour-coded sticky notes (problem, works, a single note, decision) grouped into themes such as adding a plant, calendar and reminders, treatment plan and indicators':
      'Mapa podobieństw z kolorowymi karteczkami (problem, działa, pojedyncza uwaga, decyzja) pogrupowanymi w tematy, np. dodawanie rośliny, kalendarz i przypomnienia, plan leczenia i wskaźniki',
    'Close-up of the “Diagnose and Identify names” theme: participant notes and the decision to rename both options and add short descriptions':
      'Zbliżenie tematu „Nazwy Diagnose i Identify”: notatki uczestników i decyzja o zmianie nazw obu opcji i dodaniu krótkich opisów',
    'Key Findings & Decisions': 'Najważniejsze wnioski i decyzje',
    'The biggest problems were naming and visibility. Users didn’t know the difference between “Diagnose” and “Identify”, missed the button for adding a plant and confused the plant’s condition with the diagnosis confidence. Taking three photos and the Identify flow worked well.':
      'Największe problemy dotyczyły nazewnictwa i widoczności. Użytkownicy nie rozumieli różnicy między „Diagnose” a „Identify”, nie zauważali przycisku dodawania rośliny i mylili stan rośliny z pewnością diagnozy. Robienie trzech zdjęć i proces rozpoznawania (Identify) sprawdziły się dobrze.',
    'Table of seven findings with the participants who reported them and the decisions, for example renaming “Diagnose” and “Identify” and making the add-plant button visible at the top':
      'Tabela siedmiu wniosków z uczestnikami, którzy je zgłosili, i podjętymi decyzjami, np. zmianą nazw „Diagnose” i „Identify” oraz widocznym przyciskiem dodawania rośliny na górze',
    'Next Iteration': 'Następna iteracja',
    'Some ideas need more evidence before I build them. Three participants asked for a plant history, so a plant journal with dated photos is the first feature after the fixes. Postponing watering is planned for later. Whether Community belongs in the navigation bar still needs another round of testing.':
      'Niektóre pomysły wymagają więcej dowodów, zanim je zbuduję. Trzech uczestników prosiło o historię rośliny, więc dziennik rośliny ze zdjęciami opatrzonymi datą to pierwsza funkcja po poprawkach. Odkładanie podlewania jest zaplanowane na później. To, czy Społeczność powinna być w pasku nawigacji, wymaga jeszcze jednej rundy testów.'
  });

  /* ---------- About page (about.html) ----------
     Texts split by <mark> highlights are separate keys, so each piece must read
     well in Polish on its own position in the sentence. */
  Object.assign(PL, {
    'About me – Roksana Żytkowska': 'O mnie – Roksana Żytkowska',
    'About Roksana Żytkowska – a graphic designer and UX/UI designer with a background in programming: her story, the tools she uses and what she loves outside of design.':
      'O Roksanie Żytkowskiej – projektantce graficznej i UX/UI z doświadczeniem w programowaniu: jej historia, narzędzia, których używa, i to, co kocha poza projektowaniem.',

    /* Hero */
    'Hi, I\'m Roksana': 'Hej, jestem Roksana',
    'I\'m a': 'Jestem',
    'graphic designer and UX/UI Designer': 'projektantką graficzną i UX/UI',
    'with a background in': 'z doświadczeniem w',
    'programming': 'programowaniu',
    'Roksana smiling, holding a cup of coffee outside a café': 'Uśmiechnięta Roksana z kubkiem kawy przed kawiarnią',
    'My passions': 'Moje pasje',
    'Singing': 'Śpiew',
    'Photography': 'Fotografia',
    'Traveling': 'Podróżowanie',
    'Baking': 'Pieczenie',
    'Painting': 'Malowanie',
    'Mountains': 'Góry',
    'Good coffee': 'Dobra kawa',
    'Guitar': 'Gitara',
    'Singing – see photos': 'Śpiew – zobacz zdjęcia',
    'Photography – see photos': 'Fotografia – zobacz zdjęcia',
    'Traveling – see photos': 'Podróżowanie – zobacz zdjęcia',
    'Baking – see photos': 'Pieczenie – zobacz zdjęcia',
    'Painting – see photos': 'Malowanie – zobacz zdjęcia',
    'Mountains – see photos': 'Góry – zobacz zdjęcia',
    'Coffee – see all photos': 'Kawa – zobacz wszystkie zdjęcia',
    'Guitar – see photos': 'Gitara – zobacz zdjęcia',

    /* My story */
    'My story': 'Moja historia',
    'Pixels before words': 'Najpierw były piksele',
    'Since I was a child, I\'ve loved': 'Od dziecka uwielbiałam',
    'drawing and retouching photos': 'rysować i retuszować zdjęcia',
    'in graphic-design software.': 'w programach graficznych.',
    'Where design met code': 'Tam, gdzie design spotkał kod',
    'Later I went to a high school with a': 'Potem poszłam do liceum o profilu',
    'graphic-design and IT track': 'grafika i informatyka',
    ', where I learned how to design simple websites and create 3D graphic elements.':
      ', gdzie nauczyłam się projektować proste strony internetowe i tworzyć elementy grafiki 3D.',
    'Falling in love with UX/UI': 'Zakochana w UX/UI',
    'During my engineering studies, I discovered my passion for designing websites and mobile apps. I learned what UX/UI Design is and':
      'Na studiach inżynierskich odkryłam pasję do projektowania stron i aplikacji mobilnych. Dowiedziałam się, czym jest UX/UI Design, i',
    'fell in love with this world.': 'zakochałam się w tym świecie.',
    'Why UX?': 'Dlaczego UX?',
    'My interest in UX/UI stems from that creative drive and the desire to be part of a team that values':
      'Moje zainteresowanie UX/UI wynika z tej twórczej potrzeby i chęci bycia częścią zespołu, który ceni',
    'research and human-centered design.': 'badania i projektowanie skoncentrowane na człowieku.',
    'Ready to fly': 'Gotowa do lotu',
    'I want to join a team where I can grow my skills to build digital products that are both':
      'Chcę dołączyć do zespołu, w którym będę rozwijać swoje umiejętności i tworzyć produkty cyfrowe, które są zarazem',
    'beautiful and functional.': 'piękne i funkcjonalne.',
    'I\'m enthusiastic about sharpening my current skills and learning new ones – to create products that improve processes and':
      'Z entuzjazmem doskonalę to, co już umiem, i uczę się nowych rzeczy – żeby tworzyć produkty, które usprawniają procesy i',
    'deliver amazing experiences for people.': 'dają ludziom wspaniałe doświadczenia.',

    /* Tools */
    'Tools I use': 'Narzędzia, których używam',

    /* Gallery */
    'When I\'m not in Figma': 'Kiedy nie siedzę w Figmie',
    'My hobbies are singing, photography, traveling, baking, and painting –':
      'Moje pasje to śpiew, fotografia, podróże, pieczenie i malowanie –',
    'drawing inspiration from culture and nature.': 'czerpię inspirację z kultury i natury.',
    'Filter photos by hobby': 'Filtruj zdjęcia według pasji',
    'Travel': 'Podróże',
    'Rhubarb season': 'Sezon na rabarbar',
    'Worth every step': 'Warto było każdego kroku',
    'Guitar & songs': 'Gitara i piosenki',
    'Cooking class vibes': 'Na kursie gotowania',
    'Lemons & blossoms': 'Cytryny i kwiaty',
    'Shades of blue': 'Odcienie błękitu',
    'Coconut break': 'Przerwa na kokosa',
    'Before the first note': 'Przed pierwszym dźwiękiem',
    'Fresh from the oven': 'Prosto z piekarnika',
    'Stairs to the sea': 'Schody nad morze',
    'An ornate temple tower covered in porcelain decorations under a cloudy sky':
      'Bogato zdobiona wieża świątyni pokryta porcelanowymi ozdobami pod pochmurnym niebem',
    'A homemade rhubarb cake with one slice cut out': 'Domowe ciasto z rabarbarem z jednym wykrojonym kawałkiem',
    'Roksana sitting on a rock, looking out over green mountain valleys': 'Roksana siedzi na skale i patrzy na zielone górskie doliny',
    'Roksana singing on stage and playing an acoustic guitar': 'Roksana śpiewa na scenie i gra na gitarze akustycznej',
    'Roksana waving, wearing a big straw hat and a purple apron at a cooking class':
      'Roksana macha w dużym słomkowym kapeluszu i fioletowym fartuchu na kursie gotowania',
    'An acrylic painting of yellow lemons, green leaves and pink blossoms on a teal background':
      'Obraz akrylowy z żółtymi cytrynami, zielonymi liśćmi i różowymi kwiatami na turkusowym tle',
    'A deep blue bay seen from a cliff, with rocks and green hills': 'Głęboko niebieska zatoka widziana z klifu, ze skałami i zielonymi wzgórzami',
    'Roksana drinking from a fresh coconut at a market': 'Roksana pije ze świeżego kokosa na targu',
    'Roksana on stage holding a microphone, photo by Tomasz Furman': 'Roksana na scenie z mikrofonem, fot. Tomasz Furman',
    'A loaf cake with white frosting on a plate': 'Ciasto z keksówki z białym lukrem na talerzu',
    'A rocky island with a winding stone staircase leading to a chapel above the sea':
      'Skalista wyspa z krętymi kamiennymi schodami prowadzącymi do kaplicy nad morzem'
  });

  /* ---------- Connect page (connect.html) ---------- */
  Object.assign(PL, {
    'Connect – Roksana Żytkowska': 'Kontakt – Roksana Żytkowska',
    'Get in touch with Roksana Żytkowska, graphic designer and UX/UI designer – send a message about a project, a job or a collaboration.':
      'Skontaktuj się z Roksaną Żytkowską, projektantką graficzną i UX/UI – napisz w sprawie projektu, pracy albo współpracy.',
    'Hey there!': 'Hej!',
    'Name': 'Imię',
    'E-mail address': 'Adres e-mail',
    'Message': 'Wiadomość',
    'Send a message': 'Wyślij wiadomość',
    'Please enter your name.': 'Wpisz swoje imię.',
    'Please enter your e-mail address.': 'Wpisz swój adres e-mail.',
    'Please write a message.': 'Napisz wiadomość.',
    'Please enter a valid e-mail address, e.g. name@example.com.': 'Wpisz poprawny adres e-mail, np. imie@przyklad.pl.',
    'Message from the portfolio': 'Wiadomość z portfolio',
    'Your e-mail app should open with the message ready to send. If it doesn’t, write to me directly:':
      'Powinien otworzyć się Twój program pocztowy z gotową wiadomością. Jeśli tak się nie stało, napisz do mnie bezpośrednio:'
  });

  /* reverse map, so text that was already translated (e.g. cloned by a script) can be restored */
  var EN = {};
  Object.keys(PL).forEach(function (k) { if (!(PL[k] in EN)) EN[PL[k]] = k; });

  var ATTRS = ['alt', 'aria-label', 'title'];
  var SKIP = 'script, style, svg, [data-lang-switch], [role="status"], [aria-live], [data-i18n-skip]';
  var current = 'en';

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function toLang(value, lang) {
    var key = norm(value);
    if (!key) return null;
    var en = key in PL ? key : (key in EN ? EN[key] : null);
    if (en === null) return null;
    return lang === 'pl' ? PL[en] : en;
  }

  /* public helper for texts written by scripts (copy status, filter status, menu) */
  window.rzI18n = {
    t: function (s) { return current === 'pl' && PL[s] ? PL[s] : s; },
    lang: function () { return current; }
  };

  function translateText(node, lang) {
    var out = toLang(node.nodeValue, lang);
    if (out === null) return;
    var lead = node.nodeValue.match(/^\s*/)[0];
    var trail = node.nodeValue.match(/\s*$/)[0];
    var next = lead + out + trail;
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function apply(lang) {
    current = lang;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        return p && !p.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) translateText(n, lang);

    document.querySelectorAll('[alt], [aria-label], [title]').forEach(function (el) {
      if (el.closest('[data-lang-switch], [data-i18n-skip]')) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var out = toLang(el.getAttribute(a), lang);
        if (out !== null) el.setAttribute(a, out);
      });
    });

    var title = toLang(document.title, lang);
    if (title !== null) document.title = title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) { var d = toLang(meta.content, lang); if (d !== null) meta.content = d; }
  }

  document.addEventListener('langchange', function (e) { apply(e.detail.lang); });
})();
