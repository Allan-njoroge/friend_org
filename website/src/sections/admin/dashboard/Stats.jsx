const Stats = () => {

    const cardData = [
        {title: "Events", num: 123 },
        {title: "Blogs", num: 123 },
    ]

    const card = cardData.map((item, index) => {
        return(
            <div key={index} className="bg-primary p-3 border border-muted-foreground">
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted-forground">{item.num}</p>
            </div>
        )
    })
  return (
    <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3 gap-5">{card}</div>
  )
}

export default Stats