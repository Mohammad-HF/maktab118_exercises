
export const text = {
    client : {
        h2 : "Our Clients",
        p : " We have been working with some Fortune 500+ clients"
    },
    community : {
        h2 : "Manage your entire community in a single system",
        p : "Who is Nextcent suitable for?"
    },
    caring : {
      h2 : "Caring is the new marketing",
      p: `  The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​`
    }

}

export default function Title(props) {
  return (
    <div className={`${props.width ? props.width : "w-[377px]"} mx-auto`} >
      <h2 className="text-center text-2xl font-semibold text-grayApp">
        {props.select.h2}
      </h2>
      <p className="text-center text-xs text-grayPApp mt-1">
      {props.select.p}
      </p>
    </div>
  );
}
