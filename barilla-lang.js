/**
 * Barilla Sostenibilità - Cambio lingua IT/EN istantaneo
 */
(function () {
  
  var translations = {
    // Oggetto dizionario con le traduzioni per ogni lingua
    // translations.it = stringhe in italiano
    // translations.en = stringhe in inglese
    // Chiavi collegate ai tag data-i18n o data-i18n-html della pagina HTML
    it: {
      slogan_website: "Ogni scelta conta, ogni giorno.",
      nav_chi_siamo: "L'Azienda",
      nav_rapporto: "Il Rapporto di Sostenibilità",
      nav_approccio: "L'approccio alla sostenibilità",
      nav_pilastri: "I 4 pilastri",
      nav_download: "Scarica il report",
      chi_siamo_title: "Chi è Barilla oggi",
      chi_siamo_lead: "Il Gruppo Barilla è un’impresa alimentare italiana a controllo familiare, fondata nel 1877 a Parma, oggi tra i principali operatori globali nel settore della pasta, dei prodotti da forno e delle salse. Nel corso della sua storia, Barilla ha costruito la propria crescita su un modello industriale che coniuga tradizione alimentare italiana, innovazione tecnologica e sviluppo internazionale, mantenendo una forte identità valoriale. È all’interno di questo scenario che Barilla colloca il proprio percorso di sostenibilità, inteso come parte integrante del modo di fare impresa e come risposta strategica alle trasformazioni del contesto operativo in cui l’azienda è chiamata ad operare.",
      stat_paesi: "Paesi nel mondo",
      stat_persone: "Persone",
      stat_poli: "Poli produttivi",
      chi_siamo_descrizione: "Un portafoglio di marchi che va ben oltre la pasta: Mulino Bianco, Wasa, Pavesi, Pan di Stelle, Harrys e molti altri.",
      chi_siamo_descrizione_2: "Il cibo, per Barilla, non è solo un prodotto industriale: è <strong>cultura, relazione, responsabilità</strong>. Questo approccio guida sia le scelte di business sia il modo di intendere la sostenibilità grazie soprattutto ai valori che fanno di Barilla un leader mondiale.",
      valori_1: "Passione",
      valori_2: "Coraggio",
      valori_3: "Fiducia",
      valori_4: "Integrità",
      valori_5: "Curiosità",
      valori_6: "Amore",
      rapporto_title: "Cosa rappresenta il Rapporto di Sostenibilità",
      rapporto_intro: "Il Rapporto di Sostenibilità racconta come Barilla sta affrontando un mondo che cambia rapidamente. Il documento non si limita a descrivere le attività svolte, ma racconta il percorso di sostenibilità intrapreso dall’impresa, con uno sguardo verso il 2030, per trasformare la visione aziendale in azioni quotidiane e impegni concreti.",
      rapporto_1: "<strong>Fotografa</strong> i risultati raggiunti",
      rapporto_2: "<strong>Spiega</strong> rischi e sfide future",
      rapporto_3: "<strong>Chiarisce</strong> gli impegni futuri, integrando la sostenibilità nella strategia industriale",
      approccio_title: "Il nuovo approccio alla sostenibilità",
      approccio_intro: "Dal 2024 Barilla ha rafforzato il proprio modello, rendendo la sostenibilità <strong>parte integrante delle decisioni aziendali</strong>, non un'attività separata.",
      approccio_1_title: "Analisi di doppia materialità",
      approccio_1_text: "Valutare sia l'impatto dell'azienda su società e ambiente, sia i rischi che temi ambientali e sociali generano sul business.",
      approccio_2_title: "Governance ESG strutturata",
      approccio_2_text: "Coinvolge oltre 150 persone in azienda e definisce 3 organi in stretta e reciproca collaborazione tra loro.",
      approccio_3_title: "Allineamento agli ESRS",
      approccio_3_text: "Progressione verso gli standard europei di reporting organizzati secondo i pilastri: Ambientale, Sociale e di Governance.",
      approccio_4_title: "Filiere responsabili",
      approccio_4_text: "I risultati ottenuti sono integrati nei processi decisionali aziendali, con il coinvolgimento diretto dei team acquisti regionali e degli stakeholder interni.",
      approccio_5_title: "Packaging sostenibile",
      approccio_5_text: "Definizione di KPI specifici per monitorare la qualità del lavoro e ridurre al minimo gli sprechi.",
      approccio_6_title: "Barilla Zero Accident Program",
      approccio_6_text: "Ambizione all'azzeramento degli infortuni in tutti gli stabilimenti con l’introduzione dei Sistemi di Gestione HSEE certificati in accordo con la norma ISO 45001.",
      approccio_highlight: "La sostenibilità non è più solo \"fare bene\", ma <strong>fare impresa in modo resiliente e responsabile</strong>.",
      pilastri_title: "I 4 pilastri strategici",
      pilastro1_title: "Prodotti",
      pilastro1_sub: "Buoni, sicuri, sempre più sani",
      pilastro1_1: "Profilo nutrizionale migliorato (meno sale, zuccheri, grassi; più fibre)",
      pilastro1_2: "Sicurezza e qualità alimentare",
      pilastro1_3: "Trasparenza verso i consumatori",
      pilastro2_title: "Persone",
      pilastro2_sub: "Sicurezza, inclusione, benessere",
      pilastro2_1: "Programma Zero Infortuni in tutti gli stabilimenti",
      pilastro2_2: "Equità salariale di genere",
      pilastro2_3: "Inclusione, formazione e crescita",
      pilastro2_4: "Dialogo con le comunità locali",
      pilastro3_title: "Filiere",
      pilastro3_sub: "Responsabilità dal campo alla tavola",
      pilastro3_1: "Filiera responsabile con agricoltori e fornitori",
      pilastro3_2: "Agricoltura sostenibile e rigenerativa",
      pilastro3_3: "Tutela biodiversità, suolo e risorse idriche",
      pilastro3_4: "Valori etici e sociali lungo tutta la filiera",
      pilastro4_title: "Clima",
      pilastro4_sub: "Meno emissioni, più resilienza",
      pilastro4_1: "Riduzione emissioni lungo tutta la catena del valore",
      pilastro4_2: "Energie rinnovabili e autoproduzione",
      pilastro4_3: "Efficienza energetica e idrica",
      pilastro4_4: "Analisi rischi climatici su materie prime e stabilimenti",
      messaggio_title: "Il nostro messaggio",
      messaggio_quote: "La sostenibilità non è un costo né una moda, ma una <strong>leva di competitività, fiducia e continuità nel tempo</strong>.",
      messaggio_text: "Barilla non si presenta come \"perfetta\", ma come un'azienda consapevole della complessità del contesto in cui opera e determinata a migliorare, passo dopo passo, insieme alle persone, ai fornitori e ai consumatori.",
      download_title: "Scarica il report di sostenibilità",
      download_card1_title: "Rapporto di Sostenibilità 2024",
      download_card1_text: "Il documento completo che fotografa i risultati, le sfide e gli impegni futuri.",
      download_btn_pdf: "Scarica PDF",
      footer_text: "Barilla S.p.A."
    },
    en: {
      slogan_website: "Every choice counts, every day.",
      nav_chi_siamo: "The Company",
      nav_rapporto: "The Sustainability Report",
      nav_approccio: "The sustainability approach",
      nav_pilastri: "The 4 pillars",
      nav_download: "Download",
      chi_siamo_title: "Who is Barilla today",
      chi_siamo_lead: "The Barilla Group is a family-owned Italian food company, founded in 1877 in Parma, and today a leading global player in the pasta, baked goods, and sauces sectors. Throughout its history, Barilla has built its growth on an industrial model that combines Italian food tradition, technological innovation, and international development, while maintaining a strong core value. It is within this framework that Barilla positions its sustainability journey, understood as an integral part of its business model and a strategic response to the changing operating environment in which the company operates.",
      stat_paesi: "Countries in the world",
      stat_persone: "People",
      stat_poli: "Production sites",
      chi_siamo_descrizione: "A portfolio of brands that goes well beyond pasta: Mulino Bianco, Wasa, Pavesi, Pan di Stelle, Harrys and many more.",
      chi_siamo_descrizione_2: "For Barilla, food is not just an industrial product: it is <strong>culture, relationship, responsibility</strong>. This approach guides both business choices and the way we understand sustainability thanks to the values that make Barilla a global leader.",
      valori_1: "Passion",
      valori_2: "Courage",
      valori_3: "Trust",
      valori_4: "Integrity",
      valori_5: "Curiosity",
      valori_6: "Love",
      rapporto_title: "What the Sustainability Report represents",
      rapporto_intro: "The Sustainability Report describes how Barilla is facing a rapidly changing world. The document does not only describe the activities carried out, but tells the sustainability journey undertaken by the company, with a look towards 2030, to transform the company's vision into daily actions and concrete commitments.",
      rapporto_1: "<strong>Captures</strong> the results achieved",
      rapporto_2: "<strong>Explains</strong> risks and future challenges",
      rapporto_3: "<strong>Clarifies</strong> future commitments, integrating sustainability into the industrial strategy",
      approccio_title: "The new approach to sustainability",
      approccio_intro: "Since 2024 Barilla has strengthened its model, making sustainability <strong>an integral part of business decisions</strong>, not a separate activity.",
      approccio_1_title: "Double materiality analysis",
      approccio_1_text: "Assessing both the company's impact on society and the environment, and the risks that environmental and social issues generate for the business.",
      approccio_2_title: "Structured ESG governance",
      approccio_2_text: "Involving over 150 people across the company and defining 3 bodies in close and reciprocal collaboration with each other.",
      approccio_3_title: "Alignment with ESRS",
      approccio_3_text: "Progress towards European reporting standards organized according to the pillars: Environmental, Social and Governance.",
      approccio_4_title: "Responsible supply chains",
      approccio_4_text: "The results obtained are integrated into the company's decision-making processes, with direct involvement of regional procurement teams and internal stakeholders.",
      approccio_5_title: "Sustainable packaging",
      approccio_5_text: "Definition of specific KPIs to monitor the quality of work and reduce waste as much as possible.",
      approccio_6_title: "Barilla Zero Accident Program",
      approccio_6_text: "Ambition to zero accidents in all plants with the introduction of HSEE Management Systems certified according to ISO 45001.",
      approccio_highlight: "Sustainability is no longer just \"doing good\", but <strong>doing business in a resilient and responsible way</strong>.",
      pilastri_title: "The 4 strategic pillars",
      pilastro1_title: "Products",
      pilastro1_sub: "Good, safe, increasingly healthy",
      pilastro1_1: "Improved nutritional profile (less salt, sugar, fat; more fibre)",
      pilastro1_2: "Food safety and quality",
      pilastro1_3: "Transparency towards consumers",
      pilastro2_title: "People",
      pilastro2_sub: "Safety, inclusion, wellbeing",
      pilastro2_1: "Zero Accident programme across all plants",
      pilastro2_2: "Gender pay equity",
      pilastro2_3: "Inclusion, training and growth",
      pilastro2_4: "Dialogue with local communities",
      pilastro3_title: "Supply chains",
      pilastro3_sub: "Responsibility from field to table",
      pilastro3_1: "Responsible supply chain with farmers and suppliers",
      pilastro3_2: "Sustainable and regenerative agriculture",
      pilastro3_3: "Protection of biodiversity, soil and water resources",
      pilastro3_4: "Ethical and social values across the supply chain",
      pilastro4_title: "Climate",
      pilastro4_sub: "Fewer emissions, more resilience",
      pilastro4_1: "Emission reduction across the value chain",
      pilastro4_2: "Renewable energy and self-generation",
      pilastro4_3: "Energy and water efficiency",
      pilastro4_4: "Climate risk analysis on raw materials and plants",
      messaggio_title: "Our message",
      messaggio_quote: "Sustainability is neither a cost nor a trend, but a <strong>lever for competitiveness, trust and continuity over time</strong>.",
      messaggio_text: "Barilla does not present itself as \"perfect\", but as a company aware of the complexity of the context in which it operates and determined to improve, step by step, together with people, suppliers and consumers.",
      download_title: "Download",
      download_card1_title: "2024 Sustainability Report",
      download_card1_text: "The full document capturing results, future challenges and commitments.",
      download_btn_pdf: "Download PDF",
      footer_text: "Barilla S.p.A."
    }
  };

  // Funzione principale: cambio della lingua alla pagina intera
  function setLanguage(lang) {
    if (!translations[lang]) return; // Se la lingua richiesta non esiste nel dizionario, esce senza fare nulla
    var t = translations[lang]; // "t" -> scorciatoia, se lang="it", t = translations.it

    document.documentElement.lang = lang === "it" ? "it" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) { // Seleziona TUTTI gli elementi che hanno l'attributo data-i18n
      var key = el.getAttribute("data-i18n"); // Legge il valore dell'attributo
      if (t[key] != null) el.textContent = t[key]; // Se esiste una traduzione per quella chiave, sostituisce il testo
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { // Seleziona TUTTI gli elementi che hanno l'attributo data-i18n-hmtl
      var key = el.getAttribute("data-i18n-html");
      if (t[key] != null) el.innerHTML = t[key];
    });

    document.querySelectorAll(".pulsante-lingua").forEach(function (btn) { // Selettore bottoni lingua
      // Confronto data-lang del bottone (it/en) con la lingua attuale e cambio stile da CSS
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try { localStorage.setItem("barilla-lang", lang); } catch (e) {} // Salvaggio della lingua nel browser in caso di refresh
    initCounters(); // Al cambio lingua ri-aggancia l’observer ai contatori (se necessario)
  }

  // CONTATORI ANIMATI
  // Parte quando i numeri entrano in viewport

  var countersObserver = null;

  function formatNumberIT(n) { /* Formattazione numeri secondo lo stile italiano */
    return n.toLocaleString("it-IT"); // 8800 -> "8.800"
  }

  function animateCount(el, target, duration) { /* Funzione di gestione dell’animazione del numero */
    var startTime = null;
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);

      var eased = 1 - Math.pow(1 - progress, 3); /* Effetto easeOutCubic (accelerazione all’inizio e decelerazione alla fine) */

      var current = Math.round(target * eased);
      el.textContent = prefix + formatNumberIT(current) + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step); /* Avvio dell'animazione */
      } else {
        el.textContent = prefix + formatNumberIT(target) + suffix;
      }
    }

    window.requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll(".stat-number[data-count]");
    if (!counters.length) return;

    // Se esiste già un observer (es. dopo cambio lingua), lo disattivo
    if (countersObserver) {
      try { countersObserver.disconnect(); } catch (e) {}
      countersObserver = null;
    }

    // Observer: parte quando gli elementi diventano visibili
    countersObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;

        // evita che riparta più volte
        if (el.dataset.animated === "true") {
          obs.unobserve(el);
          return;
        }

        var target = parseInt(el.getAttribute("data-count"), 10);
        if (isNaN(target)) {
          obs.unobserve(el);
          return;
        }

        el.dataset.animated = "true";
        animateCount(el, target, 1200); // durata in millisecondi
        obs.unobserve(el);
      });
    }, { threshold: 0.4 }); /* L’animazione parte al 40% di visibilità dell’elemento nello schermo */

    counters.forEach(function (el) {
      // se non è mai stato animato, mostro 0 (o il prefisso + 0)
      if (el.dataset.animated !== "true") {
        var prefix = el.getAttribute("data-prefix") || "";
        var suffix = el.getAttribute("data-suffix") || "";
        el.textContent = prefix + "0" + suffix;
      }
      countersObserver.observe(el);
    });
  }

  function init() { // Impostazione lingua di default
    var saved = (typeof localStorage !== "undefined" && localStorage.getItem("barilla-lang")) || "it";
    var lang = saved === "en" ? "en" : "it";
    setLanguage(lang);

    document.querySelectorAll(".pulsante-lingua").forEach(function (btn) { // Impostazione lingua al click del pulsante
      btn.addEventListener("click", function () {
        setLanguage(this.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") { // Verifica DOM pronto
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
