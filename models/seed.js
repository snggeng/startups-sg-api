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
    'models/investor.js'
  ])

  // Clear specified collections
  seeder.clearModels(['CoSpace', 'Event', 'Government_Program', 'Investor'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'CoSpace',
    'documents': [
      {
        'name': 'JustCo',
        'address': '6 Raffles Quay #16-01, Singapore 048580 and 120 Robinson Road #15-01, Singapore 068913',
        'website': 'http://www.justcoglobal.com/',
        'description': 'A creative coworking and hot desking space in Singapore to suit your every need! At JustCo we endeavor to foster a creative environment, with a myriad of brilliant individuals and organizations vibing off each other to produce stunning work. We are excited to have fresh new individuals or organizations join our ever-growing community.',
        'logo': ''
      },
      {
        'name': 'The Great Room',
        'address': 'One George Street, Level 10. Singapore',
        'website': 'http://thegreatroomoffices.com',
        'description': 'The Great Room sets itself apart as a hospitality-inspired workplace, combining the emotional appeal of a luxury hotel with the productivity of a professional workplace. Situated in the heart of the CBD, this 15,000 sq ft workspace aims to change the way you feel about going to work, and is exactly where you want to bring partners, clients and investors. The Great Room welcomes leaders and launchers hailing from the technology, creative and finance industries. It has also pioneered the ‘hot office’ concept, which are private offices available on demand for one to four people.',
        'logo': ''
      },
      {
        'name': 'The Hive',
        'address': '59 New Bridge Road, Singapore',
        'website': 'http://thehive.sg/about/',
        'description': 'A beautifully designed workspace in the city centre. The Hive Singapore is designed for your way of working and living – a comfortable and welcoming environment where your business can thrive. You will be joining a coworking community that spans three countries, giving you access to a wonderfully diverse network.',
        'logo': ''
      },
      {
        'name': 'The Hub',
        'address': '128 Prinsep Street, 188655',
        'website': 'http://singapore.impacthub.net/homepage',
        'description': "The Hub Singapore knows that it takes courage to pursue life on your own terms. That's why they've built a home for courageous people and businesses to work together. They close social distances, enabling you to launch your ventures and scale your businesses.\nMore than just a coworking space, they're a trusted community, stimulating events platform, and a base from which to launch your business and scale your impact. At The Hub Singapore, find co-conspirators, mentors, investors, creators, partners and allies. They are the only space to bring together people serious about pursuing purpose-- whether it is personal purpose through self-actualization, or societal purpose in solving the most pressing issues of today.\nPersons of Interest: Grace Sai",
        'logo': ''
      },
      {
        'name': 'The Working Capitol',
        'address': '1 Keong Saik Rd, 089109',
        'website': 'https://www.theworkingcapitol.com/en',
        'description': "It takes over the historic AIA building and merges five shophouses into one giant co-working space. This space is open plan with lots of light from the shuttered windows, despite the fact that it's decked out in a mandatory white washed color scheme. The co-working space also has private offices and a dedicated events venue with a pretty flexible schedule: you can book on a daily basis or have a permanent space. It's also home to a cafe, The People Vs., with a selection of coffees, teas, breads and the likes.",
        'logo': ''
      }
    ]
  },
  {
    'model': 'Investor',
    'documents': [
      {
        'name': 'Clearbridge Accelerator Pte Ltd',
        'address': '81 Science Park Drive, #02-03 The Chadwick, Singapore, Science Park 1, Singapore 118257',
        'website': 'http://www.clearbridgeaccelerator.com/',
        'description': 'Clearbridge Accelerator invests mainly in healthcare, infosecurity and technology companies. Its team consists of serial entrepreneurs with experience in key markets such as the US, China, Japan and Australia. Via a public-private partnership with the Singapore Government, Clearbridge Accelerator manages both a S$40 million (about US$32 million) fund to invest in life science companies, and an incubator scheme that invests up to S$1 million (about US$0.8 million) for seed-stage companies with a heavy focus on Asia.',
        'logo': '',
        'type': 'Incubator/Accelerator'
      },
      {
        'name': 'Joyful Frog Digital Innovation (JFDI)',
        'address': '79 Ayer Rajah Crescent, #05-03, Singapore 139955',
        'website': 'http://www.jfdi.asia/',
        'description': 'One of the stalwarts of the Singapore scene, JFDI offers programmes for business startups and professionals. Its partners are grassroots organisations, governments and top corporations. Its practical work is underpinned by close relationships with the world’s leading academic institutions and independent thinkers.',
        'logo': '',
        'type': 'Incubator/Accelerator'
      },
      {
        'name': 'muru-D',
        'address': '#02-00, 115 Amoy St.',
        'website': 'https://muru-d.com/',
        'description': "muru-D is the start-up accelerator backed by Telstra. They are looking to support the very best digital talent the Australasian region has to offer. Their goal is to help Australia become a center of digital business by providing mentoring, tailored acceleration services and investment to early stage startups.\nMuru-D will provide you with a cash contribution of $40,000 in return for a small 6% stake in your company. You get a lot more than just a $40k cash investment. You’ll also get 'money-can’t-buy' access to experts within the Telstra family, and to some of their key partners. Support will also be available from Telstra's professional services teams. They'll be able to help you with legals, finance, human resources, and the other issues you'll need to deal with as your idea comes to life.",
        'logo': '',
        'type': 'Incubator/Accelerator'
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
        'type': 'Incubator/Accelerator'
      },
      {
        'name': '3VS1',
        'address': '',
        'website': 'http://www.3vs1.com/',
        'description': '3V SourceOne Capital is an Asian private equity firm with offices in Singapore and Silicon Valley. We invest in high growth companies with the aim of helping management teams reach their full potential. We are a fast growing investment house ourselves and we have learned firsthand about the value of hard work, dedication and pursuing a dream.\nWe are a pioneer in growth capital and private equity in Singapore with an experienced investment team that has contributed to local industry development.',
        'logo': '',
        'type': 'Investor'
      },
      {
        'name': 'ACP',
        'address': '',
        'website': 'http://www.acpven.com/',
        'description': 'ACP is a global investment advisory firm founded by experienced entrepreneurs and seasoned investors. As an alternative asset management company, we are trusted partners of some of the most respected family, corporate and institutional investors in the world.\nACPs investment thesis derives from a worldview that massive innovations in technology, demographic shifts and closer integration of global economies are fundamentally transforming the way we live, work and play.\nIn general, we invest in companies that address a need rather than a want. Our businesses have strong technology moats around them and often have significant product, customer or revenue traction when they engage with us. Most of our companies are lead by experienced founders who often have years if not decades of prior experience.\nACP typically invests in the early growth, or pre-A round and supports companies through multiple follow-on rounds. Our typical investment range is between $200K and $4m and we generally prefer to lead the round. We often invest alongside strategically valuable investors and take board seats where helpful to the company',
        'logo': '',
        'type': 'Investor'
      },
      {
        'name': 'BAF Spectrum',
        'address': '',
        'website': 'http://www.bafspectrum.com/',
        'description': 'BAF Spectrum is a business angel fund focused on Asia-based, early stage technology startups – in particular within digital media, internet and mobile consumer portals as well as R&D-intensive information technology in general.',
        'logo': '',
        'type': 'Investor'
      },
      {
        'name': 'BlueHill Asset Management',
        'address': '',
        'website': 'http://www.bluehill.com.sg/',
        'description': 'BlueHill Asset Management specialises in venture capital and private equity investments across strategic global markets. Based in Singapore, the management has been instrumental in raising funds of approximately S$470 million over the last 4 years.',
        'logo': '',
        'type': 'Investor'
      },
      {
        'name': 'CAP Vista',
        'address': '',
        'website': 'http://www.capvista.com.sg/',
        'description': 'Cap Vista is the strategic investment arm of Defence Science and Technology Agency (DSTA), a statutory board of the Singapore Ministry of Defence.\nCap Vista invests in companies with innovative technologies that can serve the defence and security needs of Singapore.\nCap Vista aims to be the strategic investor of choice for young companies seeking to develop their businesses in the Asian defence and security market.',
        'logo': '',
        'type': 'Investor'
      }
    ]
  },
  {
    'model': 'Event',
    'documents': [
      {
        'name': 'Angelhack Singapore',
        'address': '',
        'website': 'http://angelhack.com/angelhack-singapore-2016/',
        'description': 'AngelHack, a female-owned, female-majority company, is the world’s largest and most diverse global hacker community, helping to drive open innovation of tech products, platforms and brands with extraordinary smarts, scale and speed.\nKnown as pioneers of global hackathons for more than four years, AngelHack’s more than 97,000 developers, designers, and entrepreneurs compete to build, test and launch new solutions over the course of a weekend.',
        'logo': '',
        'type': 'Hackathon',
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
  {
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
