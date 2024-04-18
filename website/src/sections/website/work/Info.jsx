const Info = () => {

  const info = [
    {
      title: "TRANSITIONS",
      about: "Adjusting to change is important, and something that many young people may struggle with. Life changes that are not in the person’s control can be especially unsettling and difficult to adjust to. Rafikistry recognizes transitions are difficult and can leave a young person feeling overwhelmed and anxious. Rafikistry helps young people navigate this period by providing life skills that are self building sessions, consisting of basic skills for personal and social development which will help young people in coping with the challenges they face.",
      list: [
        {
          subtitle: "Nawiri",
          details: "Is a coming of age transition program designed specifically for young high school girls to celebrate femininity and provides contemporary rites of passage programs, focusing on providing healthy transitions from girl to young womanhood. Rafikistry walks with them through their high school journey.",
        }, 
        {
          subtitle: "Stawi",
          details: "Once boys are done with their transition and circumcision ceremonies, they need proper teachings and values passed on to them. Rafikistry walks with young men through their high school journey to provide this much needed follow up and support.",
        }, 
        {
          subtitle: "Xcan? ICan!",
          details: "Is a life skills development empowerment programme for those just leaving high school. It is a programme that seeks to help ex high schoolers in general to adjust to adult life as they move on to tertiary education and adulthood.",
        }, 
        {
          subtitle: "FootSoldier",
          details: "Equipped to deliver service as the grow talents, assess capabilities and make a contribution to a better world",
        }, 
        {
          subtitle: "F5Refresh",
          details: "Affirmation of everything learnt and being launched to the world of work or business",
        }
      ]
    },
    {
      title: "AFFIRMATION",
      about: "To affirm means to offer someone emotional support or encouragement. Rafikistry firmly believes this      is key in our relationships with young people.",
      list: [
        {
          subtitle: "Sip & Spill Project",
          details: "AS Rafikistry we want young people to sip 'Cocoa' as they spill out issues through conversations that equip and empower while improving their mood.",
        },
        {
          subtitle: "BongaFresh",
          details: "Rafikistry's BongaFresh is whatsapp Chatroom to give relevant ad factual information while creating connectedness.",
        }
      ]
    },
    {
      title: "TRANSFORMATION",
      about: "Transformation is about a complete change in the appearance or character of something or someone, especially so that that thing or person is improved",
      list: [
        {
          subtitle: "Kisima",
          details: "Kisima - The reading well in order to read well. Kisima means 'well' in swahili. Well as used in this project means two things. As a NOUN - A watering place; A spa or an abundant source; A well of information. As an ADVERB - In a good or satisfactory way; In a thorough manner",
        },
        {
          subtitle: "Becoming",
          details: "“Becoming is better than being”. Carol S. Dweck. Becoming! exists to empower young mothers and their children, by connecting them with a supportive community of other young mothers and adult role models, equipping them with life skills and impacting their futures in a positive way. In the context of this project “Becoming is better than being” means that we would like the young mothers to become something greater than their current self. To believe that they can be better."
        }
      ]
    },
    {
      title: "SOCIAL SUPPORT & PROTECTION",
      about: "According to Wikipedia, Social support is the perception and actuality that one is cared for, has assistance available from other people, and that one is part of a supportive social network.",
      list: [
        {
          subtitle: "Rafiki's Underware Project. Panties With Purpose (PWP) and Drawers for Dudes (DFD)",
          details: "Underwear is the most under-donated, yet most needed, item of clothing. The Underwear Project (PWP and DFD) provides new underwear to young boys and girls in need."
        },
      ]
    },
    {
      title: "SOCIALISATION",
      about: "As the old adage goes, “All work and No play makes Jack a dull boy. Rafikistry finds it important that young people participate in social activities",
      list: [
        {
          subtitle: "Open House",
          details: "is a day on which everyone – beneficiaries, partners, friends, community are encouraged to visit Rafikistry to see what it is like and to have loads of fun together."
        },
        {
          subtitle: "Community Konnect",
        },
        {
          subtitle: "Boardgames and Gameplan Mashinani."
        }
      ]
    }
  ]

  const information = info.map((item, index) => {
    return (
      <div key={index} data-aos="fade-up" data-aos-duration="1000">
        <h3 className="text-2xl lg:text-3xl">{item.title}</h3>
        <p className="my-3 ml-5 text-gray-500">{item.about}</p>
        <ol type="a" className="ml-5 mb-10 text-gray-500">
          {item.list.map((listItem, idx) => (
            <li key={idx} className="my-2" data-aos="fade-up" data-aos-duration="1000">
              <strong>{listItem.subtitle}</strong>
              <br />
              {listItem.details}
            </li>
          ))}
        </ol>
      </div>
    );
  });
  

   

  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
      <div className="w-full mx-5 lg:mx-0 lg:w-3/4">
        <div>{information}</div>
      </div>
    </div>
  )
}

export default Info