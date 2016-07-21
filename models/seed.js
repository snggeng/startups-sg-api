// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/cospace.js',
    'models/event.js',
    'models/government_program.js',
    'models/investor.js',
    'models/incubator_accelerator.js'
  ])

  // Clear specified collections
  seeder.clearModels(['CoSpace', 'Event', 'Government_Program', 'Investor', 'Incubator_Accelerator'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  { // CO-WORKING SPACES
    'model': 'CoSpace',
    'documents': [
  {
    "name": "The Great Room",
    "address": "1 George Street #10-01, Singapore 049145",
    "website": "http://thegreatroomoffices.com",
    "description": "The Great Room sets itself apart as a hospitality-inspired workplace, combining the emotional appeal of a luxury hotel with the productivity of a professional workplace. Situated in the heart of the CBD, this 15,000 sq ft workspace aims to change the way you feel about going to work, and is exactly where you want to bring partners, clients and investors. The Great Room welcomes leaders and launchers hailing from the technology, creative and finance industries. It has also pioneered the ‘hot office’ concept, which are private offices available on demand for one to four people.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Hive",
    "address": "59 New Bridge Road, Singapore",
    "website": "http://thehive.sg/about/",
    "description": "A beautifully designed workspace in the city centre. The Hive Singapore is designed for your way of working and living – a comfortable and welcoming environment where your business can thrive. You will be joining a coworking community that spans three countries, giving you access to a wonderfully diverse network.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Hub",
    "address": "128 Prinsep Street, Singapore 188655",
    "website": "http://singapore.impacthub.net/homepage",
    "description": "The Hub Singapore knows that it takes courage to pursue life on your own terms. That's why they've built a home for courageous people and businesses to work together. They close social distances, enabling you to launch your ventures and scale your businesses.\nMore than just a coworking space, they're a trusted community, stimulating events platform, and a base from which to launch your business and scale your impact. At The Hub Singapore, find co-conspirators, mentors, investors, creators, partners and allies. They are the only space to bring together people serious about pursuing purpose-- whether it is personal purpose through self-actualization, or societal purpose in solving the most pressing issues of today.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Refinery",
    "address": "115 King George's Avenue #01-02, Singapore 208561",
    "website": "http://www.therefinery.sg/",
    "description": "This hip three-in-one space is set up by The General Company, the same folks who spearhead Tyrwhitt General Company and design firm Architology. The Refinery houses a yakitori joint, a bespoke cocktail bar and a craft workshop. Table spaces start from $450 a month and you also get free coffee and whisky too. Plus, there are also designers around to offer friendly advice and the stay open all hours of the day.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Working Capitol",
    "address": "1 Keong Saik Rd, Singapore 089109",
    "website": "https://www.theworkingcapitol.com/en",
    "description": "It takes over the historic AIA building and merges five shophouses into one giant co-working space. This space is open plan with lots of light from the shuttered windows, despite the fact that it's decked out in a mandatory white washed color scheme. The co-working space also has private offices and a dedicated events venue with a pretty flexible schedule: you can book on a daily basis or have a permanent space. It's also home to a cafe, The People Vs., with a selection of coffees, teas, breads and the likes.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Art Social Haus",
    "address": "11 Yong Siak St, Singapore 168646",
    "website": "http://www.facebook.com/artsocialhaus",
    "description": "Arts Social Haus is an independent co-working art space, where members are granted 24 hour access to the studio and events areas. Membership fees start at $280 per month for one person, and includes working facilities and free admission to exhibitions held at the venue during the membership period. They stay open all day as well.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Bash",
    "address": "#03-01, 79 Ayer Rajah Crescent, Singapore 139955",
    "website": "http://www.infocomminvestments.com/BASH.html",
    "description": "BASH (Build Amazing start-ups Here), is Singapore’s biggest integrated start-ups space with the capability of congregating members and partners of the tech building community across the entire value chain of ideation, acceleration, incubation to expansion – from accelerators, investors, incubators to entrepreneurship - all under one roof.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Co.Lab by Silicon Straits",
    "address": "71 Ayer Rajah Crescent, Singapore 139951",
    "website": "http://colab.siliconstraits.com/",
    "description": "CO.LAB - a co-working space, fabrication lab and collaboration zone spanning 2,000 sq ft in the heart of Singapore's startup hub, Blk 71",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Collective Works",
    "address": "100 Cecil St, Singapore 069532",
    "website": "http://www.collective.works/",
    "description": "Collective Works was designed from the ground up to look and operate differently. Our space incorporates many of the latest trends in commercial office planning: The design is based on a creative studio layout with facing ‘coworkstations’ a design which encourages members to collaborate while they work. Our flexible informal meeting areas like our lounge and huge kitchen encourage interaction and serendipitous meetings. Meanwhile the use of multi-height work surfaces and flexible furniture arrangements give members the option to work where they want and how they want encouraging creativity.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Cowerkz",
    "address": "259A Geylang Road, Singapore",
    "website": "http://www.cowerkz.com/",
    "description": "CoWerkz is a newly renovated serviced office, offering a refreshing and peaceful office space sanctuary for work with private rooms. Our suite of services cater to a wide range of client requirements from Office Space Rental to Virtual Office service. We want to encourage young entrepreneurs to \"Start, Run & Grow your Business\" - having a ready-to-go, fully-functional office space with brand new furniture, business address, office phone line, wifi/lan, administrative support and many more. We have different room sizes to cater from single to 3 work desks.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "HackerspaceSG",
    "address": "344B King George’s Ave, Singapore 208576",
    "website": "https://hackerspace.sg/",
    "description": "There are hundreds of hacker spaces around the world, and Singapore’s version brings together communities of tech, science, fermentation, music, digital arts and electronic arts. Offering the option to cowork during the day, Hackerspace also holds regular events, meetups, presentations, workshops and movie nights for the local community. The space is popular with tech startups and has a range of facilities, including three 3D printers and a bank of development boards to boost collaboration. Regular members pay $128/month, Add-ons such a rented locker spaces and an office address are also available for a small additional monthly fee. There are also open online communities that is accessible to even non members.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "HauteDesk",
    "address": "105 Cecil St, Singapore 069534",
    "website": "",
    "description": "HauteDesk co-working space is located in Central Business District, near to Telok Ayer MRT and Lau Pa Sat. The vicinity is the most vibrant corporate neighbourhood in the prime of Singapore. It is the stronghold of international corporations and distinguished local businesses. A place where top talents worldwide gather to make and live their dreams. We aim to be a platform to synergize the ideas, talents and opportunities offered by the city for entrepreneurs, innovators, and pioneers alike.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Hired Turf",
    "address": "883 North Bridge Rd, Singapore 198784",
    "website": "http://hiredturf.com/",
    "description": "We are a coworking space that provides relaxed atmosphere for creative people. Our workspace is a two-storey open-concept office, consisting of 20 seats and a medium sized meeting room.\nWe strive to build a community of professionals: startup peeps, software engineers, graphic designers, product designers and social media strategists. We provide professional office chairs, 23-inch IPS LED monitors, fast speed Internet connection to make HiredTurf one of the most comfortable and desired work place in town.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Inner City Offices",
    "address": "229 Mountbatten Rd, Singapore 398007",
    "website": "http://icosg.com/",
    "description": "Providing a fully-equipped office space to get your work done. Fully furnished with pantry and meeting rooms.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "JC8 at Cowork@SG",
    "address": "8 Joo Chiat Terrace, Singapore 427181",
    "website": "http://cowork.sg/",
    "description": "We provide the most flexible work spaces in Singapore through membership or pay-per-use. Every member gets to enjoy access to any of Cowork@SG's workspaces, with low commitment term of 6 months. It's as simple as plug and play!",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "JustCo",
    "address": "#15-01, 120 Robinson Rd, 068913",
    "website": "http://www.justcoglobal.com/",
    "description": "A creative coworking and hot desking space in Singapore to suit your every need! At JustCo we endeavor to foster a creative environment, with a myriad of brilliant individuals and organizations vibing off each other to produce stunning work. We are excited to have fresh new individuals or organizations join our ever-growing community.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Keong Saik Collab",
    "address": "29 Keong Saik Rd, Singapore 089136",
    "website": "http://www.keongsaikcollab.com/#frame-start",
    "description": "Keong Saik Collab | 白社会 is a co-working space that is fueled with do-ers and passion driven folks who form this energetic space at Keong Saik Road. Working with like minded people to make things happen in this tiny red dot, we are a community that bask in collaborations, partnerships and ownership.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "MakeSpace",
    "address": "318C King George's Ave, Singapore 208563",
    "website": "http://makespace.sg/",
    "description": "Makespace provides an open, collaborative-driven environment where innovative businesses and individuals can flourish. We provide all your basic needs, so you focus on getting the job done. Makespace is yOUR Space! Do drop by to visit us. There is no better way to experience Makespace & Coworking.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Mettle Work",
    "address": "50 Lorong 17 Geylang, Singapore",
    "website": "http://mettlework.co/",
    "description": "Mettle Work is a 24 hour place ideal for last minute design proposal making and mad dash for late night Dim Sum across the street. Mettle Work isn't your typical office though, as each user will have warehousing, production work bench and tinkering space. In short, it is a place for hustle and bustle of prototyping, modelling and craft.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Plug-in@Blk71",
    "address": "71 Ayer Rajah Crescent, #02-18, Singapore 139951",
    "website": "http://www2.blk71.com/",
    "description": "At Blk71, we like to get creative with our spaces. Like how start-ups love using the kopitiam-themed pantry in NUS Enterprise@Blk71 for business huddles. Or how a simple lobby wall has been transformed into a colourful canvas of entrepreneurial visions and art.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "plusconcept",
    "address": "16 Purvis St, Singapore 188595",
    "website": "http://www.plusconcept.space/",
    "description": "Your professional home to focus, grow your business and to simply getting things done in a great & trusted environment.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Red Dot Ventures",
    "address": "#04-04, 79 Ayer Rajah Crescent, Block 79, Singapore 139955",
    "website": "http://www.rdvspace.strikingly.com/",
    "description": "",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "SiTF House",
    "address": "79 Ayer Rajah Crescent #02-03, Singapore 139955",
    "website": "http://www.sitf123js.com/",
    "description": "SITF House located at block 79 right in the heart of Singapore's startup community puts you within reach of venture capital firms, incubators, government agencies and other tech startups. We provide modern collaborative facilities such as: discussion rooms, conference rooms, 24 hours access to co-working offices, pantry and lounge as well as training facilities amongst basic office necessities such as photocopying, printing, air-conditioning and wifi.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Smartspace",
    "address": "261 Waterloo Street, Singapore 180261",
    "website": "http://www.smartspace.sg/",
    "description": "This is another one of the cool shared spaces at arts enclave Bras Basah, a huge 8,000 sq. ft. space with meeting rooms, kitchen areas, work stations, private desks, and even space for a spot of table tennis. It’s also user-friendly and accessible per-hour booking rates with work stations starting from $30 a day and going up to $600 a month. This space also lets you work late and is open round the clock.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "SpringBoard",
    "address": "19 Cecil Street, Singapore",
    "website": "http://springboard.sg/",
    "description": "We are passionate about supporting entrepreneurs and small businesses. We provide a one-stop service to setup your business in Singapore. For those clients that choose our space in central Singapore it provides a contemporary space in the heart of Singapore’s CBD district. Our space has all the services you need so that you can do what you are good at and leave the rest to us.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Startup Spaze",
    "address": "36 Purvis Street, Singapore 188613",
    "website": "",
    "description": "We provide a conducive and collaborative community working space for entrepreneurs, founders and startups to work in. A cost efficient place with incredible environment for you to work on your startup. You focus on your startup and we will handle the rest.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Technopreneur Circle",
    "address": "250 North Bridge Road #05-01, Singapore 179101",
    "website": "https://www.technopreneurcircle.com/",
    "description": "A free co-working space launched by Vertex Venture. The space itself is relatively small and humble — it looks like a big conference room that has been spruced up with nice interior design and the basics to get work done — tables, chairs, free Wi-Fi. But it does have a great location, in the heart of the city on the fifth floor of Raffles City Tower.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Co",
    "address": "75 High Street, Singapore 179435",
    "website": "http://jointhe.co/",
    "description": "For those used to hot-desking and minimalist spaces, this eight-storey building fits the bill. It has a dark, glossy lobby that's no stranger to buzzy corporate parties, and an open concept third level that's hosted the likes of Startup Grind and Elance, making it quite a focus for those on trend with the local scene. Individual desks go for $45 a day, $350 for 10 visits a month and $600 monthly, while a swanky office suite can set you back $700-990 per person.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Loft Offices",
    "address": "46 South Bridge Road, Singapore",
    "website": "http://www.theloftoffices.com/",
    "description": "The Loft Offices is not just about a work or event space, but about a collaborative working environment where businesses can grow together. One of our highlights is a creative, stimulating open-concept working space. Think of it as working in an idea room – this space is well-suited for young growing start-ups, who wish to establish a foothold from the heart of the city.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "The Outpost",
    "address": "14 Lorong 32, Singapore 398277",
    "website": "http://theoutpost.biz/",
    "description": "The OutPost offers a unique coworking space in Singapore that caters to entrepreneurial growth companies entering the Southeast Asian markets.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Trehaus",
    "address": "#03-01, 442 Orchard Rd, Singapore 238879",
    "website": "http://trehauscowork.com/",
    "description": "Trehaus is Singapore’s first co-working space complete with child-friendly learning facilities. Being a working and present parent can be challenging, and it’s for this very reason that we were built.\nWe offer you the option of bringing your children to work at a conducive workspace – so that while you build your career, your little ones can build their minds too.\nWe’re for every parent and every business that embraces the peace of mind that comes with being able to work in a flexible and enriching environment, while keeping their little ones close.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Woolf Works",
    "address": "19 Carpenter Street, #05-01, Singapore 059908",
    "website": "http://www.woolfworks.sg/en",
    "description": "Singapore’s first women-only co-working space—named after literary icon Virginia Woolf—is dedicated to developing female business leaders. It connects women with a like-minded community, helps them collaborate with other business owners and provides a space that allows them to separate work and home lives. Freelancers, coaches and consultants are among the people who use our space.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Work Central",
    "address": "190 Clemenceau Avenue, Singapore",
    "website": "http://www.workcentral.com.sg/",
    "description": "At Work Central, we are obsessed about creating fun yet functional works places for entrepreneurs and small business owners. We create thriving communities and ecosystems comprising of -people solving problems and driving profits. Our goal is to help you do your best work possible everyday. We want you to focus on what’s important to your business, and leave the rest to us. We know that reliable and fast internet, meeting rooms and coffee are mainstays of any good workspace, but that is just the beginning. We’ve lined up a selection of helpful service providers and business partners, and will continue to bring in more useful and relevant resources to support your work and business needs.",
    "logo": "",
    "type": "",
    "image": ""
  },
  {
    "name": "Workhouse",
    "address": "60 Upper Weld Road\nSingapore 207413",
    "website": "http://www.ourworkhouse.com/",
    "description": "Workhouse Co-Working Space presents a unique space for entrepreneurs, start-ups and SMEs to come together in a single venue to inject creativity and change into today's world and society. Featuring a flexible and modular design and facilities fully customizable to your needs, leave your burdens behind and focus on what you do best: making an impact with your startup team, associates and friends.",
    "logo": "",
    "type": "",
    "image": ""
  }
]
  },
  { // INCUBATORS-ACCELERATORS
    'model': 'Incubator_Accelerator',
    'documents': [
      {
        'name': 'Clearbridge Accelerator Pte Ltd',
        'address': '81 Science Park Drive, #02-03 The Chadwick, Singapore, Science Park 1, Singapore 118257',
        'website': 'http://www.clearbridgeaccelerator.com/',
        'description': 'Clearbridge Accelerator invests mainly in healthcare, infosecurity and technology companies. Its team consists of serial entrepreneurs with experience in key markets such as the US, China, Japan and Australia. Via a public-private partnership with the Singapore Government, Clearbridge Accelerator manages both a S$40 million (about US$32 million) fund to invest in life science companies, and an incubator scheme that invests up to S$1 million (about US$0.8 million) for seed-stage companies with a heavy focus on Asia.',
        'logo': '',
        'type': ['Incubator/Accelerator']
      },
      {
        'name': 'Joyful Frog Digital Innovation (JFDI)',
        'address': '79 Ayer Rajah Crescent, #05-03, Singapore 139955',
        'website': 'http://www.jfdi.asia/',
        'description': 'One of the stalwarts of the Singapore scene, JFDI offers programmes for business startups and professionals. Its partners are grassroots organisations, governments and top corporations. Its practical work is underpinned by close relationships with the world’s leading academic institutions and independent thinkers.',
        'logo': '',
        'type': ['Incubator/Accelerator']
      },
      {
        'name': 'muru-D',
        'address': '#02-00, 115 Amoy St.',
        'website': 'https://muru-d.com/',
        'description': "muru-D is the start-up accelerator backed by Telstra. They are looking to support the very best digital talent the Australasian region has to offer. Their goal is to help Australia become a center of digital business by providing mentoring, tailored acceleration services and investment to early stage startups.\nMuru-D will provide you with a cash contribution of $40,000 in return for a small 6% stake in your company. You get a lot more than just a $40k cash investment. You’ll also get 'money-can’t-buy' access to experts within the Telstra family, and to some of their key partners. Support will also be available from Telstra's professional services teams. They'll be able to help you with legals, finance, human resources, and the other issues you'll need to deal with as your idea comes to life.",
        'logo': '',
        'type': ['Incubator/Accelerator']
      },
      {
        'name': 'Plug and Play Singapore',
        'address': '71 Ayer Rajah Cres Singapore 139951',
        'website': 'http://plugandplaysingapore.com/',
        'description': 'Established in 2006, Plug and Play Singapore is focussed on sourcing, funding, and accelerating the growth of the most promising young high tech companies. It currently has operations in countries including Singapore, Malaysia, Egypt, Canada and a number of US cities.',
        'logo': '',
        'type': 'Incubator/Accelerator'
      },
      {
        'name': 'Startupbootcamp Fintech',
        'address': 'Bash #03-01, 79 Ayer Rajah Crescent, Singapore 139955',
        'website': 'http://www.startupbootcamp.org/accelerator/fintech-singapore.html',
        'description': 'Startupbootcamp FinTech is the leading accelerator focused on financial innovation. We provide funding, mentorship, office space in Singapore and access to a global network of corporate partners, mentors, investors and VCs, for up to 10 selected FinTech startups across the globe.\nFor over three months, the selected startups collaborate with 400+ mentors, partners, and investors to build world class FinTech products, with the ultimate goal of becoming industry leading companies.',
        'logo': '',
        'type': ['Incubator/Accelerator']
      },
      {
        'name': '3VS1',
        'address': '',
        'website': 'http://www.3vs1.com/',
        'description': '3V SourceOne Capital is an Asian private equity firm with offices in Singapore and Silicon Valley. We invest in high growth companies with the aim of helping management teams reach their full potential. We are a fast growing investment house ourselves and we have learned firsthand about the value of hard work, dedication and pursuing a dream.\nWe are a pioneer in growth capital and private equity in Singapore with an experienced investment team that has contributed to local industry development.',
        'logo': '',
        'type': ['Investor']
      }
    ]
  },
  { // INVESTORS
    'model': 'Investor',
    'documents': [
      {
        'name': 'ACP',
        'address': '',
        'website': 'http://www.acpven.com/',
        'description': 'ACP is a global investment advisory firm founded by experienced entrepreneurs and seasoned investors. As an alternative asset management company, we are trusted partners of some of the most respected family, corporate and institutional investors in the world.\nACPs investment thesis derives from a worldview that massive innovations in technology, demographic shifts and closer integration of global economies are fundamentally transforming the way we live, work and play.\nIn general, we invest in companies that address a need rather than a want. Our businesses have strong technology moats around them and often have significant product, customer or revenue traction when they engage with us. Most of our companies are lead by experienced founders who often have years if not decades of prior experience.\nACP typically invests in the early growth, or pre-A round and supports companies through multiple follow-on rounds. Our typical investment range is between $200K and $4m and we generally prefer to lead the round. We often invest alongside strategically valuable investors and take board seats where helpful to the company',
        'logo': '',
        'type': ['Investor']
      },
      {
        'name': 'BAF Spectrum',
        'address': '',
        'website': 'http://www.bafspectrum.com/',
        'description': 'BAF Spectrum is a business angel fund focused on Asia-based, early stage technology startups – in particular within digital media, internet and mobile consumer portals as well as R&D-intensive information technology in general.',
        'logo': '',
        'type': ['Investor']
      },
      {
        'name': 'BlueHill Asset Management',
        'address': '',
        'website': 'http://www.bluehill.com.sg/',
        'description': 'BlueHill Asset Management specialises in venture capital and private equity investments across strategic global markets. Based in Singapore, the management has been instrumental in raising funds of approximately S$470 million over the last 4 years.',
        'logo': '',
        'type': ['Investor']
      },
      {
        'name': 'CAP Vista',
        'address': '',
        'website': 'http://www.capvista.com.sg/',
        'description': 'Cap Vista is the strategic investment arm of Defence Science and Technology Agency (DSTA), a statutory board of the Singapore Ministry of Defence.\nCap Vista invests in companies with innovative technologies that can serve the defence and security needs of Singapore.\nCap Vista aims to be the strategic investor of choice for young companies seeking to develop their businesses in the Asian defence and security market.',
        'logo': '',
        'type': ['Investor']
      }
    ]
  },
  { // EVENTS
    'model': 'Event',
    'documents': [
      {
        'name': 'Angelhack Singapore',
        'address': '',
        'website': 'http://angelhack.com/angelhack-singapore-2016/',
        'description': 'AngelHack, a female-owned, female-majority company, is the world’s largest and most diverse global hacker community, helping to drive open innovation of tech products, platforms and brands with extraordinary smarts, scale and speed.\nKnown as pioneers of global hackathons for more than four years, AngelHack’s more than 97,000 developers, designers, and entrepreneurs compete to build, test and launch new solutions over the course of a weekend.',
        'logo': '',
        'type': ['Hackathon'],
        'date': ''
      },
      {
        'name': 'Changi Airport Hackathon',
        'address': '',
        'website': 'http://www.upsingapore.com/events/changi-airport-hackathon/',
        'description': 'At this Hackathon, Changi Airport Group (CAG) invited start-ups and passionate citizens to take a fresh look at the traveller experience – from even before the traveller sets foot in the airport, to the experience of millions of transit travellers the airport hosts every year, to our visitors who land at the airport to begin their Singapore trip.',
        'logo': '',
        'type': 'Hackathon',
        'date': ''
      },
      {
        'name': 'HACKATHON@SG',
        'address': '',
        'website': 'https://www.ida.gov.sg/Sub/ITSC/CODE-XTREMEAPPS-COMPETITION/HACKATHONSG2015',
        'description': 'Organised by the Infocomm Development Authority of Singapore and IT Standards Committee, and supported by the Ministry of Finance and SPRING Singapore, Hackathon@SG offered a plethora of technology for participants to develop their applications with. These included more than 11,000 datasets and APIs via data.gov.sg; Internet of Things technologies, virtual reality technologies and cloud technologies.',
        'logo': '',
        'type': 'Hackathon',
        'date': ''
      },
      {
        'name': 'Internet of Things Hackathon 2015',
        'address': '',
        'website': 'http://iothackathon.sg/',
        'description': "Emirates Travel Hackathon is an exciting 24-hour coding marathon bringing together talented developers and designers to build new and innovative travel-centric applications using web and mobile API's.",
        'logo': '',
        'type': 'Hackathon',
        'date': ''
      },
      {
        'name': 'YouthHack',
        'address': '',
        'website': 'http://singapore.youthhack.net/',
        'description': 'YouthHack Singapore Startup Challenge is for high school and university students to learn more about startups and entrepreneurship.',
        'logo': '',
        'type': 'Hackathon',
        'date': ''
      },
      {
        'name': 'Ad:Tech ASEAN 2016',
        'address': '',
        'website': 'http://www.adtechasean.com/',
        'description': 'TECH is a global conference and exhibition where the marketing, technology and media communities come together to share new ways of thinking, build strong partnerships, and define new strategies that will address key industry challenges while driving business forward in an ever-changing marketplace',
        'logo': '',
        'type': 'Conference',
        'date': ''
      },
      {
        'name': 'Agile 2016 Conference',
        'address': '',
        'website': 'http://2016.agilesingapore.org/',
        'description': 'Built on the success in 2013 and 2014, and organised by passionate volunteers from the Agile community, this two day conference will bring together over 300 attendees and many international and local experts covering topics like Lean, Security, Technical practices, Big data, UX, DevOps, Management, Product discovery and more.\nAgile Singapore aims to be the best software development and organisation agility conference in Singapore and the region.',
        'logo': '',
        'type': 'Conference',
        'date': ''
      },
      {
        'name': 'All That Matters',
        'address': '',
        'website': 'http://www.allthatmatters.asia/main/',
        'description': 'All That Matters is Asia’s only business-to-business-to-fan experience. The three day conference covers the latest issues relating to the Music, Live Entertainment, Online Video and Sponsorship industries. Global-level speakers provided insight and debate, whilst at night the Music Matters Live festival rocked Singapore before thousands of music lovers with more than 200 shows from 72 hand-picked bands from around the world.',
        'logo': '',
        'type': 'Conference',
        'date': ''
      },
      {
        'name': 'Cards & Payment',
        'address': '',
        'website': 'http://www.terrapinn.com/exhibition/seamless/',
        'description': 'Cards & Payments Asia is a 4 day event being held from 19th April to the 22nd April 2016 at the Suntec Singapore International Convention & Exhibition Centre in Singapore, Singapore. This event showcases products like ground for smart technology solution providers including card and prepaid card manufacturers, chip manufacturers and E-Ticketing platform developers and prospects for the business etc. in the Business Services industry.',
        'logo': '',
        'type': 'Conference',
        'date': ''
      },
      {
        'name': 'Casual Connect',
        'address': '',
        'website': 'http://asia.casualconnect.org/',
        'description': 'Casual Connect is the educational component of the Casual Games Association, the international trade association for casual games professionals. Casual Connect includes a regular magazine and yearly conference series in Eastern Europe, USA, Western Europe and Asia.',
        'logo': '',
        'type': 'Conference',
        'date': 'May 16-17, 2017'
      }
    ]
  },
  { // GOVERNMENT PROGRAMS
    'model': 'Government_Program',
    'documents': [
      {
        'name': 'EDB Singapore',
        'address': '',
        'website': 'https://www.edb.gov.sg/content/edb/en.html',
        'description': "We are the lead government agency for planning and executing strategies to enhance Singapore's position as a global business centre. We dream, design and deliver solutions that create value for investors and companies in Singapore. Our mission is to create for Singapore, sustainable economic growth with vibrant business and good job opportunities.",
        'logo': '',
        'type': ''
      },
      {
        'name': 'iDA Singapore',
        'address': '',
        'website': 'https://www.ida.gov.sg/',
        'description': 'The mission of the Infocomm Development Authority of Singapore (IDA) is to develop information technology and telecommunications within Singapore with a view to serve citizens of all ages and companies of all sizes. IDA does this by actively supporting the growth of innovative technology companies and start-ups in Singapore, working with leading global IT companies as well as developing excellent information technology and telecommunications infrastructure, policies and capabilities for Singapore.',
        'logo': '',
        'type': ''
      },
      {
        'name': 'IE Singapore',
        'address': '',
        'website': 'http://www.iesingapore.gov.sg/',
        'description': 'International Enterprise (IE) Singapore is the government agency driving Singapore’s external economy. We spearhead the overseas growth of Singapore-based companies and promote international trade. Our vision is a thriving business hub in Singapore with Globally Competitive Companies (GCCs) and leading international traders.',
        'logo': '',
        'type': ''
      },
      {
        'name': 'JTC',
        'address': '',
        'website': 'http://www.jtc.gov.sg/about-jtc/pages/default.aspx',
        'description': "JTC Corporation (JTC) is the lead agency in Singapore to spearhead the planning, promotion and development of a dynamic industrial landscape. Since its inception in 1968, JTC has played a major role in Singapore's economic development journey by developing land and space to support the transformation of industries and create quality jobs.",
        'logo': '',
        'type': ''
      },
      {
        'name': 'Spring Singapore',
        'address': '',
        'website': 'http://www.spring.gov.sg/Pages/Home.aspx',
        'description': 'SPRING Singapore is an agency under the Ministry of Trade and Industry responsible for helping Singapore enterprises grow and building trust in Singapore products and services. As the enterprise development agency, SPRING works with partners to help enterprises in financing, capability and management development, technology and innovation, and access to markets. As the national standards and accreditation body, SPRING develops and promotes an internationally-recognised standards and quality assurance infrastructure. SPRING also oversees the safety of general consumer goods in Singapore.',
        'logo': '',
        'type': ''
      }
    ]
  }
]
