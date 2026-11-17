import{g as He}from"./gsap-DdEiTQuA.js";import{C as K,G as me,B as Se,a as re,M as ot,D as pt,b as ce,V as _,c as Mi,T as Di,d as Qe,S as Le,I as vt,O as Ti,P as _i,e as at,L as Wt,f as ct,g as Yi,Q as Zt,h as Xi,i as kt,j as Lt,R as Qt,k as Ui,l as Tt,m as ai,A as jt,n as Wi,E as Zi,o as ri,p as Qi,q as Ki,r as Ji,W as es,s as ts,H as is,t as Vt}from"./three-DQkHHfm5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const yt=[{index:1,titleFa:"طراحی پروتئین با هوش مصنوعی",titleEn:"AI-Driven Protein Design: From Sequence to Validated Function",sectionFa:"سمینار تخصصی · زیست‌فناوری محاسباتی",accent:"nature",steps:1,durationHint:"۰.۵ دقیقه",preloadMolecular:["1q7b","2hhb"],notes:["کلیپ سه‌بعدی به‌صورت خودکار پخش می‌شود: چرخش آهسته‌ی دوربین دور یک آنزیم طراحی‌شده با هوش مصنوعی (M6G92 از مخزن 310.ai، نتیجه‌ی محاسباتی)؛ همچنین امکان سوییچ زنده به مدل تعاملی سه‌بعدی هم‌تای طبیعی EC 1.1.1.100 (PDB 1Q7B) فراهم است.","خوش‌آمدگویی کوتاه و طرح پرسش اصلی: آیا می‌توان پروتئین را بر اساس عملکردش طراحی کرد، و آیا طراحی‌ها در آزمایشگاه کار می‌کنند؟"]},{index:2,titleFa:"پروتئین چیست؟",titleEn:"What Is a Protein? Sequence → Structure → Function",sectionFa:"مقدمه",accent:"nature",steps:3,durationHint:"۱ دقیقه",preloadMolecular:["2hhb","1hew"],notes:["پروتئین یک زنجیره از ۲۰ نوع اسیدآمینه است. این توالی تعیین می‌کند پروتئین چطور تا می‌شود و چه کاری می‌تواند انجام دهد (مقاله‌ی ProteinDT، مقدمه).","ساختار چهار سطح دارد: اولیه، ثانویه، سوم و چهارم. نمایش پیشرونده‌ی زنجیره یک نمایش آموزشی است و شبیه‌سازی واقعی تاخوردگی نیست.","آنزیم‌ها پروتئین‌هایی‌اند که واکنش‌ها را تسریع می‌کنند؛ مقاله‌ی مروری آن‌ها را «تراشه‌های اصلی» تولید زیستی می‌نامد."]},{index:3,titleFa:"چرا طراحی پروتئین سخت است؟",titleEn:"Why Is Protein Design Difficult? Combinatorial Space",sectionFa:"مقدمه",accent:"nature",steps:1,durationHint:"۱ دقیقه",notes:["عدد ۱۰ به توان ۱۳۰ محاسبه‌ی ساده‌ی ۲۰ به توان ۱۰۰ است (۲۰ نوع اسیدآمینه در ۱۰۰ جایگاه)، نه عدد یکی از مقاله‌ها.","مقاله‌ی مروری می‌گوید تکامل هدایت‌شده زمان‌بر و پرهزینه است، اغلب به آنزیم‌های طبیعی محدود می‌ماند و ساختن کارکرد جدید با آن دشوار است.","نوبل شیمی ۲۰۲۴: David Baker برای طراحی محاسباتی پروتئین، Demis Hassabis و John Jumper برای پیش‌بینی ساختار با AlphaFold."]},{index:4,titleFa:"هوش مصنوعی مولد: چهار خانواده‌ی مدل",titleEn:"Four Generative AI Model Families",sectionFa:"مقدمه · مقاله‌ی مروری",accent:"review",steps:4,durationHint:"۱ دقیقه",notes:["نقشه‌ی خانواده‌ی مدل‌ها از مقاله‌ی مروری: VAE، GAN، Diffusion و مدل‌های زبانی پروتئین، هرکدام با مثال آزمایش‌شده.","ProteinGAN: ۲۴٪ توالی‌های تولیدشده محلول و فعال بودند. Chroma تا بیش از ۳۰۰۰ residue. ZymCTRL بر پایه‌ی شماره‌ی EC آموزش دیده که بعداً به داده‌ی 310 مربوط می‌شود."]},{index:5,titleFa:"سه مقاله، یک پرسش",titleEn:"Three Papers, One Central Question",sectionFa:"مقدمه",accent:"nature",steps:3,durationHint:"۰.۵ دقیقه",notes:["سه مقاله یک داستان می‌سازند: Nature نشان می‌دهد طراحی با یادگیری عمیق در آزمایشگاه کار می‌کند؛ ProteinDT نشان می‌دهد چگونه از متن به پروتئین برسیم؛ مقاله‌ی مروری تصویر کلی و محدودیت‌ها را می‌دهد.","کدرنگی اسلایدها: Nature فیروزه‌ای، ProteinDT بنفش-آبی، مقاله‌ی مروری خاکستری، 310.ai سرخابی."]},{index:6,titleFa:"نمای کلی متدلوژی در سه مقاله",titleEn:"Methodology Comparison Across Three Pillars",sectionFa:"مرور متدلوژی و الگوریتم‌ها",accent:"nature",steps:4,durationHint:"۱ دقیقه",notes:["این اسلاید نمای یک‌جای متدلوژی سه مقاله است؛ هر ستون یک مقاله و هر ردیف یک مرحله: داده، الگوریتم‌ها، ارزیابی، خروجی.","خلاصه‌ی کلیدی: Nature طراحی ساختاری را با آزمایش تأیید می‌کند، ProteinDT از متن می‌آید و محاسباتی ارزیابی می‌شود، و مقاله‌ی مروری جمع‌بندی همه‌ی خانواده‌هاست."]},{index:7,titleFa:"رده‌بندی عملکردی الگوریتم‌ها و مدل‌های محاسباتی",titleEn:"Functional Taxonomy of Algorithms: Generation, Alignment, Design & Validation",sectionFa:"مرور متدلوژی و الگوریتم‌ها",accent:"nature",steps:1,durationHint:"۰.۵ دقیقه",preloadMolecular:["dtz","1oun"],notes:["همه‌ی الگوریتم‌های سه مقاله در چهار نقش: تولید، بازنمایی و هم‌ترازی، طراحی و امتیازدهی، اعتبارسنجی. رنگ نقطه‌ی هر الگوریتم نشان می‌دهد در کدام مقاله آمده است.","فقط نام‌هایی آمده که خود مقاله‌ها ذکر کرده‌اند."]},{index:8,titleFa:"مسئله و هدف: یک luciferase بهتر",titleEn:"The Luciferase Design Problem & DTZ Substrate",sectionFa:"مقاله‌ی Nature 2023",accent:"nature",steps:1,durationHint:"۱ دقیقه",preloadMolecular:["dtz","1oun"],notes:["زیست‌شناسی پزشکی از luciferase برای تصویربرداری استفاده می‌کند چون نور برانگیزاننده لازم ندارد و در نمونه‌های دارای خودفلورسانس حساس‌تر از فلورسانس است.","چهار مشکل luciferase طبیعی روی اسلاید است. هدف ساختن luciferase کوچک، پایدار و اختصاصی برای DTZ است.","نکته: این ابزار تصویربرداری و سنجش است نه درمان؛ ارتباط پزشکی آن غیرمستقیم است."]},{index:9,titleFa:"متدلوژی: خط لوله‌ی طراحی",titleEn:"Nature 2023: Five-Stage De Novo Design Pipeline",sectionFa:"مقاله‌ی Nature 2023",accent:"nature",steps:6,durationHint:"۱.۵ دقیقه",preloadMolecular:["1oun"],notes:["۱) DTZ در حدود ۴۰۰۰ پروتئین طبیعی متصل‌شونده به مولکول کوچک داک شد؛ خانواده‌ی NTF2-like بهترین بود.","۲) روش hallucination خانواده‌محور ۱۶۱۵ داربست ساخت؛ شروع از توالی ۲۰۰۰ NTF2 طبیعی.","۳) RifGen و RifDock جایگاه فعال را روی داربست‌ها قرار دادند؛ آرژنین بار منفی DTZ را تثبیت می‌کند.","۴) طراحی توالی با RosettaDesign و فیلتر؛ ۷۶۴۸ طراحی انتخاب و سفارش داده شد. در دور دوم (سوبسترای h-CTZ) از ProteinMPNN استفاده شد.","۵) غربالگری کلونی در E. coli: ۳ طراحی فعال. این تعداد کم، یافته‌ی صادقانه‌ی مقاله است."]},{index:10,titleFa:"الگوریتم‌ها و ابزارها",titleEn:"Algorithms & Computational Tools in Nature 2023",sectionFa:"مقاله‌ی Nature 2023",accent:"nature",steps:5,durationHint:"۱ دقیقه",preloadMolecular:["1q7b"],notes:["فقط ابزارهایی که در خود مقاله نام برده شده‌اند: trRosetta با جست‌وجوی مونت‌کارلو، RifGen و RifDock، RosettaDesign و ProteinMPNN، AlphaFold2 برای اعتبارسنجی، و DFT و دینامیک مولکولی برای مکانیسم.","AlphaFold2 ساختار LuxSit را بسیار نزدیک به مدل طراحی پیش‌بینی کرد (RMSD برابر ۱.۳۵ آنگستروم).","نمایش سه‌بعدی: نحوه‌ی کار هر الگوریتم روی یک ساختار تجربی (PDB 1Q7B، آنزیم EC 1.1.1.100 با NADP) نشان داده می‌شود و با هر کلید جهت‌دار برای الگوریتم بعدی دوباره ترسیم می‌شود. فقط sequence گام سوم خروجی واقعی ProteinMPNN است؛ بقیه‌ی فرایندها (MCMC، docking، recycling، MD) تصویرسازی مفهومی‌اند و RMSD نمایشی با مقدار 1.35 Å گزارش‌شده برای LuxSit یکی نیست."]},{index:11,titleFa:"نتایج اصلی: از محاسبه تا نور",titleEn:"Experimental Results: LuxSit & LuxSit-i",sectionFa:"مقاله‌ی Nature 2023",accent:"nature",steps:1,durationHint:"۱.۵ دقیقه",notes:["نرخ موفقیت: دور اول ۳ از ۷۶۴۸ (حدود ۰.۰۴٪)، دور دوم برای سوبسترای h-CTZ ۲ از ۴۶ (حدود ۴.۳٪). دو دور سوبسترا و روش متفاوت دارند.","LuxSit: ۱۱۷ اسیدآمینه و ۱۳.۹ kDa؛ پایدار تا بیش از ۹۵ درجه. بهترین نسخه، LuxSit-i، بعد از غربالگری جهش آزمایشگاهی به kcat/Km برابر ۱۰ به توان ۶ رسید.","اختصاصیت: ۵۰ برابر نسبت به bis-CTZ و بیش از ۱۰۰ برابر نسبت به بقیه‌ی سوبستراها. نکته‌ی صادقانه: ساختار کریستالی LuxSit گرفته نشد؛ ساختارها مدل‌اند."]},{index:12,titleFa:"ProteinDT: طراحی پروتئین از روی متن",titleEn:"ProteinDT: Text-Guided Protein Generation Architecture",sectionFa:"مقاله‌ی ProteinDT 2025",accent:"proteindt",steps:6,durationHint:"۱.۲ دقیقه",notes:["ایده: متن توصیف‌کننده‌ی عملکرد را به پروتئین تبدیل کنیم. ProteinCLAP متن و پروتئین را هم‌تراز می‌کند (دو انکودر SciBERT و ProtBERT، یادگیری contrastive).","ProteinFacilitator از بازنمایی متن، بازنمایی پروتئین را می‌سازد (MLP با زیان MSE). دیکودر توالی را می‌سازد: Transformer خودهمبسته (T5) یا دیفیوژن گسسته ProteinDiff.","داده‌ی آموزش: SwissProtCLAP با ۴۴۱٬۰۱۳ جفت متن–پروتئین."]},{index:13,titleFa:"ProteinDT: نتایج و نگاه نقادانه",titleEn:"ProteinDT Results & Critical Methodological Evaluation",sectionFa:"مقاله‌ی ProteinDT 2025",accent:"proteindt",steps:3,durationHint:"۱.۲ دقیقه",notes:["معیار: بازیابی چندگزینه‌ای بین T گزینه؛ شانس تصادفی ۲۵٪ در T=4، ۱۰٪ در T=10 و ۵٪ در T=20 است.","بهترین مدل (AR Transformer + Facilitator): ۹۷٪، ۹۱٪ و ۸۳.۵٪. بدون Facilitator همان مدل ۴۹٪، ۲۷٪ و ۲۰٪ است.","نگاه نقادانه (برداشت ارائه‌دهنده): هم انتخاب بهترین نمونه از ۱۶ تولید و هم معیار دقت از ProteinCLAP استفاده می‌کنند؛ احتمال دوری بودن ارزیابی هست.","همه‌چیز محاسباتی است و نتیجه‌ی آزمایشگاهی ندارد."]},{index:14,titleFa:"ورود به جیب فعال",titleEn:"Entering the Active Site: M6G92 + Docked NAD(+)",sectionFa:"310.ai · نمای سینمایی",accent:"310",steps:1,durationHint:"۰.۵ دقیقه",preloadMolecular:["1q7b"],notes:["دوربین از بیرون وارد جیب فعال آنزیم می‌شود و روی لیگاند NAD(+) متوقف می‌شود.","این نمونه‌ی M6G92 از 310.ai است؛ ساختار و جایگاه لیگاند محاسباتی (docking) است و تأیید تجربی ندارد."]},{index:15,titleFa:"ارتباط با 310.ai: یک نمونه‌ی واقعی",titleEn:"310.ai Case Study: M6G92 (EC 1.1.1.100)",sectionFa:"310.ai",accent:"310",steps:1,durationHint:"۱.۲ دقیقه",preloadMolecular:["1q7b"],notes:["نمونه از مخزن آنزیم‌های 310.ai: ورودی توضیح متنی آنزیم (EC 1.1.1.100)، خروجی توالی ۲۴۷ اسیدآمینه‌ای با ساختار پیش‌بینی‌شده و لیگاند NAD(+).","معیارها از فایل: pLDDT برابر ۹۸.۳ (اطمینان ساختار پیش‌بینی‌شده، نه عملکرد) و SeqID برابر ۳۲.۷٪ با نزدیک‌ترین پروتئین طبیعی.","به شباهت مفهومی با ProteinDT اشاره کنید ولی نگویید 310 همان ProteinDT است؛ معماری مدل 310 در منابع نیامده است."]},{index:16,titleFa:"داده‌ی 310 در یک نگاه",titleEn:"310.ai EC Repository Analysis (6,590 In Silico Designs)",sectionFa:"310.ai",accent:"310",steps:1,durationHint:"۰.۸ دقیقه",notes:["تحلیل روی فایل CSV مخزن EC: ۶۵۹۰ طراحی در ۱۹۱۸ شماره‌ی EC و هر هفت کلاس آنزیمی؛ بزرگ‌ترین کلاس اکسیدورداکتازها (۲۲۳۸ طراحی).","حدود ۴۱٪ طراحی‌ها pLDDT بالای ۰.۹ دارند. میانه‌ی SeqID حدود ۳۱٪ است و ۷۳٪ طراحی‌ها زیر ۴۰٪ هستند.","هشدارها: کمینه‌ی ستون‌ها دقیقاً ۰.۷۰، ۰.۶۰ و ۰.۸۰ است، پس مجموعه فیلترشده است و میانگین‌ها نرخ موفقیت نیستند. حدود ۱۱٪ توالی‌ها دُم poly-Alanine دارند. هیچ ستونی نتیجه‌ی آزمایشگاهی ندارد."]},{index:17,titleFa:"کاربردها و محدودیت‌ها",titleEn:"Demonstrated Applications vs. Fundamental Limitations",sectionFa:"جمع‌بندی",accent:"positive",steps:1,durationHint:"۱.۲ دقیقه",notes:["کاربردها: ابزارهای تصویربرداری و سنجش چندگانه‌ی مسیرهای سیگنال‌دهی (NF-κB و cAMP–PKA در مقاله‌ی Nature)، زیست‌کاتالیز، و طراحی بر اساس متن.","کاربرد بالقوه، نه شواهد بالینی: این مقاله‌ها شواهد درمانی ارائه نمی‌کنند.","محدودیت‌ها: نرخ موفقیت پایین دور اول (۰.۰۴٪)، وابستگی به غربالگری آزمایشگاهی، نبود محک منصفانه، و وابستگی بیشتر طراحی‌ها به واکنش‌های طبیعی."]},{index:18,titleFa:"جمع‌بندی",titleEn:"Conclusion: AI Accelerates Design; Experiments Establish Credibility",sectionFa:"جمع‌بندی",accent:"nature",steps:1,durationHint:"۱ دقیقه",preloadMolecular:["1q7b"],notes:["سه پیام کلیدی: ۱) هوش مصنوعی توانست آنزیم کاربردی از صفر بسازد (با اثبات آزمایشگاهی و غربالگری)، ۲) طراحی از روی متن در حال شکل‌گیری است ولی بیشتر محاسباتی است، ۳) گلوگاه اصلی اعتبارسنجی تجربی است.","جمله‌ی پایانی: هوش مصنوعی طراحی را شتاب می‌دهد؛ آزمایش آن را معتبر می‌کند."]},{index:19,titleFa:"پرسش و پاسخ",titleEn:"Questions & Answers · Scientific References",sectionFa:"منابع",accent:"nature",steps:1,durationHint:"پرسش و پاسخ",notes:["اگر پرسیدند «آیا ۳۱۰ همان ProteinDT است؟»: در منابع ما چنین چیزی نیامده؛ فقط شباهت مفهومی دارند.","اگر پرسیدند «این طراحی‌ها در آزمایشگاه تأیید شده‌اند؟»: مقاله‌ی Nature بله (۳ طراحی فعال از ۷۶۴۸؛ LuxSit-i پس از غربالگری جهش)؛ فایل 310 نه (فقط معیارهای محاسباتی)."]},{index:20,titleFa:"اعضای تیم",titleEn:"Team Members",sectionFa:"پایان ارائه",accent:"310",steps:1,durationHint:"۰.۵ دقیقه",preloadMolecular:["1ema","1hew","1oun","1q7b","2hhb"],notes:["اسلاید پایانی: هر نام یک زنجیره‌ی پلی‌پپتیدی است که از ساختار تاخورده‌ی یک پروتئین واقعی (1EMA، 1HEW، 1OUN، 1Q7B و دو زنجیره‌ی α و β هموگلوبین 2HHB) باز می‌شود و به شکل حروف درمی‌آید.","کلید Enter (یا دکمه‌ی Replay) انیمیشن بازشدن را از ابتدا تکرار می‌کند. اعضای تیم: Saman Shirdel، Sasan Shirdel، Mahdi Navid، Sina Gozali، Amirreza Haghi، Farnaz Gholamzadeh."]}],nt="data-focus-stop",li=new Set(["pointerenter","mouseenter","mouseover"]);let ci=!1;function ss(){if(ci)return;ci=!0;const l=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(e,t,i){if(this instanceof Element&&(li.has(e)||e==="click")){const s=this.getAttribute(nt);li.has(e)?this.setAttribute(nt,"hover"):s||this.setAttribute(nt,"action")}l.call(this,e,t,i)}}let ns=0;function os(l,e){l.setAttribute("data-focus-step",String(e)),l.hasAttribute("data-focus-seq")||l.setAttribute("data-focus-seq",String(ns++))}class as{constructor(e){this.onChange=e}container=null;current=null;lastIndex=-1;chain=[];userMoved=!1;rightFirst=!1;attach(e){this.detach(),this.userMoved=!1,this.container=e,this.emit()}setRightFirst(e){this.rightFirst=e}detach(){this.clear(),this.container=null}get index(){return this.lastIndex}count(){return this.collect().length}move(e){if(!this.container)return!1;this.userMoved=!0;const t=this.collect();if(!t.length)return!1;let i=this.current?t.indexOf(this.current):-1;this.current&&i===-1&&(i=Math.min(this.lastIndex,t.length-1));const s=i+e;return s>=t.length||s<0?!1:(this.focus(t[s],s,t.length),!0)}focusFirst(){if(this.current||this.userMoved)return;const e=this.collect();e.length&&this.focus(e[0],0,e.length)}focusLast(){const e=this.collect();e.length&&this.focus(e[e.length-1],e.length-1,e.length)}activate(){return this.current?(this.current.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})),window.requestAnimationFrame(()=>this.emit()),!0):!1}clear(){this.leaveChain([]),this.current=null,this.lastIndex=-1}focus(e,t,i){const s=this.chainOf(e);this.leaveChain(s),s.forEach(a=>{this.chain.includes(a)||(a.classList.add("kb-hover"),a.hasAttribute(nt)&&this.fire(a,["pointerenter","mouseenter"]))}),this.chain=s,this.current=e,this.lastIndex=t,e.hasAttribute("data-focus-step")&&e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})),this.emit(i)}leaveChain(e){[...this.chain].reverse().forEach(t=>{e.includes(t)||(t.classList.remove("kb-hover"),t.hasAttribute(nt)&&this.fire(t,["pointerleave","mouseleave"]))}),this.chain=this.chain.filter(t=>e.includes(t))}chainOf(e){const t=[];let i=e;for(;i&&i!==this.container;)t.unshift(i),i=i.parentElement;return t}fire(e,t){const i=e.getBoundingClientRect(),s=i.left+i.width/2,a=i.top+i.height/2;t.forEach(o=>{const c=o.startsWith("pointer")?new PointerEvent(o,{bubbles:!1,pointerType:"mouse",clientX:s,clientY:a}):new MouseEvent(o,{bubbles:!1,clientX:s,clientY:a});e.dispatchEvent(c)})}isVisible(e){if(!e.getClientRects().length)return!1;const t=getComputedStyle(e);return t.visibility!=="hidden"&&t.display!=="none"}collect(){if(!this.container)return[];const e=Array.from(this.container.querySelectorAll(`[${nt}], .mol-toolbar button`)).filter(n=>!n.classList.contains("mol-toolbar")&&n.closest("[data-focus-skip]")===null&&this.isVisible(n)),t=new Map;e.forEach(n=>{const r=n.getAttribute("data-focus-step");if(r===null)return;const d=t.get(Number(r)),u=Number(n.getAttribute("data-focus-seq")??0);(!d||u<Number(d.getAttribute("data-focus-seq")??0))&&t.set(Number(r),n)});let i=e.filter(n=>{const r=n.getAttribute("data-focus-step");return r===null||t.get(Number(r))===n});const s=[];i.forEach((n,r)=>n.hasAttribute("data-focus-step")&&s.push(r));const a=s.map(n=>i[n]).sort((n,r)=>Number(n.getAttribute("data-focus-step"))-Number(r.getAttribute("data-focus-step")));s.forEach((n,r)=>i[n]=a[r]);const o=i.filter(n=>n.hasAttribute("data-focus-parent-step"));if(o.length&&(i=i.filter(n=>!o.includes(n)),o.forEach(n=>{const r=i.findIndex(u=>u.getAttribute("data-focus-step")===n.getAttribute("data-focus-parent-step"));let d=r===-1?i.length:r+1;for(;d<i.length&&i[d].hasAttribute("data-focus-parent-step");)d++;i.splice(d,0,n)})),this.rightFirst){const n=this.container.getBoundingClientRect(),r=n.left+n.width/2,d=u=>{const y=u.getBoundingClientRect();return y.left+y.width/2>=r};i=[...i.filter(d),...i.filter(u=>!d(u))]}const c=n=>n.tagName==="BUTTON"&&!n.hasAttribute("data-focus-parent-step");return i=[...i.filter(n=>!c(n)),...i.filter(c)],i}emit(e){const t=e??this.collect().length,i=this.current;this.onChange({index:this.current?this.lastIndex:-1,total:t,el:i,actionable:!!i&&(i.tagName==="BUTTON"||i.getAttribute(nt)==="action")})}}function le(l,e,t){if(t)return{settle(){},kill(){}};const i=He.utils.toArray(l);i.forEach(r=>r.classList.add("gsap-entering"));let s=!1,a=null;const o=()=>{i.forEach(r=>r.classList.remove("gsap-entering"))},c=()=>{i.forEach(r=>{r.style.removeProperty("opacity"),r.style.removeProperty("transform"),r.style.removeProperty("translate"),r.style.removeProperty("rotate"),r.style.removeProperty("scale")})},n=He.from(i,{...e,onComplete:()=>{s=!0,c(),o(),e.onComplete?.()}});return{settle(){s||(s=!0,n.kill(),c(),a=window.requestAnimationFrame(()=>{a=null,o()}))},kill(){s=!0,a!==null&&(window.cancelAnimationFrame(a),a=null),n.kill(),o()}}}class Ke{committed=0;hovered=null;totalSteps;leaveTimer=null;leaveDelayMs;onRender;entrance=null;lastRenderedActive=null;lastRenderedHovering=null;destroyed=!1;suppressMovePos=null;constructor(e){this.totalSteps=Math.max(1,e.totalSteps),this.committed=this.clamp(e.initialStep??0),this.leaveDelayMs=e.leaveDelayMs??38,this.entrance=e.entrance??null,this.onRender=e.onRender}clamp(e){return Math.max(0,Math.min(this.totalSteps-1,e))}setEntrance(e){this.entrance=e}get committedStep(){return this.committed}get hoveredStep(){return this.hovered}get activeStep(){return this.hovered??this.committed}cancelLeaveTimer(){this.leaveTimer!==null&&(window.clearTimeout(this.leaveTimer),this.leaveTimer=null)}commitStep(e,t){if(this.destroyed)return this.committed;this.entrance?.settle(),this.cancelLeaveTimer();const i=this.clamp(e);return this.committed=i,t?.keepHoverIfSame&&this.hovered===i?this.suppressMovePos=null:(this.hovered=null,this.suppressMovePos=t?.pointerPos??{x:-9999,y:-9999}),this.flush(t?.force??!1),this.committed}setHover(e){if(this.destroyed)return;this.entrance?.settle(),this.cancelLeaveTimer(),this.suppressMovePos=null;const t=this.clamp(e);this.hovered=t,this.flush(!1)}scheduleClearHover(e=!1){if(!this.destroyed){if(this.cancelLeaveTimer(),e||this.leaveDelayMs<=0){this.hovered=null,this.suppressMovePos=null,this.flush(!1);return}this.leaveTimer=window.setTimeout(()=>{this.leaveTimer=null,!this.destroyed&&(this.hovered=null,this.suppressMovePos=null,this.flush(!1))},this.leaveDelayMs)}}resetHover(){this.scheduleClearHover(!0)}renderInitial(){this.flush(!0)}flush(e){if(this.destroyed)return;const t=this.activeStep,i=this.hovered!==null;!e&&this.lastRenderedActive===t&&this.lastRenderedHovering===i||(this.lastRenderedActive=t,this.lastRenderedHovering=i,this.onRender(t,{committedStep:this.committed,hoveredStep:this.hovered,isHovering:i}))}bindElement(e,t,i){const s=i?.commitOnClick??!0;os(e,t),e.addEventListener("pointerenter",()=>{this.setHover(t)}),e.addEventListener("pointermove",a=>{if(this.hovered!==t){if(this.suppressMovePos){if(this.suppressMovePos.x===-9999){this.suppressMovePos={x:a.clientX,y:a.clientY};return}if(Math.hypot(a.clientX-this.suppressMovePos.x,a.clientY-this.suppressMovePos.y)<6)return}this.setHover(t)}}),e.addEventListener("pointerleave",()=>{this.scheduleClearHover(!1)}),s&&e.addEventListener("click",a=>{a.stopPropagation(),this.commitStep(t,{keepHoverIfSame:!0}),i?.onCommit?.(this.committed)})}destroy(){this.destroyed=!0,this.cancelLeaveTimer(),this.entrance?.kill(),this.entrance=null}}function se(l){const e=Array.from(l.cards),t=l.dimSiblings??!0,i=l.leaveDelayMs??35;let s=null,a=null,o=!1;const c=()=>{a!==null&&(window.clearTimeout(a),a=null)},n=r=>{o||s===r||(s=r,e.forEach((d,u)=>{d.classList.toggle("hover-focus",r===u),t&&d.classList.toggle("hover-sibling-dim",r!==null&&r!==u)}),l.onHoverChange?.(r))};return e.forEach((r,d)=>{r.classList.add("interactive-el"),r.addEventListener("pointerenter",()=>{o||(l.entrance?.settle(),c(),n(d))}),r.addEventListener("pointerleave",()=>{o||(c(),i<=0?n(null):a=window.setTimeout(()=>{a=null,n(null)},i))})}),{reset(){c(),n(null)},destroy(){o=!0,c(),l.entrance?.kill()}}}class rs{proteinCache=new Map;moleculeCache=new Map;resolveUrl(e){const t="/protein-design-keynote/";return`${t.endsWith("/")?t:`${t}/`}assets/molecular/${e}.json`}loadProtein(e){const t=e.toLowerCase(),i=this.proteinCache.get(t);if(i)return i;const s=fetch(this.resolveUrl(t)).then(a=>{if(!a.ok)throw new Error(`Failed to load protein asset: ${t} (${a.status})`);return a.json()});return this.proteinCache.set(t,s),s}loadSmallMolecule(e){const t=e.toLowerCase(),i=this.moleculeCache.get(t);if(i)return i;const s=fetch(this.resolveUrl(t)).then(a=>{if(!a.ok)throw new Error(`Failed to load small molecule asset: ${t} (${a.status})`);return a.json()});return this.moleculeCache.set(t,s),s}preload(e){if(e)for(const t of e){const i=t.toLowerCase();i==="dtz"?this.loadSmallMolecule(i).catch(()=>{}):this.loadProtein(i).catch(()=>{})}}}const Ce=new rs;function Pe(l){const e="/protein-design-keynote/",t=e.endsWith("/")?e:`${e}/`,i=l.startsWith("/")?l.slice(1):l;return`${t}${i}`}const di={C:14410995,N:6063615,O:16737404,S:16765286,P:16755268,FE:16742473,H:9279918},ls={C:.42,N:.4,O:.39,S:.48,P:.5,FE:.62,H:.24},St=[new K(4381173),new K(7829759),new K(15100862),new K(6936736)],pi={1:new K(4381173),2:new K(15100862),0:new K(8950955)};function ht(l){l.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function cs(l,e){const t=new K(4381173),i=new K(7829759),s=new K(15100862),a=Math.max(0,Math.min(1,l));a<.5?e.copy(t).lerp(i,a*2):e.copy(i).lerp(s,(a-.5)*2)}function ei(l,e,t={}){const i=new me,s=t.atomScale??1,a=t.bondRadius??.14,o=t.carbonColor??di.C,c=t.emissiveTint??726568,n=t.emissiveIntensity??.22,r=new Le(1,20,16),d=new Yi(1,1,1,14,1),u=new Map,y=m=>{const v=m.toUpperCase(),C=u.get(v);if(C)return C;const L=v==="C"?o:di[v]??12109017,R=new ot({color:L,roughness:.24,metalness:.1,clearcoat:.55,clearcoatRoughness:.2,emissive:new K(v==="O"||v==="N"||v==="P"||v==="FE"?L:c),emissiveIntensity:v==="FE"?.45:n});return u.set(v,R),R},F=new Qe({color:10135743,roughness:.35,metalness:.18});for(const m of l){const v=m.element.toUpperCase(),C=(ls[v]??.38)*s,L=new ce(r,y(v));L.position.set(m.x,m.y,m.z),L.scale.setScalar(C),i.add(L)}const M=new _(0,1,0),h=new _,S=new _,w=new _,z=new _,p=new _;for(const[m,v,C]of e){const L=l[m],R=l[v];if(!L||!R)continue;h.set(L.x,L.y,L.z),S.set(R.x,R.y,R.z),w.subVectors(S,h);const T=w.length();if(T<.05)continue;z.addVectors(h,S).multiplyScalar(.5);const E=new Zt().setFromUnitVectors(M,w.clone().normalize());if(C>=2){p.set(-w.y,w.x,0),p.lengthSq()<1e-4&&p.set(0,-w.z,w.y),p.normalize().multiplyScalar(a*.95);for(const P of[-1,1]){const D=new ce(d,F);D.position.copy(z).addScaledVector(p,P),D.quaternion.copy(E),D.scale.set(a*.66,T,a*.66),i.add(D)}}else{const P=new ce(d,F);P.position.copy(z),P.quaternion.copy(E),P.scale.set(a,T,a),i.add(P)}}return i}function ds(l,e=!0){const t=new me,i=e?l.atoms:l.heavyAtoms,s=e?l.bonds:l.heavyBonds,a=ei(i,s,{carbonColor:5691634,atomScale:1.08,bondRadius:.14,emissiveTint:861752,emissiveIntensity:.2});t.add(a);const o=new Le(3.8,32,24),c=new at({color:4381173,transparent:!0,opacity:.055,depthWrite:!1}),n=new ce(o,c);return t.add(n),{root:t,dispose:()=>ht(t)}}function _e(l,e="secondary",t="ribbon"){const i=new me,s=new Se,a=new Float32Array(l.ribbon.positions);s.setAttribute("position",new re(a,3)),s.setIndex(l.ribbon.indices);const o=a.length/3,c=new Float32Array(o*3),n=new re(c,3);s.setAttribute("color",n),s.computeVertexNormals();const r=new ot({vertexColors:!0,roughness:.32,metalness:.1,clearcoat:.48,clearcoatRoughness:.25,side:pt}),d=new ce(s,r);i.add(d);const u=l.ribbon.indices.slice(),y=[],F=l.ribbon.chainIdx;for(let A=0;A<u.length;A+=3){const N=u[A],q=u[A+1],G=u[A+2];F[N]===0&&F[q]===0&&F[G]===0&&y.push(N,q,G)}const M=new me,h=new Map;for(const A of l.caTrace){let N=h.get(A.chainIdx);N||(N=[],h.set(A.chainIdx,N)),N.push(new _(A.xyz[0],A.xyz[1],A.xyz[2]))}for(const[A,N]of h.entries()){if(N.length<3)continue;const q=new Mi(N,!1,"catmullrom",.35),G=new Di(q,Math.min(N.length*4,600),.24,8,!1),Z=new Qe({color:St[A%St.length],roughness:.3,metalness:.18}),V=new ce(G,Z);V.userData.chainIdx=A,M.add(V)}const S=new Le(.42,12,10),w=new Qe({roughness:.28,metalness:.15}),z=new vt(S,w,l.caTrace.length),p=new Ti,m=new K;l.caTrace.forEach((A,N)=>{p.position.set(A.xyz[0],A.xyz[1],A.xyz[2]),p.scale.setScalar(1),p.updateMatrix(),z.setMatrixAt(N,p.matrix),A.ss==="H"?m.setHex(4381173):A.ss==="E"?m.setHex(15100862):m.setHex(9082541),z.setColorAt(N,m)}),z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0),M.add(z),i.add(M);const v=new me,C=new Le(2.65,14,12),L=new ot({color:4381173,transparent:!0,opacity:.16,roughness:.2,metalness:.05,clearcoat:.6,depthWrite:!1}),R=new vt(C,L,l.caTrace.length);l.caTrace.forEach((A,N)=>{p.position.set(A.xyz[0],A.xyz[1],A.xyz[2]),p.scale.setScalar(1),p.updateMatrix(),R.setMatrixAt(N,p.matrix)}),R.instanceMatrix.needsUpdate=!0,v.add(R),i.add(v);let T=null;if(l.ligand&&l.ligand.atoms.length>0){T=ei(l.ligand.atoms,l.ligand.bonds,{carbonColor:6936736,atomScale:1.12,bondRadius:.16,emissiveTint:1457452,emissiveIntensity:.32});const A=l.ligand.atoms.reduce((V,j)=>V+j.x,0)/l.ligand.atoms.length,N=l.ligand.atoms.reduce((V,j)=>V+j.y,0)/l.ligand.atoms.length,q=l.ligand.atoms.reduce((V,j)=>V+j.z,0)/l.ligand.atoms.length,G=new _i(6936736,1.8,16,1.6);G.position.set(A,N,q),T.add(G);const Z=new ce(new Le(3.6,24,18),new at({color:6936736,transparent:!0,opacity:.075,depthWrite:!1}));Z.position.set(A,N,q),T.add(Z),i.add(T)}let E=null;if(l.activeSite){E=new me;const A=new Le(.75,18,14),N=new ot({color:16103489,emissive:16103489,emissiveIntensity:.38,roughness:.25});for(const q of l.activeSite.keyResidues){const G=new ce(A,N);G.position.set(q.xyz[0],q.xyz[1],q.xyz[2]),E.add(G)}for(const q of l.activeSite.vectors){const G=[new _(q.from[0],q.from[1],q.from[2]),new _(q.to[0],q.to[1],q.to[2])],Z=new Se().setFromPoints(G),V=new Wt({color:16103489,dashSize:.45,gapSize:.28}),j=new ct(Z,V);j.computeLineDistances(),E.add(j)}i.add(E)}const P=A=>{const N=l.ribbon.ss,q=l.ribbon.u,G=l.ribbon.chainIdx,Z=new K;for(let V=0;V<o;V++){if(A==="secondary"){const j=N[V]??0;Z.copy(pi[j]??pi[0])}else if(A==="subunit"){const j=G[V]??0;Z.copy(St[j%St.length])}else cs(q[V]??0,Z);n.setXYZ(V,Z.r,Z.g,Z.b)}n.needsUpdate=!0},D=A=>{A==="ribbon"?(d.visible=!0,r.transparent=!1,r.opacity=1,M.visible=!1,v.visible=!1):A==="backbone"?(d.visible=!1,M.visible=!0,v.visible=!1):A==="surface"&&(d.visible=!0,r.transparent=!0,r.opacity=.72,M.visible=!1,v.visible=!0)},B=A=>{s.setIndex(A?y:u),s.computeBoundingSphere(),M.children.forEach(N=>{typeof N.userData.chainIdx=="number"&&(N.visible=!A||N.userData.chainIdx===0)})};return P(e),D(t),{root:i,ribbonMesh:d,backboneGroup:M,surfaceGroup:v,ligandGroup:T,activeSiteGroup:E,data:l,setRepresentation:D,setColorMode:P,setSingleChainOnly:B,dispose:()=>ht(i)}}const ps={nature:{color:"#42D9F5",bg:"rgba(66, 217, 245, 0.11)",border:"rgba(66, 217, 245, 0.36)"},proteindt:{color:"#8889FF",bg:"rgba(119, 120, 255, 0.14)",border:"rgba(119, 120, 255, 0.42)"},review:{color:"#B6BECB",bg:"rgba(146, 153, 166, 0.14)",border:"rgba(146, 153, 166, 0.38)"},310:{color:"#E66BBE",bg:"rgba(230, 107, 190, 0.13)",border:"rgba(230, 107, 190, 0.4)"},positive:{color:"#69D8A0",bg:"rgba(105, 216, 160, 0.12)",border:"rgba(105, 216, 160, 0.38)"},amber:{color:"#F5B841",bg:"rgba(245, 184, 65, 0.12)",border:"rgba(245, 184, 65, 0.38)"}};function Ie(l,e){const t={experimental:"Experimentally Validated",computational:"Computational Prediction (In Silico)",conceptual:"Conceptual Illustration",critical:"Critical Methodological Analysis"},i={experimental:"#69D8A0",computational:"#E66BBE",conceptual:"#42D9F5",critical:"#F5B841"};return`
    <span class="evidence-badge ${l}">
      <span style="width:7px;height:7px;border-radius:50%;background:${i[l]};box-shadow:0 0 8px ${i[l]}"></span>
      <span>${e??t[l]}</span>
    </span>
  `}function de(l){const e=ps[l.accent],t=(l.badges??[]).map(i=>Ie(i.type,i.text)).join("");return`
    <header class="slide-header">
      <div class="slide-header-right">
        <div class="section-pill" style="--pill-color:${e.color};--pill-bg:${e.bg};--pill-border:${e.border}">
          <span class="section-pill-dot"></span>
          <span>${l.sectionFa}</span>
        </div>
        <h1 class="slide-title-fa">${l.titleFa}</h1>
        ${l.subtitleFa?`<p class="slide-subtitle-fa">${l.subtitleFa}</p>`:""}
      </div>
      <div class="slide-header-left">
        ${t}
      </div>
    </header>
  `}function pe(l,e,t=20){const i=String(e).padStart(2,"0"),s=String(t).padStart(2,"0");return`
    <footer class="slide-footer">
      <div class="slide-source">${l}</div>
      <div class="slide-page-num">${i} / ${s}</div>
    </footer>
  `}function ki(l){const e=document.createElement("div");e.className="mol-toolbar interactive-el",Object.assign(e.style,l.positionStyle);let t=l.initialRepr??"ribbon",i=null,s=l.initialColor??"secondary",a=null,o=!1;e.innerHTML=`
    <button class="mol-btn" data-repr="ribbon">Ribbon</button>
    <button class="mol-btn" data-repr="backbone">Backbone</button>
    <button class="mol-btn" data-repr="surface">Pocket Surface</button>
    <span class="mol-sep"></span>
    <button class="mol-btn" data-col="secondary">Helix/Sheet</button>
    <button class="mol-btn" data-col="chain-gradient">N→C Spectrum</button>
    ${l.allowSubunitColor?'<button class="mol-btn" data-col="subunit">4 Subunits</button>':""}
    ${l.pocketCamera?`<span class="mol-sep"></span>
           <button class="mol-btn" data-act="pocket">Zoom Active Site</button>`:`<span class="mol-sep"></span>
           <button class="mol-btn" data-act="reset">Reset View</button>`}
  `;const c=()=>{const n=i??t,r=a??s;l.assembly.setRepresentation(n),l.assembly.setColorMode(r),e.querySelectorAll("button[data-repr]").forEach(u=>{u.classList.toggle("active",u.dataset.repr===n)}),e.querySelectorAll("button[data-col]").forEach(u=>{u.classList.toggle("active-magenta",u.dataset.col===r)});const d=e.querySelector('button[data-act="pocket"]');d&&(d.classList.toggle("active",o),d.textContent=o?"Overview":"Zoom Active Site")};return c(),e.querySelectorAll("button[data-repr]").forEach(n=>{const r=n.dataset.repr;n.addEventListener("pointerenter",()=>{i=r,c()}),n.addEventListener("pointerleave",()=>{i=null,c()})}),e.querySelectorAll("button[data-col]").forEach(n=>{const r=n.dataset.col;n.addEventListener("pointerenter",()=>{a=r,c()}),n.addEventListener("pointerleave",()=>{a=null,c()})}),e.addEventListener("click",n=>{const r=n.target.closest("button");if(!r)return;n.stopPropagation();const d=r.dataset.repr,u=r.dataset.col,y=r.dataset.act;d?(t=d,i=null,c()):u?(s=u,a=null,c()):y==="pocket"&&l.pocketCamera?(o=!o,l.sceneManager.flyTo(o?l.pocketCamera:l.defaultCamera),c()):y==="reset"&&(o=!1,l.sceneManager.flyTo(l.defaultCamera),c())}),l.parent.appendChild(e),e}class hs{index=1;totalSteps=1;currentStep=0;toolbarEl=null;assembly=null;mode="video";switchToken=0;mounted=!1;entrance=null;cardHover=null;captionHover=null;async mount(e,t){this.mounted=!0,this.currentStep=0,this.mode="video",this.switchToken=0,t.setAmbientGlow({x:"28%",y:"50%",color:"rgba(66, 217, 245, 0.14)",x2:"82%",y2:"24%",color2:"rgba(230, 107, 190, 0.08)"}),t.videoLayer.playVideo(Pe("assets/videos/3d_hero_orbit.mp4"),{loop:!0,poster:Pe("assets/images/hero_poster.jpg"),opacity:.94}),e.innerHTML=`
      <div class="slide-root" style="padding:56px 88px 64px">
        <!-- Directional vignette so right-side Persian hero typography has crisp contrast over video -->
        <div class="s01-vignette" style="position:absolute;inset:0;pointer-events:none;z-index:0;background:linear-gradient(270deg, rgba(8,11,18,0.96) 0%, rgba(8,11,18,0.86) 44%, rgba(8,11,18,0.28) 72%, rgba(8,11,18,0.48) 100%)"></div>

        <!-- Top Metadata Bar -->
        <div style="position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;width:100%">
          <div class="section-pill" style="margin:0;--pill-color:#42D9F5;--pill-bg:rgba(66,217,245,0.11);--pill-border:rgba(66,217,245,0.38)">
            <span class="section-pill-dot"></span>
            <span>سمینار علمی · زیست‌شناسی محاسباتی و مهندسی پروتئین</span>
          </div>

          <div style="display:flex;align-items:center;gap:12px;direction:ltr" class="interactive-el">
            <span id="s01-prov-badge">
              ${Ie("computational","M6G92 Render · 310.ai (In Silico)")}
            </span>
            <button id="s01-toggle-3d" class="mol-btn" style="border:1px solid rgba(66,217,245,0.45);background:rgba(10,16,28,0.85);color:#42D9F5;padding:7px 15px;font-size:13px">
              Explore Live 3D Homolog (PDB 1Q7B)
            </button>
          </div>
        </div>

        <!-- Main Hero Typography (Right Aligned) -->
        <div style="position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;flex:1">
          <div class="s01-hero-copy" style="max-width:940px;text-align:right;direction:rtl">
            <h1 class="hero-title-fa s01-anim" style="margin:0 0 18px 0;font-size:72px;line-height:1.16;white-space:nowrap">
              طراحی پروتئین با هوش مصنوعی
            </h1>
            <div class="s01-anim" style="font-size:40px;font-weight:500;color:#42D9F5;margin-bottom:24px;line-height:1.35;white-space:nowrap">
              از توالی تا عملکرد تأییدشده
            </div>
            <div class="s01-anim en-block" style="white-space:nowrap;font-size:23px;font-weight:500;color:#B8C3D6;letter-spacing:-0.01em;margin-bottom:26px;border-right:3px solid rgba(66,217,245,0.55);padding-right:18px">
              AI-Driven Protein Design: From Sequence to Validated Function
            </div>

            <!-- Academic credit plaque: professor + university -->
            <div class="s01-anim s01-credit">
              <div class="s01-credit-emblem" aria-hidden="true">
                <svg viewBox="0 0 64 64" width="46" height="46" fill="none" stroke-linecap="round">
                  <defs>
                    <linearGradient id="s01-helix-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stop-color="#63A0FF"/><stop offset="0.55" stop-color="#A68AFF"/><stop offset="1" stop-color="#FF8FD2"/>
                    </linearGradient>
                  </defs>
                  <path d="M20 6 C 46 18, 18 30, 44 42 S 30 58, 44 60" stroke="url(#s01-helix-g)" stroke-width="5.5"/>
                  <path d="M44 6 C 18 18, 46 30, 20 42 S 34 58, 20 60" stroke="url(#s01-helix-g)" stroke-width="5.5" opacity="0.62"/>
                </svg>
              </div>

              <div class="s01-credit-block">
                <div class="s01-credit-label">استاد</div>
                <div class="s01-credit-name">خانم فاطمه ایمانی</div>
              </div>

              <div class="s01-credit-sep"></div>

              <div class="s01-credit-block">
                <div class="s01-credit-label">دانشگاه</div>
                <div class="s01-credit-uni">دانشگاه آزاد اسلامی <span class="s01-credit-branch">واحد تبریز</span></div>
              </div>
            </div>

            <!-- Central Scientific Framing Cards -->
            <div class="s01-anim" style="display:grid;grid-template-columns:repeat(2, 1fr);gap:14px;max-width:860px">
              <div class="sci-panel s01-card interactive-el" style="padding:16px 20px;--panel-accent:#42D9F5">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <span style="width:9px;height:9px;border-radius:50%;background:#42D9F5;box-shadow:0 0 8px #42D9F5"></span>
                  <span class="ltr" style="font-size:14px;font-weight:700;color:#42D9F5">Nature 2023 · Yeh et al.</span>
                </div>
                <div style="font-size:16.5px;color:#E2E8F4;line-height:1.5">
                  طراحی از صفر آنزیم نورزا (<bdi class="ltr-inline">LuxSit</bdi>) با تأیید آزمایشگاهی
                </div>
              </div>

              <div class="sci-panel s01-card interactive-el" style="padding:16px 20px;--panel-accent:#7778FF;--panel-glow:rgba(119,120,255,0.18)">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <span style="width:9px;height:9px;border-radius:50%;background:#7778FF;box-shadow:0 0 8px #7778FF"></span>
                  <span class="ltr" style="font-size:14px;font-weight:700;color:#9394FF">ProteinDT 2025 · Liu et al.</span>
                </div>
                <div style="font-size:16.5px;color:#E2E8F4;line-height:1.5">
                  چارچوب هم‌ترازی متن و پروتئین روی ۴۴۱٬۰۱۳ جفت
                </div>
              </div>

              <div class="sci-panel s01-card interactive-el" style="padding:16px 20px;--panel-accent:#9299A6;--panel-glow:rgba(146,153,166,0.16)">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <span style="width:9px;height:9px;border-radius:50%;background:#9299A6"></span>
                  <span class="ltr" style="font-size:14px;font-weight:700;color:#C0C7D4">Review 2025 · Wen et al.</span>
                </div>
                <div style="font-size:16.5px;color:#E2E8F4;line-height:1.5">
                  جمع‌بندی چهار خانواده‌ی مدل‌های مولد با شواهد تجربی
                </div>
              </div>

              <div class="sci-panel s01-card interactive-el" style="padding:16px 20px;--panel-accent:#E66BBE;--panel-glow:rgba(230,107,190,0.18)">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <span style="width:9px;height:9px;border-radius:50%;background:#E66BBE;box-shadow:0 0 8px #E66BBE"></span>
                  <span class="ltr" style="font-size:14px;font-weight:700;color:#F085CE">310.ai EC Repository</span>
                </div>
                <div style="font-size:16.5px;color:#E2E8F4;line-height:1.5">
                  بررسی موردی <bdi class="ltr-inline">M6G92</bdi> و تحلیل ۶٬۵۹۰ رکورد محاسباتی
                </div>
              </div>
            </div>
          </div>

          <!-- Left Molecular Caption Callout -->
          <div id="s01-left-caption" class="sci-panel s01-anim interactive-el" style="align-self:flex-end;margin-bottom:24px;padding:14px 18px;max-width:440px;direction:ltr;text-align:left;--panel-accent:#E66BBE;--panel-glow:rgba(230,107,190,0.18);background:rgba(8,11,18,0.78)">
            <div style="font-family:var(--font-en);font-size:12.5px;font-weight:700;color:#E66BBE;margin-bottom:4px">
              VISUALIZATION PROVENANCE · M6G92 (310.ai)
            </div>
            <div style="font-family:var(--font-en);font-size:13px;color:#CBD4E4;line-height:1.45">
              AI-designed oxidoreductase candidate (<span style="color:#F4F6FA;font-weight:600">EC 1.1.1.100</span>, 247 aa, pLDDT 98.3) with docked NAD(+). Computational model — not experimentally tested.
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div style="position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;padding-top:14px;border-top:1px solid rgba(255,255,255,0.08);direction:ltr">
          <div style="font-family:var(--font-en);font-size:14px;color:#7F8BA3">
            Use <strong style="color:#CBD4E4">Arrow Keys / Space</strong> to advance · <strong style="color:#CBD4E4">Escape</strong> for 20-slide overview · <strong style="color:#CBD4E4">N</strong> for speaker notes
          </div>
          <div class="slide-page-num">01 / 20</div>
        </div>
      </div>
    `,this.entrance=le(e.querySelectorAll(".s01-anim"),{y:22,opacity:0,duration:.75,stagger:.1,ease:"power3.out"},t.reducedMotion),this.cardHover=se({cards:e.querySelectorAll(".s01-card"),entrance:this.entrance,dimSiblings:!0});const i=e.querySelector("#s01-left-caption");i&&(this.captionHover=se({cards:[i],entrance:this.entrance,dimSiblings:!1}));const s=e.querySelector("#s01-toggle-3d"),a=e.querySelector("#s01-prov-badge"),o=e.querySelector(".s01-vignette");s?.addEventListener("click",async c=>{c.stopPropagation();const n=++this.switchToken;this.mode==="video"?(this.mode="3d",t.videoLayer.hideVideo(),o&&(o.style.background="radial-gradient(640px 520px at 26% 50%, rgba(66,217,245,0.12), transparent 72%)"),s.textContent="Return to M6G92 Orbit Video",a&&(a.innerHTML=Ie("experimental","PDB 1Q7B · Natural EC 1.1.1.100 X-Ray Homolog")),i&&(i.style.setProperty("--panel-accent","#69D8A0"),i.innerHTML=`
            <div style="font-family:var(--font-en);font-size:12.5px;font-weight:700;color:#69D8A0;margin-bottom:4px">
              LIVE 3D X-RAY REFERENCE · RCSB PDB 1Q7B
            </div>
            <div style="font-family:var(--font-en);font-size:13px;color:#CBD4E4;line-height:1.45">
              Natural <em>E. coli</em> FabG 3-oxoacyl-[ACP] reductase (EC 1.1.1.100, Chain A, 247 aa) + bound dinucleotide cofactor. Drag to orbit or zoom active site.
            </div>
          `),await this.mountInteractiveHomolog(e.querySelector(".slide-root"),t,n)):(this.mode="video",this.toolbarEl?.remove(),this.toolbarEl=null,this.assembly=null,t.sceneManager.clearStage(),t.videoLayer.playVideo(Pe("assets/videos/3d_hero_orbit.mp4"),{loop:!0,poster:Pe("assets/images/hero_poster.jpg"),opacity:.94}),o&&(o.style.background="linear-gradient(270deg, rgba(8,11,18,0.96) 0%, rgba(8,11,18,0.86) 44%, rgba(8,11,18,0.28) 72%, rgba(8,11,18,0.48) 100%)"),s.textContent="Explore Live 3D Homolog (PDB 1Q7B)",a&&(a.innerHTML=Ie("computational","M6G92 Render · 310.ai (In Silico)")),i&&(i.style.setProperty("--panel-accent","#E66BBE"),i.innerHTML=`
            <div style="font-family:var(--font-en);font-size:12.5px;font-weight:700;color:#E66BBE;margin-bottom:4px">
              VISUALIZATION PROVENANCE · M6G92 (310.ai)
            </div>
            <div style="font-family:var(--font-en);font-size:13px;color:#CBD4E4;line-height:1.45">
              AI-designed oxidoreductase candidate (<span style="color:#F4F6FA;font-weight:600">EC 1.1.1.100</span>, 247 aa, pLDDT 98.3) with docked NAD(+). Computational model — not experimentally tested.
            </div>
          `))})}async mountInteractiveHomolog(e,t,i){const s=await Ce.loadProtein("1q7b");if(!this.mounted||this.mode!=="3d"||i!==this.switchToken)return;t.sceneManager.clearStage(),this.assembly=_e(s,"chain-gradient","ribbon");const a={distance:t.sceneManager.fitDistance(s.radius,560),target:[0,0,0],rotX:.18,rotY:-.4,screenCenterX:470,screenCenterY:480,autoRotateSpeed:.18},o=s.activeSite?{distance:t.sceneManager.fitDistance(14,620),target:s.activeSite.center,rotX:.1,rotY:.35,screenCenterX:470,screenCenterY:480,autoRotateSpeed:.08}:void 0;t.sceneManager.setCameraImmediate(a),t.sceneManager.mountObject(this.assembly.root,()=>this.assembly?.dispose(),void 0,s.meta.title),t.sceneManager.setInteractive(!0),this.toolbarEl?.remove(),this.toolbarEl=ki({parent:e,assembly:this.assembly,sceneManager:t.sceneManager,defaultCamera:a,pocketCamera:o,positionStyle:{left:"88px",bottom:"245px"},initialColor:"chain-gradient"})}resetHover(){this.cardHover?.reset(),this.captionHover?.reset()}unmount(){this.mounted=!1,this.cardHover?.destroy(),this.cardHover=null,this.captionHover?.destroy(),this.captionHover=null,this.entrance?.kill(),this.entrance=null,this.toolbarEl?.remove(),this.toolbarEl=null,this.assembly=null}}const us=["MSDLKGKTALVTGASRGI","GLAIARAFAAEGAKVVVS","GRNEEKLAEIAAEIGADG"],gs=[{id:"vae",name:"VAE",subtitleEn:"Variational Autoencoder",accent:"#7778FF",descFa:"رمزگذار توالی را به فضای نهفته فشرده می‌کند و رمزگشا از آن توالی تازه می‌سازد",verifiedModel:"ProT-VAE",verifiedFa:"توالی‌های جدید PAH با بیش از ۱۰۰ جهش و تا ۲.۵ برابر فعالیت نسبت به PAH انسانی"},{id:"gan",name:"GAN",subtitleEn:"Generative Adversarial Network",accent:"#42D9F5",descFa:"مولد و تمایزدهنده در یک بازی رقابتی؛ مولد توالی‌های واقع‌نما می‌سازد",verifiedModel:"ProteinGAN",verifiedFa:"۲۴٪ توالی‌های تولیدشده‌ی مالات دهیدروژناز محلول و فعال بودند، حتی با بیش از ۱۰۰ جهش"},{id:"diffusion",name:"Diffusion",subtitleEn:"Denoising Structure / Sequence Diffusion",accent:"#E66BBE",descFa:"داده را تدریجی نویزی می‌کند و بازگشت از نویز به ساختار یا توالی را می‌آموزد",verifiedModel:"RFdiffusion و Chroma",verifiedFa:"تولید ستون فقرات پروتئین؛ Chroma تا بیش از ۳۰۰۰ residue"},{id:"plm",name:"Protein language models",subtitleEn:"Autoregressive Sequence Transformers",accent:"#9299A6",descFa:"توالی را مثل متن و توکن‌به‌توکن تولید می‌کنند",verifiedModel:"ProGen و ZymCTRL",verifiedFa:"آنزیم‌های فعال با شباهت کم به نمونه‌های طبیعی"}],hi={columns:[{key:"nature",label:"Nature 2023",color:"#42D9F5",darkText:!0},{key:"proteindt",label:"ProteinDT 2025",color:"#7778FF",darkText:!1},{key:"review",label:"مقاله‌ی مروری 2025",color:"#9299A6",darkText:!0}],rows:[{label:"داده و ورودی",labelEn:"Data & Input",nature:'حدود ۲٬۰۰۰ توالی <bdi class="ltr-inline">NTF2</bdi> طبیعی، ساختار <bdi class="ltr-inline">DTZ</bdi> و داک در حدود ۴٬۰۰۰ پروتئین',proteindt:'۴۴۱٬۰۱۳ جفت متن–پروتئین از <bdi class="ltr-inline">SwissProt</bdi>',review:'<span class="ltr">PDB · UniProt · Pfam · AlphaFold DB</span>'},{label:"الگوریتم‌ها",labelEn:"Algorithms",nature:'<span class="ltr">trRosetta + MCMC · RifGen / RifDock · RosettaDesign · ProteinMPNN</span>',proteindt:'<span class="ltr">ProteinCLAP (InfoNCE / EBM-NCE) · ProteinFacilitator · AR Transformer / ProteinDiff</span>',review:'<span class="ltr">VAE · GAN · Diffusion · Protein LMs</span>'},{label:"ارزیابی",labelEn:"Evaluation",nature:'فیلتر انرژی و هندسه، <bdi class="ltr-inline">AlphaFold2</bdi>، آزمایش در باکتری و محاسبات <bdi class="ltr-inline">DFT</bdi> و <bdi class="ltr-inline">MD</bdi>',proteindt:'<span class="ltr">Retrieval accuracy · ESMFold · DSSP · Rosetta · GNINA · TAPE</span>',review:"فقط مدل‌های دارای اعتبارسنجی آزمایشی؛ فیلتر محاسباتی چندمعیاره"},{label:"خروجی",labelEn:"Output",nature:'<bdi class="ltr-inline">LuxSit</bdi> با ۱۱۷ اسیدآمینه؛ <bdi class="ltr-inline">LuxSit-i</bdi> با <bdi class="ltr-inline">k<sub>cat</sub>/K<sub>m</sub></bdi> برابر <bdi class="ltr-inline">10<sup>6</sup></bdi>',proteindt:'تولید توالی از متن و ۱۲ کار ویرایش <bdi class="ltr-inline">zero-shot</bdi>',review:"آنزیم‌های فعال با شباهت کم به نمونه‌های طبیعی"}]},fs=[{id:"generation",titleFa:"تولید",titleEn:"Generation",accent:"#42D9F5",chips:[{label:"Hallucination + MCMC",source:"nature"},{label:"AR Transformer (T5)",source:"proteindt"},{label:"Protein LM",source:"review"},{label:"ProteinDiff",source:"proteindt"},{label:"Diffusion",source:"review"},{label:"GAN",source:"review"},{label:"VAE",source:"review"}]},{id:"representation",titleFa:"بازنمایی و هم‌ترازی",titleEn:"Representation & Alignment",accent:"#7778FF",chips:[{label:"ProteinFacilitator (MLP)",source:"proteindt"},{label:"InfoNCE / EBM-NCE",source:"proteindt"},{label:"ProteinCLAP",source:"proteindt"},{label:"ProtBERT",source:"proteindt"},{label:"SciBERT",source:"proteindt"}]},{id:"design",titleFa:"طراحی و امتیازدهی",titleEn:"Design & Scoring",accent:"#E66BBE",chips:[{label:"Latent optimization",source:"proteindt"},{label:"RifGen / RifDock",source:"nature"},{label:"RosettaDesign",source:"nature"},{label:"ProteinMPNN",source:"nature"},{label:"SLERP",source:"proteindt"}]},{id:"validation",titleFa:"اعتبارسنجی",titleEn:"Validation",accent:"#69D8A0",chips:[{label:"آزمایش تجربی",isFa:!0,source:"nature"},{label:"AlphaFold2",source:"nature"},{label:"DFT + MD",source:"nature"},{label:"ESMFold",source:"proteindt"},{label:"GNINA",source:"proteindt"},{label:"DSSP",source:"proteindt"}]}],ys=[{stepFa:"۱",titleFa:"انتخاب فولد",titleEn:"Fold Selection",metric:"~4,000",metricLabel:"پروتئین طبیعی داک‌شده",descHtml:'داک <bdi class="ltr-inline">DTZ</bdi> در حدود <strong class="c-nature">۴٬۰۰۰</strong> پروتئین طبیعی؛ خانواده‌ی <bdi class="ltr-inline">NTF2-like</bdi> مناسب‌ترین بود',icon:"search"},{stepFa:"۲",titleFa:"ساخت داربست",titleEn:"Scaffold Generation",metric:"1,615",metricLabel:"داربست تولیدشده",descHtml:'<bdi class="ltr-inline">hallucination</bdi> خانواده‌محور: <strong class="c-nature">۱٬۶۱۵</strong> داربست مشابه <bdi class="ltr-inline">NTF2</bdi> با حفره‌های متنوع (از حدود ۲٬۰۰۰ توالی طبیعی)',icon:"cubes"},{stepFa:"۳",titleFa:"جایگاه فعال",titleEn:"Active-Site Design",metric:"Arg⁺ ··· O⁻",metricLabel:"تثبیت بار منفی DTZ",descHtml:'<bdi class="ltr-inline">RifGen</bdi> و <bdi class="ltr-inline">RifDock</bdi>؛ جایگذاری آرژنین برای تثبیت بار منفی حالت گذار <bdi class="ltr-inline">DTZ</bdi>',icon:"target"},{stepFa:"۴",titleFa:"طراحی توالی",titleEn:"Sequence Design",metric:"MPNN",metricLabel:"بهینه‌سازی توالی و فیلتر",descHtml:'طراحی با <bdi class="ltr-inline">RosettaDesign</bdi> در دور اول و <bdi class="ltr-inline">ProteinMPNN</bdi> در دور دوم، سپس فیلتر <bdi class="ltr-inline">AlphaFold2</bdi>',icon:"dna"},{stepFa:"۵",titleFa:"آزمایش",titleEn:"Experimental Screening",metric:"3 / 7,648",metricLabel:"طراحی فعال در باکتری",descHtml:'<strong class="c-nature">۷٬۶۴۸</strong> طراحی غربالگری شد؛ فقط <strong class="c-positive">۳</strong> مورد در باکتری <bdi class="ltr-inline">E. coli</bdi> فعال بودند',icon:"flask"}],ms=[{stepFa:"۱",tool:"trRosetta + MCMC",purposeEn:"De novo family-wide backbone hallucination",descHtml:'جست‌وجوی <bdi class="ltr-inline">Monte Carlo</bdi> برای تولید <bdi class="ltr-inline">scaffold</bdi>‌های <bdi class="ltr-inline">de novo</bdi>؛ <bdi class="ltr-inline">loss</bdi> بر پایه‌ی <bdi class="ltr-inline">confidence</bdi> شبکه‌ی <bdi class="ltr-inline">trRosetta</bdi>'},{stepFa:"۲",tool:"RifGen / RifDock",purposeEn:"Rotamer interaction field & pocket docking",descHtml:'ساخت <bdi class="ltr-inline">rotamer interaction field</bdi> حول substrate (در مقاله <bdi class="ltr-inline">DTZ</bdi>) و <bdi class="ltr-inline">docking</bdi> آن در <bdi class="ltr-inline">pocket</bdi> <bdi class="ltr-inline">scaffold</bdi>'},{stepFa:"۳",tool:"RosettaDesign → ProteinMPNN",purposeEn:"Inverse folding & sequence optimization",descHtml:'<bdi class="ltr-inline">sequence design</bdi> روی <bdi class="ltr-inline">backbone</bdi> ثابت؛ <bdi class="ltr-inline">ProteinMPNN</bdi> در <bdi class="ltr-inline">stability</bdi>، <bdi class="ltr-inline">solubility</bdi> و دقت بهتر از <bdi class="ltr-inline">RosettaDesign</bdi> عمل کرد'},{stepFa:"۴",tool:"AlphaFold2",purposeEn:"In silico self-consistency filtering (RMSD 1.35 Å on LuxSit)",descHtml:'اعتبارسنجی با <bdi class="ltr-inline">pLDDT</bdi> و <bdi class="ltr-inline">RMSD</bdi> ساختار پیش‌بینی‌شده نسبت به <bdi class="ltr-inline">design model</bdi>'},{stepFa:"۵",tool:"DFT + MD",purposeEn:"Quantum chemical & dynamical mechanism check",descHtml:'بررسی <bdi class="ltr-inline">mechanism</bdi> تثبیت <bdi class="ltr-inline">anion</bdi> و <bdi class="ltr-inline">specificity</bdi> سوبسترا'}],_t=[{id:"round1",categoryEn:"Round 1: DTZ (3 of 7,648)",categoryFa:"دور اول: سوبسترای DTZ (RosettaDesign)",rawPercent:.039,displayPercent:"0.04%",hits:3,total:7648,color:"#42D9F5"},{id:"round2",categoryEn:"Round 2: h-CTZ (2 of 46)",categoryFa:"دور دوم: سوبسترای h-CTZ (ProteinMPNN)",rawPercent:4.35,displayPercent:"4.35%",hits:2,total:46,color:"#69D8A0"}],mt={categories:[{key:"t4",label:"T = 4 (chance 25%)",chance:25},{key:"t10",label:"T = 10 (chance 10%)",chance:10},{key:"t20",label:"T = 20 (chance 5%)",chance:5}],series:[{id:"galactica",name:"Galactica",color:"#6B7487",values:[51.5,29,19]},{id:"chatgpt",name:"ChatGPT",color:"#4B5364",values:[38.5,23,15.5]},{id:"no-fac",name:"ProteinDT AR, no Facilitator",color:"#5052BD",values:[49,27,20]},{id:"with-fac",name:"ProteinDT AR + Facilitator",color:"#8889FF",highlight:!0,values:[97,91,83.5]}]},vs=[{code:"EC 1",nameEn:"1 Oxidoreductases",nameFa:"اکسیدورداکتازها",count:2238},{code:"EC 2",nameEn:"2 Transferases",nameFa:"ترانسفرازها",count:1361},{code:"EC 3",nameEn:"3 Hydrolases",nameFa:"هیدرولازها",count:1070},{code:"EC 4",nameEn:"4 Lyases",nameFa:"لیازها",count:509},{code:"EC 5",nameEn:"5 Isomerases",nameFa:"ایزومرازها",count:441},{code:"EC 6",nameEn:"6 Ligases",nameFa:"لیگازها",count:641},{code:"EC 7",nameEn:"7 Translocases",nameFa:"ترانس‌لوکازها",count:330}],bs=[{num:"[1]",accent:"#42D9F5",tag:"Nature 2023 · Experimental De Novo Design",citation:"A. H.-W. Yeh et al., “De novo design of luciferases using deep learning,” Nature 614, 774–780 (2023).",doi:"doi:10.1038/s41586-023-05696-3",url:"https://doi.org/10.1038/s41586-023-05696-3"},{num:"[2]",accent:"#7778FF",tag:"Nat. Mach. Intell. 2025 · Text-Guided Design",citation:"S. Liu et al., “A text-guided protein design framework,” Nature Machine Intelligence 7, 580–591 (2025).",doi:"doi:10.1038/s42256-025-01011-z",url:"https://doi.org/10.1038/s42256-025-01011-z"},{num:"[3]",accent:"#9299A6",tag:"Curr. Opin. Green Sustain. Chem. 2025 · Review",citation:"S. Wen, W. Zheng, U. T. Bornscheuer, S. Wu, “Generative artificial intelligence for enzyme design: recent advances in models and applications,” Curr. Opin. Green Sustain. Chem. 52, 101010 (2025).",doi:"doi:10.1016/j.cogsc.2025.101010",url:"https://doi.org/10.1016/j.cogsc.2025.101010"},{num:"[4]",accent:"#E66BBE",tag:"310.ai Repository · In Silico Records",citation:"310.ai, Molecular Programming (MP) model and EC repository, https://310.ai (accessed Nov 2026); record export protein_ec_annotations.csv.",doi:"https://310.ai",url:"https://310.ai"}],xs=["chain-video","levels-2hhb","enzyme-1hew"],ws={"chain-video":0,"levels-2hhb":1,"enzyme-1hew":2};class Fs{index=2;totalSteps=3;currentStep=0;mounted=!1;ctx=null;rootEl=null;stepCtrl=null;targetTab="chain-video";renderedTab=null;switchToken=0;activeAssembly=null;committedLvl=4;hoveredLvl=null;async mount(e,t){this.mounted=!0,this.ctx=t,this.currentStep=0,this.targetTab="chain-video",this.renderedTab="chain-video",this.switchToken=0,this.committedLvl=4,this.hoveredLvl=null,t.setAmbientGlow({x:"27%",y:"54%",color:"rgba(66, 217, 245, 0.11)",x2:"80%",y2:"22%",color2:"rgba(105, 216, 160, 0.06)"});const i=us.map(o=>`<div>${o.split("").map(n=>{const r="AILMFWV".includes(n);return`<span style="color:${"KRDE".includes(n)?"#42D9F5":r?"#E2E8F4":"#9394FF"}">${n}</span>`}).join("")}</div>`).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقدمه · مبانی مولکولی",titleFa:"پروتئین چیست؟",subtitleFa:"زنجیره‌ای از ۲۰ نوع اسیدآمینه که به شکل سه‌بعدی تا می‌شود و کار مشخصی انجام می‌دهد",accent:"nature",badges:[{type:"conceptual",text:"Chain Video: Educational Illustration"},{type:"experimental",text:"3D Models: PDB 2HHB & 1HEW"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:820px 1fr;gap:34px;direction:ltr;align-items:stretch">
          <!-- Left Interactive Visual Stage -->
          <div class="sci-panel interactive-el mol-viewport-panel" style="display:flex;flex-direction:column;justify-content:space-between;padding:18px 20px;--panel-accent:#42D9F5;background:rgba(10,15,25,0.62)">
            <!-- Top Mode Switcher -->
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;z-index:5">
              <div style="display:inline-flex;gap:6px;background:rgba(6,9,16,0.85);padding:5px;border-radius:999px;border:1px solid rgba(255,255,255,0.12)">
                <button class="mol-btn s02-tab active" data-tab="chain-video">1 · Chain Growth (Video)</button>
                <button class="mol-btn s02-tab" data-tab="levels-2hhb">2 · 4 Levels (3D 2HHB)</button>
                <button class="mol-btn s02-tab" data-tab="enzyme-1hew">3 · Catalysis (3D 1HEW)</button>
              </div>
              <span id="s02-stage-tag" style="font-family:var(--font-en);font-size:12px;color:#42D9F5;font-weight:600">
                M6G92 N→C Chain Illustration
              </span>
            </div>

            <!-- Central Viewport Area (transparent so Three.js or contained Video shows cleanly) -->
            <div id="s02-viewport-box" style="flex:1;position:relative;margin:12px 0;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.07);background:radial-gradient(circle at 50% 50%, rgba(18,28,48,0.45), rgba(6,9,15,0.2))">
              <video
                id="s02-inline-video"
                src="${Pe("assets/videos/3d_chain_growth.mp4")}"
                poster="${Pe("assets/images/chain_poster.jpg")}"
                autoplay
                loop
                muted
                playsinline
                style="width:100%;height:100%;object-fit:cover;display:block"
              ></video>

              <!-- Sub-controls for 2HHB 4 Structural Levels -->
              <div id="s02-level-bar" style="display:none;position:absolute;bottom:14px;left:50%;transform:translateX(-50%);gap:6px;padding:6px 10px;border-radius:999px;background:rgba(8,11,18,0.9);border:1px solid rgba(255,255,255,0.16)">
                <button class="mol-btn s02-lvl" data-lvl="1">Primary (Cα)</button>
                <button class="mol-btn s02-lvl" data-lvl="2">Secondary (α/β)</button>
                <button class="mol-btn s02-lvl" data-lvl="3">Tertiary (1 Chain)</button>
                <button class="mol-btn s02-lvl active" data-lvl="4">Quaternary (α₂β₂)</button>
              </div>
            </div>

            <!-- Honest Scientific Caption Bar -->
            <div id="s02-caption" style="font-family:var(--font-fa);font-size:14.5px;color:#A6B0C0;direction:rtl;text-align:right;display:flex;justify-content:space-between;align-items:center">
              <span>نمایش آموزشی رشد گام‌به‌گام زنجیره‌ی اسیدآمینه‌ای (شبیه‌سازی دینامیک واقعی تاخوردگی نیست)</span>
              <span class="ltr" style="font-size:12px;color:#707C91">Drag 3D models to orbit</span>
            </div>
          </div>

          <!-- Right Conceptual Cards (RTL) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:18px;direction:rtl;text-align:right">
            <!-- Step 1: Sequence -->
            <div class="sci-panel s02-card step-focus interactive-el" data-step="0" style="padding:22px 26px;--panel-accent:#42D9F5;cursor:pointer">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="step-disc" style="--disc-color:#42D9F5;width:36px;height:36px;font-size:18px">۱</span>
                  <h2 style="margin:0;font-size:25px;font-weight:700;color:#F4F6FA">توالی اسیدآمینه</h2>
                </div>
                <span class="ltr" style="font-size:12.5px;color:#42D9F5;font-weight:600">N-terminus · M6G92 (aa 1–54)</span>
              </div>
              <div class="mono-seq" style="background:rgba(6,9,16,0.78);border:1px solid rgba(66,217,245,0.24);border-radius:8px;padding:12px 18px;font-size:19px;font-weight:700;line-height:1.55;margin-bottom:10px">
                ${i}
              </div>
              <p style="margin:0;font-size:18px;color:#CBD4E4;line-height:1.55">
                ترتیب اسیدآمینه‌ها تعیین می‌کند پروتئین چگونه تا شود و چه کارکردی بیابد.
              </p>
            </div>

            <!-- Step 2: Four Structural Levels -->
            <div class="sci-panel s02-card interactive-el" data-step="1" style="padding:22px 26px;--panel-accent:#7778FF;--panel-glow:rgba(119,120,255,0.18);cursor:pointer">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
                <span class="step-disc" style="--disc-color:#7778FF;--disc-glow:rgba(119,120,255,0.4);color:#F4F6FA;width:36px;height:36px;font-size:18px">۲</span>
                <h2 style="margin:0;font-size:25px;font-weight:700;color:#F4F6FA">چهار سطح ساختار</h2>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 20px;font-size:17.5px;line-height:1.55;color:#DCE3F0">
                <div><strong style="color:#42D9F5">اولیه:</strong> رشته‌ی خطی اسیدآمینه‌ها</div>
                <div><strong style="color:#E66BBE">ثانویه:</strong> مارپیچ آلفا (<bdi class="ltr-inline">α</bdi>) و صفحه‌ی بتا (<bdi class="ltr-inline">β</bdi>)</div>
                <div><strong style="color:#9394FF">سوم:</strong> شکل سه‌بعدی کامل یک زنجیره</div>
                <div><strong style="color:#69D8A0">چهارم:</strong> کنار هم قرار گرفتن چند زنجیره</div>
              </div>
            </div>

            <!-- Step 3: Function & Enzyme Catalysis -->
            <div class="sci-panel s02-card interactive-el" data-step="2" style="padding:22px 26px;--panel-accent:#69D8A0;--panel-glow:rgba(105,216,160,0.18);cursor:pointer">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
                <span class="step-disc" style="--disc-color:#69D8A0;--disc-glow:rgba(105,216,160,0.4);width:36px;height:36px;font-size:18px">۳</span>
                <h2 style="margin:0;font-size:25px;font-weight:700;color:#F4F6FA">عملکرد و کاتالیز</h2>
              </div>
              <p style="margin:0;font-size:18.5px;color:#DCE3F0;line-height:1.65">
                شکل سه‌بعدی، <strong style="color:#69D8A0">جیب فعال</strong> را می‌سازد؛ آنزیم‌ها با این جیب واکنش‌های زیستی را تسریع می‌کنند و در مقاله‌ی مروری <strong style="color:#F4F6FA">«تراشه‌های اصلی»</strong> تولید زیستی نامیده می‌شوند.
              </p>
            </div>
          </div>
        </div>

        ${pe("Sources: Liu et al., Nat. Mach. Intell. 2025 · Wen et al., Curr. Opin. Green Sustain. Chem. 2025 · Sample sequence: M6G92 (310.ai) · 3D Refs: PDB 2HHB & 1HEW",2)}
      </div>
    `,this.rootEl=e,t.videoLayer.hideVideo();const s=e.querySelectorAll(".s02-card"),a=le(s,{x:24,opacity:0,duration:.65,stagger:.1,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:a,onRender:(o,c)=>{this.renderActiveStep(o,c.isHovering)}}),s.forEach(o=>{const c=Number(o.dataset.step??"0");this.stepCtrl.bindElement(o,c,{onCommit:n=>{this.currentStep=n,t.onStepChange(n,this.totalSteps)}})}),e.querySelectorAll(".s02-tab").forEach(o=>{const c=o.dataset.tab??"chain-video",n=ws[c];this.stepCtrl.bindElement(o,n,{onCommit:r=>{this.currentStep=r,t.onStepChange(r,this.totalSteps)}})}),e.querySelectorAll(".s02-lvl").forEach(o=>{o.setAttribute("data-focus-parent-step","1");const c=Number(o.dataset.lvl);o.addEventListener("pointerenter",()=>{this.hoveredLvl=c,this.apply2hhbStructuralLevel(this.hoveredLvl??this.committedLvl)}),o.addEventListener("pointerleave",()=>{this.hoveredLvl=null,this.apply2hhbStructuralLevel(this.committedLvl)}),o.addEventListener("click",n=>{n.stopPropagation(),this.committedLvl=c,this.hoveredLvl=null,this.apply2hhbStructuralLevel(this.committedLvl)})}),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.hoveredLvl=null,this.renderedTab==="levels-2hhb"&&this.apply2hhbStructuralLevel(this.committedLvl),this.stepCtrl?.resetHover()}renderActiveStep(e,t){if(!this.rootEl)return;this.rootEl.querySelectorAll(".s02-card").forEach((a,o)=>{const c=o===e,n=o!==e&&(t||e>0);a.classList.toggle("step-focus",c),a.classList.toggle("step-dimmed",n)});const s=xs[e]??"chain-video";this.switchViewerTab(s)}async switchViewerTab(e){if(this.targetTab=e,!this.rootEl||!this.ctx||(this.rootEl.querySelectorAll(".s02-tab").forEach(n=>{n.classList.toggle("active",n.dataset.tab===e)}),this.renderedTab===e&&(e==="chain-video"||this.activeAssembly!==null)))return;const t=++this.switchToken,i=this.rootEl.querySelector("#s02-inline-video"),s=this.rootEl.querySelector("#s02-viewport-box"),a=this.rootEl.querySelector("#s02-level-bar"),o=this.rootEl.querySelector("#s02-caption"),c=this.rootEl.querySelector("#s02-stage-tag");if(e==="chain-video"){this.ctx.sceneManager.clearStage(),this.activeAssembly=null,this.renderedTab="chain-video",i&&(i.style.display="block",i.play().catch(()=>{})),s&&(s.style.background="rgba(6,9,15,0.85)"),a&&(a.style.display="none"),c&&(c.textContent="M6G92 N→C Chain Illustration"),o&&(o.innerHTML=`
          <span>نمایش آموزشی رشد گام‌به‌گام زنجیره‌ی اسیدآمینه‌ای (شبیه‌سازی دینامیک واقعی تاخوردگی نیست)</span>
          <span class="ltr" style="font-size:12px;color:#707C91">Educational Concept</span>
        `);return}if(i&&(i.pause(),i.style.display="none"),s&&(s.style.background="transparent"),e==="levels-2hhb"){a&&(a.style.display="inline-flex"),c&&(c.textContent="RCSB PDB 2HHB · 1.74 Å X-Ray"),o&&(o.innerHTML=`
          <span>هموگلوبین انسانی (<bdi class="ltr-inline">PDB 2HHB</bdi>): تترامر چهارزنجیره‌ای <bdi class="ltr-inline">α₂β₂</bdi> همراه با ۴ گروه هِم (<bdi class="ltr-inline">HEM</bdi>)</span>
          <span class="ltr" style="font-size:12px;color:#42D9F5">Hover or click 1–4 Levels above</span>
        `);const n=await Ce.loadProtein("2hhb");if(!this.mounted||!this.ctx||t!==this.switchToken||this.targetTab!=="levels-2hhb")return;this.ctx.sceneManager.clearStage(),this.activeAssembly=_e(n,"subunit","ribbon"),this.renderedTab="levels-2hhb",this.ctx.sceneManager.setCameraImmediate({distance:this.ctx.sceneManager.fitDistance(n.radius,600),target:[0,0,0],rotX:.2,rotY:.4,screenCenterX:494,screenCenterY:545,autoRotateSpeed:.18}),this.ctx.sceneManager.setClipFromElement(s),this.ctx.sceneManager.mountObject(this.activeAssembly.root,()=>this.activeAssembly?.dispose(),void 0,n.meta.title),this.ctx.sceneManager.setInteractive(!0),this.apply2hhbStructuralLevel(this.hoveredLvl??this.committedLvl)}else if(e==="enzyme-1hew"){a&&(a.style.display="none"),c&&(c.textContent="RCSB PDB 1HEW · Lysozyme + NAG₃"),o&&(o.innerHTML=`
          <span>کمپلکس تجربی آنزیم لیزوزیم (<bdi class="ltr-inline">PDB 1HEW</bdi>) با سوبسترای <bdi class="ltr-inline">NAG₃</bdi> درون شکاف فعال کاتالیتیک (<bdi class="ltr-inline">Glu35 / Asp52</bdi>)</span>
          <span class="ltr" style="font-size:12px;color:#69D8A0">Experimental Enzyme Cleft</span>
        `);const n=await Ce.loadProtein("1hew");if(!this.mounted||!this.ctx||t!==this.switchToken||this.targetTab!=="enzyme-1hew")return;if(this.ctx.sceneManager.clearStage(),this.activeAssembly=_e(n,"secondary","surface"),this.renderedTab="enzyme-1hew",this.ctx.sceneManager.setCameraImmediate({distance:this.ctx.sceneManager.fitDistance(n.radius*.82,560),target:n.activeSite?n.activeSite.center:[0,0,0],rotX:.14,rotY:-.35,screenCenterX:494,screenCenterY:545,autoRotateSpeed:.14}),this.ctx.sceneManager.setClipFromElement(s),this.ctx.sceneManager.mountObject(this.activeAssembly.root,()=>this.activeAssembly?.dispose(),void 0,n.meta.title),this.ctx.sceneManager.setInteractive(!0),n.activeSite)for(const r of n.activeSite.keyResidues)this.ctx.sceneManager.addPin({id:r.label,xyz:r.xyz,title:r.label,subtitle:r.role,accent:"#F5B841"})}}apply2hhbStructuralLevel(e){!this.rootEl||!this.activeAssembly||(this.rootEl.querySelectorAll(".s02-lvl").forEach(t=>{t.classList.toggle("active",Number(t.dataset.lvl)===e)}),e===1?(this.activeAssembly.setSingleChainOnly(!0),this.activeAssembly.setRepresentation("backbone"),this.activeAssembly.setColorMode("chain-gradient"),this.activeAssembly.ligandGroup&&(this.activeAssembly.ligandGroup.visible=!1)):e===2?(this.activeAssembly.setSingleChainOnly(!0),this.activeAssembly.setRepresentation("ribbon"),this.activeAssembly.setColorMode("secondary"),this.activeAssembly.ligandGroup&&(this.activeAssembly.ligandGroup.visible=!1)):e===3?(this.activeAssembly.setSingleChainOnly(!0),this.activeAssembly.setRepresentation("ribbon"),this.activeAssembly.setColorMode("chain-gradient"),this.activeAssembly.ligandGroup&&(this.activeAssembly.ligandGroup.visible=!0)):(this.activeAssembly.setSingleChainOnly(!1),this.activeAssembly.setRepresentation("ribbon"),this.activeAssembly.setColorMode("subunit"),this.activeAssembly.ligandGroup&&(this.activeAssembly.ligandGroup.visible=!0)))}unmount(){this.mounted=!1,this.stepCtrl?.destroy(),this.stepCtrl=null,this.activeAssembly=null,this.renderedTab=null,this.rootEl=null,this.ctx=null}}function Ss(){const l=new me,e=76,t=44,i=new Xi(t,t,e,e);i.rotateX(-Math.PI/2);const s=i.attributes.position,a=new Float32Array(s.count*3),o=new K,c=(v,C)=>{const L=Math.sin(v*.34)*Math.cos(C*.31)*.65+Math.sin(v*.8+C*.6)*.25,R=7.8*Math.exp(-((v-5.5)**2+(C+2.5)**2)/5.2),T=5.4*Math.exp(-((v+8.5)**2+(C-5)**2)/6.5),E=4.2*Math.exp(-((v-10.5)**2+(C-8.5)**2)/4.2);return L+R+T+E-2.6};for(let v=0;v<s.count;v++){const C=s.getX(v),L=s.getZ(v),R=c(C,L);s.setY(v,R);const T=Math.max(0,Math.min(1,(R+3.2)/9.2));T<.35?o.setRGB(.06+T*.22,.1+T*.32,.2+T*.55):T<.72?o.setHex(7829759).lerp(new K(4381173),(T-.35)/.37):o.setHex(4381173).lerp(new K(6936736),(T-.72)/.28),a[v*3]=o.r,a[v*3+1]=o.g,a[v*3+2]=o.b}i.setAttribute("color",new re(a,3)),i.computeVertexNormals();const n=new Qe({vertexColors:!0,roughness:.45,metalness:.15,transparent:!0,opacity:.55,side:pt}),r=new ce(i,n);l.add(r);const d=new at({vertexColors:!0,wireframe:!0,transparent:!0,opacity:.34}),u=new ce(i,d);u.position.y=.03,l.add(u);const y=260,F=new Float32Array(y*3),M=new Float32Array(y*3);for(let v=0;v<y;v++){const C=Math.sin(v*12.9898)*43758.5453%1,L=Math.sin(v*78.233)*29432.1234%1,R=(Math.abs(C)-.5)*t*.92,T=(Math.abs(L)-.5)*t*.92,E=c(R,T)+.5+v%7*.65;F[v*3]=R,F[v*3+1]=E,F[v*3+2]=T;const D=E>3.2?new K(6936736):new K(4381173);M[v*3]=D.r,M[v*3+1]=D.g,M[v*3+2]=D.b}const h=new Se;h.setAttribute("position",new re(F,3)),h.setAttribute("color",new re(M,3));const S=new kt({size:.28,vertexColors:!0,transparent:!0,opacity:.78}),w=new Lt(h,S);l.add(w);const z=new Qt(.65,.85,36);z.rotateX(-Math.PI/2);const p=new at({color:6936736,side:pt,transparent:!0,opacity:.85}),m=new ce(z,p);return m.position.set(5.5,c(5.5,-2.5)+.2,-2.5),l.add(m),{root:l,update:(v,C)=>{l.rotation.y=Math.sin(C*.14)*.24-.35;const L=1+.35*Math.sin(C*2.4);m.scale.setScalar(L)},dispose:()=>ht(l)}}function Cs(){const l=new me,e=(n,r,d)=>{const u=new Float32Array(d*3);for(let M=0;M<d;M++){const h=M*.6180339%1*Math.PI*2,S=Math.acos(2*(M*.381966%1)-1),w=2.2+M*.754877%1*2.4;u[M*3]=n.x+w*Math.sin(S)*Math.cos(h),u[M*3+1]=n.y+w*Math.sin(S)*Math.sin(h),u[M*3+2]=n.z+w*Math.cos(S)}const y=new Se;y.setAttribute("position",new re(u,3));const F=new kt({color:r,size:.24,transparent:!0,opacity:.55});return{points:new Lt(y,F),mat:F}},t=new _(6.8,1.2,0),i=new _(-6.8,-1,0),s=e(t,4381173,120),a=e(i,7829759,120);l.add(s.points),l.add(a.points);const o=[];for(let n=0;n<14;n++){const r=(n-6.5)*.42,d=Math.sin(n*1.3)*2.1,u=new _(t.x-1.2,t.y+r*.6,d),y=new _(0,r*1.15+1.4,d*1.3),F=new _(i.x+1.2,i.y+r*.6,d),h=new Ui(u,y,F).getPoints(36),S=new Se().setFromPoints(h),w=new Tt({color:n%2===0?7829759:4381173,transparent:!0,opacity:.2});o.push(w),l.add(new ct(S,w))}return{root:l,setFocusStep:n=>{n===0?(s.mat.opacity=.88,s.mat.size=.31,a.mat.opacity=.36,a.mat.size=.22,o.forEach(r=>{r.opacity=.14})):n===1?(s.mat.opacity=.82,s.mat.size=.28,a.mat.opacity=.82,a.mat.size=.28,o.forEach(r=>{r.opacity=.34})):n===2?(s.mat.opacity=.62,s.mat.size=.25,a.mat.opacity=.62,a.mat.size=.25,o.forEach(r=>{r.opacity=.52})):n===3?(s.mat.opacity=.36,s.mat.size=.22,a.mat.opacity=.9,a.mat.size=.32,o.forEach(r=>{r.opacity=.26})):(s.mat.opacity=.62,s.mat.size=.25,a.mat.opacity=.62,a.mat.size=.25,o.forEach(r=>{r.opacity=.26}))},update:(n,r)=>{l.rotation.y=Math.sin(r*.22)*.18,l.rotation.x=Math.cos(r*.16)*.08},dispose:()=>ht(l)}}class Es{index=3;totalSteps=1;currentStep=0;entrance=null;rightHover=null;frameTimers=[];leftHover=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"28%",y:"58%",color:"rgba(66, 217, 245, 0.13)",x2:"78%",y2:"24%",color2:"rgba(119, 120, 255, 0.08)"});const i=Ss(),s={distance:84,target:[0,0,0],rotX:.42,rotY:-.35,screenCenterX:478,screenCenterY:600,autoRotateSpeed:0};t.sceneManager.setCameraImmediate(s),t.sceneManager.mountObject(i.root,i.dispose,i.update,"Combinatorial Sequence-Fitness Landscape (20^100)"),t.sceneManager.setInteractive(!0),t.sceneManager.addPin({id:"denovo-peak",xyz:[5.5,5.4,-2.5],title:"Rare De Novo Functional Peak",subtitle:"Generative AI jumps beyond natural neighborhoods",accent:"#69D8A0"}),t.sceneManager.addPin({id:"natural-peak",xyz:[-8.5,2.9,5],title:"Natural Family Neighborhood",subtitle:"Directed evolution explores local mutations",accent:"#42D9F5"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقدمه · چالش جست‌وجوی ترکیبیاتی",titleFa:"چرا طراحی پروتئین سخت است؟",subtitleFa:"فضای حالت عظیم است و بخش بسیار کوچکی از آن پروتئین فعال می‌سازد",accent:"nature",badges:[{type:"conceptual",text:"20^100 Combinatorial Calculation"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:780px 1fr;gap:38px;direction:ltr;align-items:stretch;justify-content:stretch">
          <!-- Left: hero number, framed 3D landscape window, caption (stacked, no overlap) -->
          <div style="display:flex;flex-direction:column;gap:16px;min-height:0">
            <div class="sci-panel s03-anim s03-left-card interactive-el" style="padding:24px 34px 22px;--panel-accent:#42D9F5;background:rgba(8,12,22,0.82);flex:none">
              <div style="display:flex;align-items:baseline;justify-content:space-between;gap:18px;margin-bottom:10px">
                <div class="stat-hero-num cyan-indigo" style="font-size:96px">
                  10<sup>130</sup>
                </div>
                <div style="text-align:right;direction:rtl">
                  <span style="display:inline-block;padding:4px 12px;border-radius:999px;font-size:13px;background:rgba(66,217,245,0.12);border:1px solid rgba(66,217,245,0.34);color:#42D9F5">
                    محاسبه‌ی ترکیبیاتی پایه
                  </span>
                </div>
              </div>

              <div style="direction:rtl;text-align:right;font-size:23px;font-weight:600;color:#F4F6FA;margin-bottom:14px">
                توالی ممکن برای یک پروتئین ۱۰۰ اسیدآمینه‌ای
              </div>

              <div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid rgba(255,255,255,0.1)">
                <span class="ltr" style="font-size:20px;font-weight:700;color:#9394FF">
                  20<sup>100</sup> ≈ 1.3 × 10<sup>130</sup>
                </span>
                <span style="direction:rtl;font-size:16px;color:#A6B0C0">
                  بیشتر از کل اتم‌های جهان قابل مشاهده (<bdi class="ltr-inline">~10<sup>80</sup></bdi>)
                </span>
              </div>
            </div>

            <!-- Framed 3D fitness-landscape window -->
            <div id="s03-3d-window" style="flex:1;min-height:0;position:relative;border-radius:14px;border:1px solid rgba(105,216,160,0.28);background:radial-gradient(ellipse at 50% 70%, rgba(66,217,245,0.10), rgba(6,9,16,0.55) 70%);box-shadow:inset 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(66,217,245,0.08);pointer-events:none">
              <div class="ltr" style="position:absolute;top:12px;left:16px;font-size:12px;letter-spacing:.08em;font-weight:700;color:#69D8A0;text-transform:uppercase">Sequence-Fitness Landscape · conceptual</div>
            </div>

            <div class="sci-panel s03-anim s03-left-card interactive-el" style="flex:none;padding:12px 20px;--panel-accent:#69D8A0;--panel-glow:rgba(105,216,160,0.16);background:rgba(8,11,18,0.78);direction:rtl;text-align:right">
              <span style="font-size:15.5px;line-height:1.6;color:#B4BECE">
                چشم‌انداز مفهومی تناسب (<bdi class="ltr-inline">Fitness Landscape</bdi>): در دریایی از توالی‌های ناپایدار، قله‌های کارآمد بسیار نادر و جداافتاده‌اند.
              </span>
            </div>
          </div>

          <!-- Right: Two Core Analytical Cards (RTL) -->
          <div style="display:flex;flex-direction:column;justify-content:stretch;gap:24px;direction:rtl;text-align:right">
            <!-- Directed Evolution Bottleneck -->
            <div class="sci-panel s03-anim s03-right-card interactive-el" style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:32px 36px;--panel-accent:#9299A6;--panel-glow:rgba(146,153,166,0.18)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
                <h2 style="margin:0;font-size:29px;font-weight:700;color:#F4F6FA">
                  محدودیت تکامل هدایت‌شده (<bdi class="ltr-inline">Directed Evolution</bdi>)
                </h2>
                <span class="ltr" style="font-size:13px;padding:4px 11px;border-radius:999px;background:rgba(146,153,166,0.15);color:#C4CBD8;font-weight:600">
                  Review 2025
                </span>
              </div>
              <p style="margin:0 0 20px 0;font-size:21.5px;line-height:1.7;color:#DCE3F0">
                زمان‌بر و پرهزینه است، اغلب در همسایگی آنزیم‌های طبیعی محدود می‌ماند و رسیدن به <strong style="color:#F4F6FA">کارکرد کاملاً تازه (<bdi class="ltr-inline">de novo</bdi>)</strong> برای سوبستراهای مصنوعی با آن بسیار دشوار است.
              </p>
              <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:15px;color:#9BA6BA">
                <span style="padding:5px 12px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">غربالگری تکراری آزمایشگاهی</span>
                <span style="padding:5px 12px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">گیر افتادن در بهینه‌های محلی</span>
              </div>
            </div>

            <!-- Nobel Prize in Chemistry 2024 -->
            <div class="sci-panel s03-anim s03-right-card interactive-el" style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:32px 36px;--panel-accent:#42D9F5">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
                <h2 style="margin:0;font-size:29px;font-weight:700;color:#42D9F5">
                  نوبل شیمی ۲۰۲۴: نقطه‌ی عطف محاسباتی
                </h2>
                <span class="ltr" style="font-size:13px;padding:4px 11px;border-radius:999px;background:rgba(66,217,245,0.14);color:#42D9F5;font-weight:700">
                  Nobel Prize 2024
                </span>
              </div>
              <p style="margin:0 0 20px 0;font-size:21.5px;line-height:1.7;color:#DCE3F0">
                طراحی محاسباتی پروتئین (<strong class="ltr" style="color:#F4F6FA">David Baker</strong>) و پیش‌بینی دقیق ساختار سه‌بعدی با هوش مصنوعی (<strong class="ltr" style="color:#F4F6FA">Demis Hassabis</strong> و <strong class="ltr" style="color:#F4F6FA">John Jumper</strong>) مسیر تازه‌ای از توالی به عملکرد گشودند.
              </p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                <div style="padding:10px 14px;border-radius:8px;background:rgba(66,217,245,0.07);border:1px solid rgba(66,217,245,0.22)">
                  <div class="ltr" style="font-size:13px;font-weight:700;color:#42D9F5">Structure Prediction</div>
                  <div style="font-size:15.5px;color:#CBD4E4">توالی ← ساختار (<bdi class="ltr-inline">AlphaFold2</bdi>)</div>
                </div>
                <div style="padding:10px 14px;border-radius:8px;background:rgba(105,216,160,0.07);border:1px solid rgba(105,216,160,0.24)">
                  <div class="ltr" style="font-size:13px;font-weight:700;color:#69D8A0">De Novo Design</div>
                  <div style="font-size:15.5px;color:#CBD4E4">عملکرد و ساختار هدف ← توالی جدید</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${pe("Source: Wen et al., Curr. Opin. Green Sustain. Chem. 2025 · Combinatorics: 20^100 elementary sequence-space calculation · Nobel Prize in Chemistry 2024",3)}
      </div>
    `;const a=e.querySelector("#s03-3d-window"),o=()=>{if(!a||!a.isConnected)return;t.sceneManager.setClipFromElement(a);const n=document.getElementById("keynote-viewport"),r=n?n.getBoundingClientRect().width/1920:1,d=a.getBoundingClientRect();s.screenCenterX=(d.left+d.width/2)/r,s.screenCenterY=(d.top+d.height*.62)/r,t.sceneManager.setCameraImmediate(s)};o(),this.frameTimers=[300,900,1600].map(n=>window.setTimeout(o,n)),this.entrance=le(e.querySelectorAll(".s03-anim"),{y:22,opacity:0,duration:.7,stagger:.12,ease:"power3.out"},t.reducedMotion);const c=n=>{document.querySelectorAll(".mol-pin").forEach(r=>{const d=r.dataset.pinId;r.classList.toggle("pin-focus",n!==null&&d===n),r.classList.toggle("pin-dimmed",n!==null&&d!==n)})};this.rightHover=se({cards:e.querySelectorAll(".s03-right-card"),entrance:this.entrance,dimSiblings:!0,onHoverChange:n=>{n===0?(c("natural-peak"),t.sceneManager.flyTo({...s,distance:84,target:[-3.2,1,2],rotX:.46,rotY:-.52,duration:.65})):n===1?(c("denovo-peak"),t.sceneManager.flyTo({...s,distance:82,target:[3,2.2,-1.4],rotX:.36,rotY:-.18,duration:.65})):(c(null),t.sceneManager.flyTo({...s,duration:.65}))}}),this.leftHover=se({cards:e.querySelectorAll(".s03-left-card"),entrance:this.entrance,dimSiblings:!1})}resetHover(){this.rightHover?.reset(),this.leftHover?.reset()}unmount(){this.frameTimers.forEach(e=>window.clearTimeout(e)),this.frameTimers=[],this.rightHover?.destroy(),this.rightHover=null,this.leftHover?.destroy(),this.leftHover=null,this.entrance?.kill(),this.entrance=null}}const As={vae:`
    <svg viewBox="0 0 280 68" width="100%" height="64" style="direction:ltr">
      <polygon points="14,10 86,22 86,46 14,58" fill="rgba(119,120,255,0.16)" stroke="#7778FF" stroke-width="1.5"/>
      <text x="50" y="38" text-anchor="middle" fill="#D5D6FF" font-family="Inter" font-size="11" font-weight="600">Encoder</text>
      <line x1="86" y1="34" x2="116" y2="34" stroke="#7778FF" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="140" cy="34" r="20" fill="rgba(66,217,245,0.15)" stroke="#42D9F5" stroke-width="1.6"/>
      <text x="140" y="38" text-anchor="middle" fill="#42D9F5" font-family="Inter" font-size="11.5" font-weight="700">z ~ N</text>
      <line x1="164" y1="34" x2="194" y2="34" stroke="#7778FF" stroke-width="1.5" stroke-dasharray="3 3"/>
      <polygon points="194,22 266,10 266,58 194,46" fill="rgba(119,120,255,0.16)" stroke="#7778FF" stroke-width="1.5"/>
      <text x="230" y="38" text-anchor="middle" fill="#D5D6FF" font-family="Inter" font-size="11" font-weight="600">Decoder</text>
    </svg>
  `,gan:`
    <svg viewBox="0 0 280 68" width="100%" height="64" style="direction:ltr">
      <rect x="12" y="16" width="84" height="36" rx="6" fill="rgba(66,217,245,0.15)" stroke="#42D9F5" stroke-width="1.5"/>
      <text x="54" y="38" text-anchor="middle" fill="#42D9F5" font-family="Inter" font-size="11" font-weight="700">Generator</text>
      <path d="M98 28 H168" stroke="#42D9F5" stroke-width="1.5"/>
      <path d="M168 42 H98" stroke="#E66BBE" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="133" y="22" text-anchor="middle" fill="#9AA6BA" font-family="Inter" font-size="9.5">Seq</text>
      <text x="133" y="56" text-anchor="middle" fill="#E66BBE" font-family="Inter" font-size="9.5">Minimax</text>
      <rect x="172" y="16" width="96" height="36" rx="6" fill="rgba(230,107,190,0.14)" stroke="#E66BBE" stroke-width="1.5"/>
      <text x="220" y="38" text-anchor="middle" fill="#F49BD9" font-family="Inter" font-size="11" font-weight="700">Discriminator</text>
    </svg>
  `,diffusion:`
    <svg viewBox="0 0 280 68" width="100%" height="64" style="direction:ltr">
      <circle cx="36" cy="34" r="17" fill="rgba(230,107,190,0.1)" stroke="#9299A6" stroke-dasharray="2 2" stroke-width="1.4"/>
      <circle cx="32" cy="29" r="2" fill="#9299A6"/><circle cx="42" cy="37" r="2" fill="#9299A6"/><circle cx="35" cy="40" r="2" fill="#9299A6"/>
      <text x="36" y="63" text-anchor="middle" fill="#8D99AE" font-family="Inter" font-size="9.5">Noise x_T</text>
      <path d="M60 34 H112" stroke="#E66BBE" stroke-width="1.6"/>
      <circle cx="138" cy="34" r="17" fill="rgba(230,107,190,0.16)" stroke="#E66BBE" stroke-width="1.5"/>
      <path d="M128 38 Q138 22 148 38" fill="none" stroke="#F49BD9" stroke-width="2"/>
      <text x="138" y="63" text-anchor="middle" fill="#E66BBE" font-family="Inter" font-size="9.5">Denoise x_t</text>
      <path d="M162 34 H214" stroke="#69D8A0" stroke-width="1.6"/>
      <rect x="218" y="17" width="48" height="34" rx="7" fill="rgba(105,216,160,0.15)" stroke="#69D8A0" stroke-width="1.5"/>
      <path d="M227 38 C233 22, 243 46, 255 26" fill="none" stroke="#69D8A0" stroke-width="2.2"/>
      <text x="242" y="63" text-anchor="middle" fill="#69D8A0" font-family="Inter" font-size="9.5">Fold x_0</text>
    </svg>
  `,plm:`
    <svg viewBox="0 0 280 68" width="100%" height="64" style="direction:ltr">
      <g font-family="JetBrains Mono, monospace" font-size="12" font-weight="700">
        <rect x="12" y="18" width="34" height="30" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)"/>
        <text x="29" y="38" text-anchor="middle" fill="#F4F6FA">M</text>
        <rect x="54" y="18" width="34" height="30" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)"/>
        <text x="71" y="38" text-anchor="middle" fill="#F4F6FA">S</text>
        <rect x="96" y="18" width="34" height="30" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)"/>
        <text x="113" y="38" text-anchor="middle" fill="#F4F6FA">D</text>
        <rect x="138" y="18" width="34" height="30" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)"/>
        <text x="155" y="38" text-anchor="middle" fill="#F4F6FA">L</text>
        <path d="M178 33 H208" stroke="#42D9F5" stroke-width="1.8"/>
        <rect x="212" y="15" width="54" height="36" rx="6" fill="rgba(66,217,245,0.16)" stroke="#42D9F5" stroke-width="1.6"/>
        <text x="239" y="38" text-anchor="middle" fill="#42D9F5">p(x_t)</text>
      </g>
    </svg>
  `};class Ms{index=4;totalSteps=4;currentStep=0;rootEl=null;stepCtrl=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"50%",y:"42%",color:"rgba(119, 120, 255, 0.1)",x2:"18%",y2:"75%",color2:"rgba(66, 217, 245, 0.08)"});const i=gs.map((o,c)=>`
        <div
          class="sci-panel s04-card interactive-el"
          data-idx="${c}"
          style="padding:26px 26px 24px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:${o.accent};cursor:pointer"
        >
          <div>
            <!-- Header -->
            <div style="display:flex;justify-content:space-between;align-items:flex-start;direction:rtl;margin-bottom:14px">
              <div style="direction:ltr;text-align:right">
                <div style="font-family:var(--font-en);font-size:25px;font-weight:800;color:#F4F6FA;line-height:1.15">
                  ${o.name}
                </div>
                <div style="font-family:var(--font-en);font-size:12.5px;color:${o.accent};font-weight:600;margin-top:4px">
                  ${o.subtitleEn}
                </div>
              </div>
              <span style="font-family:var(--font-en);font-size:12px;font-weight:700;padding:3px 9px;border-radius:999px;background:rgba(255,255,255,0.06);color:#A6B0C0">
                0${c+1}
              </span>
            </div>

            <!-- Mechanism Schematic -->
            <div style="background:rgba(6,9,16,0.68);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:10px 8px;margin-bottom:18px">
              ${As[o.id]}
            </div>

            <!-- Generative Principle (RTL) -->
            <p style="margin:0 0 20px 0;direction:rtl;text-align:right;font-size:18.5px;line-height:1.65;color:#DCE3F0">
              ${o.descFa}
            </p>
          </div>

          <!-- Experimentally Tested Benchmark Box -->
          <div style="background:rgba(105,216,160,0.07);border:1px solid rgba(105,216,160,0.28);border-radius:9px;padding:15px 16px;direction:rtl;text-align:right">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px">
              <span style="font-size:13px;font-weight:700;color:#69D8A0">نمونه‌ی آزمایش‌شده در آزمایشگاه</span>
              <span style="font-family:var(--font-en);direction:rtl;unicode-bidi:isolate;font-size:13.5px;font-weight:800;color:#F4F6FA">${o.verifiedModel.replace(/[A-Za-z][A-Za-z0-9\-]*/g,n=>`<bdi class="ltr-inline">${n}</bdi>`)}</span>
            </div>
            <div style="font-size:16px;line-height:1.55;color:#CBD4E4">
              ${o.verifiedFa}
            </div>
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقدمه · چارچوب مقاله‌ی مروری ۲۰۲۵",titleFa:"هوش مصنوعی مولد: چهار خانواده‌ی مدل",subtitleFa:"معماری‌های اصلی تولید پروتئین به همراه نمونه‌هایی که در آزمایشگاه اعتبارسنجی شده‌اند",accent:"review",badges:[{type:"experimental",text:"All 4 Examples Experimentally Tested"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:repeat(4, 1fr);gap:22px;direction:rtl;align-items:stretch">
          ${i}
        </div>

        ${pe("Source: Wen et al., Curr. Opin. Green Sustain. Chem. 52, 101010 (2025) — Generative AI models with wet-lab validation",4)}
      </div>
    `,this.rootEl=e;const s=e.querySelectorAll(".s04-card"),a=le(s,{y:26,opacity:0,duration:.68,stagger:.09,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:a,onRender:(o,c)=>{s.forEach((n,r)=>{const d=r===o,u=r!==o&&(c.isHovering||o>0);n.classList.toggle("step-focus",d),n.classList.toggle("step-dimmed",u)})}}),s.forEach(o=>{const c=Number(o.dataset.idx??"0");this.stepCtrl.bindElement(o,c,{onCommit:n=>{this.currentStep=n,t.onStepChange(n,this.totalSteps)}})}),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover()}unmount(){this.stepCtrl?.destroy(),this.stepCtrl=null,this.rootEl=null}}const Ds=[{titleEn:"Nature 2023",accent:"#42D9F5",badgeType:"experimental",badgeText:"Wet-Lab Validated",headlineFa:"طراحی از صفر آنزیم نورزا و اثبات در آزمایشگاه",bodyFa:'طراحی از صفر (<bdi class="ltr-inline">de novo</bdi>) یک <bdi class="ltr-inline">luciferase</bdi> کوچک، بسیار پایدار و اختصاصی برای سوبسترای <bdi class="ltr-inline">DTZ</bdi>؛ تأیید مستقیم فعالیت در آزمایشگاه.',keyStat:"LuxSit (117 aa) · k_cat/K_m = 10⁶ M⁻¹ s⁻¹",citation:"Yeh et al., Nature 614, 774–780 (2023)"},{titleEn:"ProteinDT 2025",accent:"#7778FF",badgeType:"computational",badgeText:"In Silico Evaluation Only",headlineFa:"طراحی و ویرایش پروتئین با راهنمایی متن طبیعی",bodyFa:'چارچوب چندوجهی برای تبدیل توصیف متنی کارکرد به توالی پروتئین؛ هم‌ترازی متن و پروتئین روی <strong style="color:#B0B1FF">۴۴۱٬۰۱۳</strong> جفت از <bdi class="ltr-inline">SwissProt</bdi>.',keyStat:"441,013 Text–Protein Pairs · 12 Editing Tasks",citation:"Liu et al., Nat. Mach. Intell. 7, 580–591 (2025)"},{titleEn:"مقاله‌ی مروری 2025",accent:"#9299A6",badgeType:"conceptual",badgeText:"Synthesis & Benchmarks",headlineFa:"نقشه‌ی جامع مدل‌های مولد و گلوگاه‌های واقعی",bodyFa:"چارچوب کلی چهار خانواده‌ی مدل‌های مولد برای مهندسی آنزیم، با تمرکز سخت‌گیرانه بر نمونه‌های دارای تأیید تجربی و تبیین محدودیت‌ها.",keyStat:"VAE · GAN · Diffusion · Protein LMs",citation:"Wen et al., Curr. Opin. Green Sustain. Chem. 52 (2025)"}];class Ts{index=5;totalSteps=3;currentStep=0;rootEl=null;stepCtrl=null;stripHover=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"76%",y:"46%",color:"rgba(66, 217, 245, 0.1)",x2:"24%",y2:"52%",color2:"rgba(119, 120, 255, 0.1)"});const i=Ds.map((n,r)=>`
        <div
          class="sci-panel s05-card interactive-el"
          data-idx="${r}"
          style="padding:32px 32px 28px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:${n.accent};cursor:pointer"
        >
          <div>
            <!-- Top Source Header -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;direction:rtl">
              <div style="display:flex;align-items:center;gap:10px">
                <span style="width:12px;height:12px;border-radius:50%;background:${n.accent};box-shadow:0 0 12px ${n.accent}"></span>
                <span style="font-family:${r===2?"var(--font-fa)":"var(--font-en)"};font-size:24px;font-weight:800;color:#F4F6FA">
                  ${n.titleEn}
                </span>
              </div>
              ${Ie(n.badgeType,n.badgeText)}
            </div>

            <h2 style="margin:0 0 14px 0;direction:rtl;text-align:right;font-size:24px;font-weight:700;color:${n.accent};line-height:1.4">
              ${n.headlineFa}
            </h2>

            <p style="margin:0;direction:rtl;text-align:right;font-size:19.5px;line-height:1.7;color:#DCE3F0">
              ${n.bodyFa}
            </p>
          </div>

          <div style="margin-top:26px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.09);direction:ltr;text-align:right">
            <div style="font-family:var(--font-en);font-size:14.5px;font-weight:700;color:#F4F6FA;margin-bottom:5px">
              ${n.keyStat}
            </div>
            <div style="font-family:var(--font-en);font-size:13px;color:#8D99AE">
              ${n.citation}
            </div>
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقدمه · معماری روایت علمی",titleFa:"سه مقاله، یک پرسش",subtitleFa:"آیا می‌توان پروتئین را بر اساس عملکرد موردنظر طراحی کرد و در آزمایشگاه تأییدش کرد؟",accent:"nature"})}

        <div class="slide-body" style="display:flex;flex-direction:column;justify-content:space-between;gap:22px">
          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:26px;direction:rtl;flex:1">
            ${i}
          </div>

          <!-- Color-Coding Guide Strip -->
          <div id="s05-guide-strip" class="sci-panel interactive-el" style="padding:15px 28px;display:flex;justify-content:space-between;align-items:center;direction:rtl;--panel-accent:#42D9F5">
            <span style="font-size:16.5px;font-weight:600;color:#CBD4E4">
              راهنمای کدگذاری رنگی در کل ارائه برای تفکیک دقیق منابع و سطح شواهد:
            </span>
            <div style="display:flex;align-items:center;gap:24px;direction:rtl;font-family:var(--font-en);font-size:13.5px;font-weight:600">
              <span class="s05-legend-tag" data-step="0" style="direction:ltr;unicode-bidi:isolate;display:inline-flex;align-items:center;gap:8px;color:#42D9F5;transition:opacity 0.2s ease, transform 0.2s ease">
                <i style="width:9px;height:9px;border-radius:50%;background:#42D9F5;display:inline-block"></i> Nature 2023 (Experimental)
              </span>
              <span class="s05-legend-tag" data-step="1" style="direction:ltr;unicode-bidi:isolate;display:inline-flex;align-items:center;gap:8px;color:#9394FF;transition:opacity 0.2s ease, transform 0.2s ease">
                <i style="width:9px;height:9px;border-radius:50%;background:#7778FF;display:inline-block"></i> ProteinDT 2025 (Text→Seq)
              </span>
              <span class="s05-legend-tag" data-step="2" style="direction:ltr;unicode-bidi:isolate;display:inline-flex;align-items:center;gap:8px;color:#B8C1CF;transition:opacity 0.2s ease, transform 0.2s ease">
                <i style="width:9px;height:9px;border-radius:50%;background:#9299A6;display:inline-block"></i> Review 2025
              </span>
              <span style="direction:ltr;unicode-bidi:isolate;display:inline-flex;align-items:center;gap:8px;color:#E66BBE">
                <i style="width:9px;height:9px;border-radius:50%;background:#E66BBE;display:inline-block"></i> 310.ai (In Silico Records)
              </span>
            </div>
          </div>
        </div>

        ${pe("Narrative roadmap across Yeh et al. (2023), Liu et al. (2025), Wen et al. (2025), and 310.ai repository analysis",5)}
      </div>
    `,this.rootEl=e;const s=e.querySelectorAll(".s05-card"),a=e.querySelectorAll(".s05-legend-tag"),o=le(s,{y:26,opacity:0,duration:.7,stagger:.12,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:o,onRender:(n,r)=>{s.forEach((d,u)=>{const y=u===n,F=u!==n&&(r.isHovering||n>0);d.classList.toggle("step-focus",y),d.classList.toggle("step-dimmed",F)}),a.forEach(d=>{const y=Number(d.dataset.step??"-1")===n;d.style.opacity=!r.isHovering&&n===0||y?"1":"0.45",d.style.transform=y&&(r.isHovering||n>0)?"translateY(-1px)":"none"})}}),s.forEach(n=>{const r=Number(n.dataset.idx??"0");this.stepCtrl.bindElement(n,r,{onCommit:d=>{this.currentStep=d,t.onStepChange(d,this.totalSteps)}})}),a.forEach(n=>{const r=Number(n.dataset.step??"0");this.stepCtrl.bindElement(n,r,{onCommit:d=>{this.currentStep=d,t.onStepChange(d,this.totalSteps)}})});const c=e.querySelector("#s05-guide-strip");c&&(this.stripHover=se({cards:[c],dimSiblings:!1})),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover(),this.stripHover?.reset()}unmount(){this.stepCtrl?.destroy(),this.stepCtrl=null,this.stripHover?.destroy(),this.stripHover=null,this.rootEl=null}}class ks{index=6;totalSteps=4;currentStep=0;rootEl=null;stepCtrl=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"72%",y:"35%",color:"rgba(66, 217, 245, 0.08)",x2:"30%",y2:"65%",color2:"rgba(119, 120, 255, 0.08)"});const i=hi.columns.map(c=>`
          <div style="padding:16px 22px;border-radius:10px;background:${c.color}1C;border:1px solid ${c.color}66;display:flex;align-items:center;justify-content:space-between;direction:rtl">
            <span style="font-size:21px;font-weight:700;color:#F4F6FA">${c.label}</span>
            <span style="width:11px;height:11px;border-radius:50%;background:${c.color};box-shadow:0 0 10px ${c.color}"></span>
          </div>
        `).join(""),s=hi.rows.map((c,n)=>`
          <div
            class="s06-row interactive-el"
            data-row="${n}"
            style="display:grid;grid-template-columns:215px repeat(3, 1fr);gap:16px;align-items:stretch;cursor:pointer;transition:opacity 0.25s ease, transform 0.25s ease"
          >
            <!-- Row Label Cell -->
            <div class="sci-panel s06-label-cell" style="padding:18px 20px;display:flex;flex-direction:column;justify-content:center;direction:rtl;text-align:right;background:rgba(16,23,37,0.92);--panel-accent:#42D9F5">
              <div style="font-size:21px;font-weight:700;color:#F4F6FA">${c.label}</div>
              <div class="ltr" style="font-size:12.5px;color:#8D99AE;margin-top:4px">${c.labelEn}</div>
            </div>

            <!-- Nature Cell -->
            <div class="sci-panel s06-cell" style="padding:18px 22px;display:flex;align-items:center;direction:rtl;text-align:right;font-size:18px;line-height:1.6;color:#E2E8F4;--panel-accent:#42D9F5">
              <div>${c.nature}</div>
            </div>

            <!-- ProteinDT Cell -->
            <div class="sci-panel s06-cell" style="padding:18px 22px;display:flex;align-items:center;direction:rtl;text-align:right;font-size:18px;line-height:1.6;color:#E2E8F4;--panel-accent:#7778FF;--panel-glow:rgba(119,120,255,0.18)">
              <div>${c.proteindt}</div>
            </div>

            <!-- Review Cell -->
            <div class="sci-panel s06-cell" style="padding:18px 22px;display:flex;align-items:center;direction:rtl;text-align:right;font-size:18px;line-height:1.6;color:#E2E8F4;--panel-accent:#9299A6;--panel-glow:rgba(146,153,166,0.16)">
              <div>${c.review}</div>
            </div>
          </div>
        `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مرور متدلوژی و الگوریتم‌ها",titleFa:"نمای کلی متدلوژی در سه مقاله",subtitleFa:"مقایسه‌ی هم‌زمان داده، الگوریتم، شیوه‌ی ارزیابی و ماهیت خروجی در سه رویکرد",accent:"nature"})}

        <div class="slide-body" style="display:flex;flex-direction:column;justify-content:center;gap:14px;direction:rtl">
          <!-- Matrix Column Headers -->
          <div style="display:grid;grid-template-columns:215px repeat(3, 1fr);gap:16px">
            <div style="display:flex;align-items:center;padding-right:10px;font-size:15px;color:#7F8BA3;font-weight:600">
              محور مقایسه
            </div>
            ${i}
          </div>

          <!-- 4 Comparison Rows -->
          ${s}
        </div>

        ${pe("Sources: Yeh et al., Nature 2023 · Liu et al., Nat. Mach. Intell. 2025 · Wen et al., Curr. Opin. Green Sustain. Chem. 2025",6)}
      </div>
    `,this.rootEl=e;const a=e.querySelectorAll(".s06-row"),o=le(a,{y:18,opacity:0,duration:.6,stagger:.09,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:o,onRender:(c,n)=>{const r=n.isHovering||c>0;a.forEach((d,u)=>{const y=u===c,F=d.querySelectorAll(".sci-panel");r?(d.style.opacity=y?"1":"0.45",d.style.transform=y?"translateX(-4px)":"none",d.classList.toggle("step-focus",y),d.classList.toggle("step-dimmed",!y),F.forEach(M=>{M.style.borderColor=y?"var(--panel-accent, var(--col-nature))":"",M.style.boxShadow=y?"0 18px 42px rgba(0, 0, 0, 0.55), 0 0 22px var(--panel-glow, rgba(66, 217, 245, 0.14))":""})):(d.style.opacity="1",d.style.transform="none",d.classList.toggle("step-focus",u===0),d.classList.remove("step-dimmed"),F.forEach(M=>{M.style.borderColor=u===0?"var(--panel-accent, rgba(66,217,245,0.45))":"",M.style.boxShadow=""}))})}}),a.forEach(c=>{const n=Number(c.dataset.row??"0");this.stepCtrl.bindElement(c,n,{onCommit:r=>{this.currentStep=r,t.onStepChange(r,this.totalSteps)}})}),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover()}unmount(){this.stepCtrl?.destroy(),this.stepCtrl=null,this.rootEl=null}}const Ls={nature:{hex:"#42D9F5",border:"rgba(66, 217, 245, 0.42)",bg:"rgba(66, 217, 245, 0.09)"},proteindt:{hex:"#7778FF",border:"rgba(119, 120, 255, 0.44)",bg:"rgba(119, 120, 255, 0.1)"},review:{hex:"#9299A6",border:"rgba(146, 153, 166, 0.38)",bg:"rgba(146, 153, 166, 0.09)"}};class Ps{index=7;totalSteps=1;currentStep=0;committedFilter="all";hoveredFilter=null;hoveredChipEl=null;entrance=null;quadHover=null;syncStateFn=null;mount(e,t){this.currentStep=0,this.committedFilter="all",this.hoveredFilter=null,this.hoveredChipEl=null,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"50%",y:"50%",color:"rgba(119, 120, 255, 0.09)",x2:"82%",y2:"22%",color2:"rgba(66, 217, 245, 0.08)"});const i=fs.map(n=>{const r=n.chips.map(d=>{const u=Ls[d.source];return`
            <div
              class="s07-chip interactive-el"
              data-focus-skip
              data-source="${d.source}"
              data-hex="${u.hex}"
              style="display:inline-flex;align-items:center;gap:10px;padding:11px 18px;border-radius:999px;background:${u.bg};border:1px solid ${u.border};direction:ltr;cursor:pointer;transition:opacity 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease"
            >
              <span style="width:9px;height:9px;border-radius:50%;background:${u.hex};box-shadow:0 0 8px ${u.hex};flex-shrink:0"></span>
              <span style="font-family:${d.isFa?"var(--font-fa)":"var(--font-en)"};font-size:${d.isFa?"16.5px":"15.5px"};font-weight:600;color:#F4F6FA;direction:${d.isFa?"rtl":"ltr"}">
                ${d.label}
              </span>
            </div>
          `}).join("");return`
        <div class="sci-panel s07-quad interactive-el" style="padding:28px 32px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:${n.accent}">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:20px;direction:rtl">
              <h2 style="margin:0;font-size:27px;font-weight:700;color:#F4F6FA">${n.titleFa}</h2>
              <span class="ltr" style="font-size:13.5px;font-weight:600;color:${n.accent}">${n.titleEn}</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:12px;direction:rtl;justify-content:flex-start">
              ${r}
            </div>
          </div>

          <div style="margin-top:18px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);direction:rtl;font-size:13.5px;color:#7F8BA3">
            تعداد ابزارهای ذکرشده در منابع: <strong class="ltr" style="color:#CBD4E4">${n.chips.length}</strong>
          </div>
        </div>
      `}).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مرور متدلوژی و الگوریتم‌ها",titleFa:"رده‌بندی عملکردی الگوریتم‌ها و مدل‌های محاسباتی",subtitleFa:"فقط ابزارها و مدل‌هایی که صریحاً در سه مقاله‌ی مرجع به کار رفته‌اند (با امکان فیلتر بر اساس مقاله)",accent:"nature"})}

        <div class="slide-body" style="display:flex;flex-direction:column;justify-content:space-between;gap:20px">
          <!-- Interactive Legend / Filter Bar -->
          <div style="display:flex;justify-content:space-between;align-items:center;direction:rtl" class="interactive-el">
            <div style="font-size:16px;color:#A6B0C0">
              برای تفکیک سهم هر مقاله، روی برچسب منبع هاور یا کلیک کنید:
            </div>
            <div style="display:inline-flex;gap:10px;direction:rtl;background:rgba(10,15,26,0.85);padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,0.12)">
              <button class="mol-btn s07-filter active" data-filter="all" style="direction:ltr;unicode-bidi:isolate">All Papers (23)</button>
              <button class="mol-btn s07-filter" data-filter="nature" style="direction:ltr;unicode-bidi:isolate;color:#42D9F5">● Nature 2023 (7)</button>
              <button class="mol-btn s07-filter" data-filter="proteindt" style="direction:ltr;unicode-bidi:isolate;color:#9899FF">● ProteinDT 2025 (12)</button>
              <button class="mol-btn s07-filter" data-filter="review" style="direction:ltr;unicode-bidi:isolate;color:#B8C1CF">● Review 2025 (4)</button>
            </div>
          </div>

          <!-- 2x2 Quadrant Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:22px;flex:1;direction:rtl">
            ${i}
          </div>
        </div>

        ${pe("Sources: Yeh et al., Nature 2023 (cyan) · Liu et al., Nat. Mach. Intell. 2025 (indigo) · Wen et al., Curr. Opin. Green Sustain. Chem. 2025 (grey)",7)}
      </div>
    `;const s=e.querySelectorAll(".s07-filter"),a=e.querySelectorAll(".s07-chip"),o=e.querySelectorAll(".s07-quad");this.entrance=le(o,{y:22,opacity:0,duration:.65,stagger:.08,ease:"power3.out"},t.reducedMotion),this.quadHover=se({cards:o,entrance:this.entrance,dimSiblings:!1});const c=()=>{const n=this.hoveredFilter??this.committedFilter,r=this.hoveredChipEl?.dataset.source;s.forEach(d=>{const u=d.dataset.filter??"all",y=u===n||n==="all"&&r===u;d.classList.toggle("active",y&&(u===n||n!=="all"))}),a.forEach(d=>{const u=d===this.hoveredChipEl,y=n==="all"||d.dataset.source===n,F=d.dataset.hex??"#42D9F5";u?(d.style.opacity="1",d.style.transform="translateY(-2px) scale(1.05)",d.style.boxShadow=`0 8px 20px rgba(0,0,0,0.45), 0 0 14px ${F}55`):(d.style.opacity=y?"1":"0.18",d.style.transform=y&&n!=="all"?"scale(1.03)":"scale(1)",d.style.boxShadow="none")})};this.syncStateFn=c,s.forEach(n=>{const r=n.dataset.filter??"all";n.addEventListener("pointerenter",()=>{this.entrance?.settle(),this.hoveredFilter=r,c()}),n.addEventListener("pointerleave",()=>{this.hoveredFilter=null,c()}),n.addEventListener("click",d=>{d.stopPropagation(),this.entrance?.settle(),this.committedFilter=r,this.hoveredFilter=null,c()})}),a.forEach(n=>{n.addEventListener("pointerenter",()=>{this.entrance?.settle(),this.hoveredChipEl=n,c()}),n.addEventListener("pointerleave",()=>{this.hoveredChipEl===n&&(this.hoveredChipEl=null,c())}),n.addEventListener("click",r=>{r.stopPropagation();const d=n.dataset.source??"all";this.committedFilter=this.committedFilter===d?"all":d,this.hoveredFilter=null,c()})}),c()}resetHover(){this.hoveredFilter=null,this.hoveredChipEl=null,this.quadHover?.reset(),this.syncStateFn?.()}unmount(){this.quadHover?.destroy(),this.quadHover=null,this.entrance?.kill(),this.entrance=null,this.syncStateFn=null}}class Hs{index=8;totalSteps=1;currentStep=0;mounted=!1;committedMode="dtz";hoveredMode=null;renderedMode=null;switchToken=0;gfpAssembly=null;entrance=null;cardHover=null;syncModeFn=null;async mount(e,t){this.mounted=!0,this.currentStep=0,this.committedMode="dtz",this.hoveredMode=null,this.renderedMode=null,this.switchToken=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"27%",y:"50%",color:"rgba(66, 217, 245, 0.13)",x2:"78%",y2:"28%",color2:"rgba(105, 216, 160, 0.08)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقاله‌ی Nature 2023 · تعریف مسئله",titleFa:"مسئله و هدف: یک luciferase بهتر",subtitleFa:"چرا تصویربرداری زیستی به آنزیم نورزای کوچک، پایدار و بدون نیاز به نور برانگیزاننده نیاز دارد؟",accent:"nature",badges:[{type:"computational",text:"3D DTZ: PubChem CID 135439143"},{type:"experimental",text:"Target Assay: Yeh et al., Nature 2023"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:760px 1fr;gap:32px;direction:ltr;align-items:stretch">
          <!-- Left: Live 3D DTZ Luciferin Conformer + Reporter Comparison Toggle -->
          <div class="sci-panel interactive-el mol-viewport-panel" style="padding:18px 22px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#42D9F5;background:rgba(10,15,25,0.52)">
            <div style="display:flex;justify-content:space-between;align-items:center;z-index:5">
              <div style="display:inline-flex;gap:6px;background:rgba(6,9,16,0.85);padding:5px;border-radius:999px;border:1px solid rgba(255,255,255,0.12)">
                <button class="mol-btn s08-mode active" data-mode="dtz">DTZ Substrate (3D)</button>
                <button class="mol-btn s08-mode" data-mode="gfp">Compare: Natural GFP (PDB 1EMA)</button>
              </div>
              <span id="s08-mol-formula" style="font-family:var(--font-en);font-size:13px;font-weight:700;color:#42D9F5">
                C₂₅H₁₉N₃O · Diphenylterazine
              </span>
            </div>

            <!-- Transparent 3D stage window -->
            <div id="s08-3d-window" style="flex:1;position:relative;min-height:360px"></div>

            <div id="s08-mol-caption" style="padding:12px 16px;border-radius:8px;background:rgba(8,11,18,0.84);border:1px solid rgba(66,217,245,0.22);direction:rtl;text-align:right;font-size:15px;color:#CBD4E4;line-height:1.55">
              سوبسترای مصنوعی <bdi class="ltr-inline">Diphenylterazine (DTZ)</bdi>: اکسیداسیون کاتالیتیک هسته‌ی ایمیدازوپیرازینون بدون نیاز به <bdi class="ltr-inline">ATP</bdi> یا نور لیزر، فوتون مرئی آزاد می‌کند.
            </div>
          </div>

          <!-- Right: Two Structured Cards (Problems vs De Novo Design Target) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:20px;direction:rtl;text-align:right">
            <!-- Card 1: 4 Problems of Natural Luciferases -->
            <div class="sci-panel s08-anim s08-card interactive-el" style="padding:26px 30px;--panel-accent:#F2707D;--panel-glow:rgba(242,112,125,0.18)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
                <h2 style="margin:0;font-size:26px;font-weight:700;color:#F4F6FA">
                  چهار محدودیت <bdi class="ltr-inline">luciferase</bdi>های طبیعی
                </h2>
                <span style="font-size:13px;padding:4px 12px;border-radius:999px;background:rgba(242,112,125,0.12);border:1px solid rgba(242,112,125,0.34);color:#F2707D;font-weight:600">
                  چالش مهندسی
                </span>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;font-size:18px;color:#DCE3F0">
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="color:#F2707D;font-weight:800">۰۱</span>
                  <span>اندازه‌ی بزرگ و ساختار چنددامنه‌ای پیچیده</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="color:#F2707D;font-weight:800">۰۲</span>
                  <span>پایداری حرارتی و ساختاری کم</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="color:#F2707D;font-weight:800">۰۳</span>
                  <span>اختصاصیت محدود برای سوبستراهای مشابه</span>
                </div>
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="color:#F2707D;font-weight:800">۰۴</span>
                  <span>دشواری سنجش هم‌زمان چند گزارشگر (<bdi class="ltr-inline">multiplexing</bdi>)</span>
                </div>
              </div>
            </div>

            <!-- Card 2: Design Goal -->
            <div class="sci-panel s08-anim s08-card interactive-el" style="padding:26px 30px;--panel-accent:#69D8A0;--panel-glow:rgba(105,216,160,0.18)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <h2 style="margin:0;font-size:26px;font-weight:700;color:#69D8A0">
                  هدف طراحی از صفر (<bdi class="ltr-inline">De Novo</bdi>)
                </h2>
                <span class="ltr" style="font-size:13px;padding:4px 12px;border-radius:999px;background:rgba(105,216,160,0.12);border:1px solid rgba(105,216,160,0.34);color:#69D8A0;font-weight:700">
                  Cofactor-Free Bioluminescence
                </span>
              </div>
              <p style="margin:0 0 16px 0;font-size:19.5px;line-height:1.68;color:#E6ECF7">
                ساخت آنزیمی <strong style="color:#F4F6FA">بسیار کوچک</strong>، <strong style="color:#F4F6FA">مقاوم به دما</strong>، با بیان بالا در باکتری و <strong style="color:#69D8A0">اختصاصی برای سوبسترای مصنوعی <bdi class="ltr-inline">DTZ</bdi></strong> بدون نیاز به هیچ کوفاکتور کمکی.
              </p>

              <!-- Important Biomedical Framing Note from Speaker Notes -->
              <div style="padding:11px 16px;border-radius:8px;background:rgba(66,217,245,0.07);border:1px solid rgba(66,217,245,0.24);font-size:15.5px;color:#B8C6DC;line-height:1.55">
                <strong style="color:#42D9F5">مزیت زیست‌پزشکی و مرز دقیق ادعا:</strong> برخلاف فلورسانس (<bdi class="ltr-inline">GFP</bdi>) به نور برانگیزاننده نیاز ندارد و مشکل خودفلورسانس بافت را حذف می‌کند؛ اما این دستاورد <strong style="color:#F4F6FA">ابزار تصویربرداری و سنجش آزمایشگاهی</strong> است، نه درمان بالینی.
              </div>
            </div>
          </div>
        </div>

        ${pe("Source: Yeh et al., Nature 614, 774–780 (2023) · 3D Substrate: PubChem CID 135439143 (DTZ) · Optical Reporter Comparison: PDB 1EMA",8)}
      </div>
    `;const i=e.querySelectorAll(".s08-mode"),s=e.querySelector("#s08-mol-formula"),a=e.querySelector("#s08-mol-caption"),o=e.querySelector("#s08-3d-window"),c=async()=>{const n=this.hoveredMode??this.committedMode;if(i.forEach(d=>d.classList.toggle("active",d.dataset.mode===n)),this.renderedMode===n)return;const r=++this.switchToken;n==="dtz"?(s&&(s.textContent="C₂₅H₁₉N₃O · Diphenylterazine"),a&&(a.innerHTML='سوبسترای مصنوعی <bdi class="ltr-inline">Diphenylterazine (DTZ)</bdi>: اکسیداسیون کاتالیتیک هسته‌ی ایمیدازوپیرازینون بدون نیاز به <bdi class="ltr-inline">ATP</bdi> یا نور لیزر، فوتون مرئی آزاد می‌کند.'),await this.loadDtzView(t,o,r)):(s&&(s.textContent="PDB 1EMA · GFP (226 aa β-Barrel)"),a&&(a.innerHTML='گزارشگر فلورسنت طبیعی (<bdi class="ltr-inline">GFP · PDB 1EMA</bdi>، ۲۲۶ اسیدآمینه): نیازمند نور برانگیزاننده‌ی خارجی است که در بافت‌های عمیق با خودفلورسانس زمینه تداخل دارد.'),await this.loadGfpView(t,o,r))};this.syncModeFn=()=>{c()},this.entrance=le(e.querySelectorAll(".s08-anim"),{x:24,opacity:0,duration:.65,stagger:.12,ease:"power3.out"},t.reducedMotion),this.cardHover=se({cards:e.querySelectorAll(".s08-card"),entrance:this.entrance,dimSiblings:!0,onHoverChange:n=>{(this.hoveredMode??this.committedMode)==="dtz"&&document.querySelectorAll(".mol-pin").forEach(r=>{const d=r.dataset.pinId==="dtz-0";r.classList.toggle("pin-focus",n===1&&d),r.classList.toggle("pin-dimmed",n===1&&!d)})}}),i.forEach(n=>{const r=n.dataset.mode??"dtz";n.addEventListener("pointerenter",()=>{this.hoveredMode=r,c()}),n.addEventListener("pointerleave",()=>{this.hoveredMode=null,c()}),n.addEventListener("click",d=>{d.stopPropagation(),this.committedMode=r,this.hoveredMode=null,c()})}),await c()}async loadDtzView(e,t,i){const s=await Ce.loadSmallMolecule("dtz"),a=this.hoveredMode??this.committedMode;if(!this.mounted||i!==this.switchToken||a!=="dtz")return;e.sceneManager.clearStage(),this.gfpAssembly=null,this.renderedMode="dtz";const o=ds(s,!0);e.sceneManager.setCameraImmediate({distance:e.sceneManager.fitDistance(7.95,460),target:[0,0,0],rotX:.22,rotY:.45,screenCenterX:465,screenCenterY:535,autoRotateSpeed:.24}),e.sceneManager.mountObject(o.root,o.dispose,void 0,s.meta.title),e.sceneManager.setInteractive(!0),e.sceneManager.setClipFromElement(t),s.annotations.forEach((c,n)=>{e.sceneManager.addPin({id:`dtz-${n}`,xyz:c.xyz,title:c.label,subtitle:c.role,accent:n===0?"#F5B841":"#42D9F5"})})}async loadGfpView(e,t,i){const s=await Ce.loadProtein("1ema"),a=this.hoveredMode??this.committedMode;!this.mounted||i!==this.switchToken||a!=="gfp"||(e.sceneManager.clearStage(),this.gfpAssembly=_e(s,"secondary","ribbon"),this.renderedMode="gfp",e.sceneManager.setCameraImmediate({distance:e.sceneManager.fitDistance(s.radius*.86,520),target:[0,0,0],rotX:.18,rotY:-.35,screenCenterX:465,screenCenterY:535,autoRotateSpeed:.2}),e.sceneManager.mountObject(this.gfpAssembly.root,()=>this.gfpAssembly?.dispose(),void 0,s.meta.title),e.sceneManager.setInteractive(!0),e.sceneManager.setClipFromElement(t))}resetHover(){this.hoveredMode=null,this.cardHover?.reset(),this.syncModeFn?.()}unmount(){this.mounted=!1,this.cardHover?.destroy(),this.cardHover=null,this.entrance?.kill(),this.entrance=null,this.syncModeFn=null,this.renderedMode=null,this.gfpAssembly=null}}const fe={search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M11 8v6M8 11h6"/></svg>',cubes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="m12 11 8-4.5M12 11v9M12 11 4 6.5"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',dna:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c5 0 11 16 16 16"/><path d="M20 4c-5 0-11 16-16 16"/><path d="M7.5 7h9M6 12h12M7.5 17h9"/></svg>',flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5.4L4.8 18.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 8.4V3"/><path d="M7.2 15h9.6"/></svg>',spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>',warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.8-5.2"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',notes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',fullscreen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',replay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>'};class zs{index=9;totalSteps=6;currentStep=0;mounted=!1;ctx=null;rootEl=null;stepCtrl=null;assembly=null;pocketCenter=[0,0,0];lastVisualStep=null;async mount(e,t){this.mounted=!0,this.ctx=t,this.currentStep=0,this.lastVisualStep=null,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"26%",y:"54%",color:"rgba(66, 217, 245, 0.13)",x2:"75%",y2:"28%",color2:"rgba(105, 216, 160, 0.08)"});const i=ys.map((n,r)=>`
        <div
          class="sci-panel s09-stage interactive-el"
          data-stage="${r}"
          style="padding:18px 16px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#42D9F5;cursor:pointer"
        >
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <span class="step-disc" style="--disc-color:#42D9F5;width:36px;height:36px;font-size:18px">${n.stepFa}</span>
              <span class="icon-circle" style="width:36px;height:36px">${fe[n.icon]}</span>
            </div>
            <h3 style="margin:0 0 4px 0;font-size:20px;font-weight:700;color:#F4F6FA">${n.titleFa}</h3>
            <div class="ltr" style="font-size:11.5px;color:#42D9F5;font-weight:600;margin-bottom:10px">${n.titleEn}</div>
            <p style="margin:0;font-size:15.5px;line-height:1.58;color:#CBD4E4">
              ${n.descHtml}
            </p>
          </div>

          <div style="margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">
            <div class="ltr" style="font-size:20px;font-weight:800;color:#42D9F5">${n.metric}</div>
            <div style="font-size:12.5px;color:#8D99AE">${n.metricLabel}</div>
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        <style>
          .c-nature { color: #42D9F5; font-weight: 700; }
          .c-positive { color: #69D8A0; font-weight: 700; }
        </style>
        ${de({sectionFa:"مقاله‌ی Nature 2023 · متدلوژی گام‌به‌گام",titleFa:"متدلوژی: خط لوله‌ی طراحی",subtitleFa:"از جست‌وجوی فولد مناسب و تولید داربست تا جایگذاری آرژنین کاتالیتیک و غربالگری در باکتری",accent:"nature",badges:[{type:"experimental",text:"Fold Ref: PDB 1OUN (NTF2-like)"},{type:"conceptual",text:"DTZ & Arg(+) Pocket: Conceptual"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:560px 1fr;gap:26px;direction:ltr;align-items:stretch">
          <!-- Left: Live 3D NTF2-like Fold Reference + Conceptual DTZ Active Site -->
          <div class="sci-panel interactive-el mol-viewport-panel" style="padding:16px 18px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#42D9F5;background:rgba(10,15,25,0.5)">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-family:var(--font-en);font-size:12.5px;font-weight:700;color:#42D9F5">
                NTF2-LIKE SCAFFOLD TOPOLOGY (PDB 1OUN)
              </span>
              <span id="s09-3d-state" style="font-family:var(--font-en);font-size:11.5px;color:#A6B0C0">
                Stage 1: Curved β-Sheet Cone
              </span>
            </div>

            <div id="s09-3d-window" style="flex:1;min-height:340px"></div>

            <div style="padding:10px 14px;border-radius:8px;background:rgba(8,11,18,0.86);border:1px solid rgba(255,255,255,0.1);direction:rtl;text-align:right;font-size:13.5px;color:#9BA6BA;line-height:1.5">
              <strong style="color:#F5B841">شفافیت ساختاری:</strong> ساختار کریستالی <bdi class="ltr-inline">LuxSit</bdi> تعیین نشده است؛ این مدل، اسکلت تجربی خانواده‌ی <bdi class="ltr-inline">NTF2</bdi> (<bdi class="ltr-inline">PDB 1OUN</bdi>) را همراه با جانمایی مفهومی <bdi class="ltr-inline">DTZ</bdi> و آرژنین نشان می‌دهد.
            </div>
          </div>

          <!-- Right: 5 Pipeline Stage Cards + Bottom Result Banner -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:18px;direction:rtl;text-align:right">
            <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:14px;flex:1">
              ${i}
            </div>

            <!-- Stage 6: Honest Screening Result Banner -->
            <div
              id="s09-result-banner"
              class="sci-panel interactive-el"
              style="padding:18px 26px;display:flex;justify-content:space-between;align-items:center;--panel-accent:#69D8A0;--panel-glow:rgba(105,216,160,0.2);background:linear-gradient(90deg, rgba(105,216,160,0.12), rgba(16,23,37,0.9));cursor:pointer"
            >
              <div style="display:flex;align-items:center;gap:14px">
                <span class="icon-circle" style="--icon-color:#69D8A0;--icon-border:rgba(105,216,160,0.45);--icon-bg:rgba(105,216,160,0.14)">
                  ${fe.spark}
                </span>
                <div>
                  <div style="font-size:21px;font-weight:700;color:#F4F6FA">
                    نتیجه‌ی غربالگری دور اول: <span style="color:#69D8A0">۳ آنزیم فعال</span> از ۷٬۶۴۸ طراحی (<bdi class="ltr-inline">0.04%</bdi>)؛ نام بهترین طرح: <bdi class="ltr-inline" style="color:#42D9F5">LuxSit</bdi>
                  </div>
                  <div style="font-size:14.5px;color:#A6B0C0;margin-top:2px">
                    نرخ موفقیت پایین اولیه، گزارش صادقانه‌ی مقاله از دشواری کاتالیز از صفر بدون تکامل قبلی است.
                  </div>
                </div>
              </div>
              <span class="ltr" style="font-size:24px;font-weight:800;color:#69D8A0;white-space:nowrap">
                LuxSit · 117 aa
              </span>
            </div>
          </div>
        </div>

        ${pe("Source: Yeh et al., Nature 614, 774–780 (2023) — De novo luciferase design pipeline · Fold family reference: RCSB PDB 1OUN",9)}
      </div>
    `,this.rootEl=e;const s=e.querySelectorAll(".s09-stage"),a=e.querySelector("#s09-result-banner"),o=le(s,{y:20,opacity:0,duration:.6,stagger:.07,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:o,onRender:(n,r)=>{s.forEach((d,u)=>{if(n===5)d.classList.remove("step-focus"),d.classList.add("step-dimmed");else{const y=u===n,F=u!==n&&(r.isHovering||n>0);d.classList.toggle("step-focus",y),d.classList.toggle("step-dimmed",F)}}),a&&(a.classList.toggle("step-focus",n===5),a.classList.toggle("step-dimmed",n!==5&&r.isHovering)),this.assembly&&this.applyStepVisuals(n,this.assembly.data)}}),s.forEach(n=>{const r=Number(n.dataset.stage??"0");this.stepCtrl.bindElement(n,Math.min(r,this.totalSteps-1),{onCommit:d=>{this.currentStep=d,t.onStepChange(d,this.totalSteps)}})}),a&&this.stepCtrl.bindElement(a,5,{onCommit:n=>{this.currentStep=n,t.onStepChange(n,this.totalSteps)}}),this.stepCtrl.renderInitial();const c=await Ce.loadProtein("1oun");this.mounted&&(this.pocketCenter=c.activeSite?c.activeSite.center:[0,0,0],this.assembly=_e(c,"secondary","ribbon"),t.sceneManager.setCameraImmediate({distance:t.sceneManager.fitDistance(c.radius*.9,540),target:[0,0,0],rotX:.16,rotY:.32,screenCenterX:364,screenCenterY:530,autoRotateSpeed:.18}),t.sceneManager.mountObject(this.assembly.root,()=>this.assembly?.dispose(),void 0,c.meta.title),t.sceneManager.setInteractive(!0),t.sceneManager.setClipFromElement(e.querySelector("#s09-3d-window")),this.applyStepVisuals(this.stepCtrl?.activeStep??this.currentStep,c))}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover()}applyStepVisuals(e,t){if(!this.assembly||!this.ctx||this.lastVisualStep===e)return;this.lastVisualStep=e;const i=this.rootEl?.querySelector("#s09-3d-state"),s=this.assembly.data.radius;if(this.ctx.sceneManager.clearPins(),e===0)this.assembly.setRepresentation("ribbon"),this.assembly.setColorMode("secondary"),this.assembly.ligandGroup&&(this.assembly.ligandGroup.visible=!1),this.assembly.activeSiteGroup&&(this.assembly.activeSiteGroup.visible=!1),this.ctx.sceneManager.flyTo({distance:this.ctx.sceneManager.fitDistance(s*.9,540),target:[0,0,0],autoRotateSpeed:.18}),i&&(i.textContent="Stage 1: NTF2 α+β Cone Fold");else if(e===1)this.assembly.setRepresentation("backbone"),this.assembly.ligandGroup&&(this.assembly.ligandGroup.visible=!1),this.assembly.activeSiteGroup&&(this.assembly.activeSiteGroup.visible=!1),this.ctx.sceneManager.flyTo({distance:this.ctx.sceneManager.fitDistance(s*.9,510),target:[0,0,0],autoRotateSpeed:.24}),i&&(i.textContent="Stage 2: 1,615 Hallucinated Backbones");else if(e===2){if(this.assembly.setRepresentation("ribbon"),this.assembly.setColorMode("secondary"),this.assembly.ligandGroup&&(this.assembly.ligandGroup.visible=!0),this.assembly.activeSiteGroup&&(this.assembly.activeSiteGroup.visible=!0),this.ctx.sceneManager.flyTo({distance:this.ctx.sceneManager.fitDistance(13,560),target:this.pocketCenter,autoRotateSpeed:.1}),t.activeSite&&t.activeSite.keyResidues[0]){const a=t.activeSite.keyResidues[0];this.ctx.sceneManager.addPin({id:"arg-site",xyz:a.xyz,title:"Stabilizing Arg⁺ (Conceptual)",subtitle:"Electrostatic stabilization of DTZ O⁻",accent:"#F5B841"})}i&&(i.textContent="Stage 3: RifDock Pocket & Arg⁺···O⁻")}else e===3?(this.assembly.setRepresentation("ribbon"),this.assembly.setColorMode("chain-gradient"),this.assembly.ligandGroup&&(this.assembly.ligandGroup.visible=!0),this.assembly.activeSiteGroup&&(this.assembly.activeSiteGroup.visible=!0),this.ctx.sceneManager.flyTo({distance:this.ctx.sceneManager.fitDistance(s*.86,530),target:[0,0,0],autoRotateSpeed:.16}),i&&(i.textContent="Stage 4: Sequence Optimization + AF2")):(this.assembly.setRepresentation("surface"),this.assembly.setColorMode("chain-gradient"),this.assembly.ligandGroup&&(this.assembly.ligandGroup.visible=!0),this.assembly.activeSiteGroup&&(this.assembly.activeSiteGroup.visible=!0),this.ctx.sceneManager.flyTo({distance:this.ctx.sceneManager.fitDistance(15,600),target:this.pocketCenter,autoRotateSpeed:.14}),i&&(i.textContent="Stage 5: Active Pocket Screening (LuxSit)"))}unmount(){this.mounted=!1,this.stepCtrl?.destroy(),this.stepCtrl=null,this.lastVisualStep=null,this.assembly=null,this.rootEl=null,this.ctx=null}}const ui=5,Ne=36,st=60,Bs=[8.5,9.5,8.5,9,10],Rs=3.2,Li=[16103489,4381173,6063615,16737404],gi={ALA:["A",0],VAL:["V",0],LEU:["L",0],ILE:["I",0],MET:["M",0],PHE:["F",0],TRP:["W",0],CYS:["C",0],SER:["S",1],THR:["T",1],ASN:["N",1],GLN:["Q",1],TYR:["Y",1],HIS:["H",1],GLY:["G",1],PRO:["P",1],LYS:["K",2],ARG:["R",2],ASP:["D",3],GLU:["E",3]},Re=l=>Math.max(0,Math.min(1,l)),Fe=l=>{const e=Re(l);return e*e*(3-2*e)},Ns=l=>{const e=Re(l)-1;return 1+2.4*e*e*e+1.4*e*e},ke=(l,e,t)=>{const i=Math.sin(l*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)};function Ct(l){return()=>{l|=0,l=l+1831565813|0;let e=Math.imul(l^l>>>15,1|l);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $s(l,e){l>=.9?e.setHex(3965695):l>=.7?e.setHex(6671347):l>=.5?e.setHex(16767763):e.setHex(16743749)}function Is(l,e){const t=l()*2-1,i=l()*Math.PI*2,s=Math.sqrt(1-t*t);return e.set(s*Math.cos(i),t,s*Math.sin(i))}function qs(l,e,t={}){const i=l.data,s=i.caTrace.length,a=new me,o=new Float32Array(s*3);i.caTrace.forEach((g,b)=>{o[b*3]=g.xyz[0],o[b*3+1]=g.xyz[1],o[b*3+2]=g.xyz[2]});const c=i.activeSite?[i.activeSite.center[0],i.activeSite.center[1],i.activeSite.center[2]]:[0,0,0],n=new Float32Array(s*s);for(let g=0;g<s;g++)for(let b=0;b<s;b++){const x=o[g*3]-o[b*3],H=o[g*3+1]-o[b*3+1],k=o[g*3+2]-o[b*3+2];n[g*s+b]=Math.sqrt(x*x+H*H+k*k)}const r=new Float32Array(s);let d=1;for(let g=0;g<s;g++){let b=0;for(let x=0;x<s;x++)g!==x&&n[g*s+x]<10&&b++;r[g]=b,b>d&&(d=b)}const u=[],y=new Uint8Array(s),F={};Object.values(gi).forEach(([g,b])=>F[g]=b);let M=0;i.caTrace.forEach((g,b)=>{const x=gi[g.resn]??["X",1],H=t.designedSeq?.[String(g.resi)];H?(u.push(H),y[b]=F[H]??1,H===x[0]&&M++):(u.push(x[0]),y[b]=x[1],M++)});const h={step:0,p:0,n:s,cur:new Float32Array(o),tgt:o,agreement:0,iter:0,loss:[],accepted:[],recovery:M/s,poseK:0,scores:[],best:[],letters:u,classes:y,assignedMask:new Float32Array(s),assignedCount:0,lastResidue:-1,dev:new Float32Array(s),rmsd:0,recycle:0,md:[],mdFrame:0},S=l.ribbonMesh.material,w=g=>{l.ribbonMesh.visible=g>.01,S.transparent=g<.99,S.opacity=g,S.depthWrite=g>.9},z=[];for(let g=0;g<ui;g++){const b=new me;b.visible=g===0,z.push(b),a.add(b)}const p=new K,m=new Ti,v=Ct(11),C=new Float32Array(s*3);{let g=0,b=0,x=0,H=1,k=0,O=0;for(let f=0;f<s;f++){H=H*.5+(v()*2-1)-g*.02,k=k*.5+(v()*2-1)-b*.02,O=O*.5+(v()*2-1)-x*.02;const J=Math.hypot(H,k,O)||1;g+=H/J*3.8,b+=k/J*3.8,x+=O/J*3.8,C[f*3]=g,C[f*3+1]=b,C[f*3+2]=x}let U=0,ee=0,I=0;for(let f=0;f<s;f++)U+=C[f*3],ee+=C[f*3+1],I+=C[f*3+2];U/=s,ee/=s,I/=s;let Q=1;for(let f=0;f<s;f++)C[f*3]-=U,C[f*3+1]-=ee,C[f*3+2]-=I,Q=Math.max(Q,Math.hypot(C[f*3],C[f*3+1],C[f*3+2]));const $=i.radius*.95/Q;for(let f=0;f<s*3;f++)C[f]*=$}const L=new Se;L.setAttribute("position",new re(new Float32Array(h.cur),3));const R=new ct(L,new Tt({color:11452646,transparent:!0,opacity:.75}));z[0].add(R);const T=new vt(new Le(.62,12,10),new Qe({roughness:.3,metalness:.1}),s);T.instanceColor=new ai(new Float32Array(s*3),3),z[0].add(T);const E=(g,b)=>{const x=Fe((g-.04)/.86),H=Math.floor(b*14),k=L.attributes.position.array;for(let $=0;$<s;$++){const f=Fe(x*1.35-$/s*.35),J=2.4*Math.pow(1-f,1.3);for(let ue=0;ue<3;ue++){const Te=C[$*3+ue]+(o[$*3+ue]-C[$*3+ue])*f+J*(ke($,H,ue)-.5)*2;h.cur[$*3+ue]=Te,k[$*3+ue]=Te}const ie=Math.hypot(h.cur[$*3]-o[$*3],h.cur[$*3+1]-o[$*3+1],h.cur[$*3+2]-o[$*3+2]);p.setHex(4381173).lerp(new K(16103489),Re(ie/9)),T.setColorAt($,p),m.position.set(h.cur[$*3],h.cur[$*3+1],h.cur[$*3+2]),m.scale.setScalar(.75+.35*f),m.updateMatrix(),T.setMatrixAt($,m.matrix)}L.attributes.position.needsUpdate=!0,T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0);let O=0,U=0;for(let $=0;$<s;$++)for(let f=$+3;f<s;f++){const J=Math.hypot(h.cur[$*3]-h.cur[f*3],h.cur[$*3+1]-h.cur[f*3+1],h.cur[$*3+2]-h.cur[f*3+2]);Math.abs(J-n[$*s+f])<2&&O++,U++}h.agreement=O/U;const ee=Math.min(st,Math.max(0,Math.floor(x*st)));h.iter=ee,h.loss.length=0,h.accepted.length=0;let I=1.05;for(let $=0;$<ee;$++){const J=.14+.9*Math.pow(1-Fe($/(st-1)),1.35)+.16*(ke($,1,2)-.35)*(1-.7*($/st)),ie=J<=I||ke($,3,4)<.12*(1-$/st);ie&&(I=J),h.loss.push(J),h.accepted.push(ie)}const Q=Re((x-.9)/.1);w(.88*Q),R.material.opacity=.75*(1-.6*Q)},P=new me;let D=new _,B=[],A=-1,N=[];if(i.ligand&&i.ligand.atoms.length>0){N=i.ligand.atoms,D=new _(N.reduce((H,k)=>H+k.x,0)/N.length,N.reduce((H,k)=>H+k.y,0)/N.length,N.reduce((H,k)=>H+k.z,0)/N.length),B=N.map(H=>new _(H.x,H.y,H.z).sub(D));const g=(t.anchorLabel?i.activeSite?.keyResidues.find(H=>H.label===t.anchorLabel):i.activeSite?.keyResidues[0])?.xyz;let b=1/0;N.forEach((H,k)=>{if(H.element.toUpperCase()!=="O")return;const O=g?Math.hypot(H.x-g[0],H.y-g[1],H.z-g[2]):k;O<b&&(b=O,A=k)});const x=ei(i.ligand.atoms,i.ligand.bonds,{carbonColor:6936736,atomScale:1.05,bondRadius:.15,emissiveTint:1457452,emissiveIntensity:.35});x.position.copy(D).multiplyScalar(-1),P.add(x),P.position.copy(D)}const q=A>=0?[N[A].x,N[A].y,N[A].z]:null,G=(t.anchorLabel?i.activeSite?.keyResidues.find(g=>g.label===t.anchorLabel):i.activeSite?.keyResidues[0])?.xyz??null,Z=380,V=new Float32Array(Z*3),j=new Uint8Array(Z),ze=new Float32Array(Z);{const g=Ct(5),b=new _;for(let x=0;x<Z;x++){const H=B.length?B[Math.floor(g()*B.length)]:new _,k=N.length?N[B.indexOf(H)].element.toUpperCase():"C";Is(g,b).multiplyScalar(2.4+g()*3.2),V[x*3]=D.x+H.x+b.x,V[x*3+1]=D.y+H.y+b.y,V[x*3+2]=D.z+H.z+b.z,j[x]=k==="O"||k==="N"?g()<.35?2:1:0;let O=99;for(const U of B){const ee=Math.hypot(V[x*3]-(D.x+U.x),V[x*3+1]-(D.y+U.y),V[x*3+2]-(D.z+U.z));ee<O&&(O=ee)}ze[x]=O}}const ve=new Se;ve.setAttribute("position",new re(new Float32Array(V),3));const W=new re(new Float32Array(Z*3),3);ve.setAttribute("color",W);const Y=new Lt(ve,new kt({size:.36,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:jt}));z[1].add(Y);const ge=10,Ee=new Se;Ee.setAttribute("position",new re(new Float32Array(ge*Math.max(1,B.length)*3),3));const be=new re(new Float32Array(ge*Math.max(1,B.length)*3),3);Ee.setAttribute("color",be);const he=new Lt(Ee,new kt({size:.42,vertexColors:!0,transparent:!0,depthWrite:!1,blending:jt}));z[1].add(he);const te=new ce(new Le(.85,18,14),new ot({color:6063615,emissive:6063615,emissiveIntensity:.55,roughness:.25}));G&&te.position.set(G[0],G[1],G[2]);const ne=new Se().setFromPoints([new _,new _]),qe=new ct(ne,new Wt({color:16103489,dashSize:.4,gapSize:.26})),xe=new ce(new Qt(.9,1.1,40),new at({color:6936736,side:pt,transparent:!0,opacity:.9,depthWrite:!1})),Ye=(g,b)=>{const x=Math.pow(Re(g/(Ne-1)),.9),H=11*Math.pow(1-x,1.6)*(.45+.55*ke(g,1,1)),k=Math.PI*Math.pow(1-x,1.2)*(.3+.7*ke(g,2,2)),O=new _(ke(g,3,3)-.5,ke(g,4,4)-.5,ke(g,5,5)-.5).normalize(),U=new _(ke(g,6,6)-.5,ke(g,7,7)-.5,ke(g,8,8)-.5).normalize();b.pos.copy(O).multiplyScalar(H),b.quat.setFromAxisAngle(U,k)},Je=g=>{const b=Re(g/(Ne-1));return 1*Math.pow(1-b,1.3)+.22*ke(g,9,9)+.04},Ae={pos:new _,quat:new Zt},oe=new _,Ge=new Zt,et=(g,b)=>{const x=Fe(g/.22),H=Re((g-.22)/.63),k=Fe((g-.85)/.1),O=Math.min(Ne-1,Math.floor(H*Ne));h.poseK=g<.22?0:g>=.85?Ne:O+1,h.scores.length=0,h.best.length=0;let U=9;const ee=g>=.85?Ne-1:g<.22?-1:O;for(let f=0;f<=ee;f++){const J=Je(f);h.scores.push(J),U=Math.min(U,J),h.best.push(U)}if(B.length){const f=g<.22?0:O;Ye(f,Ae);const J=Ae.quat.clone().slerp(Ge,k);oe.copy(Ae.pos).multiplyScalar(1-k),P.position.copy(D).add(oe),P.quaternion.copy(J);const ie=Ee.attributes.position.array,ue=be.array;for(let Te=0;Te<ge;Te++){const Ze=g<.22?-1:O-1-Te,it=Ze>=0&&k<.6?(1-Te/ge)*.5*(1-k):0;Ze>=0&&Ye(Ze,Ae);for(let Ft=0;Ft<B.length;Ft++){const lt=(Te*B.length+Ft)*3;Ze>=0&&(oe.copy(B[Ft]).applyQuaternion(Ae.quat).add(Ae.pos).add(D),ie[lt]=oe.x,ie[lt+1]=oe.y,ie[lt+2]=oe.z),ue[lt]=.41*it*2,ue[lt+1]=.85*it*2,ue[lt+2]=.63*it*2}}Ee.attributes.position.needsUpdate=!0,be.needsUpdate=!0}const I=ve.attributes.position.array,Q=W.array;for(let f=0;f<Z;f++){const J=Fe(x*1.4-f/Z*.4),ie=.55+.45*J;I[f*3]=D.x+(V[f*3]-D.x)*ie,I[f*3+1]=D.y+(V[f*3+1]-D.y)*ie,I[f*3+2]=D.z+(V[f*3+2]-D.z)*ie;const ue=ze[f]<2.2,Te=.7+.3*Math.sin(b*2.2+f),Ze=J*Te*(k>0?ue?.55+.7*k:.55*(1-.65*k):.55),Ot=j[f],it=Ot===0?[.58,.58,1]:Ot===1?[.96,.72,.25]:[.36,.52,1];Q[f*3]=it[0]*Ze,Q[f*3+1]=it[1]*Ze,Q[f*3+2]=it[2]*Ze}ve.attributes.position.needsUpdate=!0,W.needsUpdate=!0;const $=g>.88;if(te.visible=!!G&&g>.5,qe.visible=!!G&&$&&!!q,xe.visible=$&&!!q,q&&G){const f=ne.attributes.position.array;f[0]=G[0],f[1]=G[1],f[2]=G[2],f[3]=q[0],f[4]=q[1],f[5]=q[2],ne.attributes.position.needsUpdate=!0,qe.computeLineDistances(),xe.position.set(q[0],q[1],q[2]),xe.lookAt(q[0],q[1],q[2]+10);const J=1+.25*Math.sin(b*4);xe.scale.setScalar(J)}w(.2)};z[1].add(te,qe,xe);const Me=Array.from({length:s},(g,b)=>b);{const g=Ct(23);for(let b=s-1;b>0;b--){const x=Math.floor(g()*(b+1));[Me[b],Me[x]]=[Me[x],Me[b]]}}const rt=new Int32Array(s);Me.forEach((g,b)=>rt[g]=b);const we=new vt(new Le(.95,14,12),new Qe({roughness:.3,metalness:.12,emissive:1120295,emissiveIntensity:.5}),s);we.instanceColor=new ai(new Float32Array(s*3),3),z[2].add(we);const De=new ce(new Qt(1.5,1.8,36),new at({color:16777215,side:pt,transparent:!0,opacity:.9,depthWrite:!1}));z[2].add(De);const Be=new K(3818848),Xe=Li.map(g=>new K(g)),Ue=(g,b)=>{const H=Fe(g/.86)*s;h.assignedCount=Math.min(s,Math.floor(H)),h.lastResidue=h.assignedCount>0&&h.assignedCount<s?Me[h.assignedCount-1]:-1;for(let k=0;k<s;k++){const O=Re((H-rt[k])/3);h.assignedMask[k]=O;const U=.5+.5*(r[k]/d),ee=(.5+.5*Ns(O))*U*(O>0?1:.7);m.position.set(o[k*3],o[k*3+1],o[k*3+2]),m.scale.setScalar(Math.max(.2,ee)),m.updateMatrix(),we.setMatrixAt(k,m.matrix),p.copy(Be).lerp(Xe[y[k]],Fe(O)),we.setColorAt(k,p)}if(we.instanceMatrix.needsUpdate=!0,we.instanceColor&&(we.instanceColor.needsUpdate=!0),h.lastResidue>=0){const k=h.lastResidue;De.visible=!0,De.position.set(o[k*3],o[k*3+1],o[k*3+2]),De.scale.setScalar(1+.2*Math.sin(b*10))}else De.visible=!1;w(.32)};De.onBeforeRender=(g,b,x)=>{De.quaternion.copy(x.quaternion)};const ye=new Float32Array(s*3);{const g=Ct(31),b=Array.from({length:9},()=>g()*Math.PI*2),x=new Float32Array(s*3);let H=0,k=0,O=0;for(let I=0;I<s;I++){const Q=i.caTrace[I].ss==="C"?1.7:i.caTrace[I].ss==="H"?.55:.75;for(let $=0;$<3;$++){const f=Math.sin(I*.11+b[$])+.6*Math.sin(I*.27+b[$+3])+.35*Math.sin(I*.61+b[$+6]);x[I*3+$]=Q*f}H+=x[I*3],k+=x[I*3+1],O+=x[I*3+2]}H/=s,k/=s,O/=s;let U=0;for(let I=0;I<s;I++)x[I*3]-=H,x[I*3+1]-=k,x[I*3+2]-=O,U+=x[I*3]**2+x[I*3+1]**2+x[I*3+2]**2;const ee=1/Math.sqrt(U/s);for(let I=0;I<s*3;I++)ye[I]=x[I]*ee}const We=1.2,bt=[[0,6.2],[.16,6.2],[.3,3.6],[.5,2.2],[.7,We],[1,We]],Ni=g=>{for(let b=1;b<bt.length;b++)if(g<=bt[b][0]){const[x,H]=bt[b-1],[k,O]=bt[b];return H+(O-H)*Fe((g-x)/(k-x))}return We};let tt=null;const $i=new Qe({vertexColors:!0,roughness:.35,metalness:.1,emissive:662064,emissiveIntensity:.6}),ut=new Se;ut.setAttribute("position",new re(new Float32Array(s*6),3));const Ht=new re(new Float32Array(s*6),3);ut.setAttribute("color",Ht);const Ii=new Wi(ut,new Tt({vertexColors:!0,transparent:!0,opacity:.9}));z[3].add(Ii);let xt=-1;const Oe=new Float32Array(s*3),qi=(g,b)=>{const x=[];for(let f=0;f<s;f++)Oe[f*3]=o[f*3]+ye[f*3]*g,Oe[f*3+1]=o[f*3+1]+ye[f*3+1]*g,Oe[f*3+2]=o[f*3+2]+ye[f*3+2]*g,x.push(new _(Oe[f*3],Oe[f*3+1],Oe[f*3+2])),h.dev[f]=g*Math.hypot(ye[f*3],ye[f*3+1],ye[f*3+2]);const H=new Mi(x,!1,"catmullrom",.35),k=s*2,O=6,U=new Di(H,k,.36,O,!1),ee=U.attributes.position,I=new Float32Array(ee.count*3);for(let f=0;f<ee.count;f++){const ie=Math.floor(f/(O+1))/k*(s-1),ue=Math.min(s-1,Math.round(ie)),Te=i.caTrace[ue].ss==="C"?.74:.95;$s(Te*(.55+.45*b)-h.dev[ue]*.012,p),I[f*3]=p.r,I[f*3+1]=p.g,I[f*3+2]=p.b}U.setAttribute("color",new re(I,3)),tt?(tt.geometry.dispose(),tt.geometry=U):(tt=new ce(U,$i),z[3].add(tt));const Q=ut.attributes.position.array,$=Ht.array;for(let f=0;f<s;f++){Q[f*6]=o[f*3],Q[f*6+1]=o[f*3+1],Q[f*6+2]=o[f*3+2],Q[f*6+3]=Oe[f*3],Q[f*6+4]=Oe[f*3+1],Q[f*6+5]=Oe[f*3+2];const J=Re(h.dev[f]/5);p.setHex(6936736).lerp(new K(16737404),J);for(let ie=0;ie<2;ie++)$[f*6+ie*3]=p.r,$[f*6+ie*3+1]=p.g,$[f*6+ie*3+2]=p.b}ut.attributes.position.needsUpdate=!0,Ht.needsUpdate=!0},Gi=g=>{const b=Ni(g);h.rmsd=b,h.recycle=g<.16?0:g<.3?1:g<.5?2:3,(Math.abs(b-xt)>.015||xt<0)&&(xt=b,qi(b,Re(1-(b-We)/5))),w(.4)},zt=[];for(let g=0;g<s;g++)Math.hypot(o[g*3]-c[0],o[g*3+1]-c[1],o[g*3+2]-c[2])<11.5&&zt.push(g);const Bt=new vt(new Le(.7,12,10),new Qe({roughness:.3,color:9413576,emissive:1713984,emissiveIntensity:.6}),Math.max(1,zt.length));z[4].add(Bt);const wt=150,gt=new Float32Array(wt*3),Rt=new Se;Rt.setAttribute("position",new re(gt,3));const Oi=new ct(Rt,new Tt({color:16747168,transparent:!0,opacity:.85}));z[4].add(Oi);const Nt=(g,b)=>{const x=new me;return[1,.68,.42].forEach((H,k)=>{const O=new ce(new Le(b*H,20,16),new at({color:g,transparent:!0,opacity:.08+k*.07,depthWrite:!1,blending:jt}));x.add(O)}),x},$t=Nt(16737404,1.75),It=Nt(6063615,1.5),qt=Nt(9671935,2.2);z[4].add($t,It,qt);const ti=new ce(new Le(.7,16,12),new ot({color:6063615,emissive:6063615,emissiveIntensity:.55,roughness:.25}));G&&ti.position.set(G[0],G[1],G[2]),z[4].add(ti);const Gt=new Se().setFromPoints([new _,new _]),ii=new ct(Gt,new Wt({color:16103489,dashSize:.4,gapSize:.26}));z[4].add(ii),G&&It.position.set(G[0],G[1],G[2]);const ji=(()=>{const g=new _;let b=0;return N.forEach((x,H)=>{(t.ringAtomNames?t.ringAtomNames.includes(x.name??""):x.element.toUpperCase()==="N")&&(g.add(B[H]),b++)}),b?g.multiplyScalar(1/b):new _})(),Vi=(g,b)=>{const x=b,H=.18+.3*Fe(g/.3),k=new _(Math.sin(x*2.7)+.5*Math.sin(x*6.1+1),Math.sin(x*2.1+2)+.5*Math.sin(x*5.3),Math.sin(x*3.3+4)+.5*Math.sin(x*7.7+2)).multiplyScalar(H);P.position.copy(D).add(k),P.quaternion.setFromEuler(new Zi(.1*Math.sin(x*2.3)*H*3,.1*Math.sin(x*1.9+1)*H*3,.1*Math.sin(x*2.7+2)*H*3)),zt.forEach((I,Q)=>{const $=H*.7;m.position.set(o[I*3]+Math.sin(x*3+I)*$,o[I*3+1]+Math.sin(x*2.6+I*1.3)*$,o[I*3+2]+Math.sin(x*3.4+I*.7)*$),m.scale.setScalar(1),m.updateMatrix(),Bt.setMatrixAt(Q,m.matrix)}),Bt.instanceMatrix.needsUpdate=!0;let O=0,U=0,ee=0;if(A>=0){oe.copy(B[A]).applyQuaternion(P.quaternion).add(P.position),O=oe.x,U=oe.y,ee=oe.z,$t.position.set(O,U,ee);const I=1+.12*Math.sin(x*3.4);if($t.scale.setScalar(I*Fe(g/.25+.2)),gt.copyWithin(0,3),gt[(wt-1)*3]=O,gt[(wt-1)*3+1]=U,gt[(wt-1)*3+2]=ee,Rt.attributes.position.needsUpdate=!0,G){const Q=Gt.attributes.position.array;Q[0]=G[0],Q[1]=G[1],Q[2]=G[2],Q[3]=O,Q[4]=U,Q[5]=ee,Gt.attributes.position.needsUpdate=!0,ii.computeLineDistances()}}oe.copy(ji).applyQuaternion(P.quaternion).add(P.position),qt.position.copy(oe),qt.scale.setScalar((1+.1*Math.sin(x*2.2+1))*Fe(g/.25+.2)),It.scale.setScalar((1+.1*Math.sin(x*2.9))*Fe(g/.25+.2)),h.mdFrame=Math.floor(x*40)%1e4,h.md.push(k.length()+.05*Math.sin(x*9)),h.md.length>180&&h.md.shift(),w(.18)};let ft=0,si=0,ni=0;const oi=g=>{z.forEach((b,x)=>b.visible=x===g),B.length&&(P.removeFromParent(),(g===1||g===4)&&z[g].add(P)),l.setRepresentation("ribbon"),l.setColorMode(g===2||g===3?"subunit":"secondary"),l.ligandGroup&&(l.ligandGroup.visible=!1),l.activeSiteGroup&&(l.activeSiteGroup.visible=!1),l.backboneGroup.visible=!1,l.surfaceGroup.visible=!1,g===4&&(h.md.length=0)};return oi(0),{root:a,state:h,pocketCenter:c,anionPos:q,setStep(g){ft=Math.max(0,Math.min(ui-1,g)),h.step=ft,si=ni,xt=-1,oi(ft)},update(g,b){ni=b;const x=Bs[ft],H=e?x:(b-si)%(x+Rs),k=Re(H/x);switch(h.p=k,ft){case 0:E(k,b);break;case 1:et(k,b);break;case 2:Ue(k,b);break;case 3:Gi(k);break;default:Vi(k,b)}},dispose(){tt&&tt.geometry.dispose(),P.removeFromParent(),ht(a),ht(P)}}}const Gs="1q7b",Os="1q7b_mpnn",fi=520,js=14.5,Vs=560,yi="LYS155",_s=["N1N","C2N","C3N","C4N","C5N","C6N"],Ys=/NADP?\(\+\)|[A-Za-z0-9][A-Za-zαÅ0-9⁺_\-./ ]*[A-Za-zαÅ0-9⁺]|[A-Za-z0-9]/g,X=l=>l.replace(Ys,e=>`⁦${e}⁩`),Et=[{state:"Step 1 · Backbone hallucination (MCMC)",titleFa:"trRosetta + MCMC: Backbone Hallucination",bodyFa:X("از یک chain تصادفی شروع می‌کنیم. در هر iteration یک move پیشنهاد می‌شود و loss function (confidence شبکه‌ی trRosetta روی distance map) با معیار Metropolis تعیین می‌کند پذیرفته شود یا نه. در hallucination واقعی هیچ target از پیش‌تعیین‌شده‌ای وجود ندارد؛ در این نمایش، مسیر به یک fold پایدار ختم می‌شود."),metricLabel:X("MCMC iterations (شماتیک)"),legend:[["#F5B841","High-error Cα"],["#42D9F5","Cα near final fold"]],phases:[[0,X("شروع: chain تصادفی، بدون fold")],[.1,X("پیشنهاد move در MCMC و ارزیابی loss")],[.42,X("پذیرش moveهای بهتر؛ distance map شکل می‌گیرد")],[.9,X("همگرایی (convergence): fold پایدار و ribbon backbone ساخته می‌شود")]]},{state:"Step 2 · Interaction field & docking",titleFa:"RifGen → RifDock: Interaction Field to Docking",bodyFa:X("نقطه‌های رنگی، hotspotهای rotamer interaction field حول substrate هستند. در مقاله این کار برای DTZ انجام شده؛ این‌جا همان ایده روی NAD(+) در pocket آنزیم نشان داده می‌شود: ligand چندین pose را امتحان می‌کند و بهترین score نگه داشته می‌شود. (pose نهایی در این نمایش همان موقعیت کریستالی NADP است.)"),metricLabel:X("docking trials (شماتیک)"),legend:[["#9394FF","Hydrophobic contact"],["#F5B841","H-bond"],["#5C85FF","Charged interaction"],["#69D8A0","NAD(+)"]],phases:[[0,X("ساخت rotamer interaction field حول NAD(+) (RifGen)")],[.22,X("امتحان poseهای مختلف ligand در pocket (RifDock)")],[.85,X("بهترین pose: تماس Lys155 با ribose روشن می‌ماند")]]},{state:"Step 3 · Inverse folding (ProteinMPNN)",titleFa:"ProteinMPNN: Sequence Design on a Fixed Backbone",bodyFa:X("شبکه با ترتیبی تصادفی، amino acid هر position را بر پایه‌ی محیط ۳بعدی‌اش انتخاب می‌کند (autoregressive)؛ residueهای hydrophobic عمدتاً به core می‌روند. §§ در دور دوم مقاله، جایگزینی RosettaDesign با ProteinMPNN بسته‌بندی core و solubility را بهتر کرد."),metricLabel:X("positionهای تعیین‌شده"),legend:[["#F5B841","Hydrophobic"],["#42D9F5","Polar"],["#5C85FF","Positive (+)"],["#FF647C","Negative (−)"]],phases:[[0,X("backbone ثابت؛ ترتیب positionها تصادفی است")],[.06,X("هر position بر پایه‌ی محیط ۳بعدی‌اش یک amino acid می‌گیرد")],[.86,X("طراحی کامل شد؛ core عمدتاً hydrophobic است")]]},{state:"Step 4 · AlphaFold2 self-consistency",titleFa:"AlphaFold2: Self-Consistency Check",bodyFa:X("ساختار پیش‌بینی‌شده (tube رنگی بر پایه‌ی pLDDT) با چند recycling به design model (ribbon فیروزه‌ای) نزدیک می‌شود و خطوط، انحراف هر Cα را نشان می‌دهند. انحراف‌ها و مقدار RMSD در این نمایش شماتیک‌اند؛ مقدار گزارش‌شده در مقاله برای LuxSit برابر 1.35 Å است (خط‌چین)."),metricLabel:X("RMSD (شماتیک)"),legend:[["#42D9F5","Design model"],["#3C82FF","AF2 prediction (high pLDDT)"],["#FFDB13","Lower confidence"],["#FF647C","Large deviation"]],phases:[[0,X("پیش‌بینی اولیه: انحراف زیاد از design model")],[.16,X("در recycling اول، خطوط انحراف کوتاه‌تر می‌شوند")],[.3,X("در recycling دوم، pLDDT بالا می‌رود")],[.5,X("در recycling سوم، ساختار به design model همگرا می‌شود")],[.7,X("خودسازگار (self-consistent): RMSD کوچک (مقدار نمایشی)")]]},{state:"Step 5 · DFT + MD mechanism check",titleFa:"DFT + MD: Mechanism & Dynamics",bodyFa:X("electron density (DFT) حول oxygen مربوط به ribose، گروه مثبت Lys155 و حلقه‌ی nicotinamide نشان داده شده است. thermal motion مربوط به pocket و trajectory اکسیژن (MD) برای بررسی stability برهم‌کنش و specificity سوبسترا به کار می‌رود. (ابرها مفهومی‌اند، نه خروجی محاسبه‌ی کوانتومی.)"),metricLabel:X("MD frame (شماتیک)"),legend:[["#FF647C","Electron density (O)"],["#5C85FF","Lys155 (conceptual)"],["#9394FF","Nicotinamide ring"],["#FF8AA0","O trajectory"]],phases:[[0,X("electron density (DFT) حول O، Lys155 و حلقه‌ی nicotinamide")],[.3,X("thermal motion مربوط به pocket و trajectory اکسیژن (MD)")]]}];class Xs{index=10;totalSteps=5;currentStep=0;rootEl=null;stepCtrl=null;sideHover=null;mounted=!1;ctx=null;assembly=null;stage=null;lastVisualStep=-1;mpnnNote="";frameTimers=[];hud=null;mapCur=null;async mount(e,t){this.mounted=!0,this.ctx=t,this.currentStep=0,this.lastVisualStep=-1,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"24%",y:"52%",color:"rgba(66, 217, 245, 0.12)",x2:"78%",y2:"40%",color2:"rgba(105, 216, 160, 0.06)"});const i=ms.map((h,S)=>{const w=S===3?"#69D8A0":"#42D9F5";return`
        <div
          class="sci-panel s10-row interactive-el"
          data-idx="${S}"
          style="flex:1;padding:12px 22px;display:grid;grid-template-columns:44px 236px 1fr;align-items:center;gap:18px;--panel-accent:${w};--panel-glow:${S===3?"rgba(105,216,160,0.18)":"rgba(66,217,245,0.16)"};cursor:pointer"
        >
          <div style="display:flex;justify-content:center">
            <span class="step-disc" style="--disc-color:${w};width:38px;height:38px;font-size:18px">${h.stepFa}</span>
          </div>
          <div style="direction:ltr;text-align:right;border-right:2px solid rgba(66,217,245,0.32);padding-right:14px">
            <div style="font-family:var(--font-en);font-size:19px;font-weight:800;color:#F4F6FA;line-height:1.25">${h.tool}</div>
            <div style="font-family:var(--font-en);font-size:12px;color:${w};font-weight:600;margin-top:3px;line-height:1.35">${h.purposeEn}</div>
          </div>
          <div style="direction:rtl;text-align:right;font-size:17.5px;line-height:1.55;color:#DCE3F0">${h.descHtml}</div>
        </div>`}).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقاله‌ی Nature 2023 · زنجیره‌ی محاسباتی",titleFa:"الگوریتم‌ها و ابزارها",subtitleFa:X("نحوه‌ی کار هر الگوریتم روی یک ساختار پروتئینی واقعی (PDB 1Q7B)؛ با کلید جهت‌دار به الگوریتم بعدی بروید"),accent:"nature",badges:[{type:"computational",text:"LuxSit: AF2 vs design 1.35 Å (reported)"},{type:"conceptual",text:"Conceptual · scaffold PDB 1Q7B"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:1fr 930px;gap:26px;direction:rtl;align-items:stretch">
          <div style="display:flex;flex-direction:column;gap:12px;min-height:0">${i}</div>

          <div class="sci-panel s10-viz mol-viewport-panel interactive-el" style="padding:14px 16px 12px;display:flex;flex-direction:column;gap:10px;min-height:0;--panel-accent:#42D9F5;background:rgba(10,15,25,0.55);direction:ltr">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-family:var(--font-en);font-size:12.5px;font-weight:700;color:#42D9F5;letter-spacing:.04em">ALGORITHM VIEW · SCAFFOLD PDB 1Q7B (EC 1.1.1.100, NADP-bound)</span>
              <span id="s10-state" style="font-family:var(--font-en);font-size:11.5px;color:#A6B0C0"></span>
            </div>

            <div id="s10-3d-window" style="flex:1;min-height:0;position:relative;border-radius:12px;border:1px solid rgba(66,217,245,0.22);background:radial-gradient(ellipse at 50% 55%, rgba(66,217,245,0.09), rgba(6,9,16,0.6) 72%);box-shadow:inset 0 0 50px rgba(0,0,0,0.5);pointer-events:none">
              <div id="s10-phase" style="position:absolute;left:50%;bottom:12px;transform:translateX(-50%);max-width:94%;direction:rtl;text-align:center;font-size:15px;font-weight:600;color:#F4F6FA;background:rgba(7,10,17,0.78);padding:7px 16px;border-radius:999px;border:1px solid rgba(66,217,245,0.35);box-shadow:0 0 18px rgba(66,217,245,0.14);white-space:nowrap"></div>
              <div id="s10-legend" style="position:absolute;top:10px;left:12px;display:flex;flex-direction:column;gap:5px;direction:ltr;text-align:left;font-size:12.5px;color:#C5CEDD;background:rgba(7,10,17,0.62);padding:8px 11px;border-radius:8px;border:1px solid rgba(255,255,255,0.08)"></div>
            </div>

            <div style="display:grid;grid-template-columns:360px 1fr;gap:16px;align-items:stretch">
              <canvas id="s10-hud" width="720" height="380" style="width:360px;height:190px;border-radius:10px;background:rgba(6,9,16,0.7);border:1px solid rgba(255,255,255,0.08)"></canvas>
              <div style="direction:rtl;text-align:right;display:flex;flex-direction:column;gap:6px;min-width:0">
                <div id="s10-hud-title" style="font-size:17px;font-weight:700;color:#F4F6FA"></div>
                <div id="s10-hud-body" style="font-size:13.5px;line-height:1.62;color:#B9C3D4"></div>
                <div style="display:flex;align-items:baseline;gap:10px;margin-top:auto;direction:rtl">
                  <span id="s10-hud-metric" class="ltr" style="font-size:26px;font-weight:800;color:#42D9F5;min-width:92px;text-align:left"></span>
                  <span id="s10-hud-metric-label" style="font-size:12.5px;color:#8D99AE"></span>
                </div>
              </div>
            </div>

            <div style="direction:rtl;text-align:right;font-size:12px;color:#8D99AE;line-height:1.5;padding:6px 10px;border-radius:7px;background:rgba(8,11,18,0.8);border:1px solid rgba(255,255,255,0.07)">
              <strong style="color:#F5B841">${X("شفافیت:")}</strong> ${X("ساختار مرجع PDB 1Q7B است (oxidoreductase با NADP(+)، هومولوگ طبیعی M6G92 در 310.ai). فرایندها (search، noise، recycling، thermal motion) conceptual و آموزشی‌اند و خروجی اجرای واقعی ابزارها نیستند، به‌جز sequence ProteinMPNN در گام ۳. ابزارها در مقاله‌ی Nature برای LuxSit به کار رفته‌اند.")}
            </div>
          </div>
        </div>

        ${pe("Source: Yeh et al., Nature 614, 774–780 (2023) · Illustration scaffold: RCSB PDB 1Q7B (E. coli FabG, X-ray 2.05 Å)",10)}
      </div>
    `,this.rootEl=e,this.hud=e.querySelector("#s10-hud");const s=e.querySelectorAll(".s10-row"),a=le(s,{x:24,opacity:0,duration:.6,stagger:.08,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:a,onRender:(h,S)=>{s.forEach((w,z)=>{const p=z===h,m=z!==h&&(S.isHovering||h>0);w.classList.toggle("step-focus",p),w.classList.toggle("step-dimmed",m)}),this.applyStep(h)}}),s.forEach(h=>{const S=Number(h.dataset.idx??"0");this.stepCtrl.bindElement(h,S,{onCommit:w=>{this.currentStep=w,t.onStepChange(w,this.totalSteps)}})});const o=e.querySelector(".s10-viz");o&&(this.sideHover=se({cards:[o],dimSiblings:!1})),this.stepCtrl.renderInitial();const c=await Ce.loadProtein(Gs);if(!this.mounted)return;let n=null;try{const h=await fetch(Pe(`assets/molecular/${Os}.json`));h.ok&&(n=await h.json())}catch{n=null}if(!this.mounted)return;const r=_e(c,"secondary","ribbon"),d=qs(r,t.reducedMotion,{anchorLabel:yi,ringAtomNames:_s,designedSeq:n?.seq});this.mpnnNote=X(n?`sequence نمایش‌داده‌شده خروجی واقعی ProteinMPNN (مدل ${n.model} با T = ${n.temperature}) روی backbone همین ساختار است؛ sequence recovery نسبت به native برابر ${Math.round(d.state.recovery*100)}% است.`:"sequence نمایشی همان sequence طبیعی ساختار است (نه خروجی ProteinMPNN)."),this.assembly=r,this.stage=d,this.mapCur=document.createElement("canvas"),this.mapCur.width=this.mapCur.height=d.state.n;const u=e.querySelector("#s10-3d-window"),y=()=>{const h=document.getElementById("keynote-viewport"),S=h?h.getBoundingClientRect().width/1920:1,w=u.getBoundingClientRect();return{cx:(w.left+w.width/2)/S,cy:(w.top+w.height/2)/S}},F=u?y():{cx:480,cy:520};t.sceneManager.setCameraImmediate({distance:t.sceneManager.fitDistance(c.radius*.95,fi),target:[0,0,0],rotX:.2,rotY:.35,screenCenterX:F.cx,screenCenterY:F.cy,autoRotateSpeed:.2}),t.sceneManager.mountObject(r.root,()=>r.dispose(),void 0,c.meta.title),t.sceneManager.mountObject(d.root,()=>d.dispose(),(h,S)=>{d.update(h,S),this.drawHud()},"Algorithm overlays"),t.sceneManager.setInteractive(!0);const M=h=>{if(!u||!u.isConnected||!this.mounted)return;t.sceneManager.setClipFromElement(u);const S=y(),w=this.stage&&this.assembly?this.cameraFor(this.stepCtrl?.activeStep??this.currentStep):{};t.sceneManager.flyTo({...w,screenCenterX:S.cx,screenCenterY:S.cy,duration:h})};M(.05),this.frameTimers=[300,900,1600].map(h=>window.setTimeout(()=>M(.6),h)),this.lastVisualStep=-1,this.applyStep(this.stepCtrl?.activeStep??this.currentStep)}applyStep(e){if(!this.ctx||!this.stage||!this.assembly||!this.rootEl||this.lastVisualStep===e)return;this.lastVisualStep=e;const t=this.ctx.sceneManager,i=Et[Math.min(e,Et.length-1)];this.stage.setStep(e),t.clearPins();const s=n=>this.rootEl.querySelector(n);s("#s10-state").textContent=i.state;const a=s("#s10-hud-title");a.textContent=i.titleFa,a.style.direction=/[\u0600-\u06FF]/.test(i.titleFa)?"rtl":"ltr",a.style.textAlign="right",s("#s10-hud-body").textContent=i.bodyFa.replace("§§",this.mpnnNote),s("#s10-hud-metric-label").textContent=i.metricLabel;const o=s("#s10-legend");o&&(o.innerHTML=i.legend.map(([n,r])=>`<div style="display:flex;align-items:center;gap:7px;justify-content:flex-start"><span style="width:9px;height:9px;border-radius:50%;background:${n};box-shadow:0 0 8px ${n};flex:none"></span><span>${r}</span></div>`).join("")),t.flyTo({...this.cameraFor(e),duration:1});const c=this.assembly.data.activeSite?.keyResidues.find(n=>n.label===yi)?.xyz;e===1&&c&&t.addPin({id:"arg",xyz:c,title:"Lys155 (Cα)",subtitle:"Contacts the NAD(+) ribose hydroxyl",accent:"#F5B841"}),e===4&&this.stage.anionPos&&t.addPin({id:"anion",xyz:this.stage.anionPos,title:"Ribose O (2′-OH)",subtitle:"Electron density + MD trajectory (conceptual)",accent:"#FF647C"})}cameraFor(e){const t=this.ctx.sceneManager,i=this.assembly.data.radius,s=e===0||e===2||e===3;return{distance:s?t.fitDistance(i*.95,fi):t.fitDistance(js,Vs),target:s?[0,0,0]:this.stage.pocketCenter,autoRotateSpeed:s?.2:.12}}drawHud(){const e=this.hud,t=this.stage;if(!e||!t)return;const i=e.getContext("2d");if(!i)return;const s=t.state,a=360,o=190;i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,a,o),i.textBaseline="alphabetic";const c=this.rootEl?.querySelector("#s10-hud-metric");let n="";const r=this.rootEl?.querySelector("#s10-phase");if(r){const d=Et[Math.min(s.step,Et.length-1)].phases;let u=d[0][1];for(const[y,F]of d)s.p>=y&&(u=F);r.textContent!==u&&(r.textContent=u)}if(s.step===0){const d=s.n;this.paintMap(this.mapCur,s.cur,d),i.imageSmoothingEnabled=!1,i.drawImage(this.mapCur,12,26,150,150),i.fillStyle="#8D99AE",i.font="10.5px sans-serif",i.fillText("Distance map of current model",12,17),i.fillText("Loss vs MCMC iteration (schematic)",182,17);const u=188,y=348,F=26,M=176;i.strokeStyle="rgba(255,255,255,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(u,F),i.lineTo(u,M),i.lineTo(y,M),i.stroke();const h=p=>u+4+p/(st-1)*(y-u-8),S=p=>M-4-Math.min(1.1,Math.max(0,p))/1.1*(M-F-10);let w=-1;i.strokeStyle="#42D9F5",i.lineWidth=1.6,i.beginPath(),s.loss.forEach((p,m)=>{s.accepted[m]&&(w<0?i.moveTo(h(m),S(p)):i.lineTo(h(m),S(p)),w=m)}),i.stroke(),s.loss.forEach((p,m)=>{s.accepted[m]?(i.fillStyle="#42D9F5",i.beginPath(),i.arc(h(m),S(p),2.6,0,Math.PI*2),i.fill()):(i.strokeStyle="rgba(180,190,205,0.7)",i.lineWidth=1,i.beginPath(),i.arc(h(m),S(p),2.4,0,Math.PI*2),i.stroke())});const z=y-112;i.fillStyle="#42D9F5",i.beginPath(),i.arc(z,F+6,2.6,0,Math.PI*2),i.fill(),i.fillStyle="#C5CEDD",i.fillText("accepted",z+6,F+9.5),i.strokeStyle="rgba(180,190,205,0.8)",i.lineWidth=1,i.beginPath(),i.arc(z+58,F+6,2.4,0,Math.PI*2),i.stroke(),i.fillStyle="#C5CEDD",i.fillText("rejected",z+64,F+9.5),n=`${s.iter} / ${st}`}else if(s.step===1){i.strokeStyle="rgba(255,255,255,0.18)",i.lineWidth=1,i.beginPath(),i.moveTo(30,20),i.lineTo(30,160),i.lineTo(346,160),i.stroke(),i.fillStyle="#8D99AE",i.font="10.5px sans-serif",i.fillText("docking score (lower = better, schematic)",34,14),i.fillText("trial #",310,178);const M=S=>30+(S+.5)/Ne*316,h=S=>160-Math.min(1.25,S)/1.25*134-3;s.scores.forEach((S,w)=>{i.fillStyle=w===s.scores.length-1&&s.poseK>=Ne?"#69D8A0":"rgba(66,217,245,0.75)",i.beginPath(),i.arc(M(w),h(S),w===s.scores.length-1&&s.poseK>=Ne?5:2.6,0,Math.PI*2),i.fill()}),s.best.length>1&&(i.strokeStyle="#69D8A0",i.lineWidth=1.8,i.beginPath(),s.best.forEach((S,w)=>w===0?i.moveTo(M(w),h(S)):i.lineTo(M(w),h(S))),i.stroke()),n=`${Math.min(s.poseK,Ne)} / ${Ne}`}else if(s.step===2){const u=Math.ceil(s.n/25),y=(a-12)/25,F=(o-12)/u;i.font=`bold ${Math.min(14,y*.95)}px ui-monospace, monospace`,i.textAlign="center";for(let M=0;M<s.n;M++){const h=6+M%25*y+y/2,S=6+Math.floor(M/25)*F+F/2+5,w=s.assignedMask[M];w>.01?(i.fillStyle="#"+Li[s.classes[M]].toString(16).padStart(6,"0"),i.globalAlpha=.35+.65*w,i.fillText(s.letters[M],h,S),i.globalAlpha=1):(i.fillStyle="#3A4560",i.fillText("·",h,S)),M===s.lastResidue&&(i.strokeStyle="#fff",i.lineWidth=1.4,i.strokeRect(h-y/2+1,S-F/2-2,y-2,F-6))}i.textAlign="left",n=`${s.assignedCount} / ${s.n}`}else if(s.step===3){const M=334/s.n;i.fillStyle="#8D99AE",i.font="10.5px sans-serif",i.fillText("per-residue Cα deviation (Å) · schematic",14,14);for(let S=0;S<s.n;S++){const w=s.dev[S],z=Math.min(1,w/5);i.fillStyle=`rgb(${Math.round(105+150*z)},${Math.round(216-116*z)},${Math.round(160-36*z)})`;const p=Math.min(132,w/8*132);i.fillRect(14+S*M,164-p,Math.max(1,M-.5),p)}i.strokeStyle="rgba(255,255,255,0.25)",i.beginPath(),i.moveTo(14,164),i.lineTo(348,164),i.stroke(),i.strokeStyle="#42D9F5",i.setLineDash([4,3]);const h=164-1.35/8*132;i.beginPath(),i.moveTo(14,h),i.lineTo(348,h),i.stroke(),i.setLineDash([]),i.fillStyle="#42D9F5",i.fillText("LuxSit, reported: 1.35 Å",230,h-4),i.fillStyle="#C5CEDD",i.fillText(`recycle ${s.recycle}`,14,182),n=`${s.rmsd.toFixed(2)} Å`}else i.fillStyle="#8D99AE",i.font="10.5px sans-serif",i.fillText("ligand displacement vs. time (schematic)",14,14),i.strokeStyle="rgba(255,255,255,0.18)",i.beginPath(),i.moveTo(14,160),i.lineTo(348,160),i.stroke(),s.md.length>1&&(i.strokeStyle="#FF8AA0",i.lineWidth=1.6,i.beginPath(),s.md.forEach((M,h)=>{const S=14+h/179*334,w=160-Math.min(1.3,M)/1.3*132;h===0?i.moveTo(S,w):i.lineTo(S,w)}),i.stroke()),n=String(s.mdFrame).padStart(4,"0");c&&c.textContent!==n&&(c.textContent=n)}paintMap(e,t,i){const s=e.getContext("2d");if(!s)return;const a=s.createImageData(i,i);for(let o=0;o<i;o++)for(let c=0;c<i;c++){const n=Math.hypot(t[o*3]-t[c*3],t[o*3+1]-t[c*3+1],t[o*3+2]-t[c*3+2]),r=Math.max(0,1-n/42),d=(o*i+c)*4;a.data[d]=10+56*r*r,a.data[d+1]=16+201*r*r,a.data[d+2]=28+217*r*r,a.data[d+3]=255}s.putImageData(a,0,0)}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover(),this.sideHover?.reset()}unmount(){this.mounted=!1,this.frameTimers.forEach(e=>window.clearTimeout(e)),this.frameTimers=[],this.stepCtrl?.destroy(),this.stepCtrl=null,this.sideHover?.destroy(),this.sideHover=null,this.rootEl=null,this.ctx=null,this.assembly=null,this.stage=null,this.hud=null,this.mapCur=null,this.lastVisualStep=-1,this.mpnnNote=""}}function Us(l,e=!1){const y=[0,1,2,3,4,5].map(p=>{const m=324-p/5*280;return`
        <line x1="78" y1="${m}" x2="660" y2="${m}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="${p===0?"none":"4 4"}" />
        <text x="64" y="${m+5}" text-anchor="end" fill="#8D99AE" font-family="Inter, sans-serif" font-size="13" font-weight="500">${p}%</text>
      `}).join(""),F=_t.map((p,m)=>{const C=78+582*(m===0?.28:.72),L=C-148/2,R=p.rawPercent/5*280,T=Math.max(6,R),E=324-T;return`
      <g class="chart11-bar-group interactive-el" data-idx="${m}" style="cursor:pointer;transition:opacity 0.22s ease">
        <rect
          x="${L-16}"
          y="44"
          width="180"
          height="346"
          rx="8"
          fill="transparent"
          class="chart11-hit-bg"
        />
        <rect
          class="chart11-bar"
          x="${L}"
          y="324"
          data-target-y="${E}"
          data-target-h="${T}"
          width="148"
          height="0"
          rx="6"
          fill="${p.color}"
          fill-opacity="0.88"
        />
        <text
          class="chart11-val"
          x="${C}"
          y="${E-14}"
          text-anchor="middle"
          fill="${p.color}"
          font-family="Inter, sans-serif"
          font-size="24"
          font-weight="800"
          opacity="0"
        >${p.displayPercent}</text>
        <text
          x="${C}"
          y="352"
          text-anchor="middle"
          fill="#F4F6FA"
          font-family="Inter, sans-serif"
          font-size="14.5"
          font-weight="600"
        >${p.categoryEn}</text>
        <text
          x="${C}"
          y="376"
          text-anchor="middle"
          fill="#98A4B8"
          font-family="Vazirmatn, sans-serif"
          font-size="13.5"
        >${p.categoryFa}</text>
      </g>
    `}).join("");l.innerHTML=`
    <svg viewBox="0 0 700 420" width="100%" height="100%" style="overflow:visible;direction:ltr">
      <text x="78" y="22" fill="#A6B0C0" font-family="Inter, sans-serif" font-size="13.5" font-weight="600">
        Active designs (%) — Experimental Colony Screening
      </text>
      <text id="chart11-hover-readout" x="660" y="22" text-anchor="end" fill="#42D9F5" font-family="Inter, sans-serif" font-size="12.5" font-weight="700" opacity="0">
      </text>
      ${y}
      ${F}
    </svg>
  `;const M=l.querySelectorAll(".chart11-bar-group"),h=l.querySelectorAll(".chart11-bar"),S=l.querySelectorAll(".chart11-val"),w=l.querySelector("#chart11-hover-readout");h.forEach((p,m)=>{const v=Number(p.dataset.targetY),C=Number(p.dataset.targetH);He.to(p,{attr:{y:v,height:C},duration:e?.01:.9,delay:e?0:.2+m*.18,ease:"power3.out"})}),He.to(S,{opacity:1,duration:e?.01:.5,delay:e?0:.65,stagger:.18});const z=p=>{if(M.forEach((m,v)=>{const C=m.querySelector(".chart11-hit-bg"),L=m.querySelector(".chart11-bar"),R=p===v;m.style.opacity=p===null||R?"1":"0.42",C&&C.setAttribute("fill",R?"rgba(255,255,255,0.035)":"transparent"),L&&(L.setAttribute("fill-opacity",R?"1":"0.88"),L.style.filter=R?`drop-shadow(0 0 12px ${_t[v].color}88)`:"none")}),w)if(p===null)w.setAttribute("opacity","0");else{const m=_t[p];w.textContent=`${m.hits} / ${m.total.toLocaleString("en-US")} active (${m.displayPercent})`,w.setAttribute("fill",m.color),w.setAttribute("opacity","1")}};return M.forEach((p,m)=>{p.addEventListener("pointerenter",()=>z(m)),p.addEventListener("pointerleave",()=>z(null))}),{setHoveredBar:z}}function Ws(l,e=!1){const u=[0,20,40,60,80,100].map(E=>{const P=422-E/100*354;return`
        <line x1="68" y1="${P}" x2="852" y2="${P}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="${E===0?"none":"4 4"}" />
        <text x="56" y="${P+4}" text-anchor="end" fill="#8D99AE" font-family="Inter, sans-serif" font-size="13">${E}%</text>
      `}).join(""),y=mt.series.map((E,P)=>{const D=68+P*198;return`
        <g class="pdt-legend-item interactive-el" data-focus-skip data-series="${E.id}" transform="translate(${D}, 16)" style="cursor:pointer;transition:opacity 0.2s ease">
          <rect x="-4" y="-4" width="188" height="22" rx="4" fill="transparent" />
          <rect x="0" y="0" width="12" height="12" rx="3" fill="${E.color}" />
          <text x="18" y="11" fill="${E.highlight?"#F4F6FA":"#A6B0C0"}" font-family="Inter, sans-serif" font-size="12.5" font-weight="${E.highlight?"700":"500"}">${E.name}</text>
        </g>
      `}).join(""),F=784/mt.categories.length,M=36,h=8,S=mt.series.length*M+3*h,w=mt.categories.map((E,P)=>{const D=68+P*F+(F-S)/2,B=68+P*F+F/2,A=422-E.chance/100*354;return`
        <g>
          ${mt.series.map((q,G)=>{const Z=q.values[P],V=Z/100*354,j=D+G*(M+h),ze=422-V;return`
            <g class="pdt-series-item interactive-el" data-focus-skip data-series="${q.id}" style="cursor:pointer;transition:opacity 0.22s ease">
              <rect
                x="${j-3}"
                y="68"
                width="${M+6}"
                height="354"
                fill="transparent"
              />
              <rect
                class="pdt-bar"
                x="${j}"
                y="422"
                data-target-y="${ze}"
                data-target-h="${V}"
                width="${M}"
                height="0"
                rx="4"
                fill="${q.color}"
              />
              <text
                class="pdt-val"
                x="${j+M/2}"
                y="${ze-8}"
                text-anchor="middle"
                fill="${q.highlight?"#B2B3FF":"#9AA5B8"}"
                font-family="Inter, sans-serif"
                font-size="${q.highlight?"13.5":"11.5"}"
                font-weight="${q.highlight?"800":"600"}"
                opacity="0"
              >${Z}%</text>
            </g>
          `}).join("")}
          <line x1="${D-6}" y1="${A}" x2="${D+S+6}" y2="${A}" stroke="#F5B841" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.75" pointer-events="none" />
          <text x="${B}" y="452" text-anchor="middle" fill="#F4F6FA" font-family="Inter, sans-serif" font-size="14" font-weight="600">${E.label}</text>
        </g>
      `}).join("");l.innerHTML=`
    <svg viewBox="0 0 880 500" width="100%" height="100%" style="overflow:visible;direction:ltr">
      ${y}
      ${u}
      ${w}
      <g transform="translate(68, 486)">
        <line x1="0" y1="-4" x2="22" y2="-4" stroke="#F5B841" stroke-width="1.6" stroke-dasharray="4 3" />
        <text x="30" y="0" fill="#F5B841" font-family="Inter, sans-serif" font-size="12">Random-chance baseline (25% / 10% / 5%)</text>
      </g>
    </svg>
  `;const z=l.querySelectorAll(".pdt-bar"),p=l.querySelectorAll(".pdt-val"),m=l.querySelectorAll(".pdt-series-item"),v=l.querySelectorAll(".pdt-legend-item");z.forEach((E,P)=>{He.to(E,{attr:{y:Number(E.dataset.targetY),height:Number(E.dataset.targetH)},duration:e?.01:.8,delay:e?0:.12+P*.04,ease:"power3.out"})}),He.to(p,{opacity:1,duration:e?.01:.45,delay:e?0:.65});let C="all",L=null;const R=()=>{m.forEach(E=>{const P=E.dataset.series??"",D=E.querySelector(".pdt-bar");if(L){const B=P===L;E.style.opacity=B?"1":"0.24",D&&(D.style.filter=B?"drop-shadow(0 0 10px rgba(136,137,255,0.45))":"none")}else D&&(D.style.filter="none"),C==="all"?E.style.opacity="1":E.style.opacity=P==="with-fac"||P==="no-fac"?"1":"0.28"}),v.forEach(E=>{const P=E.dataset.series??"";L?E.style.opacity=P===L?"1":"0.38":C==="facilitator-jump"?E.style.opacity=P==="with-fac"||P==="no-fac"?"1":"0.45":E.style.opacity="1"})},T=E=>{E.addEventListener("pointerenter",()=>{L=E.dataset.series??null,R()}),E.addEventListener("pointerleave",()=>{L=null,R()})};return m.forEach(T),v.forEach(T),{highlightSeries(E){C=E,R()}}}function Zs(l,e=!1){const s=vs.map((n,r)=>{const d=(n.count/2400*100).toFixed(2),u=(n.count/6590*100).toFixed(1),y=r===0;return`
      <div class="ec310-row interactive-el" data-idx="${r}" style="display:grid;grid-template-columns:195px 1fr 112px;align-items:center;gap:16px;padding:8px 8px;margin:0 -8px;border-radius:8px;direction:rtl;cursor:pointer;transition:background 0.2s ease, opacity 0.2s ease, transform 0.2s ease">
        <div style="display:flex;flex-direction:column;text-align:right">
          <span style="direction:ltr;unicode-bidi:isolate;font-family:var(--font-en);font-size:14.5px;font-weight:${y?"700":"600"};color:${y?"#F4F6FA":"#CBD4E4"}">${n.nameEn}</span>
          <span style="font-family:var(--font-fa);font-size:12.5px;color:#8D99AE;direction:rtl;text-align:right">${n.nameFa}</span>
        </div>
        <div style="height:24px;background:rgba(255,255,255,0.05);border-radius:6px;overflow:hidden;position:relative">
          <div
            class="ec310-bar-fill"
            data-w="${d}%"
            style="width:0%;height:100%;border-radius:6px;background:${y?"linear-gradient(270deg, #E66BBE 0%, #9E72FF 100%)":"linear-gradient(270deg, rgba(230,107,190,0.68) 0%, rgba(119,120,255,0.68) 100%)"};box-shadow:${y?"0 0 18px rgba(230,107,190,0.35)":"none"};transition:box-shadow 0.2s ease, filter 0.2s ease"
          ></div>
        </div>
        <div style="direction:ltr;font-family:var(--font-en);font-variant-numeric:tabular-nums;text-align:left">
          <span style="font-size:16px;font-weight:700;color:${y?"#F58AD2":"#F4F6FA"}">${n.count.toLocaleString("en-US")}</span>
          <span style="font-size:12px;color:#7F8BA3;margin-left:4px">(${u}%)</span>
        </div>
      </div>
    `}).join("");l.innerHTML=`
    <div style="display:flex;flex-direction:column;justify-content:space-between;height:100%">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;direction:rtl">
        <span style="direction:ltr;unicode-bidi:isolate;font-family:var(--font-en);font-size:13.5px;font-weight:600;color:#A6B0C0">
          Designs per Enzyme Commission (EC) Class — n = 6,590
        </span>
        <span style="direction:ltr;unicode-bidi:isolate;font-family:var(--font-en);font-size:12.5px;color:#E66BBE;font-weight:600">
          All 7 EC Major Classes Covered
        </span>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px">
        ${s}
      </div>
    </div>
  `,l.querySelectorAll(".ec310-bar-fill").forEach((n,r)=>{He.to(n,{width:n.dataset.w||"0%",duration:e?.01:.85,delay:e?0:.15+r*.06,ease:"power3.out"})});const o=l.querySelectorAll(".ec310-row"),c=n=>{o.forEach((r,d)=>{const u=r.querySelector(".ec310-bar-fill"),y=n===d;r.style.opacity=n===null||y?"1":"0.45",r.style.background=y?"rgba(230, 107, 190, 0.09)":"transparent",r.style.transform=y?"translateX(4px)":"none",u&&(u.style.filter=y?"brightness(1.18)":"none")})};o.forEach((n,r)=>{n.addEventListener("pointerenter",()=>c(r)),n.addEventListener("pointerleave",()=>c(null))})}class Qs{index=11;totalSteps=1;currentStep=0;entrance=null;rightHover=null;chartPanelHover=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"28%",y:"52%",color:"rgba(66, 217, 245, 0.11)",x2:"78%",y2:"44%",color2:"rgba(105, 216, 160, 0.1)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقاله‌ی Nature 2023 · شواهد آزمایشگاهی",titleFa:"نتایج اصلی: از محاسبه تا نور",subtitleFa:"تأیید تجربی کاتالیز نوری و جهش به کارایی آنزیم‌های طبیعی با بهینه‌سازی آزمایشگاهی",accent:"nature",badges:[{type:"experimental",text:"Experimentally Validated in E. coli & In Vitro"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:760px 1fr;gap:30px;direction:ltr;align-items:stretch">
          <!-- Left: Active Designs (%) Chart + Non-Comparability Methodological Caveat -->
          <div id="s11-chart-panel" class="sci-panel s11-anim interactive-el" style="padding:24px 28px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#42D9F5">
            <div id="s11-chart-box" style="flex:1;min-height:360px;display:flex;align-items:center"></div>

            <!-- Crucial Methodological Caveat from PPTX & Speaker Notes -->
            <div style="margin-top:12px;padding:14px 18px;border-radius:9px;background:rgba(245,184,65,0.09);border:1px solid rgba(245,184,65,0.34);direction:rtl;text-align:right;display:flex;align-items:flex-start;gap:12px">
              <span style="color:#F5B841;width:22px;height:22px;flex-shrink:0;margin-top:2px">${fe.warning}</span>
              <div style="font-size:15px;line-height:1.58;color:#E6ECF7">
                <strong style="color:#F5B841">نکته‌ی روش‌شناختی:</strong> دور اول (<bdi class="ltr-inline">DTZ</bdi> با <bdi class="ltr-inline">RosettaDesign</bdi>) و دور دوم (<bdi class="ltr-inline">h-CTZ</bdi> با <bdi class="ltr-inline">ProteinMPNN</bdi>) هم در <strong style="color:#F4F6FA">نوع سوبسترا</strong> و هم در <strong style="color:#F4F6FA">مدل طراحی توالی</strong> تفاوت دارند؛ بنابراین مقایسه‌ی مستقیم این دو درصد علّی نیست.
              </div>
            </div>
          </div>

          <!-- Right: LuxSit & LuxSit-i Validated Metrics (RTL) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:16px;direction:rtl;text-align:right">
            <!-- Metric 1: LuxSit Biophysical Compactness & Stability -->
            <div class="sci-panel s11-anim s11-card interactive-el" style="padding:22px 28px;--panel-accent:#42D9F5">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h2 style="margin:0;font-size:25px;font-weight:700;color:#42D9F5">
                  <bdi class="ltr-inline">LuxSit</bdi>: کوچک و فوق‌پایدار
                </h2>
                <span class="ltr" style="font-size:14px;font-weight:700;color:#F4F6FA;background:rgba(66,217,245,0.14);padding:4px 12px;border-radius:999px">
                  117 aa · 13.9 kDa · T_m &gt; 95 °C
                </span>
              </div>
              <p style="margin:0;font-size:18px;line-height:1.62;color:#DCE3F0">
                کوچک‌تر از هر <bdi class="ltr-inline">luciferase</bdi> طبیعی شناخته‌شده و پایدار در دمای بالای <strong class="ltr" style="color:#F4F6FA">95 °C</strong> (تطابق مدل طراحی با <bdi class="ltr-inline">AlphaFold2</bdi>: <bdi class="ltr-inline">RMSD = 1.35 Å</bdi>).
              </p>
            </div>

            <!-- Metric 2: LuxSit-i Catalytic Efficiency (After Wet-Lab Screening!) -->
            <div class="sci-panel s11-anim s11-card interactive-el" style="padding:22px 28px;--panel-accent:#69D8A0;--panel-glow:rgba(105,216,160,0.18)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h2 style="margin:0;font-size:25px;font-weight:700;color:#69D8A0">
                  <bdi class="ltr-inline">LuxSit-i</bdi>: کارایی در سطح آنزیم‌های طبیعی
                </h2>
                <span class="ltr" style="font-size:20px;font-weight:800;color:#69D8A0">
                  k<sub>cat</sub>/K<sub>m</sub> = 10<sup>6</sup> M<sup>−1</sup> s<sup>−1</sup>
                </span>
              </div>
              <p style="margin:0;font-size:18px;line-height:1.62;color:#DCE3F0">
                این جهش بزرگ در فعالیت و تولید نور مرئی قابل مشاهده با چشم، <strong style="color:#F4F6FA">پس از غربالگری جهش اشباع آزمایشگاهی (<bdi class="ltr-inline">site-saturation mutagenesis</bdi>)</strong> حاصل شد، نه صرفاً از خروجی خام مدل اول.
              </p>
            </div>

            <!-- Metric 3: Substrate Specificity & Honest Crystal Caveat -->
            <div class="sci-panel s11-anim s11-card interactive-el" style="padding:22px 28px;--panel-accent:#7778FF;--panel-glow:rgba(119,120,255,0.18)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h2 style="margin:0;font-size:25px;font-weight:700;color:#F4F6FA">
                  اختصاصیت بالا و مرز شواهد ساختاری
                </h2>
                <span class="ltr" style="font-size:15px;font-weight:800;color:#B0B1FF">
                  50× vs bis-CTZ · &gt;100× vs others
                </span>
              </div>
              <p style="margin:0 0 12px 0;font-size:17.5px;line-height:1.6;color:#DCE3F0">
                اختصاصیت <strong class="ltr" style="color:#F4F6FA">50×</strong> نسبت به <bdi class="ltr-inline">bis-CTZ</bdi> و <strong class="ltr" style="color:#F4F6FA">&gt;100×</strong> نسبت به سایر سوبستراها، امکان سنجش چندگانه‌ی مسیرهای <bdi class="ltr-inline">NF-κB</bdi> و <bdi class="ltr-inline">cAMP–PKA</bdi> را فراهم کرد.
              </p>
              <div style="font-size:14.5px;color:#9BA6BA;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">
                <strong style="color:#F5B841">شفافیت علمی:</strong> ساختار کریستالی تجربی (<bdi class="ltr-inline">X-ray / Cryo-EM</bdi>) برای <bdi class="ltr-inline">LuxSit</bdi> ثبت نشد؛ ساختارها مدل محاسباتی هستند.
              </div>
            </div>
          </div>
        </div>

        ${pe("Source: Yeh et al., Nature 614, 774–780 (2023)",11)}
      </div>
    `;const i=e.querySelector("#s11-chart-box"),s=i?Us(i,t.reducedMotion):null;this.entrance=le(e.querySelectorAll(".s11-anim"),{y:22,opacity:0,duration:.65,stagger:.1,ease:"power3.out"},t.reducedMotion),this.rightHover=se({cards:e.querySelectorAll(".s11-card"),entrance:this.entrance,dimSiblings:!0,onHoverChange:o=>{s&&(o===0||o===1?s.setHoveredBar(o):s.setHoveredBar(null))}});const a=e.querySelector("#s11-chart-panel");a&&(this.chartPanelHover=se({cards:[a],entrance:this.entrance,dimSiblings:!1}))}resetHover(){this.rightHover?.reset(),this.chartPanelHover?.reset()}unmount(){this.rightHover?.destroy(),this.rightHover=null,this.chartPanelHover?.destroy(),this.chartPanelHover=null,this.entrance?.kill(),this.entrance=null}}const Ks=[{step:0,tagEn:"1 · Text Input & Encoder",titleFa:"توصیف متنی کارکرد",accent:"#42D9F5",subEn:"SciBERT Encoder → z_text",descFa:"ورودی متنی توصیف‌کننده‌ی کارکرد، سوبسترا یا ویژگی ساختاری پروتئین به بردار نهفته‌ی متن نگاشت می‌شود.",sampleEn:"“Catalyzes 3-oxoacyl-[ACP] reduction using NAD(+)…”"},{step:1,tagEn:"2 · Contrastive Pretraining",titleFa:"هم‌ترازی ProteinCLAP",accent:"#7778FF",subEn:"SciBERT ⟷ ProtBERT (InfoNCE / EBM-NCE)",descFa:'یادگیری متضاد فضای بازنمایی مشترک بین متن (<bdi class="ltr-inline">SciBERT</bdi>) و توالی پروتئین (<bdi class="ltr-inline">ProtBERT</bdi>) را هم‌تراز می‌کند.',sampleEn:"Pretrained on SwissProtCLAP multimodal corpus"},{step:2,tagEn:"3 · Latent Prior Bridge",titleFa:"ماژول ProteinFacilitator",accent:"#B085FF",subEn:"MLP Prior Network (MSE Loss)",descFa:"از بردار بازنمایی متن، بردار بازنمایی متناظر در فضای پروتئین را پیش‌بینی می‌کند تا شکاف دو مدالیته پر شود.",sampleEn:"Maps z_text ──▶ ẑ_protein before decoding"},{step:3,tagEn:"4 · Sequence Decoder",titleFa:"دیکودر تولید توالی",accent:"#E66BBE",subEn:"AR Transformer (T5) or ProteinDiff",descFa:'مشروط بر بردار پروتئین، توالی اسیدآمینه را با ترنسفورمر خودهمبسته (<bdi class="ltr-inline">T5</bdi>) یا دیفیوژن گسسته می‌سازد.',sampleEn:"Outputs de novo or edited amino-acid sequence"}];class Js{index=12;totalSteps=6;currentStep=0;rootEl=null;stepCtrl=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"50%",y:"34%",color:"rgba(119, 120, 255, 0.14)",x2:"20%",y2:"72%",color2:"rgba(66, 217, 245, 0.08)"});const i=Cs();t.sceneManager.setCameraImmediate({distance:42,target:[0,0,0],rotX:.1,rotY:0,screenCenterX:1010,screenCenterY:430,autoRotateSpeed:0}),t.sceneManager.mountObject(i.root,i.dispose,i.update);const s=Ks.map((c,n)=>`
        <div
          class="sci-panel s12-node interactive-el"
          data-step="${n}"
          style="padding:22px 22px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:${c.accent};background:rgba(12,18,30,0.86);cursor:pointer"
        >
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;direction:rtl;margin-bottom:12px">
              <span style="direction:ltr;unicode-bidi:isolate;font-family:var(--font-en);font-size:12px;font-weight:700;color:${c.accent};text-transform:uppercase">
                ${c.tagEn}
              </span>
            </div>

            <h3 style="margin:0 0 6px 0;direction:rtl;text-align:right;font-size:23px;font-weight:700;color:#F4F6FA">
              ${c.titleFa}
            </h3>
            <div class="ltr" style="display:block;text-align:right;font-size:13px;font-weight:700;color:${c.accent};margin-bottom:14px">
              ${c.subEn}
            </div>

            <p style="margin:0;direction:rtl;text-align:right;font-size:17px;line-height:1.62;color:#DCE3F0">
              ${c.descFa}
            </p>
          </div>

          <div style="margin-top:16px;padding:9px 12px;border-radius:7px;background:rgba(6,9,16,0.75);border:1px solid rgba(255,255,255,0.08);direction:ltr;text-align:right;font-family:var(--font-en);font-size:12px;color:#9BA6BA">
            ${c.sampleEn}
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقاله‌ی ProteinDT 2025 · معماری چندوجهی",titleFa:"ProteinDT: طراحی پروتئین از روی متن",subtitleFa:"هم‌ترازی بازنمایی متن و پروتئین برای تولید توالی و ویرایش ویژگی‌ها بدون آموزش مجدد",accent:"proteindt",badges:[{type:"computational",text:"Multimodal Framework · Nat. Mach. Intell. 2025"}]})}

        <div class="slide-body" style="display:flex;flex-direction:column;justify-content:space-between;gap:22px">
          <!-- 4-Stage Pipeline Flow (Right-to-Left (RTL) Dataflow with Persian Labels) -->
          <div style="position:relative;flex:1;display:grid;grid-template-columns:repeat(4, 1fr);gap:18px;direction:rtl;align-items:stretch">
            ${s}
          </div>

          <!-- Bottom Two Key Scale & Capability Cards (Steps 5 & 6) -->
          <div style="display:grid;grid-template-columns:520px 1fr;gap:22px;direction:rtl">
            <!-- Card 5: 441,013 SwissProtCLAP Pairs -->
            <div
              class="sci-panel s12-node interactive-el"
              data-step="4"
              style="padding:20px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;--panel-accent:#7778FF;background:rgba(12,18,30,0.9);cursor:pointer"
            >
              <div style="text-align:right">
                <div style="font-size:19px;font-weight:700;color:#F4F6FA">مجموعه‌داده‌ی <bdi class="ltr-inline">SwissProtCLAP</bdi></div>
                <div style="font-size:15.5px;color:#A6B0C0;margin-top:4px">جفت‌های متن توصیفی و توالی پروتئین از <bdi class="ltr-inline">SwissProt</bdi></div>
              </div>
              <div class="stat-hero-num indigo-cyan" style="font-size:48px">
                441,013
              </div>
            </div>

            <!-- Card 6: 3 Applications & 12 Zero-Shot Editing Tasks -->
            <div
              class="sci-panel s12-node interactive-el"
              data-step="5"
              style="padding:20px 28px;display:flex;align-items:center;justify-content:space-between;gap:24px;--panel-accent:#42D9F5;background:rgba(12,18,30,0.9);cursor:pointer"
            >
              <div style="text-align:right">
                <div style="font-size:19.5px;font-weight:700;color:#F4F6FA">
                  <span style="color:#42D9F5">۳ کاربرد اصلی</span> در یک چارچوب یکپارچه
                </div>
                <div style="font-size:16px;color:#CBD4E4;margin-top:5px;line-height:1.5">
                  ۱) تولید توالی از روی متن · ۲) بهینه‌سازی ویژگی · ۳) <strong style="color:#9899FF">۱۲ وظیفه‌ی ویرایش <bdi class="ltr-inline">zero-shot</bdi></strong> (پایداری، ساختار ثانویه، اتصال لیگاند/پپتید با <bdi class="ltr-inline">SLERP</bdi> و بهینه‌سازی نهفته)
                </div>
              </div>
              <div class="ltr" style="font-size:28px;font-weight:800;color:#9899FF;white-space:nowrap">
                12 Zero-Shot Tasks
              </div>
            </div>
          </div>
        </div>

        ${pe("Source: Liu et al., Nature Machine Intelligence 7, 580–591 (2025)",12)}
      </div>
    `,this.rootEl=e;const a=e.querySelectorAll(".s12-node"),o=le(a,{y:22,opacity:0,duration:.62,stagger:.07,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:o,onRender:(c,n)=>{a.forEach(r=>{const d=Number(r.dataset.step??"0"),u=d===c,y=d!==c&&(n.isHovering||c>0);r.classList.toggle("step-focus",u),r.classList.toggle("step-dimmed",y)}),i.setFocusStep(n.isHovering||c>0?c:4)}}),a.forEach(c=>{const n=Number(c.dataset.step??"0");this.stepCtrl.bindElement(c,n,{onCommit:r=>{this.currentStep=r,t.onStepChange(r,this.totalSteps)}})}),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover()}unmount(){this.stepCtrl?.destroy(),this.stepCtrl=null,this.rootEl=null}}class en{index=13;totalSteps=3;currentStep=0;rootEl=null;stepCtrl=null;chartPanelHover=null;chartCtrl=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"32%",y:"52%",color:"rgba(119, 120, 255, 0.13)",x2:"78%",y2:"38%",color2:"rgba(245, 184, 65, 0.08)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"مقاله‌ی ProteinDT 2025 · ارزیابی و نقد روش‌شناختی",titleFa:"ProteinDT: نتایج و نگاه نقادانه",subtitleFa:"تحلیل دقت بازیابی چندگزینه‌ای و تفکیک نتایج گزارش‌شده از نقد روش‌شناختی ارائه‌دهنده",accent:"proteindt",badges:[{type:"computational",text:"In Silico Benchmarks Only"},{type:"critical",text:"Includes Presenter Critical Analysis"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:920px 1fr;gap:28px;direction:ltr;align-items:stretch">
          <!-- Left: Grouped Bar Chart (T = 4, 10, 20) -->
          <div id="s13-chart-panel" class="sci-panel interactive-el" style="padding:22px 26px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#7778FF">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span style="font-family:var(--font-en);font-size:14px;font-weight:700;color:#F4F6FA">
                Text-to-Sequence Retrieval Accuracy (%) Across T Candidates
              </span>
              <span style="font-family:var(--font-en);font-size:12px;color:#9899FF;font-weight:600">
                Metric: ProteinCLAP Top-1 Match
              </span>
            </div>
            <div id="s13-chart-box" style="flex:1;min-height:430px;display:flex;align-items:center"></div>
          </div>

          <!-- Right: 3 Analytical Cards (Reported Finding vs Presenter Critique vs Evidence Boundary) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:16px;direction:rtl;text-align:right">
            <!-- Step 1: Reported Effect of Facilitator -->
            <div
              class="sci-panel s13-card interactive-el"
              data-step="0"
              style="padding:22px 26px;--panel-accent:#8889FF;cursor:pointer"
            >
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h3 style="margin:0;font-size:23px;font-weight:700;color:#B2B3FF">
                  یافته‌ی گزارش‌شده: نقش کلیدی <bdi class="ltr-inline">Facilitator</bdi>
                </h3>
                <span class="ltr" style="font-size:16px;font-weight:800;color:#8889FF">
                  49% → 97% (T=4)
                </span>
              </div>
              <p style="margin:0;font-size:17.5px;line-height:1.62;color:#DCE3F0">
                بهترین مدل (<bdi class="ltr-inline">AR + Facilitator</bdi>) در <bdi class="ltr-inline">T = 4, 10, 20</bdi> به دقت <strong class="ltr" style="color:#F4F6FA">97%, 91%, 83.5%</strong> می‌رسد، در حالی که حذف <bdi class="ltr-inline">Facilitator</bdi> دقت را به <strong class="ltr" style="color:#A6B0C0">49%, 27%, 20%</strong> کاهش می‌دهد.
              </p>
            </div>

            <!-- Step 2: Presenter's Critical Interpretation (Circularity Risk!) -->
            <div
              class="sci-panel s13-card interactive-el"
              data-step="1"
              style="padding:22px 26px;--panel-accent:#F5B841;background:linear-gradient(165deg, rgba(34,28,16,0.75), rgba(12,16,26,0.9));cursor:pointer"
            >
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <div style="display:flex;align-items:center;gap:10px">
                  <span style="color:#F5B841;width:22px;height:22px">${fe.warning}</span>
                  <h3 style="margin:0;font-size:22.5px;font-weight:700;color:#F5B841">
                    نگاه نقادانه (برداشت ارائه‌دهنده)
                  </h3>
                </div>
                ${Ie("critical","Presenter Critique")}
              </div>
              <p style="margin:0;font-size:17.5px;line-height:1.62;color:#E6ECF7">
                هم <strong style="color:#F4F6FA">انتخاب بهترین توالی از میان ۱۶ نمونه‌ی تولیدشده</strong> و هم <strong style="color:#F4F6FA">داور نهایی دقت بازیابی</strong> از امتیاز شباهت خود <bdi class="ltr-inline">ProteinCLAP</bdi> استفاده می‌کنند؛ بنابراین احتمال <strong style="color:#F5B841">دوری بودن ارزیابی (<bdi class="ltr-inline">evaluation circularity</bdi>)</strong> وجود دارد.
              </p>
            </div>

            <!-- Step 3: Strictly Computational Scope -->
            <div
              class="sci-panel s13-card interactive-el"
              data-step="2"
              style="padding:22px 26px;--panel-accent:#E66BBE;cursor:pointer"
            >
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
                <h3 style="margin:0;font-size:22.5px;font-weight:700;color:#F085CE">
                  مرز شواهد: تماماً محاسباتی (<bdi class="ltr-inline">In Silico</bdi>)
                </h3>
                ${Ie("computational","No Wet-Lab Data")}
              </div>
              <p style="margin:0;font-size:17.5px;line-height:1.62;color:#DCE3F0">
                تمام سنجش‌های ساختاری و اتصال در این مقاله (<bdi class="ltr-inline">ESMFold · DSSP · Rosetta · GNINA · TAPE</bdi>) محاسباتی است و هیچ پروتئین تولیدشده‌ای در آزمایشگاه سنتز یا آزمایش نشده است.
              </p>
            </div>
          </div>
        </div>

        ${pe("Source: Liu et al., Nat. Mach. Intell. 2025 (reported metrics) · Critical circularity note: presenter methodological interpretation",13)}
      </div>
    `,this.rootEl=e;const i=e.querySelector("#s13-chart-box");i&&(this.chartCtrl=Ws(i,t.reducedMotion));const s=e.querySelectorAll(".s13-card"),a=le(s,{x:24,opacity:0,duration:.65,stagger:.1,ease:"power3.out"},t.reducedMotion);this.stepCtrl=new Ke({totalSteps:this.totalSteps,initialStep:0,entrance:a,onRender:(c,n)=>{s.forEach((r,d)=>{const u=d===c,y=d!==c&&(n.isHovering||c>0);r.classList.toggle("step-focus",u),r.classList.toggle("step-dimmed",y)}),this.chartCtrl&&this.chartCtrl.highlightSeries(c===0?"facilitator-jump":"all")}}),s.forEach(c=>{const n=Number(c.dataset.step??"0");this.stepCtrl.bindElement(c,n,{onCommit:r=>{this.currentStep=r,t.onStepChange(r,this.totalSteps)}})});const o=e.querySelector("#s13-chart-panel");o&&(this.chartPanelHover=se({cards:[o],dimSiblings:!1})),this.stepCtrl.renderInitial()}goToStep(e){if(!this.stepCtrl){this.currentStep=Math.max(0,Math.min(this.totalSteps-1,e));return}this.currentStep=this.stepCtrl.commitStep(e)}resetHover(){this.stepCtrl?.resetHover(),this.chartPanelHover?.reset()}unmount(){this.stepCtrl?.destroy(),this.stepCtrl=null,this.chartPanelHover?.destroy(),this.chartPanelHover=null,this.rootEl=null,this.chartCtrl=null}}class tn{index=14;totalSteps=1;currentStep=0;mounted=!1;mode="video";switchToken=0;assembly=null;toolbarEl=null;entrance=null;cardHover=null;async mount(e,t){this.mounted=!0,this.currentStep=0,this.mode="video",this.switchToken=0,t.setAmbientGlow({x:"50%",y:"50%",color:"rgba(230, 107, 190, 0.14)",x2:"20%",y2:"25%",color2:"rgba(66, 217, 245, 0.08)"});let i=t.videoLayer.playVideo(Pe("assets/videos/3d_fly_in_active_site.mp4"),{loop:!1,poster:Pe("assets/images/flyin_poster.jpg"),opacity:.96});e.innerHTML=`
      <div class="slide-root" style="padding:52px 84px 64px">
        <!-- Subtle top & bottom cinema gradient bars so full-bleed active-site dive stays unobstructed in the center -->
        <div id="s14-vignette" style="position:absolute;inset:0;pointer-events:none;z-index:0;background:linear-gradient(180deg, rgba(8,11,18,0.88) 0%, rgba(8,11,18,0.12) 26%, rgba(8,11,18,0.14) 72%, rgba(8,11,18,0.92) 100%)"></div>

        <!-- Top Cinematic Header -->
        <div style="position:relative;z-index:2;display:flex;justify-content:space-between;align-items:flex-start;width:100%">
          <div style="direction:rtl;text-align:right">
            <div class="section-pill" style="--pill-color:#E66BBE;--pill-bg:rgba(230,107,190,0.13);--pill-border:rgba(230,107,190,0.42)">
              <span class="section-pill-dot"></span>
              <span>310.ai · نمای سینمایی جیب کاتالیتیک</span>
            </div>
            <h1 class="slide-title-fa s14-anim" style="font-size:52px;text-shadow:0 8px 28px rgba(0,0,0,0.8)">
              ورود به جیب فعال
            </h1>
            <p class="slide-subtitle-fa s14-anim" style="color:#DCE3F0;text-shadow:0 4px 18px rgba(0,0,0,0.85)">
              آنزیم طراحی‌شده‌ی <bdi class="ltr-inline">M6G92</bdi> (<bdi class="ltr-inline">EC 1.1.1.100</bdi>) و کوفاکتور داک‌شده‌ی <bdi class="ltr-inline">NAD(+)</bdi>
            </p>
          </div>

          <div style="display:flex;align-items:center;gap:10px;direction:ltr" class="interactive-el">
            <span id="s14-badge">
              ${Ie("computational","M6G92 + Docked NAD(+) · In Silico Only")}
            </span>
            <button id="s14-replay" class="mol-btn" style="border:1px solid rgba(255,255,255,0.22);background:rgba(10,15,26,0.86);color:#F4F6FA;padding:7px 14px;display:inline-flex;align-items:center;gap:6px">
              <span style="width:14px;height:14px;display:inline-flex">${fe.replay}</span>
              <span>Replay Fly-In</span>
            </button>
            <button id="s14-switch-3d" class="mol-btn" style="border:1px solid rgba(230,107,190,0.45);background:rgba(10,15,26,0.86);color:#F085CE;padding:7px 14px">
              Compare 3D X-Ray Pocket (PDB 1Q7B)
            </button>
          </div>
        </div>

        <!-- Middle open framing window for full-screen active-site fly-in -->
        <div style="flex:1"></div>

        <!-- Bottom Floating Scientific Callout & Footer -->
        <div style="position:relative;z-index:2;display:flex;flex-direction:column;gap:18px">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;direction:rtl">
            <div id="s14-info-card" class="sci-panel s14-anim s14-card interactive-el" style="padding:18px 26px;max-width:860px;--panel-accent:#E66BBE;background:rgba(8,11,18,0.84)">
              <div style="font-size:18.5px;color:#F4F6FA;font-weight:600;line-height:1.6">
                حرکت دوربین از سطح ریبون خارجی به درون شکاف کاتالیتیک و توقف روی مولکول <bdi class="ltr-inline" style="color:#42D9F5">NAD(+)</bdi>
              </div>
              <div style="font-size:15px;color:#F5B841;margin-top:4px">
                توجه علمی: هم ساختار پروتئین (<bdi class="ltr-inline">pLDDT 98.3</bdi>) و هم وضعیت قرارگیری کوفاکتور حاصل پیش‌بینی و داکینگ محاسباتی بوده و در آزمایشگاه آزمایش نشده‌اند.
              </div>
            </div>

            <div class="sci-panel s14-anim s14-card interactive-el" style="padding:14px 22px;direction:ltr;text-align:left;background:rgba(8,11,18,0.84);--panel-accent:#E66BBE">
              <div style="font-family:var(--font-en);font-size:12px;color:#8D99AE">RECORD ID</div>
              <div style="font-family:var(--font-en);font-size:22px;font-weight:800;color:#E66BBE">M6G92 · 247 aa</div>
              <div style="font-family:var(--font-en);font-size:12.5px;color:#42D9F5">EC 1.1.1.100 · Oxidoreductase</div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);direction:ltr">
            <div class="slide-source">
              Source: 310.ai EC repository — M6G92 (EC 1.1.1.100) + docked NAD(+) · Computational prediction only
            </div>
            <div class="slide-page-num">14 / 20</div>
          </div>
        </div>
      </div>
    `;const s=e.querySelector("#s14-replay"),a=e.querySelector("#s14-switch-3d"),o=e.querySelector("#s14-badge"),c=e.querySelector("#s14-info-card");this.entrance=le(e.querySelectorAll(".s14-anim"),{y:18,opacity:0,duration:.65,stagger:.08,ease:"power3.out"},t.reducedMotion),this.cardHover=se({cards:e.querySelectorAll(".s14-card"),entrance:this.entrance,dimSiblings:!1,onHoverChange:n=>{this.mode==="3d"&&document.querySelectorAll(".mol-pin").forEach(r=>{r.classList.toggle("pin-focus",n===0)})}}),s?.addEventListener("click",n=>{n.stopPropagation(),this.mode==="video"&&(i.currentTime=0,i.play().catch(()=>{}))}),a?.addEventListener("click",async n=>{n.stopPropagation();const r=++this.switchToken;this.mode==="video"?(this.mode="3d",t.videoLayer.hideVideo(),s&&(s.style.display="none"),a.textContent="Return to M6G92 Fly-In Video",o&&(o.innerHTML=Ie("experimental","PDB 1Q7B · Natural EC 1.1.1.100 X-Ray Pocket")),c&&(c.innerHTML=`
            <div style="font-size:18.5px;color:#69D8A0;font-weight:700;line-height:1.6">
              مرجع بلورنگاری طبیعی <bdi class="ltr-inline">RCSB PDB 1Q7B</bdi> (<bdi class="ltr-inline">EC 1.1.1.100</bdi>، ۲۴۷ اسیدآمینه)
            </div>
            <div style="font-size:15px;color:#CBD4E4;margin-top:4px">
              نمایش سه‌بعدی جیب فعال Rossmann و سه‌گانه‌ی کاتالیتیک (<bdi class="ltr-inline">Ser138 / Tyr151 / Lys155</bdi>) در هم‌تای طبیعی باکتری <bdi class="ltr-inline">E. coli</bdi> برای مقایسه‌ی ساختاری.
            </div>
          `),await this.mountHomologPocket(e.querySelector(".slide-root"),t,r)):(this.mode="video",this.toolbarEl?.remove(),this.toolbarEl=null,this.assembly=null,t.sceneManager.clearStage(),i=t.videoLayer.playVideo(Pe("assets/videos/3d_fly_in_active_site.mp4"),{loop:!1,poster:Pe("assets/images/flyin_poster.jpg"),opacity:.96}),s&&(s.style.display="inline-flex"),a.textContent="Compare 3D X-Ray Pocket (PDB 1Q7B)",o&&(o.innerHTML=Ie("computational","M6G92 + Docked NAD(+) · In Silico Only")),c&&(c.innerHTML=`
            <div style="font-size:18.5px;color:#F4F6FA;font-weight:600;line-height:1.6">
              حرکت دوربین از سطح ریبون خارجی به درون شکاف کاتالیتیک و توقف روی مولکول <bdi class="ltr-inline" style="color:#42D9F5">NAD(+)</bdi>
            </div>
            <div style="font-size:15px;color:#F5B841;margin-top:4px">
              توجه علمی: هم ساختار پروتئین (<bdi class="ltr-inline">pLDDT 98.3</bdi>) و هم وضعیت قرارگیری کوفاکتور حاصل پیش‌بینی و داکینگ محاسباتی بوده و در آزمایشگاه آزمایش نشده‌اند.
            </div>
          `))})}async mountHomologPocket(e,t,i){const s=await Ce.loadProtein("1q7b");if(!this.mounted||this.mode!=="3d"||i!==this.switchToken)return;t.sceneManager.clearStage(),this.assembly=_e(s,"secondary","surface");const a=s.activeSite?s.activeSite.center:[0,0,0],o={distance:t.sceneManager.fitDistance(14,860),target:a,rotX:.14,rotY:.35,screenCenterX:960,screenCenterY:500,autoRotateSpeed:.1},c={distance:t.sceneManager.fitDistance(s.radius,980),target:[0,0,0],rotX:.18,rotY:-.3,screenCenterX:960,screenCenterY:500,autoRotateSpeed:.16};if(t.sceneManager.setCameraImmediate(o),t.sceneManager.mountObject(this.assembly.root,()=>this.assembly?.dispose(),void 0,s.meta.title),t.sceneManager.setInteractive(!0),s.activeSite)for(const n of s.activeSite.keyResidues)t.sceneManager.addPin({id:n.label,xyz:n.xyz,title:n.label,subtitle:n.role,accent:"#F5B841"});this.toolbarEl?.remove(),this.toolbarEl=ki({parent:e,assembly:this.assembly,sceneManager:t.sceneManager,defaultCamera:c,pocketCamera:o,positionStyle:{left:"50%",transform:"translateX(-50%)",bottom:"205px"},initialRepr:"surface"})}resetHover(){this.cardHover?.reset()}unmount(){this.mounted=!1,this.cardHover?.destroy(),this.cardHover=null,this.entrance?.kill(),this.entrance=null,this.toolbarEl?.remove(),this.toolbarEl=null,this.assembly=null}}class sn{index=15;totalSteps=1;currentStep=0;mounted=!1;committedTab="render";hoveredTab=null;renderedTab=null;switchToken=0;assembly=null;entrance=null;cardHover=null;syncTabFn=null;async mount(e,t){this.mounted=!0,this.currentStep=0,this.committedTab="render",this.hoveredTab=null,this.renderedTab="render",this.switchToken=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"28%",y:"50%",color:"rgba(230, 107, 190, 0.13)",x2:"78%",y2:"30%",color2:"rgba(119, 120, 255, 0.08)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"310.ai · مطالعه‌ی موردی از مخزن EC",titleFa:"ارتباط با 310.ai: یک نمونه‌ی واقعی",subtitleFa:"بررسی رکورد M6G92 (آنزیم EC 1.1.1.100) و مرز دقیق میان شباهت مفهومی و شواهد تجربی",accent:"310",badges:[{type:"computational",text:"M6G92 · Computational Prediction Only"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:760px 1fr;gap:30px;direction:ltr;align-items:stretch">
          <!-- Left: Original M6G92 + Docked NAD(+) Render & Live 3D Natural Homolog Switcher -->
          <div class="sci-panel interactive-el mol-viewport-panel" style="padding:18px 20px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#E66BBE;background:rgba(10,15,25,0.68)">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;z-index:5">
              <div style="display:inline-flex;gap:6px;background:rgba(6,9,16,0.88);padding:5px;border-radius:999px;border:1px solid rgba(255,255,255,0.12)">
                <button class="mol-btn s15-tab active-magenta" data-tab="render">M6G92 + NAD(+) Render (310.ai)</button>
                <button class="mol-btn s15-tab" data-tab="3d">Live 3D Natural Homolog (PDB 1Q7B)</button>
              </div>
              <span id="s15-left-tag" style="font-family:var(--font-en);font-size:12px;color:#E66BBE;font-weight:700">
                In Silico Docked Complex
              </span>
            </div>

            <div id="s15-view-frame" style="flex:1;position:relative;margin:12px 0;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);background:#070A11">
              <img
                id="s15-render-img"
                src="${Pe("assets/images/m6g92_nad_render.jpg")}"
                alt="M6G92 computational structure with docked NAD(+)"
                style="width:100%;height:100%;object-fit:cover;display:block"
              />
            </div>

            <div id="s15-view-caption" style="font-family:var(--font-fa);font-size:14px;color:#A6B0C0;direction:rtl;text-align:right">
              رندر اصلی کاندید <bdi class="ltr-inline">M6G92</bdi> با کوفاکتور داک‌شده‌ی <bdi class="ltr-inline">NAD(+)</bdi> (مختصات اتمی خام در بسته‌ی عمومی منتشر نشده است).
            </div>
          </div>

          <!-- Right: Input -> Output Metrics + Strict Honesty Caveats -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:16px;direction:rtl;text-align:right">
            <!-- Input -> Output Specification Card -->
            <div class="sci-panel s15-anim s15-card interactive-el" style="padding:22px 26px;--panel-accent:#E66BBE">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <h2 style="margin:0;font-size:24px;font-weight:700;color:#F4F6FA">ورودی کارکردی و خروجی طراحی</h2>
                <span class="ltr" style="font-size:14px;font-weight:800;color:#E66BBE;background:rgba(230,107,190,0.14);padding:4px 12px;border-radius:999px">
                  M6G92 · EC 1.1.1.100
                </span>
              </div>
              <div style="display:grid;grid-template-columns:130px 1fr;gap:10px 16px;font-size:17.5px;line-height:1.58;color:#DCE3F0">
                <div style="color:#8D99AE;font-weight:600">ورودی هدف:</div>
                <div>توصیف متنی آنزیم <bdi class="ltr-inline">3-oxoacyl-[ACP] reductase</bdi> (<bdi class="ltr-inline">EC 1.1.1.100</bdi>)</div>
                <div style="color:#8D99AE;font-weight:600">خروجی مدل:</div>
                <div>توالی <strong class="ltr" style="color:#F4F6FA">247 aa</strong> همراه با ساختار پیش‌بینی‌شده و کوفاکتور داک‌شده‌ی <bdi class="ltr-inline">NAD(+)</bdi></div>
              </div>
            </div>

            <!-- Quantitative Scores Row -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
              <div class="sci-panel s15-anim s15-card interactive-el" style="padding:20px 24px;--panel-accent:#42D9F5">
                <div class="ltr" style="font-size:38px;font-weight:800;color:#42D9F5;line-height:1.05">pLDDT = 98.3</div>
                <div style="font-size:16px;color:#E2E8F4;margin-top:8px;font-weight:600">اطمینان هندسی پیش‌بینی ساختار</div>
                <div style="font-size:13.5px;color:#9BA6BA;margin-top:4px">نشان‌دهنده‌ی اطمینان تاخوردگی است، نه اثبات فعالیت کاتالیتیک!</div>
              </div>

              <div class="sci-panel s15-anim s15-card interactive-el" style="padding:20px 24px;--panel-accent:#7778FF">
                <div class="ltr" style="font-size:38px;font-weight:800;color:#9899FF;line-height:1.05">SeqID = 32.7%</div>
                <div style="font-size:16px;color:#E2E8F4;margin-top:8px;font-weight:600">شباهت به نزدیک‌ترین پروتئین طبیعی</div>
                <div style="font-size:13.5px;color:#9BA6BA;margin-top:4px">توالی از نمونهبرداری ساده‌ی همولوگ‌های نزدیک فاصله دارد.</div>
              </div>
            </div>

            <!-- Mandatory Scientific Integrity & Non-Equivalence Box -->
            <div class="sci-panel s15-anim s15-card interactive-el" style="padding:20px 24px;--panel-accent:#F5B841;background:rgba(28,22,16,0.72)">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                <span style="color:#F5B841;width:21px;height:21px">${fe.warning}</span>
                <span style="font-size:18.5px;font-weight:700;color:#F5B841">دو مرز علمی بسیار مهم در تفسیر این نمونه</span>
              </div>
              <ul style="margin:0;padding-right:20px;font-size:16px;line-height:1.62;color:#E6ECF7">
                <li>
                  <strong>تمایز معماری از <bdi class="ltr-inline">ProteinDT</bdi>:</strong> شباهت با <bdi class="ltr-inline">ProteinDT</bdi> صرفاً مفهومی است (ورودی کارکرد ← توالی)؛ معماری داخلی مدل <bdi class="ltr-inline">310.ai</bdi> در منابع ما منتشر نشده و <strong style="color:#F5B841">نباید آن را همان <bdi class="ltr-inline">ProteinDT</bdi> دانست</strong>.
                </li>
                <li>
                  <strong>فاقد تأیید آزمایشگاهی:</strong> ساختار، داکینگ <bdi class="ltr-inline">NAD(+)</bdi> و عملکرد آنزیمی <bdi class="ltr-inline">M6G92</bdi> صرفاً محاسباتی است.
                </li>
              </ul>
            </div>
          </div>
        </div>

        ${pe("Source: 310.ai EC repository record M6G92 (protein_ec_annotations.csv) · Homolog 3D comparison: RCSB PDB 1Q7B",15)}
      </div>
    `;const i=e.querySelectorAll(".s15-tab"),s=e.querySelector("#s15-render-img"),a=e.querySelector("#s15-view-frame"),o=e.querySelector("#s15-left-tag"),c=e.querySelector("#s15-view-caption");this.entrance=le(e.querySelectorAll(".s15-anim"),{y:20,opacity:0,duration:.65,stagger:.1,ease:"power3.out"},t.reducedMotion),this.cardHover=se({cards:e.querySelectorAll(".s15-card"),entrance:this.entrance,dimSiblings:!0});const n=async()=>{const r=this.hoveredTab??this.committedTab;if(i.forEach(u=>{const y=u.dataset.tab;u.classList.toggle("active-magenta",y==="render"&&r==="render"),u.classList.toggle("active",y==="3d"&&r==="3d")}),this.renderedTab===r)return;const d=++this.switchToken;if(r==="render")this.renderedTab="render",t.sceneManager.clearStage(),this.assembly=null,s&&(s.style.display="block"),a&&(a.style.background="#070A11"),o&&(o.textContent="In Silico Docked Complex",o.style.color="#E66BBE"),c&&(c.innerHTML='رندر اصلی کاندید <bdi class="ltr-inline">M6G92</bdi> با کوفاکتور داک‌شده‌ی <bdi class="ltr-inline">NAD(+)</bdi> (مختصات اتمی خام در بسته‌ی عمومی منتشر نشده است).');else{s&&(s.style.display="none"),a&&(a.style.background="transparent"),o&&(o.textContent="Natural X-Ray Homolog · PDB 1Q7B",o.style.color="#69D8A0"),c&&(c.innerHTML='هم‌تای طبیعی بلورنگاری‌شده (<bdi class="ltr-inline">PDB 1Q7B</bdi>، زنجیره‌ی A با ۲۴۷ اسیدآمینه، <bdi class="ltr-inline">EC 1.1.1.100</bdi>): چرخش آزاد سه‌بعدی فولد Rossmann.');const u=await Ce.loadProtein("1q7b"),y=this.hoveredTab??this.committedTab;if(!this.mounted||d!==this.switchToken||y!=="3d")return;t.sceneManager.clearStage(),this.assembly=_e(u,"chain-gradient","ribbon"),this.renderedTab="3d",t.sceneManager.setCameraImmediate({distance:t.sceneManager.fitDistance(u.radius*.88,560),target:[0,0,0],rotX:.18,rotY:.35,screenCenterX:464,screenCenterY:540,autoRotateSpeed:.18}),t.sceneManager.mountObject(this.assembly.root,()=>this.assembly?.dispose(),void 0,u.meta.title),t.sceneManager.setInteractive(!0),t.sceneManager.setClipFromElement(a)}};this.syncTabFn=()=>{n()},i.forEach(r=>{const d=r.dataset.tab??"render";r.addEventListener("pointerenter",()=>{this.hoveredTab=d,n()}),r.addEventListener("pointerleave",()=>{this.hoveredTab=null,n()}),r.addEventListener("click",u=>{u.stopPropagation(),this.committedTab=d,this.hoveredTab=null,n()})})}resetHover(){this.hoveredTab=null,this.cardHover?.reset(),this.syncTabFn?.()}unmount(){this.mounted=!1,this.cardHover?.destroy(),this.cardHover=null,this.entrance?.kill(),this.entrance=null,this.syncTabFn=null,this.renderedTab=null,this.assembly=null}}class nn{index=16;totalSteps=1;currentStep=0;entrance=null;rightHover=null;chartPanelHover=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"30%",y:"50%",color:"rgba(230, 107, 190, 0.12)",x2:"78%",y2:"35%",color2:"rgba(245, 184, 65, 0.08)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"310.ai · تحلیل آماری و ممیزی داده",titleFa:"داده‌ی 310 در یک نگاه",subtitleFa:"توزیع ۶٬۵۹۰ رکورد محاسباتی در هفت کلاس آنزیمی به همراه هشدارهای کلیدی تحلیل داده",accent:"310",badges:[{type:"computational",text:"n = 6,590 In Silico Designs"},{type:"critical",text:"Pre-Filtered Export Audit"}]})}

        <div class="slide-body" style="display:grid;grid-template-columns:860px 1fr;gap:30px;direction:ltr;align-items:stretch">
          <!-- Left: Horizontal Bar Chart Across 7 EC Classes -->
          <div id="s16-chart-panel" class="sci-panel s16-anim interactive-el" style="padding:24px 28px;--panel-accent:#E66BBE">
            <div id="s16-ec-chart" style="height:100%"></div>
          </div>

          <!-- Right: Key Dataset Metrics + 3 Data Hygiene Caveats (RTL) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:16px;direction:rtl;text-align:right">
            <!-- Top 4 Stat Tiles -->
            <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:14px">
              <div class="sci-panel s16-anim s16-card interactive-el" style="padding:18px 22px;--panel-accent:#E66BBE">
                <div class="ltr" style="font-size:34px;font-weight:800;color:#F085CE;line-height:1.05">6,590 · 1,918</div>
                <div style="font-size:15.5px;color:#DCE3F0;margin-top:6px">۶٬۵۹۰ طراحی در ۱٬۹۱۸ شماره‌ی <bdi class="ltr-inline">EC</bdi> و هر ۷ کلاس</div>
              </div>

              <div class="sci-panel s16-anim s16-card interactive-el" style="padding:18px 22px;--panel-accent:#42D9F5">
                <div class="ltr" style="font-size:34px;font-weight:800;color:#42D9F5;line-height:1.05">41% ≥ 0.90</div>
                <div style="font-size:15.5px;color:#DCE3F0;margin-top:6px">سهم طراحی‌های دارای <bdi class="ltr-inline">pLDDT ≥ 0.9</bdi></div>
              </div>

              <div class="sci-panel s16-anim s16-card interactive-el" style="padding:18px 22px;--panel-accent:#7778FF">
                <div class="ltr" style="font-size:34px;font-weight:800;color:#9899FF;line-height:1.05">31% Median</div>
                <div style="font-size:15.5px;color:#DCE3F0;margin-top:6px">میانه‌ی <bdi class="ltr-inline">SeqID</bdi>؛ <strong class="ltr" style="color:#F4F6FA">73%</strong> زیر ۴۰٪ شباهت طبیعی</div>
              </div>

              <div class="sci-panel s16-anim s16-card interactive-el" style="padding:18px 22px;--panel-accent:#F5B841">
                <div class="ltr" style="font-size:34px;font-weight:800;color:#F5B841;line-height:1.05">~11% Poly-A</div>
                <div style="font-size:15.5px;color:#DCE3F0;margin-top:6px">توالی‌های دارای دُم تکرارشونده‌ی <bdi class="ltr-inline">poly-Alanine</bdi></div>
              </div>
            </div>

            <!-- Critical Data Audit Warnings Box -->
            <div class="sci-panel s16-anim s16-card interactive-el" style="padding:22px 26px;flex:1;display:flex;flex-direction:column;justify-content:center;--panel-accent:#F5B841;background:linear-gradient(165deg, rgba(32,25,16,0.78), rgba(12,16,26,0.92))">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
                <span style="color:#F5B841;width:22px;height:22px">${fe.warning}</span>
                <h3 style="margin:0;font-size:21.5px;font-weight:700;color:#F5B841">
                  سه هشدار کلیدی در خوانش علمی این فایل داده
                </h3>
              </div>

              <div style="display:flex;flex-direction:column;gap:11px;font-size:16.5px;line-height:1.6;color:#E6ECF7">
                <div>
                  <strong style="color:#F4F6FA">۱. مجموعه‌داده‌ی پیش‌فیلترشده (<bdi class="ltr-inline">Pre-filtered</bdi>):</strong>
                  کمینه‌ی ستون‌های امتیاز دقیقاً روی <bdi class="ltr-inline" style="color:#F5B841">0.70</bdi>، <bdi class="ltr-inline" style="color:#F5B841">0.60</bdi> و <bdi class="ltr-inline" style="color:#F5B841">0.80</bdi> بریده شده است؛ پس میانگین‌ها <strong style="color:#F5B841">نرخ موفقیت خام مدل نیستند</strong>.
                </div>
                <div>
                  <strong style="color:#F4F6FA">۲. مصنوع تولید (<bdi class="ltr-inline">Generation Artifact</bdi>):</strong>
                  وجود دُم <bdi class="ltr-inline">poly-Alanine</bdi> در حدود <strong class="ltr">11%</strong> از رکوردها نشان می‌دهد خروجی مدل نیازمند پالایش کیفیت توالی است.
                </div>
                <div>
                  <strong style="color:#F4F6FA">۳. نبود شواهد آزمایشگاهی:</strong>
                  هیچ ستونی از سنجش تجربی یا فعالیت واقعی آنزیم در این جدول وجود ندارد.
                </div>
              </div>
            </div>
          </div>
        </div>

        ${pe("Source: Quantitative audit of 310.ai EC repository export (protein_ec_annotations.csv, n = 6,590)",16)}
      </div>
    `;const i=e.querySelector("#s16-ec-chart");i&&Zs(i,t.reducedMotion),this.entrance=le(e.querySelectorAll(".s16-anim"),{y:22,opacity:0,duration:.65,stagger:.08,ease:"power3.out"},t.reducedMotion),this.rightHover=se({cards:e.querySelectorAll(".s16-card"),entrance:this.entrance,dimSiblings:!0});const s=e.querySelector("#s16-chart-panel");s&&(this.chartPanelHover=se({cards:[s],entrance:this.entrance,dimSiblings:!1}))}resetHover(){this.rightHover?.reset(),this.chartPanelHover?.reset()}unmount(){this.rightHover?.destroy(),this.rightHover=null,this.chartPanelHover?.destroy(),this.chartPanelHover=null,this.entrance?.kill(),this.entrance=null}}class on{index=17;totalSteps=1;currentStep=0;entrance=null;colHover=null;resetPointsFn=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"74%",y:"46%",color:"rgba(105, 216, 160, 0.1)",x2:"26%",y2:"52%",color2:"rgba(242, 112, 125, 0.09)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"جمع‌بندی تحلیلی · ترازنامه دستاوردها و چالش‌ها",titleFa:"کاربردها و محدودیت‌ها",subtitleFa:"آنچه امروز واقعاً کار می‌کند در برابر گلوگاه‌هایی که هنوز حل نشده‌اند",accent:"positive"})}

        <div class="slide-body" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;direction:rtl;align-items:stretch">
          <!-- Right Column: Demonstrated Applications -->
          <div class="sci-panel s17-col interactive-el" style="padding:30px 34px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#69D8A0">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px">
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="icon-circle" style="--icon-color:#69D8A0;--icon-border:rgba(105,216,160,0.45);--icon-bg:rgba(105,216,160,0.12)">
                    ${fe.check}
                  </span>
                  <h2 style="margin:0;font-size:28px;font-weight:700;color:#69D8A0">کاربردهای نشان‌داده‌شده</h2>
                </div>
                <span class="ltr" style="font-size:12.5px;color:#69D8A0;font-weight:700">APPLICATIONS</span>
              </div>

              <div class="s17-point-list" style="display:flex;flex-direction:column;gap:18px;font-size:18.5px;line-height:1.65;color:#E2E8F4">
                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #69D8A0;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">گزارشگرهای نوری و سنجش چندگانه (<bdi class="ltr-inline">Multiplexed Biosensing</bdi>):</strong>
                  ردیابی هم‌زمان مسیرهای سیگنال‌دهی سلولی مانند <bdi class="ltr-inline">NF-κB</bdi> و <bdi class="ltr-inline">cAMP–PKA</bdi> به کمک اختصاصیت بالای <bdi class="ltr-inline">LuxSit-i</bdi> (مقاله‌ی <bdi class="ltr-inline">Nature</bdi>).
                </div>

                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #42D9F5;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">زیست‌کاتالیز و شیمی سبز (<bdi class="ltr-inline">Biocatalysis</bdi>):</strong>
                  طراحی آنزیم‌های پایدارتر در دمای بالا و مقاوم به حلال برای فرآیندهای تولید زیستی (مقاله‌ی مروری).
                </div>

                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #7778FF;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">کاوش سریع توالی با راهنمایی متن:</strong>
                  تولید کاندیدهای اولیه و ویرایش ویژگی‌ها بر اساس توصیف عملکرد (<bdi class="ltr-inline">ProteinDT</bdi> و ایده‌ی مفهومی مشابه در <bdi class="ltr-inline">310.ai</bdi>).
                </div>
              </div>
            </div>

            <!-- Non-Therapeutic Explicit Boundary -->
            <div style="margin-top:20px;padding:14px 18px;border-radius:9px;background:rgba(66,217,245,0.08);border:1px solid rgba(66,217,245,0.28);font-size:15.5px;color:#CBD4E4;line-height:1.55">
              <strong style="color:#42D9F5">مرز دقیق پزشکی:</strong> این کاربردها در حوزه‌ی <strong style="color:#F4F6FA">ابزار تصویربرداری پژوهشی، سنجش سلولی و زیست‌کاتالیز</strong> هستند؛ منابع بررسی‌شده شواهد درمانی یا بالینی ارائه نمی‌کنند.
            </div>
          </div>

          <!-- Left Column: Fundamental Limitations -->
          <div class="sci-panel s17-col interactive-el" style="padding:30px 34px;display:flex;flex-direction:column;justify-content:space-between;--panel-accent:#F2707D">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px">
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="icon-circle" style="--icon-color:#F2707D;--icon-border:rgba(242,112,125,0.45);--icon-bg:rgba(242,112,125,0.12)">
                    ${fe.warning}
                  </span>
                  <h2 style="margin:0;font-size:28px;font-weight:700;color:#F2707D">محدودیت‌ها و گلوگاه‌های کنونی</h2>
                </div>
                <span class="ltr" style="font-size:12.5px;color:#F2707D;font-weight:700">LIMITATIONS</span>
              </div>

              <div class="s17-point-list" style="display:flex;flex-direction:column;gap:18px;font-size:18.5px;line-height:1.65;color:#E2E8F4">
                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #F2707D;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">نرخ موفقیت اولیه‌ی پایین در کاتالیز از صفر:</strong>
                  در دور اول <bdi class="ltr-inline">Nature</bdi> تنها <strong class="ltr" style="color:#F2707D">3 / 7,648 (0.04%)</strong> از طراحی‌ها فعال بودند.
                </div>

                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #F5B841;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">وابستگی به غربالگری و تکامل آزمایشگاهی:</strong>
                  رسیدن به فعالیت بالای <bdi class="ltr-inline">LuxSit-i</bdi> (<bdi class="ltr-inline">10<sup>6</sup> M<sup>−1</sup> s<sup>−1</sup></bdi>) نیازمند غربالگری جهش تجربی بود.
                </div>

                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #9299A6;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">فقدان محک استاندارد و خطر معیارهای دوری:</strong>
                  بسیاری از مدل‌های متنی صرفاً با معیارهای محاسباتی داخلی سنجیده می‌شوند و محک تجربی یکسان ندارند.
                </div>

                <div class="s17-point interactive-el" style="padding-right:14px;border-right:3px solid #E66BBE;transition:transform 0.2s ease, opacity 0.2s ease">
                  <strong style="color:#F4F6FA">دشواری شیمی‌های کاملاً غیرطبیعی:</strong>
                  بخش بزرگی از طراحی‌های موفق هنوز بر پایه‌ی خانواده‌ها یا مکانیسم‌های الهام‌گرفته از طبیعت شکل می‌گیرند.
                </div>
              </div>
            </div>

            <div style="margin-top:20px;padding:14px 18px;border-radius:9px;background:rgba(242,112,125,0.08);border:1px solid rgba(242,112,125,0.28);font-size:15.5px;color:#CBD4E4;line-height:1.55">
              <strong style="color:#F2707D">نتیجه‌ی عملی:</strong> امتیاز بالای پیش‌بینی ساختار (<bdi class="ltr-inline">pLDDT</bdi>) شرط لازم هندسی است، اما هرگز جایگزین سنجش تجربی کاتالیز نمی‌شود.
            </div>
          </div>
        </div>

        ${pe("Sources: Yeh et al., Nature 2023 · Liu et al., Nat. Mach. Intell. 2025 · Wen et al., Curr. Opin. Green Sustain. Chem. 2025",17)}
      </div>
    `;const i=e.querySelectorAll(".s17-col");this.entrance=le(i,{y:24,opacity:0,duration:.68,stagger:.14,ease:"power3.out"},t.reducedMotion),this.colHover=se({cards:i,entrance:this.entrance,dimSiblings:!0});const s=e.querySelectorAll(".s17-point-list"),a=e.querySelectorAll(".s17-point");s.forEach(o=>{const c=o.querySelectorAll(".s17-point");c.forEach(n=>{n.addEventListener("pointerenter",()=>{c.forEach(r=>{r.style.opacity=r===n?"1":"0.58",r.style.transform=r===n?"translateX(-4px)":"none"})}),n.addEventListener("pointerleave",()=>{c.forEach(r=>{r.style.opacity="1",r.style.transform="none"})})})}),this.resetPointsFn=()=>{a.forEach(o=>{o.style.opacity="1",o.style.transform="none"})}}resetHover(){this.colHover?.reset(),this.resetPointsFn?.()}unmount(){this.colHover?.destroy(),this.colHover=null,this.entrance?.kill(),this.entrance=null,this.resetPointsFn=null}}const an=[{numFa:"۱",accent:"#42D9F5",titleFa:"طراحی از صفر آنزیم فعال ممکن شده است — با تکیه بر آزمایشگاه",bodyFa:'پژوهش <bdi class="ltr-inline">Nature 2023</bdi> نشان داد یادگیری عمیق می‌تواند داربست و جایگاه فعال یک آنزیم نورزای کوچک (<bdi class="ltr-inline">LuxSit</bdi>) را از صفر بسازد، اما رسیدن به کارایی بالا نیازمند غربالگری هزاران کاندید و بهینه‌سازی تجربی بود.'},{numFa:"۲",accent:"#7778FF",titleFa:"طراحی هدایت‌شده با متن در حال شکل‌گیری است — اما عمدتاً محاسباتی است",bodyFa:'چارچوب‌هایی مانند <bdi class="ltr-inline">ProteinDT</bdi> و مخازن محاسباتی نظیر <bdi class="ltr-inline">310.ai</bdi> مسیر تبدیل توصیف کارکرد به توالی را هموار کرده‌اند، ولی خروجی‌های آن‌ها بدون آزمون آزمایشگاهی صرفاً فرضیه و کاندید محاسباتی محسوب می‌شوند.'},{numFa:"۳",accent:"#69D8A0",titleFa:"گلوگاه اصلی امروز: اعتبارسنجی تجربی و محک‌های استاندارد",bodyFa:'تولید میلیون‌ها توالی با <bdi class="ltr-inline">pLDDT</bdi> بالا دیگر دشوار نیست؛ چالش تعیین‌کننده‌ی علم مهندسی پروتئین، سنجش دقیق کاتالیز در آزمایشگاه و پرهیز از معیارهای دوری است.'}];class rn{index=18;totalSteps=1;currentStep=0;mounted=!1;assembly=null;entrance=null;takeawayHover=null;thesisHover=null;async mount(e,t){this.mounted=!0,this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"24%",y:"50%",color:"rgba(66, 217, 245, 0.12)",x2:"78%",y2:"50%",color2:"rgba(105, 216, 160, 0.09)"});const i=an.map(n=>`
        <div class="sci-panel s18-item s18-takeaway interactive-el" style="padding:24px 30px;display:grid;grid-template-columns:56px 1fr;gap:20px;align-items:start;--panel-accent:${n.accent}">
          <span class="step-disc" style="--disc-color:${n.accent};width:46px;height:46px;font-size:22px;margin-top:2px">
            ${n.numFa}
          </span>
          <div>
            <h2 style="margin:0 0 8px 0;font-size:24px;font-weight:700;color:#F4F6FA;line-height:1.35">
              ${n.titleFa}
            </h2>
            <p style="margin:0;font-size:18px;line-height:1.65;color:#CBD4E4">
              ${n.bodyFa}
            </p>
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"جمع‌بندی نهایی",titleFa:"جمع‌بندی",subtitleFa:"سه پیام محوری از پیوند هوش مصنوعی مولد و زیست‌فناوری تجربی",accent:"nature"})}

        <div class="slide-body" style="display:flex;flex-direction:column;justify-content:space-between;gap:22px;direction:rtl">
          <div style="display:grid;grid-template-columns:1fr 440px;gap:28px;flex:1;align-items:stretch">
            <!-- Right: 3 Numbered Takeaways -->
            <div style="display:flex;flex-direction:column;justify-content:space-between;gap:16px;text-align:right">
              ${i}
            </div>

            <!-- Left: Ambient 3D Molecular Anchor -->
            <div id="s18-3d-window" class="sci-panel interactive-el mol-viewport-panel" style="padding:18px 22px;display:flex;flex-direction:column;justify-content:space-between;background:rgba(10,15,25,0.48);--panel-accent:#42D9F5;direction:ltr;text-align:left">
              <div id="s18-3d-label" style="font-family:var(--font-en);font-size:12px;font-weight:700;color:#42D9F5">
                SEQUENCE ──▶ STRUCTURE ──▶ VALIDATED FUNCTION
              </div>
              <div style="flex:1;min-height:280px"></div>
              <div style="font-family:var(--font-en);font-size:12px;color:#8D99AE">
                3D Fold Anchor: RCSB PDB 1OUN (NTF2-like scaffold family)
              </div>
            </div>
          </div>

          <!-- Closing Memorable Thesis Banner -->
          <div
            id="s18-thesis"
            class="sci-panel s18-item interactive-el"
            style="padding:22px 36px;display:flex;justify-content:space-between;align-items:center;--panel-accent:#69D8A0;background:linear-gradient(90deg, rgba(66,217,245,0.12) 0%, rgba(119,120,255,0.12) 50%, rgba(105,216,160,0.14) 100%)"
          >
            <div style="font-size:29px;font-weight:700;color:#F4F6FA">
              «هوش مصنوعی طراحی را شتاب می‌دهد؛ <span style="color:#69D8A0">آزمایش</span> آن را معتبر می‌کند.»
            </div>
            <div class="ltr" style="font-size:17px;font-weight:600;color:#B8C4D8;font-style:italic">
              AI accelerates design; experiment establishes credibility.
            </div>
          </div>
        </div>

        ${pe("Synthesis across Yeh et al. (2023), Liu et al. (2025), Wen et al. (2025), and 310.ai EC repository audit",18)}
      </div>
    `;const s=e.querySelector("#s18-3d-label");this.entrance=le(e.querySelectorAll(".s18-item"),{y:20,opacity:0,duration:.65,stagger:.1,ease:"power3.out"},t.reducedMotion);const a=n=>{this.assembly&&(n===0?(this.assembly.setRepresentation("ribbon"),this.assembly.setColorMode("secondary"),s&&(s.textContent="1 · DE NOVO SCAFFOLD & ACTIVE POCKET")):n===1?(this.assembly.setRepresentation("backbone"),this.assembly.setColorMode("chain-gradient"),s&&(s.textContent="2 · TEXT-GUIDED IN SILICO SEQUENCE TRACE")):n===2?(this.assembly.setRepresentation("surface"),this.assembly.setColorMode("chain-gradient"),s&&(s.textContent="3 · WET-LAB CATALYTIC POCKET VALIDATION")):(this.assembly.setRepresentation("ribbon"),this.assembly.setColorMode("chain-gradient"),s&&(s.textContent="SEQUENCE ──▶ STRUCTURE ──▶ VALIDATED FUNCTION")))};this.takeawayHover=se({cards:e.querySelectorAll(".s18-takeaway"),entrance:this.entrance,dimSiblings:!0,onHoverChange:a});const o=e.querySelector("#s18-thesis");o&&(this.thesisHover=se({cards:[o],entrance:this.entrance,dimSiblings:!1}));const c=await Ce.loadProtein("1oun");this.mounted&&(this.assembly=_e(c,"chain-gradient","ribbon"),t.sceneManager.setCameraImmediate({distance:t.sceneManager.fitDistance(c.radius*.88,360),target:[0,0,0],rotX:.2,rotY:-.4,screenCenterX:304,screenCenterY:485,autoRotateSpeed:.2}),t.sceneManager.mountObject(this.assembly.root,()=>this.assembly?.dispose(),void 0,c.meta.title),t.sceneManager.setInteractive(!0),t.sceneManager.setClipFromElement(e.querySelector("#s18-3d-window")))}resetHover(){this.takeawayHover?.reset(),this.thesisHover?.reset()}unmount(){this.mounted=!1,this.takeawayHover?.destroy(),this.takeawayHover=null,this.thesisHover?.destroy(),this.thesisHover=null,this.entrance?.kill(),this.entrance=null,this.assembly=null}}class ln{index=19;totalSteps=1;currentStep=0;entrance=null;refHover=null;qaHover=null;mount(e,t){this.currentStep=0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"50%",y:"35%",color:"rgba(66, 217, 245, 0.11)",x2:"50%",y2:"80%",color2:"rgba(119, 120, 255, 0.08)"});const i=bs.map(s=>`
        <div class="sci-panel s19-ref s19-citation interactive-el" style="padding:20px 26px;display:grid;grid-template-columns:54px 1fr;gap:16px;align-items:center;--panel-accent:${s.accent};direction:ltr;text-align:left">
          <div style="font-family:var(--font-en);font-size:22px;font-weight:800;color:${s.accent}">
            ${s.num}
          </div>
          <div>
            <div style="font-family:var(--font-en);font-size:12px;font-weight:700;color:${s.accent};text-transform:uppercase;letter-spacing:0.04em;margin-bottom:4px">
              ${s.tag}
            </div>
            <div style="font-family:var(--font-en);font-size:16.5px;line-height:1.5;color:#F4F6FA;font-weight:500">
              ${s.citation}
            </div>
            <div style="font-family:var(--font-en);font-size:13.5px;color:#8D99AE;margin-top:3px">
              ${s.doi}
            </div>
          </div>
        </div>
      `).join("");e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"پایان ارائه · منابع علمی و گفتگو",titleFa:"پرسش و پاسخ",subtitleFa:"سپاس از توجه شما — آماده‌ی گفتگو و بررسی پرسش‌های علمی و روش‌شناختی",accent:"nature"})}

        <div class="slide-body" style="display:grid;grid-template-columns:560px 1fr;gap:30px;direction:rtl;align-items:stretch">
          <!-- Right (RTL start): Anticipated Q&A Discussion Clarifications (RTL, from Speaker Notes) -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:18px;direction:rtl;text-align:right">
            <div class="sci-panel s19-ref s19-qa interactive-el" style="padding:26px 30px;flex:1;display:flex;flex-direction:column;justify-content:center;--panel-accent:#42D9F5">
              <div style="font-size:14px;font-weight:700;color:#42D9F5;margin-bottom:12px">
                نکات کلیدی برای پاسخ به پرسش‌های متداول جلسه
              </div>

              <div style="margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,0.08)">
                <div style="font-size:19px;font-weight:700;color:#F4F6FA;margin-bottom:6px">
                  پرسش ۱: آیا مدل <bdi class="ltr-inline">310.ai</bdi> همان معماری <bdi class="ltr-inline">ProteinDT</bdi> است؟
                </div>
                <div style="font-size:16.5px;line-height:1.62;color:#CBD4E4">
                  خیر؛ در منابع منتشرشده‌ی ما چنین ارتباطی ذکر نشده است. پیوند این دو در ارائه صرفاً <strong style="color:#42D9F5">مفهومی</strong> است (ایده‌ی طراحی پروتئین بر اساس توصیف کارکرد/کد <bdi class="ltr-inline">EC</bdi>).
                </div>
              </div>

              <div>
                <div style="font-size:19px;font-weight:700;color:#F4F6FA;margin-bottom:6px">
                  پرسش ۲: کدام خروجی‌ها واقعاً در آزمایشگاه اثبات شده‌اند؟
                </div>
                <div style="font-size:16.5px;line-height:1.62;color:#CBD4E4">
                  آنزیم <bdi class="ltr-inline">LuxSit</bdi> و نسخه‌ی بهینه‌شده‌ی <bdi class="ltr-inline">LuxSit-i</bdi> در مقاله‌ی <bdi class="ltr-inline">Nature 2023</bdi> و چهار مثال منتخب مقاله‌ی مروری (<bdi class="ltr-inline">ProT-VAE, ProteinGAN, RFdiffusion/Chroma, ProGen/ZymCTRL</bdi>) دارای <strong style="color:#69D8A0">تأیید تجربی</strong> هستند؛ اما نتایج <bdi class="ltr-inline">ProteinDT</bdi> و رکوردهای <bdi class="ltr-inline">310.ai</bdi> (<bdi class="ltr-inline">M6G92</bdi>) <strong style="color:#E66BBE">صرفاً محاسباتی</strong> هستند.
                </div>
              </div>
            </div>

            <div class="sci-panel s19-ref s19-qa interactive-el" style="padding:18px 26px;display:flex;justify-content:space-between;align-items:center;--panel-accent:#69D8A0">
              <span style="font-size:18px;font-weight:700;color:#F4F6FA">سپاس از همراهی شما</span>
              <span class="ltr" style="font-size:14px;color:#69D8A0;font-weight:700">Thank You · Q&A</span>
            </div>
          </div>
          <!-- Left: Exact Academic References [1]–[4] -->
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:14px">
            ${i}
          </div>

        </div>

        ${pe("Primary references [1]–[4] + Supplementary 3D Crystallographic/Chemical References: RCSB PDB (1OUN, 1Q7B, 2HHB, 1HEW, 1EMA) & PubChem (CID 135439143)",19)}
      </div>
    `,this.entrance=le(e.querySelectorAll(".s19-ref"),{y:18,opacity:0,duration:.6,stagger:.08,ease:"power3.out"},t.reducedMotion),this.refHover=se({cards:e.querySelectorAll(".s19-citation"),entrance:this.entrance,dimSiblings:!0}),this.qaHover=se({cards:e.querySelectorAll(".s19-qa"),entrance:this.entrance,dimSiblings:!1})}resetHover(){this.refHover?.reset(),this.qaHover?.reset()}unmount(){this.refHover?.destroy(),this.refHover=null,this.qaHover?.destroy(),this.qaHover=null,this.entrance?.kill(),this.entrance=null}}const cn=Math.PI/180;function Ve(l,e,t,i,s,a){const o=Math.max(6,Math.ceil(Math.abs(a-s)/8)),c=[];for(let n=0;n<=o;n++){const r=(s+(a-s)*n/o)*cn;c.push([l+t*Math.cos(r),e+i*Math.sin(r)])}return c}const $e=.5,je=.72,Yt=.78,Xt=()=>Ve(.25,.25,.25,.25,0,360),At=(l,e,t=.27)=>[...Ve(l+e/2,t,e/2,.23,180,0),[l+e,0]],mi=(l,e,t,i)=>[[...Ve(l,e+i,t,i,25,270),...Ve(l,e-i,t,i,90,-155)]],dn={" ":{adv:.3,strokes:[]},a:{adv:.5,strokes:[[[.5,$e],[.5,0]],Xt()]},d:{adv:.5,strokes:[[[.5,Yt],[.5,0]],Xt()]},e:{adv:.5,strokes:[[[.01,.25],[.5,.25],...Ve(.255,.25,.245,.25,0,318).slice(1)]]},g:{adv:.5,strokes:[[[.5,$e],[.5,-.1],...Ve(.25,-.1,.25,.19,0,-165).slice(1)],Xt()]},h:{adv:.5,strokes:[[[0,Yt],[0,0]],[[0,.27],...At(0,.5)]]},i:{adv:0,strokes:[[[0,$e],[0,0]],[[0,.69],[0,.8]]]},l:{adv:0,strokes:[[[0,Yt],[0,0]]]},m:{adv:.84,strokes:[[[0,$e],[0,0]],[[0,.27],...At(0,.42)],[[.42,.27],...At(.42,.42)]]},n:{adv:.5,strokes:[[[0,$e],[0,0]],[[0,.27],...At(0,.5)]]},o:{adv:.5,strokes:[Ve(.25,.25,.25,.25,90,450)]},r:{adv:.27,strokes:[[[0,$e],[0,0]],[[0,.27],...Ve(.2,.28,.2,.22,180,70).slice(1)]]},s:{adv:.42,strokes:mi(.21,.25,.2,.125)},v:{adv:.5,strokes:[[[0,$e],[.25,0],[.5,$e]]]},z:{adv:.44,strokes:[[[0,$e],[.44,$e],[0,0],[.44,0]]]},A:{adv:.62,strokes:[[[0,0],[.31,je],[.62,0]],[[.12,.25],[.5,.25]]]},F:{adv:.46,strokes:[[[0,0],[0,je],[.46,je]],[[0,.4],[.38,.4]]]},G:{adv:.68,strokes:[[...Ve(.34,.36,.34,.36,40,350),[.38,.3]]]},H:{adv:.58,strokes:[[[0,je],[0,0]],[[0,.36],[.58,.36]],[[.58,je],[.58,0]]]},M:{adv:.72,strokes:[[[0,0],[0,je],[.36,.14],[.72,je],[.72,0]]]},N:{adv:.58,strokes:[[[0,0],[0,je],[.58,0],[.58,je]]]},S:{adv:.52,strokes:mi(.26,.36,.25,.18)}};function pn(l,e=.28){let t=0;const i=[];for(const s of l){const a=dn[s];if(!a)throw new Error(`StrokeFont: missing glyph "${s}"`);for(const o of a.strokes)i.push(o.map(([c,n])=>[c+t,n]));t+=a.adv+e}return{strokes:i,width:t-e}}const Pi=100,Hi=1080/(2*Math.tan(36/2*(Math.PI/180))*Pi),zi=6.2,Ut=zi,Bi=.6,vi=Bi/8,hn=.14,un=.22,gn=.06,bi=.012,ae=8,xi=1.8,wi=.35,Fi=3.8,Si=1.6,fn=2.4,Kt=(l,e)=>Math.hypot(l[0]-e[0],l[1]-e[1],l[2]-e[2]),Jt=l=>Math.max(0,Math.min(1,l));function yn(l,e){const t=[0];for(let c=1;c<l.length;c++)t.push(t[c-1]+Kt(l[c-1],l[c]));const i=t[t.length-1],s=Math.max(1,Math.round(i/e)),a=[];let o=0;for(let c=0;c<=s;c++){const n=i*c/s;for(;o<t.length-2&&t[o+1]<n;)o++;const r=t[o+1]-t[o]||1,d=(n-t[o])/r,u=l[o],y=l[o+1];a.push([u[0]+(y[0]-u[0])*d,u[1]+(y[1]-u[1])*d,u[2]+(y[2]-u[2])*d])}return a}function mn(l,e){let t=l;for(let i=0;i<e;i++){const s=t.map(a=>[...a]);for(let a=1;a<t.length-1;a++)for(let o=0;o<3;o++)s[a][o]=.25*t[a-1][o]+.5*t[a][o]+.25*t[a+1][o];t=s}return t}function dt(l,e,t,i=1){const s=l.length/i;let a=Float32Array.from(l);for(let o=0;o<t;o++){const c=new Float32Array(l.length);for(let n=0;n<s;n++){const r=Math.max(0,n-e),d=Math.min(s-1,n+e);for(let u=0;u<i;u++){let y=0;for(let F=r;F<=d;F++)y+=a[F*i+u];c[n*i+u]=y/(d-r+1)}}a=c}return a}function Pt(l){const e=Math.hypot(l[0],l[1],l[2])||1;return[l[0]/e,l[1]/e,l[2]/e]}function vn(l,e,t){const i=pn(l),s=e-i.width*Ut/2,a=i.strokes.map(p=>mn(yn(p.map(([m,v])=>[s+m*Ut,t+v*Ut,0]),vi),2)),o=[],c=[],n=[];a.forEach((p,m)=>{if(m>0){const C=o[o.length-1],L=p[0],R=Kt(C,L);if(R>.12){const T=Math.max(2,Math.ceil(R/vi)),E=Math.min(.9,.12*R+.08),P=R>2?.07*R:0;for(let D=1;D<T;D++){const B=D/T,A=Math.sin(Math.PI*B);o.push([C[0]+(L[0]-C[0])*B,C[1]+(L[1]-C[1])*B-P*A,E*A]),c.push(1),n.push(0)}}}let v=0;p.forEach((C,L)=>{L>0&&(v+=Kt(p[L-1],C)),o.push(C),c.push(0),n.push(2*Math.PI*v/Bi)})});const r=o.length,d=new Float32Array(r),u=new Float32Array(r),y=new Float32Array(r);for(let p=0;p<r;p++)d[p]=c[p]?0:hn,u[p]=c[p]?bi:un,y[p]=c[p]?bi:gn;const F=dt(d,1,2),M=dt(u,1,2),h=dt(y,1,2),S=new Float32Array(r*3),w=new Float32Array(r*3);for(let p=0;p<r;p++){const m=o[Math.max(0,p-1)],v=o[Math.min(r-1,p+1)],C=Pt([v[0]-m[0],v[1]-m[1],v[2]-m[2]]);let L=Pt([C[1],-C[0],0]);Math.hypot(C[1],C[0])<1e-4&&(L=[1,0,0]);const R=Math.cos(n[p]),T=Math.sin(n[p]),E=T*L[0],P=T*L[1],D=R;S[p*3]=o[p][0]+F[p]*E,S[p*3+1]=o[p][1]+F[p]*P,S[p*3+2]=o[p][2]+F[p]*D,w[p*3]=-E,w[p*3+1]=-P,w[p*3+2]=-D}const z=3;for(let p=0;p<z&&p<r;p++){const m=Math.sqrt((p+1)/(z+1));for(const v of[p,r-1-p])M[v]*=m,h[v]*=m}return{M:r,tp:S,tn:w,thw:M,tht:h}}function bn(l,e,t,i){const s=l.caTrace.filter(p=>p.chainIdx===e),a=s.length,o=new Float32Array(t*3),c=new Uint8Array(t);for(let p=0;p<t;p++){const m=p/(t-1)*(a-1),v=Math.min(a-2,Math.floor(m)),C=m-v,L=s[Math.max(v-1,0)].xyz,R=s[v].xyz,T=s[v+1].xyz,E=s[Math.min(v+2,a-1)].xyz;for(let D=0;D<3;D++)o[p*3+D]=.5*(2*R[D]+(-L[D]+T[D])*C+(2*L[D]-5*R[D]+4*T[D]-E[D])*C*C+(-L[D]+3*R[D]-3*T[D]+E[D])*C*C*C);const P=s[Math.round(m)].ss;c[p]=P==="H"?1:P==="E"?2:0}const n=t/a,r=Math.max(2,Math.round(3*n)),d=[0,0,0];for(let p=0;p<t;p++)for(let m=0;m<3;m++)d[m]+=o[p*3+m]/t;const u=new Float32Array(t*3);let y=[0,1,0];for(let p=0;p<t;p++){const m=Math.max(0,p-r),v=Math.min(t-1,p+r),C=[0,0,0];for(let A=m;A<=v;A++)for(let N=0;N<3;N++)C[N]+=o[A*3+N]/(v-m+1);const L=Math.max(0,p-1),R=Math.min(t-1,p+1),T=Pt([o[R*3]-o[L*3],o[R*3+1]-o[L*3+1],o[R*3+2]-o[L*3+2]]);let E=[C[0]-o[p*3],C[1]-o[p*3+1],C[2]-o[p*3+2]];const P=E[0]*T[0]+E[1]*T[1]+E[2]*T[2];E=[E[0]-T[0]*P,E[1]-T[1]*P,E[2]-T[2]*P];let D=Math.hypot(E[0],E[1],E[2]);D<.45&&(E=y,D=1);let B=[E[0]/D,E[1]/D,E[2]/D];B[0]*y[0]+B[1]*y[1]+B[2]*y[2]<0&&(B=[-B[0],-B[1],-B[2]]),y=B,u.set(B,p*3)}const F=dt(u,Math.round(n),2,3);for(let p=0;p<t;p++){const m=Pt([F[p*3],F[p*3+1],F[p*3+2]]);F.set(m,p*3)}let M=1;for(let p=0;p<t;p++)M=Math.max(M,Math.hypot(o[p*3]-d[0],o[p*3+1]-d[1],o[p*3+2]-d[2]));const h=i/M,S=new Float32Array(t*3);for(let p=0;p<t;p++)for(let m=0;m<3;m++)S[p*3+m]=(o[p*3+m]-d[m])*h;const w=new Float32Array(t),z=new Float32Array(t);for(let p=0;p<t;p++)w[p]=c[p]===1?.5:c[p]===2?.46:.13,z[p]=c[p]===0?.13:.12;return{fp:S,fn:F,fhw:dt(w,Math.round(n*.7),2),fht:dt(z,Math.round(n*.7),2)}}const Mt=["#63A0FF","#A68AFF","#E08CF2","#FF8FD2"].map(l=>new K(l));function xn(l,e){const t=Jt(l)*(Mt.length-1),i=Math.min(Mt.length-2,Math.floor(t));return e.copy(Mt[i]).lerp(Mt[i+1],t-i)}function wn(l,e){const t=new me,i=new ot({vertexColors:!0,roughness:.3,metalness:.04,clearcoat:.85,clearcoatRoughness:.16,emissive:new K(16777215),emissiveIntensity:.5,side:pt});i.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive * vColor.rgb;")};const s=Array.from({length:ae},(h,S)=>Math.cos(2*Math.PI*S/ae)),a=Array.from({length:ae},(h,S)=>Math.sin(2*Math.PI*S/ae)),o=new K,c=l.map((h,S)=>{const w=vn(h.name,h.textCenterX,h.textBaselineY),z=bn(h.protein,h.chainIdx,w.M,h.foldRadius??7.8),p=w.M,m=new Float32Array(p*3),v=[S*1.7,S*2.3+1,S*.9+2];for(let B=0;B<p;B++){const A=B/(p-1);m[B*3]=Math.sin(A*17+v[0])+.5*Math.sin(A*41+v[1]),m[B*3+1]=Math.sin(A*13+v[1])+.5*Math.cos(A*37+v[2]),m[B*3+2]=Math.cos(A*11+v[2])+.5*Math.sin(A*29+v[0])}const C=new Se,L=new Float32Array(p*ae*3),R=new Float32Array(p*ae*3),T=new Float32Array(p*ae*3);for(let B=0;B<p;B++){xn(B/(p-1),o);for(let A=0;A<ae;A++){const N=(B*ae+A)*3;T[N]=o.r,T[N+1]=o.g,T[N+2]=o.b}}const E=new Uint32Array((p-1)*ae*6);let P=0;for(let B=0;B<p-1;B++)for(let A=0;A<ae;A++){const N=B*ae+A,q=B*ae+(A+1)%ae,G=(B+1)*ae+A,Z=(B+1)*ae+(A+1)%ae;E.set([N,G,q,q,G,Z],P),P+=6}C.setAttribute("position",new re(L,3).setUsage(ri)),C.setAttribute("normal",new re(R,3).setUsage(ri)),C.setAttribute("color",new re(T,3)),C.setIndex(new re(E,1));const D=new ce(C,i);return D.frustumCulled=!1,t.add(D),{M:p,center:[h.foldCenter[0],h.foldCenter[1],0],tp:w.tp,tn:w.tn,thw:w.thw,tht:w.tht,...z,noise:m,axis:new Float32Array(p*3),nArr:new Float32Array(p*3),hwArr:new Float32Array(p),htArr:new Float32Array(p),meshPos:L,meshNor:R,mesh:D,start:xi+S*wi,spin:.9*S}}),n=xi+(l.length-1)*wi+Fi+.2;let r=e.reducedMotion?n+1:0,d=0;const u=new Float32Array(3);function y(h,S){const{M:w}=h,z=1-Math.pow(1-Jt(S/1.1),3),p=.5*S+h.spin,m=Math.cos(p),v=Math.sin(p),C=.35,L=Math.cos(C),R=Math.sin(C),T=h.axis,E=h.meshNor,P=h.meshPos,D=h.hwArr,B=h.htArr,A=h.nArr,N=S-h.start;for(let j=0;j<w;j++){const ze=j/(w-1),ve=Jt((N-ze*(Fi-Si))/Si),W=ve*ve*(3-2*ve),Y=j*3,ge=h.fp[Y],Ee=h.fp[Y+1],be=h.fp[Y+2],he=m*ge+v*be,te=-v*ge+m*be,ne=he*z+h.center[0],qe=(L*Ee-R*te)*z+h.center[1],xe=(R*Ee+L*te)*z,Ye=h.fn[Y],Je=h.fn[Y+1],Ae=h.fn[Y+2],oe=m*Ye+v*Ae,Ge=-v*Ye+m*Ae,et=oe,Me=L*Je-R*Ge,rt=R*Je+L*Ge,we=Math.sin(Math.PI*W)*fn;T[Y]=ne*(1-W)+h.tp[Y]*W+h.noise[Y]*we,T[Y+1]=qe*(1-W)+h.tp[Y+1]*W+h.noise[Y+1]*we,T[Y+2]=xe*(1-W)+h.tp[Y+2]*W+h.noise[Y+2]*we,A[Y]=et*(1-W)+h.tn[Y]*W,A[Y+1]=Me*(1-W)+h.tn[Y+1]*W,A[Y+2]=rt*(1-W)+h.tn[Y+2]*W;const De=Math.min(1,z*1.15);D[j]=h.fhw[j]*De*(1-W)+h.thw[j]*W,B[j]=h.fht[j]*De*(1-W)+h.tht[j]*W}let q=0,G=1,Z=0;for(let j=0;j<w;j++){const ze=Math.max(0,j-1)*3,ve=Math.min(w-1,j+1)*3;let W=T[ve]-T[ze],Y=T[ve+1]-T[ze+1],ge=T[ve+2]-T[ze+2];const Ee=Math.hypot(W,Y,ge)||1;W/=Ee,Y/=Ee,ge/=Ee;const be=j*3;let he=A[be],te=A[be+1],ne=A[be+2];const qe=he*W+te*Y+ne*ge;he-=W*qe,te-=Y*qe,ne-=ge*qe;let xe=Math.hypot(he,te,ne);if(xe<.001){he=q,te=G,ne=Z;const Be=he*W+te*Y+ne*ge;he-=W*Be,te-=Y*Be,ne-=ge*Be,xe=Math.hypot(he,te,ne)||1}he/=xe,te/=xe,ne/=xe,q=he,G=te,Z=ne;const Ye=Y*ne-ge*te,Je=ge*he-W*ne,Ae=W*te-Y*he,oe=D[j],Ge=B[j],et=Math.max(oe,.02),Me=Math.max(Ge,.02),rt=T[be],we=T[be+1],De=T[be+2];for(let Be=0;Be<ae;Be++){const Xe=s[Be],Ue=a[Be],ye=(j*ae+Be)*3;u[0]=he*(Xe/Me)+Ye*(Ue/et),u[1]=te*(Xe/Me)+Je*(Ue/et),u[2]=ne*(Xe/Me)+Ae*(Ue/et);const We=Math.hypot(u[0],u[1],u[2])||1;E[ye]=u[0]/We,E[ye+1]=u[1]/We,E[ye+2]=u[2]/We,P[ye]=rt+he*Ge*Xe+Ye*oe*Ue,P[ye+1]=we+te*Ge*Xe+Je*oe*Ue,P[ye+2]=De+ne*Ge*Xe+Ae*oe*Ue}}const V=h.mesh.geometry;V.getAttribute("position").needsUpdate=!0,V.getAttribute("normal").needsUpdate=!0}function F(h){t.rotation.y=.05*Math.sin(h*.42),t.rotation.x=.025*Math.sin(h*.31+1)}const M=h=>c.forEach(S=>y(S,h));return M(r),{group:t,totalSeconds:n,update(h){r+=h,r<=n+.5?(d=0,M(r)):d<2&&(d++,M(n+100)),e.reducedMotion||F(r)},replay(){r=0,d=0},dispose(){c.forEach(h=>h.mesh.geometry.dispose()),i.dispose()}}}const Ci=[{name:"Saman Shirdel",pdb:"1ema",chainIdx:0},{name:"Sasan Shirdel",pdb:"1hew",chainIdx:0},{name:"Mahdi Navid",pdb:"1oun",chainIdx:0},{name:"Sina Gozali",pdb:"1q7b",chainIdx:0},{name:"Amirreza Haghi",pdb:"2hhb",chainIdx:0},{name:"Farnaz Gholamzadeh",pdb:"2hhb",chainIdx:1}],Ei=l=>(l-960)/Hi,Ai=l=>(540-l)/Hi,Fn=l=>582+(l-2.5)*125,Sn=[480,1440],Cn=[305,585,865];class En{index=20;totalSteps=1;currentStep=0;handle=null;alive=!1;async mount(e,t){this.currentStep=0,this.alive=!0,t.videoLayer.hideVideo(),t.setAmbientGlow({x:"30%",y:"40%",color:"rgba(140, 92, 245, 0.13)",x2:"72%",y2:"72%",color2:"rgba(240, 108, 192, 0.09)"}),e.innerHTML=`
      <div class="slide-root">
        ${de({sectionFa:"پایان ارائه · تیم پروژه",titleFa:"اعضای تیم",accent:"310"})}

        <div class="slide-body">
          <div class="interactive-el" style="position:absolute;left:0;bottom:0;direction:ltr">
            <button id="s20-replay" class="mol-btn" style="border:1px solid rgba(230,107,190,0.45);background:rgba(10,15,26,0.86);color:#F085CE;padding:7px 14px;display:inline-flex;align-items:center;gap:6px">
              <span style="width:14px;height:14px;display:inline-flex">${fe.replay}</span>
              <span>Replay Unfolding</span>
            </button>
          </div>
        </div>

        ${pe("Each name is one polypeptide chain unfolding from a real PDB fold (1EMA · 1HEW · 1OUN · 1Q7B · 2HHB α/β) · Illustrative animation",20)}
      </div>
    `;const i=await Promise.all(Ci.map(o=>Ce.loadProtein(o.pdb)));if(!this.alive)return;const s=Ci.map((o,c)=>({name:o.name,protein:i[c],chainIdx:o.chainIdx,foldCenter:[Ei(Sn[c%2]),Ai(Cn[Math.floor(c/2)])],textCenterX:Ei(960),textBaselineY:Ai(Fn(c))-.3*zi})),a=wn(s,{reducedMotion:t.reducedMotion});this.handle=a,t.sceneManager.setCameraImmediate({distance:Pi,target:[0,0,0],rotX:0,rotY:0,screenCenterX:960,screenCenterY:540,autoRotateSpeed:0}),t.sceneManager.mountObject(a.group,()=>a.dispose(),o=>a.update(o),"Team names written by unfolding proteins"),e.querySelector("#s20-replay")?.addEventListener("click",o=>{o.stopPropagation(),a.replay()})}unmount(){this.alive=!1,this.handle=null}}function An(){return[new hs,new Fs,new Es,new Ms,new Ts,new ks,new Ps,new Hs,new zs,new Xs,new Qs,new Js,new en,new tn,new sn,new nn,new on,new rn,new ln,new En]}class Mn{stageWidth=1920;stageHeight=1080;webglAvailable;container;labelsContainer;renderer=null;scene;camera;contentPivot;lights=[];emphasis=0;emphasisTarget=0;basePixelRatio=1;hiResActive=!1;activeDisposers=[];customUpdaters=[];pins=[];rafId=0;clock=new Qi;reducedMotion=!1;orbitState={distance:46,targetX:0,targetY:0,targetZ:0,rotX:.16,rotY:.35,screenCenterX:960,screenCenterY:540,autoRotateSpeed:.16};isDragging=!1;lastPointerX=0;lastPointerY=0;interactiveEnabled=!1;fallbackBanner=null;clipRect=null;constructor(e,t,i=!1){this.container=e,this.labelsContainer=t,this.reducedMotion=i,this.scene=new Ki,this.camera=new Ji(36,this.stageWidth/this.stageHeight,.5,400),this.contentPivot=new me,this.scene.add(this.contentPivot),this.setupLighting();let s=!1;try{this.renderer=new es({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.basePixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setSize(this.stageWidth,this.stageHeight,!1),this.renderer.toneMapping=ts,this.renderer.toneMappingExposure=1.12,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.container.appendChild(this.renderer.domElement),s=!0}catch{s=!1,this.renderer=null}this.webglAvailable=s,s&&(this.bindInteraction(),this.startLoop())}setupLighting(){const e=new is(14477567,725024,1.05);this.scene.add(e);const t=new Vt(16777215,2.2);t.position.set(28,36,42),this.scene.add(t);const i=new Vt(4381173,1.45);i.position.set(-38,18,-28),this.scene.add(i);const s=new Vt(15100862,.85);s.position.set(24,-26,-20),this.scene.add(s),this.lights=[e,t,i,s].map(a=>({light:a,base:a.intensity}))}setEmphasis(e){this.emphasisTarget=e?1:0}applyEmphasis(e){if(!this.renderer)return;const t=this.emphasisTarget-this.emphasis;Math.abs(t)>.002?this.emphasis+=t*Math.min(1,e*(this.reducedMotion?60:7)):this.emphasis=this.emphasisTarget;const i=this.emphasis;this.renderer.toneMappingExposure=1.12+.6*i;for(const{light:a,base:o}of this.lights)a.intensity=o*(1+.4*i);const s=Math.min(this.basePixelRatio*1.5,2.5);s>this.basePixelRatio+.01&&(!this.hiResActive&&this.emphasisTarget>0&&i>.25?(this.renderer.setPixelRatio(s),this.hiResActive=!0):this.hiResActive&&this.emphasisTarget===0&&i<.05&&(this.renderer.setPixelRatio(this.basePixelRatio),this.hiResActive=!1))}bindInteraction(){const e=this.container;e.addEventListener("pointerdown",i=>{if(this.interactiveEnabled){this.isDragging=!0,this.lastPointerX=i.clientX,this.lastPointerY=i.clientY;try{e.setPointerCapture(i.pointerId)}catch{}}}),e.addEventListener("pointermove",i=>{if(!this.isDragging||!this.interactiveEnabled)return;const s=i.clientX-this.lastPointerX,a=i.clientY-this.lastPointerY;this.lastPointerX=i.clientX,this.lastPointerY=i.clientY,this.orbitState.rotY+=s*.0065,this.orbitState.rotX=Math.max(-1.25,Math.min(1.25,this.orbitState.rotX+a*.0055))});const t=()=>{this.isDragging=!1};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",i=>{if(!this.interactiveEnabled)return;const s=e.getBoundingClientRect(),a=(i.clientX-s.left)/Math.max(1,s.width)*this.stageWidth;if(Math.abs(a-this.orbitState.screenCenterX)<460){i.preventDefault(),i.stopPropagation();const c=Math.sign(i.deltaY)*2.8;this.orbitState.distance=Math.max(11,Math.min(430,this.orbitState.distance+c))}},{passive:!1})}setInteractive(e){this.interactiveEnabled=e,this.container.classList.toggle("interactive",e)}fitDistance(e,t){const s=1080/(2*Math.tan(18*(Math.PI/180)));return Math.max(14,2*e*s/Math.max(60,t))}setClipRect(e){this.clipRect=e}setClipFromElement(e){if(!e){this.clipRect=null;return}const t=document.getElementById("keynote-viewport"),i=t?t.getBoundingClientRect().width/this.stageWidth:1,s=e.getBoundingClientRect();if(s.width<2||s.height<2){this.clipRect=null;return}this.clipRect={x:Math.max(0,s.left/i),y:Math.max(0,s.top/i),w:s.width/i,h:s.height/i}}clearStage(){He.killTweensOf(this.orbitState),this.clipRect=null,this.emphasisTarget=0;for(const e of this.activeDisposers)e();for(this.activeDisposers=[],this.customUpdaters=[];this.contentPivot.children.length>0;)this.contentPivot.remove(this.contentPivot.children[0]);this.clearPins(),this.setInteractive(!1),this.fallbackBanner&&(this.fallbackBanner.remove(),this.fallbackBanner=null)}mountObject(e,t,i,s){this.contentPivot.add(e),this.activeDisposers.push(t),i&&this.customUpdaters.push(i),!this.webglAvailable&&s&&this.renderFallbackGraphic(s)}renderFallbackGraphic(e){this.fallbackBanner&&this.fallbackBanner.remove();const t=document.createElement("div");t.style.position="absolute",t.style.left=`${Math.max(60,this.orbitState.screenCenterX-240)}px`,t.style.top=`${Math.max(120,this.orbitState.screenCenterY-160)}px`,t.style.width="480px",t.style.padding="28px",t.style.borderRadius="12px",t.style.border="1px solid rgba(66,217,245,0.35)",t.style.background="rgba(10,15,26,0.88)",t.style.direction="ltr",t.innerHTML=`
      <div style="font-family:var(--font-en);font-size:13px;color:#42D9F5;font-weight:700;margin-bottom:8px;">
        3D MOLECULAR STRUCTURE · STATIC FALLBACK
      </div>
      <div style="font-family:var(--font-en);font-size:16px;color:#F4F6FA;font-weight:600;margin-bottom:6px;">
        ${e}
      </div>
      <div style="font-family:var(--font-en);font-size:13px;color:#A6B0C0;">
        Hardware WebGL context is unavailable in this browser environment.
      </div>
    `,this.labelsContainer.appendChild(t),this.fallbackBanner=t}setCameraImmediate(e){He.killTweensOf(this.orbitState),e.distance!==void 0&&(this.orbitState.distance=e.distance),e.target?(this.orbitState.targetX=e.target[0],this.orbitState.targetY=e.target[1],this.orbitState.targetZ=e.target[2]):(this.orbitState.targetX=0,this.orbitState.targetY=0,this.orbitState.targetZ=0),e.rotX!==void 0&&(this.orbitState.rotX=e.rotX),e.rotY!==void 0&&(this.orbitState.rotY=e.rotY),this.orbitState.screenCenterX=e.screenCenterX??960,this.orbitState.screenCenterY=e.screenCenterY??540,this.orbitState.autoRotateSpeed=e.autoRotateSpeed??.16}flyTo(e){const t=this.reducedMotion?.01:e.duration??1.05;He.to(this.orbitState,{distance:e.distance??this.orbitState.distance,targetX:e.target?e.target[0]:this.orbitState.targetX,targetY:e.target?e.target[1]:this.orbitState.targetY,targetZ:e.target?e.target[2]:this.orbitState.targetZ,rotX:e.rotX??this.orbitState.rotX,rotY:e.rotY??this.orbitState.rotY,screenCenterX:e.screenCenterX??this.orbitState.screenCenterX,screenCenterY:e.screenCenterY??this.orbitState.screenCenterY,autoRotateSpeed:e.autoRotateSpeed??this.orbitState.autoRotateSpeed,duration:t,ease:"power3.inOut",overwrite:!0})}addPin(e){const t=document.createElement("div");t.className="mol-pin",t.dataset.pinId=e.id;const i=e.accent??"#42D9F5";t.innerHTML=`
      <div class="mol-pin-card" style="border-color:${i}80">
        <div class="mol-pin-title">${e.title}</div>
        ${e.subtitle?`<div class="mol-pin-sub">${e.subtitle}</div>`:""}
      </div>
      <div class="mol-pin-stem" style="background:linear-gradient(180deg, ${i}, transparent)"></div>
      <div class="mol-pin-dot" style="background:${i};box-shadow:0 0 10px ${i}"></div>
    `,this.labelsContainer.appendChild(t),this.pins.push({id:e.id,localPos:new _(e.xyz[0],e.xyz[1],e.xyz[2]),title:e.title,subtitle:e.subtitle,accent:i,el:t})}clearPins(){for(const e of this.pins)e.el.remove();this.pins=[]}startLoop(){const e=new _,t=new _,i=()=>{if(this.rafId=requestAnimationFrame(i),!this.renderer)return;const s=Math.min(this.clock.getDelta(),.05),a=this.clock.elapsedTime;!this.isDragging&&!this.reducedMotion&&this.orbitState.autoRotateSpeed!==0&&(this.orbitState.rotY+=s*this.orbitState.autoRotateSpeed),this.applyEmphasis(s),this.contentPivot.rotation.set(this.orbitState.rotX,this.orbitState.rotY,0),this.contentPivot.updateMatrixWorld(!0),t.set(this.orbitState.targetX,this.orbitState.targetY,this.orbitState.targetZ).applyMatrix4(this.contentPivot.matrixWorld);const o=960-this.orbitState.screenCenterX,c=540-this.orbitState.screenCenterY;this.camera.setViewOffset(this.stageWidth,this.stageHeight,o,c,this.stageWidth,this.stageHeight),this.camera.position.set(t.x,t.y,t.z+this.orbitState.distance),this.camera.lookAt(t.x,t.y,t.z);for(const n of this.customUpdaters)n(s,a);this.contentPivot.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const n of this.pins){if(e.copy(n.localPos).applyMatrix4(this.contentPivot.matrixWorld),e.project(this.camera),e.z>1||e.z<-1){n.el.style.opacity="0";continue}const r=(e.x*.5+.5)*this.stageWidth,d=(-e.y*.5+.5)*this.stageHeight;n.el.style.left=`${r.toFixed(1)}px`,n.el.style.top=`${d.toFixed(1)}px`,n.el.style.opacity="1"}this.contentPivot.children.length>0?(this.clipRect?(this.renderer.setScissorTest(!0),this.renderer.setScissor(this.clipRect.x,this.stageHeight-this.clipRect.y-this.clipRect.h,this.clipRect.w,this.clipRect.h)):this.renderer.setScissorTest(!1),this.renderer.render(this.scene,this.camera)):(this.renderer.setScissorTest(!1),this.renderer.clear())};this.rafId=requestAnimationFrame(i)}destroy(){cancelAnimationFrame(this.rafId),this.clearStage(),this.renderer?.dispose()}}class Dn{wrapper;video;constructor(e){this.wrapper=e,this.video=document.createElement("video"),this.video.muted=!0,this.video.playsInline=!0,this.video.preload="auto",this.wrapper.appendChild(this.video)}playVideo(e,t){return this.video.pause(),this.video.getAttribute("src")!==e&&(this.video.setAttribute("src",e),this.video.load()),this.video.loop=t.loop,t.poster?this.video.poster=t.poster:this.video.removeAttribute("poster"),this.video.style.objectPosition=t.objectPosition??"center center",this.wrapper.style.opacity=String(t.opacity??1),this.wrapper.classList.add("visible"),this.video.currentTime=0,this.video.play().catch(()=>{}),this.video}hideVideo(){this.video.pause(),this.wrapper.classList.remove("visible"),this.wrapper.style.opacity="0"}getVideoElement(){return this.video}}const Tn=new Set([3,11,13,16]),kn={1:{from:"#s01-left-caption"},2:{panel:".mol-viewport-panel",from:".s02-card"},3:{from:".s03-left-card, .s03-right-card"},8:{panel:".mol-viewport-panel"},9:{panel:".mol-viewport-panel"},10:{panel:".s10-viz"},12:{},14:{},15:{panel:".mol-viewport-panel"},18:{panel:".mol-viewport-panel",from:".s18-takeaway"}},Dt="⁠",Ln=28;function Pn(l){l.querySelectorAll("bdi.ltr-inline").forEach(e=>{(e.textContent??"").length<=Ln&&(e.style.whiteSpace="nowrap")}),l.querySelectorAll("bdi.ltr-inline, .ltr").forEach(e=>{const t=e.previousSibling,i=e.nextSibling;if(t?.nodeType===Node.TEXT_NODE){const s=t.textContent??"";/[(\[«“"]\s*$/.test(s)&&!s.endsWith(Dt)&&(t.textContent=s.replace(/\s+$/,"")+Dt)}if(i?.nodeType===Node.TEXT_NODE){const s=i.textContent??"";/^[)\]»”".,:;،؛؟!]/.test(s)&&!s.startsWith(Dt)&&(i.textContent=Dt+s)}})}class Hn{host;viewportEl;ambientBackdropEl;threeLayerEl;labelsLayerEl;videoLayerEl;slidesStageEl;progressFillEl;hudPillEl;hudCounterEl;hudStepsEl;hudHintEl;overviewModalEl;notesDrawerEl;sceneManager;videoLayer;slides;currentIndex=0;navToken=0;activeHostDiv=null;isOverviewOpen=!1;isNotesOpen=!1;isHudHidden=!1;reducedMotion=!1;lastWheelTime=0;focus;overviewIdx=0;autoFocusTimer=null;litPanel=null;constructor(e){this.host=e,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.slides=An(),this.focus=new as(s=>this.onFocusChange(s)),new URLSearchParams(window.location.search).get("hud")==="0"&&(this.isHudHidden=!0),this.buildDom(),this.sceneManager=new Mn(this.threeLayerEl,this.labelsLayerEl,this.reducedMotion),this.videoLayer=new Dn(this.videoLayerEl),this.bindResize(),this.bindNavigation();const i=this.parseInitialSlideFromUrl();window.__keynote=this,this.goToSlide(i,!0)}parseInitialSlideFromUrl(){const e=window.location.hash.match(/(\d+)/);if(e){const s=Number(e[1]);if(s>=1&&s<=this.slides.length)return s-1}const t=new URLSearchParams(window.location.search),i=Number(t.get("slide"));return!Number.isNaN(i)&&i>=1&&i<=this.slides.length?i-1:0}buildDom(){this.host.innerHTML=`
      <div class="presentation-viewport" id="keynote-viewport">
        <div class="ambient-backdrop" id="ambient-backdrop"></div>
        <div class="ambient-grid"></div>
        <svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
          <filter id="visual-sharpen" color-interpolation-filters="sRGB">
            <feConvolveMatrix order="3" preserveAlpha="true" kernelMatrix="0 -0.7 0 -0.7 3.8 -0.7 0 -0.7 0" />
          </filter>
        </svg>
        <div class="video-stage-layer" id="video-stage-layer"></div>
        <div class="three-stage-layer" id="three-stage-layer"></div>
        <div class="three-labels-layer" id="three-labels-layer"></div>
        <div class="slides-stage-layer" id="slides-stage-layer"></div>

        <!-- Speaker Notes Drawer -->
        <aside class="notes-drawer" id="notes-drawer"></aside>

        <!-- 20-Slide Overview Grid Modal (Escape) -->
        <div class="overview-modal" id="overview-modal">
          <div class="overview-header">
            <div>
              <h2 style="margin:0;font-size:32px;font-weight:700;color:#F4F6FA">نمای کلی ۲۰ اسلاید ارائه</h2>
              <p style="margin:6px 0 0 0;font-size:16px;color:#A6B0C0">برای پرش مستقیم روی هر اسلاید کلیک کنید یا کلید <bdi class="ltr-inline">Escape</bdi> را بزنید</p>
            </div>
            <button id="overview-close-btn" class="mol-btn" style="padding:8px 18px;font-size:14px;border:1px solid rgba(255,255,255,0.2);color:#F4F6FA">
              Close (Esc)
            </button>
          </div>
          <div class="overview-grid" id="overview-grid"></div>
        </div>

        <!-- Subtle Presenter Control Pill -->
        <div class="hud-controls-pill ${this.isHudHidden?"hidden":""}" id="hud-pill">
          <button class="hud-btn" id="hud-prev" title="Previous (ArrowLeft)">
            <span style="width:15px;height:15px;display:inline-flex">${fe.chevronLeft}</span>
          </button>
          <span class="hud-counter" id="hud-counter">01 / 20</span>
          <div class="hud-step-dots" id="hud-steps"></div>
          <span class="hud-hint" id="hud-hint"></span>
          <button class="hud-btn" id="hud-next" title="Next (ArrowRight / Space)">
            <span style="width:15px;height:15px;display:inline-flex">${fe.chevronRight}</span>
          </button>
          <span class="mol-sep"></span>
          <button class="hud-btn" id="hud-overview" title="Slide Overview (Esc)">
            <span style="width:15px;height:15px;display:inline-flex">${fe.grid}</span>
            <span>Overview</span>
          </button>
          <button class="hud-btn" id="hud-notes" title="Speaker Notes (N)">
            <span style="width:15px;height:15px;display:inline-flex">${fe.notes}</span>
            <span>Notes</span>
          </button>
          <button class="hud-btn" id="hud-fs" title="Fullscreen (F)">
            <span style="width:15px;height:15px;display:inline-flex">${fe.fullscreen}</span>
          </button>
        </div>

        <!-- Bottom Progress Hairline -->
        <div class="hud-progress-track" id="hud-progress-track" title="Click to jump along deck">
          <div class="hud-progress-fill" id="hud-progress-fill"></div>
        </div>
      </div>
    `,this.viewportEl=this.host.querySelector("#keynote-viewport"),this.ambientBackdropEl=this.host.querySelector("#ambient-backdrop"),this.videoLayerEl=this.host.querySelector("#video-stage-layer"),this.threeLayerEl=this.host.querySelector("#three-stage-layer"),this.labelsLayerEl=this.host.querySelector("#three-labels-layer"),this.slidesStageEl=this.host.querySelector("#slides-stage-layer"),this.progressFillEl=this.host.querySelector("#hud-progress-fill"),this.hudPillEl=this.host.querySelector("#hud-pill"),this.hudCounterEl=this.host.querySelector("#hud-counter"),this.hudStepsEl=this.host.querySelector("#hud-steps"),this.hudHintEl=this.host.querySelector("#hud-hint"),this.overviewModalEl=this.host.querySelector("#overview-modal"),this.notesDrawerEl=this.host.querySelector("#notes-drawer"),this.renderOverviewCards()}renderOverviewCards(){const e=this.host.querySelector("#overview-grid"),t={nature:"#42D9F5",proteindt:"#7778FF",review:"#9299A6",310:"#E66BBE",positive:"#69D8A0",amber:"#F5B841"};e.innerHTML=yt.map((i,s)=>{const a=t[i.accent]??"#42D9F5";return`
        <div class="overview-card" data-slide-idx="${s}">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;direction:ltr">
              <span style="font-family:var(--font-en);font-size:13px;font-weight:800;color:${a}">
                SLIDE ${String(i.index).padStart(2,"0")}
              </span>
              <span style="font-family:var(--font-fa);font-size:12px;color:#8D99AE;direction:rtl">
                ${i.sectionFa}
              </span>
            </div>
            <div style="font-size:19px;font-weight:700;color:#F4F6FA;line-height:1.35">
              ${i.titleFa}
            </div>
          </div>
          <div class="ltr" style="font-size:12px;color:#7F8BA3;margin-top:12px;text-align:left">
            ${i.titleEn}
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".overview-card").forEach(i=>{i.addEventListener("click",s=>{s.stopPropagation();const a=Number(i.dataset.slideIdx??"0");this.toggleOverview(!1),this.goToSlide(a)})})}bindResize(){const e=()=>{const t=window.innerWidth,i=window.innerHeight,s=Math.min(t/1920,i/1080);this.viewportEl.style.transform=`scale(${s.toFixed(5)})`};e(),window.addEventListener("resize",e)}bindNavigation(){window.addEventListener("keydown",t=>{if(!(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement)){if(t.key==="Escape"){t.preventDefault(),this.isNotesOpen?this.toggleNotes(!1):this.toggleOverview();return}if(this.isOverviewOpen){this.handleOverviewKey(t);return}t.key==="ArrowRight"||t.key==="ArrowDown"||t.key===" "?(t.preventDefault(),this.next()):t.key==="ArrowLeft"||t.key==="ArrowUp"?(t.preventDefault(),this.prev()):t.key==="Enter"?(t.preventDefault(),this.focus.activate()):t.key==="PageDown"?(t.preventDefault(),this.currentIndex<this.slides.length-1&&this.goToSlide(this.currentIndex+1)):t.key==="PageUp"?(t.preventDefault(),this.currentIndex>0&&this.goToSlide(this.currentIndex-1)):t.key==="Home"?(t.preventDefault(),this.goToSlide(0)):t.key==="End"?(t.preventDefault(),this.goToSlide(this.slides.length-1)):t.key==="f"||t.key==="F"?(t.preventDefault(),this.toggleFullscreen()):t.key==="n"||t.key==="N"?(t.preventDefault(),this.toggleNotes()):(t.key==="h"||t.key==="H")&&(t.preventDefault(),this.isHudHidden=!this.isHudHidden,this.hudPillEl.classList.toggle("hidden",this.isHudHidden))}}),this.viewportEl.addEventListener("wheel",t=>{if(this.isOverviewOpen||this.isNotesOpen||Math.abs(t.deltaY)<28)return;const i=performance.now();i-this.lastWheelTime<650||(this.lastWheelTime=i,t.deltaY>0?this.next():this.prev())},{passive:!0}),this.host.querySelector("#hud-prev")?.addEventListener("click",()=>this.prev()),this.host.querySelector("#hud-next")?.addEventListener("click",()=>this.next()),this.host.querySelector("#hud-overview")?.addEventListener("click",()=>this.toggleOverview()),this.host.querySelector("#hud-notes")?.addEventListener("click",()=>this.toggleNotes()),this.host.querySelector("#hud-fs")?.addEventListener("click",()=>this.toggleFullscreen()),this.host.querySelector("#overview-close-btn")?.addEventListener("click",()=>this.toggleOverview(!1));const e=this.host.querySelector("#hud-progress-track");e.addEventListener("click",t=>{const i=e.getBoundingClientRect(),s=Math.max(0,Math.min(.999,(t.clientX-i.left)/i.width)),a=Math.floor(s*this.slides.length);this.goToSlide(a)}),window.addEventListener("hashchange",()=>{const t=this.parseInitialSlideFromUrl();t!==this.currentIndex&&this.goToSlide(t)})}next(){this.focus.move(1)||this.currentIndex<this.slides.length-1&&this.goToSlide(this.currentIndex+1)}prev(){this.focus.move(-1)||this.currentIndex>0&&this.goToSlide(this.currentIndex-1,!1,!0)}async goToSlide(e,t=!1,i=!1){const s=++this.navToken,a=Math.max(0,Math.min(this.slides.length-1,e)),o=this.slides[this.currentIndex];if(this.autoFocusTimer!==null&&(window.clearTimeout(this.autoFocusTimer),this.autoFocusTimer=null),this.focus.detach(),this.updateVisualLink(null),this.activeHostDiv){o.unmount();const F=this.activeHostDiv;t||this.reducedMotion?F.remove():He.to(F,{opacity:0,duration:.24,ease:"power2.out",onComplete:()=>F.remove()})}this.sceneManager.clearStage(),this.videoLayer.hideVideo(),this.currentIndex=a;const c=this.slides[this.currentIndex];c.currentStep=0;const n=yt[this.currentIndex],r=new URLSearchParams(window.location.search);r.delete("slide");const d=r.toString();window.history.replaceState(null,"",`${window.location.pathname}${d?`?${d}`:""}#slide-${n.index}`),Ce.preload(n.preloadMolecular),yt[this.currentIndex+1]&&Ce.preload(yt[this.currentIndex+1].preloadMolecular);const u=document.createElement("div");u.style.position="absolute",u.style.inset="0",this.slidesStageEl.appendChild(u),this.activeHostDiv=u,this.focus.attach(u),this.focus.setRightFirst(Tn.has(e+1)),!t&&!this.reducedMotion&&He.fromTo(u,{opacity:0},{opacity:1,duration:.36,ease:"power2.out",clearProps:"opacity"});const y={sceneManager:this.sceneManager,videoLayer:this.videoLayer,setAmbientGlow:F=>{s===this.navToken&&(F.x&&this.ambientBackdropEl.style.setProperty("--glow-x",F.x),F.y&&this.ambientBackdropEl.style.setProperty("--glow-y",F.y),F.color&&this.ambientBackdropEl.style.setProperty("--glow-color",F.color),F.x2&&this.ambientBackdropEl.style.setProperty("--glow2-x",F.x2),F.y2&&this.ambientBackdropEl.style.setProperty("--glow2-y",F.y2),F.color2&&this.ambientBackdropEl.style.setProperty("--glow2-color",F.color2))},onStepChange:()=>{},reducedMotion:this.reducedMotion||t};this.updateHud(),this.renderNotesContent(),await c.mount(u,y),s===this.navToken&&(Pn(u),i?this.focus.focusLast():this.autoFocusTimer=window.setTimeout(()=>{this.autoFocusTimer=null,s===this.navToken&&!this.isOverviewOpen&&this.focus.focusFirst()},t||this.reducedMotion?120:1300),this.updateHud(),this.renderNotesContent())}updateHud(){const e=this.currentIndex+1;this.hudCounterEl.textContent=`${String(e).padStart(2,"0")} / ${this.slides.length}`;const t=e/this.slides.length*100;this.progressFillEl.style.width=`${t.toFixed(2)}%`,this.slides[this.currentIndex],this.updateStepDots(this.focus.index,this.focus.count()),this.overviewModalEl.querySelectorAll(".overview-card").forEach((i,s)=>{i.classList.toggle("current",s===this.currentIndex)})}updateVisualLink(e){const t=kn[this.currentIndex+1];let i=!1,s=null;if(t&&e&&e.tagName!=="BUTTON"){const a=this.activeHostDiv;s=t.panel&&a?a.querySelector(t.panel):null;const o=!!(t.panel&&e.closest(t.panel));i=(!t.from||!!e.closest(t.from))&&!o}this.viewportEl.classList.toggle("visual-lit",i),this.sceneManager.setEmphasis(i),this.litPanel&&this.litPanel!==s&&this.litPanel.classList.remove("visual-lit-target"),this.litPanel=i?s:null,this.litPanel?.classList.add("visual-lit-target")}onFocusChange(e){this.updateVisualLink(e.el),this.updateStepDots(e.index,e.total),this.hudHintEl.textContent=e.actionable?"⏎ Enter":""}updateStepDots(e,t){if(t<=0){this.hudStepsEl.innerHTML="",this.hudStepsEl.style.display="none";return}if(this.hudStepsEl.style.display="inline-flex",t>14){this.hudStepsEl.innerHTML=`<span class="hud-counter" style="padding:0">${e<0?"–":e+1} / ${t}</span>`;return}this.hudStepsEl.innerHTML=Array.from({length:t}).map((i,s)=>`<span class="hud-step-dot ${s===e?"active":""}"></span>`).join("")}handleOverviewKey(e){const t=Array.from(this.host.querySelectorAll(".overview-card"));if(!t.length)return;const i=this.host.querySelector("#overview-grid"),s=getComputedStyle(i),a=Math.max(1,s.gridTemplateColumns.split(" ").length),o=s.direction==="rtl";let c=this.overviewIdx;switch(e.key){case"ArrowRight":c+=o?-1:1;break;case"ArrowLeft":c+=o?1:-1;break;case"ArrowDown":c+=a;break;case"ArrowUp":c-=a;break;case"Home":c=0;break;case"End":c=t.length-1;break;case"Enter":case" ":e.preventDefault(),this.toggleOverview(!1),this.goToSlide(this.overviewIdx);return;default:return}e.preventDefault(),this.setOverviewSelection(Math.max(0,Math.min(t.length-1,c)))}setOverviewSelection(e){this.overviewIdx=e,this.host.querySelectorAll(".overview-card").forEach((t,i)=>{t.classList.toggle("kb-hover",i===e),i===e&&t.scrollIntoView({block:"nearest"})})}renderNotesContent(){const e=yt[this.currentIndex],t=e.notes.map(i=>`<li style="margin-bottom:12px;line-height:1.7;color:#DCE3F0">${i}</li>`).join("");this.notesDrawerEl.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <span style="font-size:13px;font-weight:700;color:#42D9F5">یادداشت سخنران · اسلاید ${e.index}</span>
        <span style="font-size:12.5px;color:#8D99AE">زمان پیشنهادی: ${e.durationHint}</span>
      </div>
      <h3 style="margin:0 0 14px 0;font-size:21px;font-weight:700;color:#F4F6FA">${e.titleFa}</h3>
      <ul style="margin:0;padding-right:20px;font-size:15.5px">
        ${t}
      </ul>
    `}toggleOverview(e){this.isOverviewOpen=e??!this.isOverviewOpen,this.isOverviewOpen&&(this.focus.clear(),this.updateVisualLink(null),this.slides[this.currentIndex]?.resetHover?.(),this.setOverviewSelection(this.currentIndex)),this.overviewModalEl.classList.toggle("open",this.isOverviewOpen),this.host.querySelector("#hud-overview")?.classList.toggle("active",this.isOverviewOpen)}toggleNotes(e){this.isNotesOpen=e??!this.isNotesOpen,this.notesDrawerEl.classList.toggle("open",this.isNotesOpen),this.host.querySelector("#hud-notes")?.classList.toggle("active",this.isNotesOpen)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}}const Ri=document.querySelector("#app");if(!Ri)throw new Error("Missing #app root element");ss();const zn=new URLSearchParams(window.location.search).get("mouse")==="1";if(!zn){document.documentElement.classList.add("mouse-locked");const l=e=>{e.isTrusted&&(e.preventDefault(),e.stopImmediatePropagation())};["click","dblclick","auxclick","contextmenu","mousedown","dragstart","wheel"].forEach(e=>window.addEventListener(e,l,{capture:!0,passive:!1}))}new Hn(Ri);
