import React from "react";

const Footer = () => {
  const footerArray = [
    {
      title: "About",
      list: [
        { text: "How Airbnb Works" },
        { text: "Newsroom" },
        { text: "Airbnb 2021" },
        { text: "Investors" },
        { text: "Airbnb Plus" },
        { text: "Airbnb Luxe" },
        { text: "Airbnb for Work" },
      ],
    },
    {
      title: "Community",
      list: [
        { text: "Diversity & Belonging" },
        { text: "Against Discrimination" },
        { text: "Accessibility" },
        { text: "Airbnb Associates" },
        { text: "Guest Referrals" },
        { text: "Gift Cards" },
        { text: "Airbnb.org" },
      ],
    },
    {
      title: "Host",
      list: [
        { text: "Host Your Home" },
        { text: "Host Online" },
        { text: "Responsible Hosting" },
        { text: "Trust & Safety" },
      ],
    },
    {
      title: "Support",
      list: [
        { text: "Our COVID-19 Response" },
        { text: "Help Ceneter" },
        { text: "Cancellation Options" },
        { text: "Neighborhood Support" },
      ],
    },
  ];
  return (
    <footer className="bg-gradient-to-b from-black to-slate-900 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-start gap-5 md:gap-0">
          {footerArray.map((v, i) => (
            <div className="grid items-start gap-5" key={i}>
              <h1 className="text-slate-200 text-base lg:text-lg font-medium">{v.title}</h1>
              <div className="grid items-start gap-1">
                {v.list.map((l, i) => (
                  <p key={i} className="text-slate-400 text-sm lg:text-base">
                    {l.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
