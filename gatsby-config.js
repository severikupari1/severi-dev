/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Severi Kupari`,
    author: {
      name: `Severi Kupari`,
    },
    description: ``,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      `testimonials`,
      `pricing`,
      // `call-to-action`,
      // `screenshots`,
      // `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Palvelut'},
      {path: 'testimonials', label: 'Referenssit'},
      {path: 'pricing', label: 'Hinnasto'},
      // {path: 'screenshots', label: 'Screenshots'},
      // {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `GitHub`,
        url : `https://github.com/severikupari1`,
        fa: `github` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.svg`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo.svg`,
      text: `Severi Kupari logo`,
      socialHeader: `Sosiaalinen media`,
      contactHeader: `Yhteystiedot`,
      copyrightText: `2021 Severi Kupari`,
    },

    /* Address and contact info to show in footer */
    address: {
      header: `Sijainti`,
      line1: `Kuopio`,
      line2: ``,
      line3: ``,
    },
    contacts: [
      { text: `040 5423317`, url: `tel:+358405423317` },
      { text: `severikupari1@gmail.com`, url: `mailto:severikupari1@gmail.com`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
