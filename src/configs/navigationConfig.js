import React from "react";

import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },

  {
    type: "groupHeader",
    groupTitle: "Component",
  },

  {
    id: "user",
    title: "Profile Management",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "userList",
        title: "Users List",
        type: "item",
        icon: <Icon.Users size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/userList",
      },
      {
        id: "astrologerList",
        title: "Astrologer List",
        type: "item",
        icon: <Icon.User size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/astrology/astrologerList",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "Order Management",
  },

  {
    id: "orderlist",
    title: "All Orders",
    type: "item",
    icon: <Icon.Box size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/ordermanage/allorderlist",
  },
  {
    type: "groupHeader",
    groupTitle: " Event",
  },
  {
    id: "rashimanagement",
    title: "Book Puja",
    type: "collapse",
    icon: <Icon.BarChart2 size={20} />,
    children: [
      // {
      //   id: "bookedpooja",
      //   title: "Booked Pooja ",
      //   type: "item",
      //   icon: <Icon.Box size={20} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/event/bennerPooja/bannerPoojaList",
      // },
      {
        id: "bannerPoojaList",
        title: "Banner Pooja List",
        type: "item",
        icon: <Icon.Box size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/event/bennerPooja/bannerPoojaList",
      },

      {
        id: "eventList",
        title: "Pooja type List",
        type: "item",
        icon: <Icon.Box size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/event/addEvent/EventList",
      },
      {
        id: "bookEventList",
        title: "Pooja List",
        type: "item",
        icon: <Icon.Box size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/event/bookEvent/bookEventList",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Porduct Management",
  },

  {
    id: "productmanager",
    title: "Product Management",
    type: "collapse",
    icon: <Icon.Box size={20} />,
    children: [
      {
        id: "categoryList",
        title: "Category List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/category/categoryList",
      },
      {
        id: "productList",
        title: "Product List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/product/productList",
      },

      {
        id: "astrologerProduct",
        title: "Astrologer Product",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/astrologerProduct",
      },
    ],
  },

  {
    id: "callstatus",
    title: "Call Management",
    type: "collapse",
    icon: <Icon.PhoneCall size={20} color="yellow" />,
    children: [
      {
        id: "callComplete",
        title: "Call History",
        type: "item",
        icon: <Icon.PhoneIncoming size={12} color="green" />,
        permissions: ["admin", "editor"],
        navLink: "/app/callmanagement/completecall",
      },
      // {
      //   id: "callreject",
      //   title: "Reject Call",
      //   type: "item",
      //   icon: <Icon.PhoneMissed size={12} color="red" />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/callmanagement/callreject",
      // },
      // {
      //   id: "calltansaction",
      //   title: "Call Transac. History",
      //   type: "item",
      //   icon: <Icon.PhoneMissed size={12} color="red" />,
      //   permissions: ["admin", "editor"],
      //   navLink: "",
      // },
    ],
  },

  {
    id: "chatlist",
    title: "Chat List",
    type: "item",
    icon: <Icon.List size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/chat/chatList",
  },
  {
    id: "chathistory",
    title: "Chat/Video Call History",
    type: "item",
    icon: <Icon.List size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/callmanagement/chatreport",
  },

  {
    id: "chatintakelist",
    title: "Conversion take List",
    type: "item",
    icon: <Icon.MessageCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/chatintakeform/chatintakelist",
  },

  {
    id: "youTubeVideoList",
    title: "Add Youtube Video",
    type: "item",
    icon: <Icon.Video size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/youtube/youTubeVideoList",
  },

  // {
  //   id: 'askQuestionList',
  //   title: 'All users Question List',
  //   type: 'item',
  //   icon: <Icon.MessageCircle size={20} />,
  //   permissions: ['admin', 'editor'],
  //   navLink: '/app/askQuestionList',
  // },

  {
    id: "rechargepackage",
    title: "Recharge Package",
    type: "collapse",
    icon: <Icon.Package size={20} />,
    children: [
      {
        id: "allPlan",
        title: "All Plan List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/allPlan",
      },
      {
        id: "userrecharge",
        title: "User Recharge",
        type: "item",
        icon: <Icon.Circle size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/userrecharge",
      },
      {
        id: "packageoffer",
        title: "Package Offer",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/packagemanager/packageoffer",
      },
    ],
  },

  {
    id: "packageList",
    title: "Package List ",
    type: "item",
    icon: <Icon.Compass size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/poojapackage/packageList",
  },

  // {
  //   id: "discount",
  //   title: "Discount/offer",
  //   type: "item",
  //   icon: <Icon.Percent size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/coupons/couponslist",
  // },

  // {
  //   id: "reportstatus",
  //   title: "Report",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "adminearning",
  //       title: "Admin Recharge",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/statusList",
  //     },
  //     {
  //       id: "astroearning",
  //       title: "Astrologer Earning",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/status/daily",
  //     },
  //   ],
  // },

  {
    id: "withdrawrequest",
    title: "Withdraw Request ",
    type: "item",
    icon: (
      <span
        style={{ fontSize: "20px", marginRight: "10px", fontWeight: "600" }}
      >
        ₹
      </span>
    ),
    // icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/withdraw/WithdrawRequest",
  },
  {
    id: "blogmngment",
    title: "Blog Management",
    type: "collapse",
    icon: <Icon.Package size={20} />,
    children: [
      {
        id: "blogList",
        title: "Blog ",
        type: "item",
        icon: <Icon.Video size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/blogmngment/blog/blogList",
      },
      {
        id: "blogCateList",
        title: "Blog Category",
        type: "item",
        icon: <Icon.Video size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/blogmngment/blogCategory/blogCateList",
      },
    ],
  },

  {
    id: "commissionset",
    title: "Commission Set ",
    type: "item",
    icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/packagemanager/commission",
  },
  {
    id: "mycommission",
    title: "My Commission",
    type: "item",
    icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/packagemanager/adminCommission",
  },
  {
    id: "payouts",
    title: "Payouts ",
    type: "item",
    // icon: <Icon.Circle size={20} />,
    icon: (
      <span
        style={{ fontSize: "20px", marginRight: "10px", fontWeight: "600" }}
      >
        ₹
      </span>
    ),
    permissions: ["admin", "editor"],
    navLink: "/app/report/payoutlist",
  },
  {
    id: "socialmedia",
    title: "Social Media",
    type: "item",
    icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/media/socialmedia",
  },

  {
    id: "transaction",
    title: "All Transaction",
    type: "item",
    icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/transaction/transactionHistory",
  },

  {
    id: "ratinglist",
    title: "Astro Rating and Review",
    type: "item",
    icon: <Icon.Star size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/reviewrating/ratinglist",
  },
  {
    id: "otherpages",
    title: "Other Pages",
    type: "item",
    icon: <Icon.Circle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/otherpages/otherpage",
  },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Wallet Management",
  // },
  // {
  //   id: "walletcustom",
  //   title: "Customer Wallet",
  //   type: "item",
  //   icon: <Icon.DollarSign size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/wallet/walletcustom",
  // },
  // {
  //   id: "wallettansaction",
  //   title: "Wallet Transaction",
  //   type: "item",
  //   icon: <Icon.DollarSign size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/wallet/wallettransaction",
  // },

  {
    type: "groupHeader",
    groupTitle: "CMS",
  },

  {
    id: "pagesetup",
    title: "Page Setup ",
    type: "collapse",
    icon: <Icon.Settings size={20} />,
    children: [
      {
        id: "bannerList",
        title: "Banner List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/banner/bannerList",
      },
      {
        id: "notifiList",
        title: "Notification List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/notification/notifiList",
      },
      {
        id: "contactus",
        title: "Contact Us",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/contactus/contactUsList",
      },
      {
        id: "aboutUsList",
        title: "About Us",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/aboutus/aboutUsList",
      },
      {
        id: "termsandcondition",
        title: "Terms And Conditions",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/termscondition/termConditionList",
      },
      {
        id: "faqList",
        title: "FAQ List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "privacyPolicyList",
        title: "Privacy Policy",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/privacypolicy/privacyPolicyList",
      },
      // {
      //   id: "helpus",
      //   title: "Help Us",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/helpUs/HelpUs",
      // },
    ],
  },
];
export default navigationConfig;
