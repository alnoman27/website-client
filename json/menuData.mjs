function getMenuData() {
  return {
    menus: [
      {
        menu_title: "Insights 2",
        submenus: [
          {
            submenu_title: "Proper",
            icon: "/images/coins.svg",
            description_page: {
              titles_and_descriptions: [
                {
                  title: "Solutions by Industry",
                  description:
                    "We leverage our vast industry knowledge and applied experience to deliver sustainable, leading-edge digital solution across multiple sectors.",
                },
              ],

              columns_with_lists: [
                {
                  column_title: "Column A",
                  list: [
                    { title: "Item A1", link: "LinkA1" },
                    { title: "Item A2", link: "LinkA2" },
                    { title: "Item A3", link: "LinkA3" },
                  ],
                },
                {
                  column_title: "Column B",
                  list: [
                    { title: "Item B1", link: "LinkB1" },
                    { title: "Item B2", link: "LinkB2" },
                    { title: "Item B3", link: "LinkB3" },
                  ],
                },
                {
                  column_title: "Column C",
                  list: [
                    { title: "Item C1", link: "LinkC1" },
                    { title: "Item C2", link: "LinkC2" },
                    { title: "Item C3", link: "LinkC3" },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  };
}


export { getMenuData };
